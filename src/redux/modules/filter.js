import { createActions, handleActions } from 'redux-actions';

// console.log(createAction('Hello')('dqweq'));
//redux-actions 덕스 패턴의 최적화 되어있다.
export const { showAll, showComplete } = createActions(
  'SHOW_ALL',
  'SHOW_COMPLETE',
  {
    prefix: 'redux-start/filter',
  }
);

//액션 타입 정의
//redux-actions 로 대체
// const SHOW_ALL = 'redux-start/filter/SHOW_ALL';
// const SHOW_COMPLETE = 'redux-start/filter/SHOW_COMPLETEALL';

//액션 생성 함수
//redux-actions 로 대체
// export function showAll(index) {
//   return {
//     type: SHOW_ALL,
//   };
// }

// //{type:COMPLETE_TODO, index:3}
// export function showComplete(index) {
//   return {
//     type: SHOW_COMPLETE,
//   };
// }

//초기값
const initialState = 'ALL';

//redux-actions
const reducer = handleActions(
  {
    SHOW_ALL: (state, action) => 'ALL',
    SHOW_COMPLETE: () => 'COMPLETE',
  },
  initialState,
  { prefix: 'redux-start/filter' }
);
//리듀서
// export default function reducer(previousState = initialState, action) {
//   if (action.type === SHOW_COMPLETE) {
//     return 'COMPLETE';
//   }

//   if (action.type === SHOW_ALL) {
//     return 'ALL';
//   }
//   return previousState;
// }

export default reducer; //redux-actions로 reducer반환
