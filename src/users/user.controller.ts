import { Request, Response } from "express";
import { logError } from "../logger";
import { sendJsonResponse } from "../shared/utilities/sendJsonResponse";
import { handleCreateUser } from "./user.service";

export const createNewUser = async (req: Request, res: Response) => {
  try {
    const {
      userName,
      email,
      password
    } = req.body;

    const user =  await handleCreateUser(req.body);
    if (!user) return sendJsonResponse(res, 200, {
      message: 'Could not create user',
      data: null,
      status: 'fail'
    });

    return sendJsonResponse(res, 200, {
      message: "Successfully Created User",
      status: "success",
      data: user
    });
    
  } catch (error) {
    logError(error)
    return sendJsonResponse(res, 500, {
      message: "An error occured",
      status: "fail",
      data: error
    })
  }
}