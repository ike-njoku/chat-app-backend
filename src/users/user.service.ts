import { Document, Error } from "mongoose";
import { hashUserPassword, signJWT } from "../auth/auth.service";
import { logError } from "../logger";
import { NewUserDTO } from "../shared/interface"
import { User } from "./user.schema"

export const handleCreateUser = async (newUserDto: NewUserDTO): Promise<any> => {
  newUserDto.password = hashUserPassword(newUserDto.password);
  console.log(newUserDto);
  try {
    const user = await User.create(newUserDto);
    const userJWT = signJWT({userName: user.userName, email: user.email});
    return userJWT;
  } catch (error) {
    return logError(error);
  }
}


