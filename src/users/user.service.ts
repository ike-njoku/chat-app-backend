import { Document } from "mongoose";
import { hashUserPassword } from "../auth/auth.service";
import { logError } from "../logger";
import { NewUserDTO } from "../shared/interface"
import { User } from "./user.schema"

export const handleCreateUser = async (newUserDto: NewUserDTO): Promise<any> => {
  newUserDto.password = hashUserPassword(newUserDto.password);
  try {
    const user = await User.create(newUserDto)
    return user;
  } catch (error) {
    return logError(error);
  }
}
