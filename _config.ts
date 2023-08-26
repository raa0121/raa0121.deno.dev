import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import postcss from "lume/plugins/postcss.ts";
import postcssModules from "npm:postcss-modules";

const site = lume();
// site.use(tailwindcss({
//   extensions: [".html", ".jsx"],
// }));
site.use(postcss({
  plugins: [postcssModules({
    getJSON: async (cssFilename, json, _outputFilename) => {
      const tsFilename = `${cssFilename}.ts`;
      const tsObjectString = `export default ${JSON.stringify(json)};`;

      // Prevent incremental build loop
      if (await Deno.readTextFile(tsFilename) === tsObjectString) return;

      await Deno.writeTextFile(
        tsFilename,
        tsObjectString,
      );
    },
  })],
}));
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
