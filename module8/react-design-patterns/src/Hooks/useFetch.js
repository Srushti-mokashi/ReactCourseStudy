 import { useState, useEffect } from 'react';

const useFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users');
        const json = await response.json();
        if (!json.data) throw new Error('No user data found.');
        setUsers(json.data);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  return { users, isLoading, error };
};

export default useFetch;