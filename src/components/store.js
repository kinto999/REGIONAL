
import { fruitsreducer } from "./reducer";
import {legacy_createStore as createStore} from 'redux' 

export const store = createStore(fruitsreducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
