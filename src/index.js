import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import WorkingTodoList from "./containers/WorkingTodoList";

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

var destination = document.querySelector("#container");

ReactDOM.render(
    <Provider store={store}>
        <div>
            <WorkingTodoList maxTodos={5} />
        </div>
    </Provider>,
    destination
);