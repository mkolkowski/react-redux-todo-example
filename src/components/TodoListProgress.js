import React, { Component } from "react";
import PropTypes from 'prop-types';

/* Using class component */
class TodoListProgress extends React.Component {
    constructor(currentValue, maxValue) {
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

TodoListProgress.propTypes = {
    currentValue: PropTypes.number.isRequired,
    maxValue: PropTypes.number.isRequired
};

export default TodoListProgress;


