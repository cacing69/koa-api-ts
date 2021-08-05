import Router from "koa-router";
import userController from "./user.controller";

const router = new Router({
  prefix: "/user",
});

router.get(`/`, userController.index);
router.post(`/`, userController.store);

export default router;
