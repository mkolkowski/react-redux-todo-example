import React, { Component } from "react";
import FlipMove from "react-flip-move";
import PropTypes from 'prop-types';


/* Using functional component */
const TodoListItems = ({items, onTodoClick}) => {

    const createTasks = (item) => (<li onClick={ (e)=>onTodoClick(item.key) }  key={item.key}>{item.text}</li>);

    var listItems = items.map(createTasks);

    return (
        <ul className="theList">
            <FlipMove duration={500} easing="ease-out">
                {listItems}
            </FlipMove>
        </ul>
    );
}


TodoListItems.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        key : PropTypes.string.isRequired,
        text : PropTypes.string.isRequired
    })).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoListItems;