import React, { Component } from "react";
import FlipMove from "react-flip-move";
import PropTypes from 'prop-types';

const TodoListItems = (props) => {

    const createTasks = (item) => (<li onClick={ (e)=>props.onTodoClick(item.key) }  key={item.key}>{item.text}</li>);
    
    var listItems = props.items.map(createTasks);

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