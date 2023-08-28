import { render } from "./deps.ts";
import App from "./src/App.tsx";

if (document.getElementById("lume-live-reload")) {
  console.log("CSR");
  render(App, document.getElementById("app")!);
} else {
  console.log("SSR hydrate");
  hydrate(App, document.getElementById("app")!);
}
