import { Router } from 'express';
import { createChatRoom } from './chat-room.controller';

export const chatRoomRoutes = Router();

chatRoomRoutes.post('/create', createChatRoom);