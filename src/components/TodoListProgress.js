import React, { Component } from "react";


/* Using class component */
class TodoListProgress extends React.Component {
    constructor({ currentValue, maxValue }) {
        super();
    }

    render() {
        return (
            <div>
                <div id="todoHeader">
                    <span>Tasks: {this.props.currentValue} / {this.props.maxValue}</span>
                </div>
                <progress id="todoProgress" value={this.props.currentValue} max={this.props.maxValue}></progress>
            </div>
        );
    }
}


// Same like that:
// const TodoListProgress = ({ currentValue, maxValue }) => {

//     return (
//         <div>
//             <div id="todoHeader">
//                 <span>Tasks: {currentValue} / {maxValue}</span>
//             </div>
//             <progress id="todoProgress" value={currentValue} max={maxValue}></progress>
//         </div>
//     );
// }

export default TodoListProgress;