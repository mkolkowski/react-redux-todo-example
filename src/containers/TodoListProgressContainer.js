import { connect } from 'react-redux'
import TodoListProgress from '../components/TodoListProgress';

/* https://redux.js.org/faq/react-redux
Should I only connect my top component, or can I connect multiple components in my tree?
- We could also remove this component and use props from parent
*/

const mapStateToProps = (state, ownProps) => {
    return Object.assign({},{
        currentValue : state.todoReductor.items.length,
        maxValue: ownProps.maxValue
    });   
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListProgress)
