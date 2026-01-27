import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const savedData = localStorage.getItem("userData");

    if (!savedData) {
      alert("No user registered yet!");
      return;
    }

    const myData = JSON.parse(savedData);

    if (myData && myData.email === loginData.email && myData.password === loginData.password) {
      alert("Login Successfully");
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");   // ✅ Dashboard
    } else {
      alert("INVALID CREDENTIALS");
    }
  }

  return (
    <>
      <form method="POST" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
        />
        <br />
        <input
          type="password"
          placeholder="Enter Your Password"
          name="password"
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
