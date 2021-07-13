import { combineReducers } from 'redux';

import auth from './auth';
import project from './Project';
import singlepro from "./singlepro";
import site from "./site"
export const reducers = combineReducers({ auth , project , singlepro , site});