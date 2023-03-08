import React, { useState, useEffect } from 'react';
import './App.css';

function UserCard({ user }) {
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    async function fetchAvatar() {
      const response = await fetch(`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`);
      setAvatarUrl(response.url);
    }

    fetchAvatar();
  }, [user]);

  return (
    <div className="card">
      <div className='row'>
      <div className="col-4 images">
      <img src={avatarUrl} className="card-img-top" alt="Avatar" />
      </div>
      <div className="col">
        <h5 className="card-title"><b></b>{user.name}</h5>
        <h6 className="card-subtitle"><b>email: </b>{user.email}</h6>
        <h6 className="card-subtitle"><b>Phone: </b>{user.phone}</h6>
        <h6 className="card-subtitle"><b>Company: </b>{user.company.name}</h6>
        <h6 className="card-subtitle"><b>Website: </b>{user.website}</h6>
        <h6 className="card-subtitle"><b>Address: </b>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</h6>
      </div>
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
    <>
    <h1 className='text-center'>User data</h1>
      <div className="container">
      <div className="row">
        {users.map(user => (
          <div className="col-lg-12 mt-1 mb-1" key={user.id}>
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default App;
