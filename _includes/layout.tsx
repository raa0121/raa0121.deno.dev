import { ComponentChildren } from "preact";

interface PageProps {
  children: ComponentChildren
  title: string
}

import Header from "./header.tsx";
export default (props: PageProps) => (
  <html>
    <head>
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
