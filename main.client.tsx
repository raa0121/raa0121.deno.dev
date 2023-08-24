import { hydrate } from "npm:preact";
import App from "./src/App.tsx";

function render() {
  hydrate(App, document.getElementById("app")!);
}

render();
