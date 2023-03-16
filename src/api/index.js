import express from 'express';
import { songRouter } from './resources/song';
import { userRouter } from './resources/song/user/user.router';

export const restRouter = express.Router();
restRouter.use('/songs',songRouter);
restRouter.use('/users',userRouter);