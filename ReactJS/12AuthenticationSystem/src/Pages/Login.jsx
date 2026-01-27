import React,{useState} from 'react'


const [LoginData, setLoginData] = useState({
    email: "",
    password: "",
});

function handleChange(event) {  
    event.preventDefault();
    const savedData = localStorage.getItem("User Data");
    const parsedData = JSON.parse(savedData);
    
    if(parsedData&& parsedData.email === LoginData.email && parsedData.password === LoginData.password){
        alert("Login Successfully");
    }else{
        alert("Invalid Credentials");
    }
}

function Login() {
  return (
    <form method='POST' onSubmit={handleChange}>
        <input type="email" name='email' onChange={(e)=>{setLoginData({...LoginData,email:e.target.value})}}/>
        <br />
        <input type="password" name='password' onChange={(e)=>{setLoginData({...LoginData,password:e.target.value})}}/>
        <br />
        <button type='submit'>Login</button>
    </form>
  )
}

export default Login