import { useEffect } from 'react';
import axios from 'axios';

export default function UserList({ users, start, success, fail }) {
  useEffect(() => {
    async function getUsers() {
      try {
        start();
        const res = await axios.get('https://api.github.com/users');
        success(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  }, [start, success, fail]);

  if (users.length === 0) {
    return <p>현재 유저 정보 없음</p>;
  }

  return (
    <ul>
      {users.map(user => {
        return <li key={user.id}>{user.login}</li>;
      })}
    </ul>
  );
}
