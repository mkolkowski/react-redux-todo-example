import { connect } from 'react-redux'
import TodoListProgress from '../components/TodoListProgress';

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
