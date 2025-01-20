import { useState } from "react";
import axios from "axios";

const AdminLogin = ({ onLogin }) => {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://api-3w-social-media-backend.netlify.app/admin/adminLogin",
        {
          userName,
          password,
        }
      );

      if (response.data.success) {
        alert("Login successful!");
        onLogin(); // Callback to indicate the admin has logged in
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Admin Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default AdminLogin;
