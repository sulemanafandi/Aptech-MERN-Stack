import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {
    const [formData, setformData] = useState({
        Fname: "",
        email: "",
        password: "",
    })
    const navigate = useNavigate();

    function handleChange(event) {  
        event.preventDefault();
        localStorage.setItem("User Data", JSON.stringify(formData));
        alert("User Registered Successfully");
        navigate('/login');
    }

  return (
    <>
    <form method='POST' onSubmit={handleChange}>
        <input type="text" name='name' onChange={(e)=>setformData({...formData,Fname:e.target.value})}/>
        <br />
        <input type="email" name='email' onChange={(e)=>setformData({...formData,email:e.target.value})}/>
        <br />
        <input type="password" name='password' onChange={(e)=>setformData({...formData,password:e.target.value})}/>
        <br />
        <button type='submit'>Register</button>
    </form>
    </>
  )
}

export default Register