import { createStore } from "redux";
import { articlereducer } from "./reducer";

export const store = createStore(articlereducer);

