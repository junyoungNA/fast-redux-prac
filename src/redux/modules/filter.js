//액션 타입 정의
const SHOW_ALL = 'redux-start/filter/SHOW_ALL';
const SHOW_COMPLETE = 'redux-start/filter/SHOW_COMPLETEALL';

//액션 생성 함수
export function showAll(index) {
  return {
    type: SHOW_ALL,
  };
}

//{type:COMPLETE_TODO, index:3}
export function showComplete(index) {
  return {
    type: SHOW_COMPLETE,
  };
}

//초기값
const initialState = 'ALL';
//리듀서
export default function reducer(previousState = initialState, action) {
  if (action.type === SHOW_COMPLETE) {
    return 'COMPLETE';
  }

  if (action.type === SHOW_ALL) {
    return 'ALL';
  }
  return previousState;
}
