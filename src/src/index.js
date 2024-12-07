import React from "react";
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import reducerFruit from './reducers/reducerFruit'
import { legacy_createStore as createStore} from 'redux'
import App2 from "./App2";
import App from "./App";
const root=ReactDOM.createRoot(document.getElementById("root"))
const store=createStore(reducerFruit)
root.render(
<Provider store={store}>
<>
<App2/>
</>
</Provider>)


