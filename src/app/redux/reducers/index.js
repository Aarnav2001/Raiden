import { combineReducers } from 'redux';

import auth from './auth';
import project from './Project';
import singlepro from "./singlepro";

export const reducers = combineReducers({ auth , project , singlepro});