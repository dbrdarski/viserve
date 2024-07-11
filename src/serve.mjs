import { h, frag, printHTML } from "./jsx.mjs";
import connect from "connect";
import serveStatic from "serve-static";
import Router from "url-router";
import HtmlPage from "./components/HtmlPage.mjs";

globalThis.h = h;
globalThis.frag = frag;

const renderPage = (Page) => {
  const output = printHTML(Page(HtmlPage));
  return () => output;
};

export default async () => {

  const app = connect();

  const router = new Router({
    '/': renderPage(Html => <Html>Hello.</Html>),
    "/user/:id": (params) => `User id: ${params.id}`,
    "/video": () => printHTML(<HtmlPage>Hello.</HtmlPage>),

    // '/gallery/:album/:size/:filename(.*)': $ => albums[$.album].thumbs[$.filename][$.size],
    "(.*)": () =>
      printHTML(textPage("Not found.", { title: "404 - Page not found" })),
  });

  app.use(serveStatic("public"));
  app.use("/favicon", (req, res, next) => {
    res.end("ok");
  });
  app.use("/", (req, res, next) => {
    const r = router.find(req.originalUrl);
    res.end(r.handler(r.params));
  });

  return app;
};
