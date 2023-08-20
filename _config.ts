import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import jsx from "lume/plugins/jsx_preact.ts";


const site = lume();
site.use(tailwindcss({
  extensions: [".html", ".jsx"],
}));
site.use(postcss());
site.use(jsx({}));
site.copy("static");
site.ignore("README.md");

export default site;
