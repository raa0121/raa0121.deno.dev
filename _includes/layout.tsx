import { ComponentChildren } from "preact";

interface PageProps {
  children: ComponentChildren;
  title: string;
}

import Header from "./header.tsx";
export default (props: PageProps) => (
  <html>
    <head>
      <meta name="author" content="raa0121" />
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords} />
      <meta name="robots" content="noindex,nofollow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="twitter:card" content={props.description} />
      <meta name="twitter:site" content="@raa0121" />
      <meta name="twitter:creator" content="@raa0121" />
      <meta property="og:url" content="" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta
        property="og:image"
        content="https://raa0121.deno.dev/static/raa0121.png"
      />
      <title>{props.title}</title>
      <link href="/styles.css" rel="stylesheet" type="text/css" />
      <script src="/static/overlay.js"></script>
    </head>
    <body>
      <Header />
      <div>
        {props.children}
      </div>
    </body>
  </html>
);
