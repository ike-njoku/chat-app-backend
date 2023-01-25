import mongoose, { ObjectId } from "mongoose";

type APIResponseStatusType = 'success' | 'fail';
export interface APIResponse {
  message: string;
  status: APIResponseStatusType;
  data: any;
}

export interface SignJWTDto {
  userName: string;
  email: string;
}

export interface UserLogInDTO {
  userName: string;
  password: string;
}

export interface NewUserDTO {
  userName: string;
  password: string;
  email: string;
}

export interface User {

}

export interface CreateChatRoomDTO {
  createdBy:ObjectId | string; 
  participants: User[];
}