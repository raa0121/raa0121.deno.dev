import { Helper } from "lume/core.ts";
import { render } from "npm:preact-render-to-string";
import App from "./src/App.tsx";

// const ssr = ReactDOMServer.renderToString(React.createElement(App));
const ssr = render(App);

interface Helpers {
  [key: string]: Helper;
}

export default function (_data: unknown, { url }: Helpers) {
  return `<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>猫魔しろあ歌枠セットリスト</title>
  <link rel="stylesheet" href="${url("/styles.css")}">
</head>

<body>
  <section class="todoapp" id="app">${ssr}</section>
  <footer class="info">
    <p>©2023+ raa0121</p>
  </footer>

  <script type="module" src="${url("/main.client.js")}" bundle></script>
</body>

</html>
`;
}
