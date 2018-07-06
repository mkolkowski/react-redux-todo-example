import { connect } from 'react-redux'
import TodoListItems from '../components/TodoListItems';

/* https://redux.js.org/faq/react-redux
Should I only connect my top component, or can I connect multiple components in my tree?
- We could also remove this component and use props from parent
*/

const mapStateToProps = (state, ownProps) => {
    return Object.assign({},state.todoReductor);   
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onTodoClick : (key) => ownProps.onTodoClick(key)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListItems)
