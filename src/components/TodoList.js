import React from 'react'
import PropTypes from 'prop-types';

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

TodoList.propTypes = {
    maxTodos : PropTypes.number.isRequired,
    onSubmit : PropTypes.func.isRequired,
    onTodoClick : PropTypes.func.isRequired
};

export default TodoList