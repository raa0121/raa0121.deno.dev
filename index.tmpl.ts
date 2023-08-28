import { Helper, renderString as render } from "./deps.ts";
import App from "./src/App.tsx";

// const ssr = ReactDOMServer.renderToString(React.createElement(App));
const ssr = render(App);

interface Helpers {
  [key: string]: Helper;
}

export default function (_data: unknown, { url }: Helpers) {
  const title = "猫魔しろあ歌枠セットリスト";
  const description =
    "個人VTuber 猫魔しろあの歌枠のセットリストです。曲名をクリックすると、該当楽曲を再生できます。";
  return `<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
   <meta name="author" content="raa0121" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content="${description}">
  <meta name="twitter:card" content="${description}" />
  <meta name="twitter:site" content="@raa0121" />
  <meta name="twitter:creator" content="@raa0121" />
  <meta property="og:url" content="https://raa0121.deno.dev" />
  <meta property="og:title" content={props.title} />
  <meta property="og:description" content="{props.description}" />
  <meta property="og:image" content="https://raa0121.deno.dev/static/raa0121.png" />
  <meta name="keywords" content="VTuber,個人VTuber,猫魔しろあ" />
  <title>${title}</title>
  <link rel="stylesheet" href="${url("/styles.css")}">
</head>

<body>
  <section id="app">${ssr}</section>
  <script type="module" src="${url("/main.client.js")}" bundle></script>
</body>

</html>
`;
}
