import axios from 'axios';
import { put, delay, call, takeEvery } from 'redux-saga/effects';

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

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

//thunk
export function getUsersThunk() {
  return async (dispatch, getState, { history }) => {
    try {
      console.log(history);
      dispatch(getUsersStart());
      //sleep
      await sleep(2000);
      const res = await axios.get('https://api.github.com/users');
      dispatch(getUsersSuccess(res.data));
      history.push('/');
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

//redux-saga
const GET_USERS_SAGA_START = 'GET_USERS_SAGA_START';

function* getUsersSaga(action) {
  try {
    yield put(getUsersStart());
    //sleep
    yield delay(2000);
    const res = yield call(axios.get, 'https://api.github.com/users');
    yield put(getUsersSuccess(res.data));
    // yield put(push('/'));
  } catch (error) {
    yield put(getUsersSuccess(error));
  }
}

export function getUsersSagaStart() {
  return {
    type: GET_USERS_SAGA_START,
  };
}

export function* usersSaga() {
  yield takeEvery(GET_USERS_SAGA_START, getUsersSaga);
}
