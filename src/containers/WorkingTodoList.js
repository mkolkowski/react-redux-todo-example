import { connect } from 'react-redux'

import { todoAdd, todoRemove } from '../actions'

import TodoList from '../components/TodoList'

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.todoReductor.items,
        maxTodos: ownProps.maxTodos
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSubmit: (e) => {
            let input = e.target.querySelector('input');
            if (input.value !== "") {
                dispatch(todoAdd(input.value, ownProps.maxTodos));
                input.value = "";
                input.focus();
            }
        },
        onTodoClick: (key) => {
            if (key !== "") {
                dispatch(todoRemove(key))
            }
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
