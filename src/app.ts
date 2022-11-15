import express from 'express';
import cors from 'cors';
import { userRoutes } from './users/user.routes';
import { authRoutes } from './auth/auth.routes';
export const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/auth', authRoutes);