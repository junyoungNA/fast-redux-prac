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
