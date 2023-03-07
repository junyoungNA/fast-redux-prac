import { useCallback } from 'react';
import UserList from '../components/UsersList';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersStart, getUsersSuccess } from '../redux/action';

export default function UserListContainer() {
  const users = useSelector(state => state.users.data);

  const dispatch = useDispatch();

  const start = useCallback(() => {
    dispatch(getUsersStart());
  }, [dispatch]);

  const success = useCallback(
    data => {
      dispatch(getUsersSuccess(data));
    },
    [dispatch]
  );

  const fail = useCallback(
    error => {
      dispatch(getUsersSuccess(error));
    },
    [dispatch]
  );
  return (
    <UserList users={users} start={start} success={success} ffail={fail} />
  );
}
