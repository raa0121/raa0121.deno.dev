import lume from "lume/mod.ts";
import windi_css from "lume/plugins/windi_css.ts";
import jsx from "lume/plugins/jsx_preact.ts";


const site = lume();
site.use(windi_css());
site.use(jsx({}));
site.copy("static");

export default site;
