import React from 'react';
import { useLocation } from 'react-router-dom';

const Profile = () => {

    const { state } = useLocation();
    const { firstName, lastName, email } = state;

    return(
        <div class = 'Parent'>
            <h2>User Profile</h2>
            <div class = 'ProfileBox'>
                <div class = 'ProfileInfo'><strong>First Name: </strong>{firstName}</div>
                <div class = 'ProfileInfo'><strong>Last Name: </strong>{lastName}</div>
                <div class = 'ProfileInfo'><strong>Email: </strong>{email}</div>
            </div>
        </div>

    );
};

export default Profile;