import { validate } from "class-validator";

export class BaseController {
  readonly foo!: string;

  constructor() {
    this.foo = "bar";
  }

  init() {
    console.log("init");
  }

    validate(input: any) {
        return new Promise<any>((resolve, reject) => {
          validate(input).then((errors) => {
            // errors is an array of validation errors
            if (errors.length > 0) {
              reject(errors);
            } else {
              resolve(true);
            }
          });
      })

  }
}
