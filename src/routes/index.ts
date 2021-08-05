import Router from "koa-router";
import defaultRoutes from "./default.route";
import userRoutes from "./../modules/user/http/user.route";

const router = new Router();
router.use(defaultRoutes.routes());
router.use(userRoutes.routes());

export default router;
