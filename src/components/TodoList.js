import React from 'react'
import PropTypes from 'prop-types';

import "../TodoList.css";
import "../TodoProgress.css";

import TodoListItems from "./TodoListItems";
import TodoListProgress from "./TodoListProgress";


const TodoList = ({ items, maxTodos, onSubmit, onTodoClick }) => {
    return (
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
            <TodoListProgress currentValue={items.length} maxValue={maxTodos} />
            <TodoListItems items={items} onTodoClick={onTodoClick} />
        </div>
    )
};

TodoList.propTypes = {
    maxTodos: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList