// ProfileAndFeed.js

import React, { useState } from "react";
import Profile from "./components/Profile/Profile";
import Feed from "./components/Feed/Feed";
import LoginForm from "./components/Login/LoginForm";

function ProfileAndFeed() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (userData) => {
    setLoggedInUser(userData);
  };

  return (
    <div className="profile-and-feed">
      {!loggedInUser ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <>
          <Profile userProfile={loggedInUser.userData} />
          <Feed userPosts={loggedInUser.userData} />
        </>
      )}
    </div>
  );
}

export default ProfileAndFeed;
