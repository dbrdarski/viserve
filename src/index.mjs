import http from "http";
import serve from "./serve.mjs";

import vhost from "vhost";
import connect from "connect";

import { port, videoServerEnv } from "../env.mjs";

const app = connect();

const [_, __, ...params] = process.argv;

console.log("PARAMS", params);

if (params.length) {
  const [command] = params;
  // switch (command) {
  //   case "generate:images": {
  //     console.log("GENERATE SCRIPT");
  //     console.log("===============");
  //     generateImages(albums, imageSizes);
  //     break;
  //   }
  // }
} else {
  const video = await serve();
  app.use(vhost(videoServerEnv.host, video));
  // app.use(vhost(oldSite.host, serveOld));
  http.createServer(app).listen(port);
}
