import React, { Component } from "react";


const TodoListProgress = ({currentValue, maxValue}) => {

    return (
        <div>
            <div id="todoHeader">
                <span>Tasks: {currentValue} / {maxValue}</span>
            </div>
            <progress id="todoProgress" value={currentValue} max={maxValue}></progress>
        </div>
    );
}

export default TodoListProgress;