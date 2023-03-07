export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETE = 'SHOW_COMPLETEALL';

//{type:ADD_TODO, text:'할일'}
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

//{type:COMPLETE_TODO, index:3}
export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index,
  };
}

//{type:COMPLETE_TODO, index:3}
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

//users

export const GET_USERS_START = 'GET_USERS_START'; //깃허브 api 호출을 시작함
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'; //깃허브 api 호출을 성공함
export const GET_USERS_FAIL = 'GET_USERS_FAIL'; //깃허브 api 호출을 성공함

export function getUsersStart() {
  return {
    type: GET_USERS_START,
  };
}

export function getUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    data,
  };
}

export function getUsersFail(error) {
  return {
    type: GET_USERS_FAIL,
    error,
  };
}
