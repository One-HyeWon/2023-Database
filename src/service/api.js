// service/api.js

const BASE_URL = "http://localhost:9999"; // 포트번호는 실제 백엔드 서버의 포트로 대체해야 합니다.

export const loginToBackend = async (instaId) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ instaId }),
    });

    if (!response.ok) {
      throw new Error("Failed to log in");
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    throw new Error(`Error during login: ${error.message}`);
  }
};
