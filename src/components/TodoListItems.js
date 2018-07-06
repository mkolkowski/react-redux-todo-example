import React, { Component } from "react";
import FlipMove from "react-flip-move";


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

export default TodoListItems;