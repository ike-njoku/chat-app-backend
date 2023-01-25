import * as bcryptjs from 'bcryptjs';
import { logError } from '../logger';
import { APIResponse, SignJWTDto, UserLogInDTO } from '../shared/interface';
import jwt from 'jsonwebtoken';
import { User } from '../users/user.schema';

export const hashUserPassword = (password: string): string => {
  console.log(process.env.JWT_SECRET)
  return bcryptjs.hashSync(password, 8);
}

//compare passwords
export const passwordsAreSame = (password1: string, password2: string): boolean => {
  return bcryptjs.compareSync(password1, password2);
}

export const signJWT = (userDetails: SignJWTDto): string | undefined => {
  if (process.env.JWT_SECRET)
    return jwt.sign(userDetails, process.env.JWT_SECRET);
}

export const verifyJWT = (jwtToken: string) => {
  if (process.env.JWT_SECRET)
    return jwt.verify(jwtToken, process.env.JWT_SECRET)
}

export const authenticateUser = async (user: UserLogInDTO): Promise<APIResponse> => {
  try {
    const existingUser = await User.findOne({
      email: user.userName
    });

    if (!existingUser) {
      const response: APIResponse = {
        message: 'User not found',
        status: 'fail',
        data: null
      }
      return response;
    };

    if (!passwordsAreSame(existingUser.password, user.password)) {
      const response: APIResponse = {
        message: 'Invalid User Name and Password Combination',
        status: 'fail',
        data: null
      };
      return response;
    };

    const jwt = signJWT({
      userName: existingUser.userName,
      email: existingUser.email
    });

    const response: APIResponse = {
      message: 'Successfully Signed In',
      status: 'success',
      data: jwt
    };
    return response;

  } catch (error) {
    logError(error);
    const response: APIResponse = {
      message: 'An error occured. We are working to fix it',
      status: 'success',
      data: error
    };

    return response;
  }

}