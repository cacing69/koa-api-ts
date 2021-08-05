import { IsString, Length } from "class-validator";

export default class User {
  @IsString()
  @Length(1, 20)
  name!: string;
}
