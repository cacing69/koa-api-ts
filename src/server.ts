import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";
import { config } from "./config";
import Router from "koa-router";
import routes from "./routes/";
import "module-alias/register";

const app = new Koa();

const PORT = config.port;

const multer = require("@koa/multer");
const upload = multer();

app.use(upload.any());
app.use(bodyParser());

app.use(
  cors({
    origin: "*"
  })
);

app.use(logger());

const router = new Router();

router.get(`/`, async (ctx) => {
  try {
      ctx.body = {
        status: "success",
        data: null
      };
  } catch (err) {
    console.error(err);
  }
});

// import routes
app.use(router.routes());
app.use(routes.routes());

// app.use(userRoutes.routes());

const server = app
  .listen(PORT, async () => {
    console.log(`server listening on port: ${PORT}`);
  })
  .on("error", err => {
    console.error(err);
  });

export default server;
