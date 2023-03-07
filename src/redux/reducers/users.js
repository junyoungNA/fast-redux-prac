// const initialState = [];
import { GET_USERS_FAIL, GET_USERS_START, GET_USERS_SUCCESS } from '../action';
const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default function users(state = initialState, action) {
  if (action.type === GET_USERS_START) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }

  if (action.type === GET_USERS_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.data,
      // error: null,
    };
  }

  if (action.type === GET_USERS_FAIL) {
    return {
      ...state,
      loading: false,
      data: action.data,
      error: action.error,
      // error: null,
    };
  }
  return state;
}
