import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import ReduxContext from './contexts/ReduxContexts';
// import { addTodo, completeTodo, showComplete } from './redux/action';

// const unsubscribe = store.subscribe(() => {
//   //subscribe함수를 통해 구독을 하게되면
//   //store의 state 가 변경할때 마다 감지하여
//   //getState()를 실행하게됨
//   //subscribe는 구독을 취소하는 unsubscribe를 리턴함
//   console.log(store.getState());
// });

// store.replaceReducer(다른 리듀서);
//다른 리듀서로 바꿔주는 기능
//실무에서 잘 쓰이지 않음

// store.dispatch(addTodo('coading'));
// store.dispatch(addTodo('read book'));
// store.dispatch(addTodo('eat'));
// unsubscribe();
// store.dispatch(addTodo('coading'));
// store.dispatch(addTodo('read book'));
// store.dispatch(addTodo('eat'));

// store.dispatch(addTodo('떡볶이'));
// store.dispatch(completeTodo(0));
// store.dispatch(showComplete());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxContext.Provider value={store}>
      <App />
    </ReduxContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
