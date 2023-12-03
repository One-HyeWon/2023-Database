// components/Login/LoginForm.js

import React, { useState } from "react";
import "./LoginForm.css";
import { loginToBackend } from "../../service/api";

const LoginForm = ({ onLogin }) => {
  const [instaId, setInstaId] = useState("");

  const handleLogin = async () => {
    try {
      const userData = await loginToBackend(instaId);

      if (userData && userData.user_data) {
        onLogin(userData.user_data);
      } else {
        console.error("Login failed: Invalid response from the server");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <label htmlFor="instaId">인스타 아이디:</label>
      <input
        type="text"
        id="instaId"
        value={instaId}
        onChange={(e) => setInstaId(e.target.value)}
      />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
};

export default LoginForm;
