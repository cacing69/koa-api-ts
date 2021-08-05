import User from "../user";
import { validate } from "class-validator";

describe("request/user.request.store", () => {
  let user: User;
  const validatorOptions = {};

  beforeAll(() => {
    user = new User();
  });

  it(`has the expected class properties'`, async () => {
    user.name = "lorem_ipsum";

    expect(user.name).toBeDefined();
  });

  describe(`'name' validation`, () => {
    it("is valid", async () => {
      for (let i = 1; i <= 20; ++i) {
        user.name = "x".repeat(i);
        expect(await validate(user, validatorOptions)).toHaveLength(
          0
        );
      }
    });
    //   it("must be a string", async () => {
    //     addGameRequest.name = 123;
    //     expect(await validate(addGameRequest, validatorOptions)).toHaveLength(
    //       1
    //     );
    //   });
    //   it("must have length of 1 character or greater", async () => {
    //     addGameRequest.name = "";
    //     expect(await validate(addGameRequest, validatorOptions)).toHaveLength(
    //       1
    //     );
    //   });
    //   it("must have a length of 20 characters or fewer", async () => {
    //     addGameRequest.name = "y".repeat(21);
    //     expect(await validate(addGameRequest, validatorOptions)).toHaveLength(
    //       1
    //     );
    //   });
  });
});
