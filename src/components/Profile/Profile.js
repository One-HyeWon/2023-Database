// components/Profile/Profile.js
import React from "react";
import "./Profile.css";

function Profile({ userProfile }) {
  if (!userProfile || Object.keys(userProfile).length === 0) {
    return null;
  }

  const {
    gender,
    birth,
    followers,
    followings,
    nickname,
    phone_number,
    email,
  } = userProfile;

  return (
    <div className="profile">
      <h2>{nickname}</h2>
      <p>{phone_number}</p>
      <p>{email}</p>
      <p>{gender}</p>
      <p>{birth}</p>
      <div>
        <h3>Followers</h3>
        <ul>
          {followers.map((follower, index) => (
            <li key={index}>{follower}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Followings</h3>
        <ul>
          {followings.map((following, index) => (
            <li key={index}>{following}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
