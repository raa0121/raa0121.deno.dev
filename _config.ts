import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume();
// site.use(tailwindcss({
//   extensions: [".html", ".jsx"],
// }));
site.use(postcss());
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
site.ignore("src");

export default site;
