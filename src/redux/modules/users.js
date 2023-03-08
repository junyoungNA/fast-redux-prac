import axios from 'axios';

//엑션 타입 정의
const GET_USERS_START = 'redux-start/users/GET_USERS_START'; //깃허브 api 호출을 시작함
const GET_USERS_SUCCESS = 'redux-start/users/GET_USERS_SUCCESS'; //깃허브 api 호출을 성공함
const GET_USERS_FAIL = 'redux-start/users/GET_USERS_FAIL'; //깃허브 api 호출을 성공함

//redux-promise-middleware
const GET_USERS = 'redux-start/users/GET_USERS';
const GET_USERS_PENDING = 'redux-start/users/GET_USERS_PENDING';
const GET_USERS_FULFILLED = 'redux-start/users/GET_USERS_FULFILLED';
const GET_USERS_REJECTED = 'redux-start/users/GET_USERS_REJECTED';

//액션 생성자 함수
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

//초기값
const initialState = {
  loading: false,
  data: [],
  error: null,
};

//리듀서
export default function reducer(state = initialState, action) {
  if (action.type === GET_USERS_START || action.type === GET_USERS_PENDING) {
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

  if (action.type === GET_USERS_FULFILLED) {
    return {
      ...state,
      loading: false,
      data: action.payload,
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

  if (action.type === GET_USERS_REJECTED) {
    return {
      ...state,
      loading: false,
      data: action.payload,
      error: action.error,
      // error: null,
    };
  }
  return state;
}

//thunk
export function getUsersThunk() {
  return async dispatch => {
    try {
      dispatch(getUsersStart());
      const res = await axios.get('https://api.github.com/users');
      dispatch(getUsersSuccess(res.data));
    } catch (error) {
      dispatch(getUsersSuccess(error));
    }
  };
}
//redux-promise-middleware

export function getUsersPromise() {
  return {
    type: GET_USERS,
    payload: async () => {
      const res = await axios.get('https://api.github.com/users');
      return res.data;
    },
  };
}
