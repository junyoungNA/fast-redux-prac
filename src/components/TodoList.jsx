// import { connect } from 'react-redux';
// import useReduxState from '../hooks/useReduxState';
export default function TodoList({ todos }) {
  // const state = useReduxState();
  return (
    <ul>
      {todos.map((todo, index) => {
        return <li key={index}>{todo.text}</li>;
      })}
    </ul>
  );
}
