import express, { NextFunction, Request, Response } from 'express';
import { createNewUser } from './user.controller';
export const userRoutes = express.Router();

userRoutes.post('/create', createNewUser);