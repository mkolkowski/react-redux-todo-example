import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import TodoListContainer from "./containers/TodoListContainer";

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

var destination = document.querySelector("#container");

ReactDOM.render(
    <Provider store={store}>
        <div>
            <TodoListContainer maxTodos={5} />
        </div>
    </Provider>,
    destination
);