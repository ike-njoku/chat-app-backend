import { CreateChatRoomDTO } from "../interface";

const testUserName = 'John_Doe';
const testPassword = 'Password123!';
const testEmail = 'johndoe@example.com';

export const NewUserSampleData = {
  userWithOnlyEmail: {
    userName: '',
    password: '',
    email: testEmail
  },
  userWithOnlyPassword: {
    userName: '',
    password: testPassword,
    email: ''
  },
  userWithOnlyUserName: {
    userName: testUserName,
    password: '',
    email: ''
  },
  userWithoutUserName: {
    userName: '',
    password: testPassword,
    email: testEmail
  },
  userWithoutPassword: {
    userName: testUserName,
    password: '',
    email: testEmail
  },
  userWithoutEmail: {
    userName: testUserName,
    password: testPassword,
    email: ''
  },
  completeUser: {
    userName: testUserName,
    password: testPassword,
    email: testPassword
  }
};


const createChatRoomDTOCompleteData: CreateChatRoomDTO = {
  createdBy: '507f191e810c19729de860ea',
  participants: []
};

export const ChatRoomSampleData = {
  newRoomDTOWithCompleteData: createChatRoomDTOCompleteData,
};