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
    </head>
    <body>
      <Header />
      <div class="p-10">
        {props.children}
      </div>
    </body>
  </html>
);
