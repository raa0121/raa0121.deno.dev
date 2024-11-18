import { type Content } from "lume/core/file.ts";
import Site from "lume/core/site.ts";
import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import postcss from "lume/plugins/postcss.ts";
import postcssModules from "npm:postcss-modules";

const cssBundler = (options: { filename: string }) => (site: Site) => {
  const outFile = `/${options.filename}`;
  const moduleContents = new Map<string, Content>();
  site.process([".css"], (pages) => {
    pages.forEach((page) => {
      if (page.data.url && page.data.url !== outFile) {
        moduleContents.set(page.outputPath, page.content ?? "");
        page.content = "";
      } else {
        // NOOP
      }
    });
    // Root .css file must process at last.
    const rootCssPage = pages.find((p) => p.data.url === outFile);
    if (rootCssPage) {
      rootCssPage.content = [rootCssPage.content, ...moduleContents.values()]
        .join("");
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
site.copy("favicon.ico");
site.ignore("README.md");
// site.ignore("src");

export default site;
