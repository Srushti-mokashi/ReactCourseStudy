import React from 'react';
import './UserList.css';

const UserList = ({ users, loading, error }) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;
  if (!users || users.length === 0) return <div>No users found</div>;

  return (
    <div class="userlist">
      {users.map((user) => (
        <div key={user.id}>
          <img src={user.avatar} alt={user.first_name} />
          <p>
            <strong>{user.first_name}</strong>
          </p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;