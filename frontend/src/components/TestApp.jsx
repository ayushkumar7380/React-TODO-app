import { useState } from "react";
import axios from "axios";

function TestApp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "mongodb://localhost:27017/mydatabase",
        {
          name,
          email,
          password,
        }
      );
      console.log("User created:", response.data);
      alert("User registered successfully!");
    } catch (error) {
      console.error("Error registering user:", error.response?.data);
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h1>Register User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default TestApp;
