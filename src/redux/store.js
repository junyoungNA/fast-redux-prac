import { applyMiddleware, createStore } from 'redux';
import todoApp from './modules/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import history from '../history';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

//리덕스 미들웨어 = 함수 function
//미들웨어가 여러개면 미들웨어가 순차적으로 실행됨
//두단계가 있음
//스토어를 만들때, 미들웨어를 설정하는 부분 createStore, applyMiddleware from redux
//디스패치가 호출될때 실제로 미들웨어를 통과하는 부분
//dispatch 메소드를 통해 store로 가고 있는 액션을 가로채는 코드
// function middleware1(store) {
//   console.log('middleware', 0);
//   return next => {
//     console.log('middleware1', 1);
//     return action => {
//       console.log('middleware2', 2);
//       const returnValue = next(action);
//       console.log('middleware3', 3);
//       return returnValue;
//     };
//   };
// }

// function middleware2(store) {
//   console.log('middleware', 0);
//   return next => {
//     console.log('middleware1', 1);
//     return action => {
//       console.log('middleware2', 2);
//       const returnValue = next(action);
//       console.log('middleware3', 3);
//       return returnValue;
//     };
//   };
// }

//redux-thunk
//리덕스 미들웨어 리덕스를 만든 사람이 만듬(Dan)
//리덕스에서 비동기 처리를 위한 라이브러리
//액션 생성자를 할용하여 비동기 처리
//액션 생성자가 액션을 리턴하지 않고, 함수를 리턴함

// const store = createStore(todoApp, applyMiddleware(middleware1, middleware2)); //두번째 인자에 인핸서 라는걸 추가할 수 있음?

const store = createStore(
  todoApp,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument({ history }),
      promise,
      sagaMiddleware
    )
  )
); //두번째 인자에 인핸서 라는걸 추가할 수 있음?

sagaMiddleware.run(rootSaga);

export default store;
