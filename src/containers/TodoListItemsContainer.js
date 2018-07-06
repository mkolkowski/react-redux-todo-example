import { connect } from 'react-redux'
import TodoListItems from '../components/TodoListItems';

const mapStateToProps = (state, ownProps) => {
    return Object.assign({},state.todoReductor);   
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onTodoClick : (e) => ownProps.onTodoClick(e)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListItems)
