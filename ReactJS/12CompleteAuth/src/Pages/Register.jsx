import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    alert("Successfully registered!");
    navigate('/login');   // ✅ absolute path
  }

  return (
    <>
      <form method='POST' onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" name='fname'
          onChange={(e) => setFormData({ ...formData, fname: e.target.value })} />
        <br />
        <input type="email" placeholder="Email" name='email'
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <br />
        <input type="password" placeholder="Password" name='password'
          onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <br />
        <button type='submit'>Register</button>
      </form>
    </>
  )
}

export default Register
