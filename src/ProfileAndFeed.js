// ProfileAndFeed.js

import React, { useState } from "react";
import Profile from "./components/Profile/Profile";
import Feed from "./components/Feed/Feed";
import LoginForm from "./components/Login/LoginForm";

function ProfileAndFeed() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  // 로그인 성공 시 호출되는 함수
  const handleLogin = (userData) => {
    setLoggedInUser(userData);
  };

  return (
    <div className="profile-and-feed">
      {!loggedInUser ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <>
          <Profile userProfile={loggedInUser.user_data} />
          <Feed loggedInUser={loggedInUser} />
        </>
      )}
    </div>
  );
}

export default ProfileAndFeed;
