// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import TodoForm from '../components/TodoForm';
import { addTodo } from '../redux/action';
import { useCallback } from 'react';

// const TodoFormContainer = connect(
//   state => ({}),
//   dispatch => ({
//     add: text => {
//       dispatch(addTodo(text));
//     },
//   })
// )(TodoForm);

function TodoFormContainer() {
  const dispatch = useDispatch();

  const add = useCallback(
    text => {
      dispatch(addTodo(text));
    },
    [dispatch]
  );

  return <TodoForm add={add} />;
}

export default TodoFormContainer;
