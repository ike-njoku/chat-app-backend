import { NextFunction, Request, Response } from "express"
import { sendJsonResponse } from "../shared/utilities/sendJsonResponse";
import { authenticateUser } from "./auth.service"

export const signIn = async (
  req: Request, 
  res: Response, 
  next: NextFunction) => {
  const {userName, password} = req.body;

  try {
    const response = await authenticateUser(req.body);
    return sendJsonResponse(res, 200, response);
    
  } catch (error) {
    return sendJsonResponse(res, 500, {
      message: 'An Error Occured. Dont worry, our team is looking into it.', 
      data: error,
      status: 'fail'
    });
  }
}