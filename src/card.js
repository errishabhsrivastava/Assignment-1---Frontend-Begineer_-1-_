import React, { useState, useEffect } from 'react';

function UserCard({ user }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
        <p className="card-text">{user.company.name}</p>
        <a href={user.website} className="card-link">{user.website}</a>
      </div>
    </div>
  );
}

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {users.map(user => (
          <div className="col-md-4" key={user.id}>
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
