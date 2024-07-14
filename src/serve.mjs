import { h, frag, printHTML } from "./jsx.mjs"
import connect from "connect"
import serveStatic from "serve-static"
import Router from "url-router"
import HtmlPage from "./components/HtmlPage.mjs"
import VideoPage from "./pages/VideoPage.mjs"
import fs from "fs"

globalThis.h = h
globalThis.frag = frag

const renderPage = (Page) => {
  const output = printHTML(Page(HtmlPage))
  return () => output
}

export default async () => {
  const app = connect()
  const simplePage = content => renderPage(Html => <Html>{content}</Html>)
  // renderPage(Html => <Html>Hello.</Html>)
  const router = new Router({
    "/video": renderPage(VideoPage),
    "/player ": renderPage(VideoPage),
    '/': simplePage("Hello."),
    "(.*)": simplePage("404 - Not found"),
  })

  app.use(serveStatic("public"))
  app.use("/favicon", (req, res, next) => {
    res.end("ok")
  })
  app.use("/stream", ({ headers: { range = "bytes=0-", cookie, referer, ["sec-fetch-dest"]: secFetchDest, ...rest } }, res, next) => {
    console.log({ range, cookie, referer, secFetchDest, rest })
    if (!referer) {
      res.statusCode = 403
      return res.end("Unauthorized.")
    }

    // if (!range) {
    //   res.statusCode = 400
    //   return res.end("Requires Range header")
    // }

    const videoPath = "resources/videos/Chris-Do.mp4"
    const videoSize = fs.statSync(videoPath).size

    const CHUNK_SIZE = 2 ** 20 // 1MB
    const start = Number(range.replace(/\D/g, ""))
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1)

    // Create headers
    const contentLength = end - start + 1
    const headers = {
      "Content-Range": `bytes ${start}-${end}/${videoSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": contentLength,
      "Content-Type": "video/mp4",
    }

    // HTTP Status 206 for Partial Content
    res.writeHead(206, headers)

    // create video read stream for this particular chunk
    const videoStream = fs.createReadStream(videoPath, { start, end })

    // Stream the video chunk to the client
    videoStream.pipe(res)
  })

  app.use("/", (req, res, next) => {
    const r = router.find(req.originalUrl)
    res.end(r.handler(r.params))
  })

  return app
}
