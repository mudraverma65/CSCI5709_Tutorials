import React,{ useEffect, useState }  from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';
import { useLocation } from 'react-router-dom';

const ProfileD = ()  => {

    const { id } = useParams();

    const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the API data and update the users state
    const fetchData = async () => {
      try {
        console.log(id)
        const response = await fetch(`https://express-t4.onrender.com/api/users/${id}`);
        const data = await response.json();
        setUser(data);
        console.log(user)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img className="profile-picture" src={user.picture} alt={user.name} />
        <h1>{user.name}</h1>
        <h1 className="profile-name">{user.name}</h1>
        <p className="profile-email">{user.email}</p>
      </div>
      <div className="profile-details">
        <div className="profile-section">
          <h2>About</h2>
          <p>{user.about}</p>
        </div>
        <div className="profile-section">
          <h2>Contact Information</h2>
          <p>Phone: {user.phone}</p>
          <p>Address: {user.address}</p>
        </div>
        <div className="profile-section">
          <h2>Company</h2>
          <p>{user.company}</p>
        </div>
        <div className="profile-section">
        <h2>Friends</h2>
          {user.friends && user.friends.length > 0 ? (
            user.friends.map((friend) => <p key={friend.id}>{friend.name}</p>)
          ) : (
            <p>No friends found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileD;
