import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Box } from '@mui/material';
import './styles.css';

const ProfileP = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch the API data and update the users state
    const fetchData = async () => {
      try {
        const response = await fetch('https://express-t4.onrender.com/api/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    console.log(users)

    fetchData();
  }, []);

  const filteredUsers = users.filter((user) => {
    
    const Name = user.name ? user.name.toLowerCase() : '';
    const query = searchQuery.toLowerCase();
    console.log(Name, query)
    
    return Name.includes(query)
  });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    console.log(searchQuery)
  };

  return (
    <div className="parent">
      <Box display="flex" justifyContent="center" marginTop={2} marginBottom={2} width="80%" marginLeft="auto" marginRight="auto">
        <TextField
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchChange}
          fullWidth
        />
      </Box>
      <div className="user-list">
      {filteredUsers.map((user) => (
        <Link to={`/profile/${user._id}`} key={user._id} className="user-card" >
          <img className="profile-photo" src={user.picture} alt={user.name} />
          <p className="user-name">{user.name}</p>
          <p className="user-info">Age: {user.age}</p>
          <p className="user-info">Email: {user.email}</p>
          </Link>
      ))}
      </div>
    </div>
  );
};

export default ProfileP;
