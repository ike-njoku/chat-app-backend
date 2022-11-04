import { Response} from "express";
import { APIResponse } from "../interface";


export const sendJsonResponse = (
  res: Response, 
  status: number, 
  response: APIResponse ) =>   {
  return res
    .status(status)
    .json(response)
}