import { useCallback } from 'react';
import UserList from '../components/UsersList';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUsersStart,
  getUsersSuccess,
  getUsersThunk,
  getUsersPromise,
} from '../redux/modules/users';
// import axios from 'axios';

export default function UserListContainer() {
  const users = useSelector(state => state.users.data);
  const dispatch = useDispatch();
  // const start = useCallback(() => {
  //   dispatch(getUsersStart());
  // }, [dispatch]);

  // const success = useCallback(
  //   data => {
  //     dispatch(getUsersSuccess(data));
  //   },
  //   [dispatch]
  // );

  // const fail = useCallback(
  //   error => {
  //     dispatch(getUsersSuccess(error));
  //   },
  //   [dispatch]
  // );

  // const getUsers = useCallback(async () => {
  //   try {
  //     dispatch(getUsersStart());
  //     const res = await axios.get('https://api.github.com/users');
  //     dispatch(getUsersSuccess(res.data));
  //   } catch (error) {
  //     dispatch(getUsersSuccess(error));
  //   }
  // }, [dispatch]);

  const getUsers = useCallback(() => {
    // dispatch(getUsersThunk());
    dispatch(getUsersPromise());
  }, [dispatch]);

  return <UserList users={users} getUsers={getUsers} />;
}
