import logo from './logo.svg';
import './App.css';
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';
import TodoListContainer from './containers/TodoListContainer';
import TodoFormContainer from './containers/TodoFormContainer';
import UserListContainer from './containers/UserListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TodoList /> */}
        {/* <TodoForm /> */}
        <UserListContainer />
        <TodoFormContainer />
        <TodoListContainer />
      </header>
    </div>
  );
}

export default App;
