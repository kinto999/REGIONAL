import { tennisReducer } from "./reducer";
import { createStore } from 'redux';

export const store = createStore(tennisReducer)