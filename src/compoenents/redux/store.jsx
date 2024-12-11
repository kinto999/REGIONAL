import { createStore } from 'redux';
import { stagReducer } from './reducer';

export const store = createStore(stagReducer);