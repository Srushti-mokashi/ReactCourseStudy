import React, { useEffect, useState } from 'react';
import UserList from '../components/UserList';

const UserContainer = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users', {
        headers: {
          'x-api-key': 'reqres-free-v1',
        },
      });

      const json = await response.json();
      console.log(json);

      if (!json.data) return;
      setUsers(json.data);
    } catch (err) {
      setError(err.message || 'Something went wrong');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <UserList users={users} loading={isLoading} error={error} />
    </div>
  );
};

export default UserContainer;
