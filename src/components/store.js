import { createStore } from "redux";
import { fruitsreducer } from "./reducer";

export const store = createStore(fruitsreducer);