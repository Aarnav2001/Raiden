import { combineReducers } from 'redux';

import auth from './auth';
import project from './Project';
import singlepro from "./singlepro";
import site from "./site"
import fieldman from "./fieldman";
import sitefieldman from "./sitefieldman";
export const reducers = combineReducers({ auth , project , singlepro , site , fieldman , sitefieldman});