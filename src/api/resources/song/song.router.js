import express from 'express';
import songController from './song.controller';
import passport from 'passport';
import {isArtist} from '../../middlewares/is-artist';

export const songRouter = express.Router();
songRouter
.route('/')
.post([passport.authenticate('jwt',{session:false}),isArtist],songController.create)
.get(passport.authenticate('jwt',{session:false}),songController.findAll);
songRouter.route('/:id')
.get(passport.authenticate('jwt',{session:false}),songController.findOne)
.delete(passport.authenticate('jwt',{session:false}),songController.delete)
.put(passport.authenticate('jwt',{session:false}),songController.update);