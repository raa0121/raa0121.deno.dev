import { Content } from "lume/core.ts";
import Site from "lume/core/site.ts";
import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import postcss from "lume/plugins/postcss.ts";
import postcssModules from "npm:postcss-modules";

const cssBundler = (options: { filename: string }) => (site: Site) => {
  const outFile = `/${options.filename}`;
  const moduleContents = new Map<string, Content>();
  // TODO: Depends implicit order that passed root .css file at last.
  site.process([".css"], (page) => {
    // site.logger.log(`Bundling ${page.outputPath}`);
    if (page.outputPath == outFile) {
      page.content = [page.content, ...moduleContents.values()].join("");
    } else if (page.outputPath) {
      moduleContents.set(page.outputPath, page.content ?? "");
      page.content = "";
    } else {
      // NOOP
    }
  });
};

const site = lume({
  location: new URL("https://raa0121.deno.dev"),
});
site.use(postcss({
  plugins: [postcssModules({
    getJSON: async (cssFilename, json, _outputFilename) => {
      const tsFilename = `${cssFilename}.ts`;
      const tsObjectString = `export default ${JSON.stringify(json)};\n`;

      // Prevent incremental build loop
      if (await Deno.readTextFile(tsFilename) === tsObjectString) return;

      await Deno.writeTextFile(
        tsFilename,
        tsObjectString,
      );
    },
  })],
}));
site.use(cssBundler({ filename: "styles.css" }));
site.use(esbuild({
  extensions: [".client.tsx"],
  options: {
    // Needs if extensions not contains .tsx
    jsx: "automatic",
    jsxImportSource: "npm:preact",
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
}));
site.copy("static");
site.ignore("README.md");
// site.ignore("src");

export default site;
