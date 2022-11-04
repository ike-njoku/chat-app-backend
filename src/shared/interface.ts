type APIResponseStatusType = 'success' | 'fail';
export interface APIResponse {
  message: string;
  status: APIResponseStatusType;
  data: any;
}

export interface NewUserDTO {
  userName: string;
  password: string;
  email: string;
}