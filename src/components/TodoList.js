import React from 'react'

import "../TodoList.css";
import "../TodoProgress.css";

import TodoListItemsContainer from "../containers/TodoListItemsContainer";
import TodoListProgressContainer from "../containers/TodoListProgressContainer";


const TodoList = ({ maxTodos, onSubmit, onTodoClick }) => (
    <div className="listMain">
        <div id="reactLogo">
        </div>
        <div className="header">
            <form onSubmit={e => {
                e.preventDefault();
                onSubmit(e);
            }}>
                <input placeholder="enter task" required>
                </input>
                <button type="submit">add</button>
            </form>
        </div>
        <TodoListProgressContainer maxValue={maxTodos} />
        <TodoListItemsContainer onTodoClick={onTodoClick} />
    </div>
);

export default TodoList