import { Request, Response } from "express";
import { handleCreateChatRoom } from "./chat-room-service";

export const createChatRoom = async(req: Request, res: Response) => {
  const { createdBy,  participants } = req.body;
  return await handleCreateChatRoom(req.body);
}