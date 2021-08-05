
import { Context } from "koa";
import { BaseController } from "../../../base/base.controller";
import baseResponse from "../../../base/base.response";
import userRepository from "../repository/user.repository";
import User from "../user";
import userTransform from "./user.transform";
// import { validate } from "class-validator";


class UserController extends BaseController {
  async index(ctx: Context) {
    const _query = [
      {
        user_id: 1,
        user_name: "user_1",
        user_email: "user_1@email.com",
      },
      {
        user_id: 2,
        user_name: "user_2",
        user_email: "user_2@email.com",
      },
      {
        user_id: 3,
        user_name: "user_3",
        user_email: "user_3@email.com",
      },
      {
        user_id: 4,
        user_name: "user_4",
        user_email: "user_4@email.com",
      },
      {
        user_id: 5,
        user_name: "user_5",
        user_email: "user_5@email.com",
      },
    ];

    try {
      ctx.body = {
        data: _query.map(userTransform.transform),
      };
    } catch (err) {
      console.error(err);
    }
  }

  async store(ctx: Context) {
    try {
      let user = new User();

      const request = ctx.request.body as any;

      user.name = request.name;
      super.validate(user).then(() => {

        baseResponse.meta.message = "user_created";
        baseResponse.data = user;

        // console.log(_response);

        ctx.status = 201;
        ctx.body = baseResponse;
      }).catch((error) => {
        ctx.status = 422;
        ctx.body = {
          errors: create,
        };
      })

      // validate(user).then((errors) => {
      //   if (errors.length > 0) {
      //     console.log("validation failed. errors: ", errors);
      //   } else {
      //     console.log("validation succeed");
      //   }
      // });

      const create = userRepository.create(user);


    } catch (err) {
      console.error(err);
    }
  }
}

export default new UserController();
