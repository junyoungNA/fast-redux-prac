import './App.css';
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';
// import TodoListContainer from './containers/TodoListContainer';
// import TodoFormContainer from './containers/TodoFormContainer';
// import UserListContainer from './containers/UserListContainer';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Todos from './pages/Todos';
import Users from './pages/Users';
import history from './history';
function App() {
  return (
    <BrowserRouter history={history}>
      {/* //history 사용하기위해서는 router를 사용 */}
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      {/* </Router> */}
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     {/* <TodoList /> */}
    //     {/* <TodoForm /> */}
    //     <UserListContainer />
    //     <TodoFormContainer />
    //     <TodoListContainer />
    //   </header>
    // </div>
  );
}

export default App;
