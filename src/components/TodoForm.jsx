import { useRef } from 'react';
import useReduxDispatch from '../hooks/useReduxDispatch';
import { addTodo } from '../redux/action';

export default function TodoForm() {
  const dispatch = useReduxDispatch();
  const inputRef = useRef();
  function click() {
    dispatch(addTodo(inputRef.current.value));
    inputRef.current.value = '';
  }
  return (
    <div>
      <input ref={inputRef} /> <button onClick={click}>추가</button>
    </div>
  );
}
