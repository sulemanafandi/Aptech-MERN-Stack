import React from 'react'

function Login() {
    const isLogedIn = "true";
    // if(isLogedIn == 'true'){
    //     return (<h1>WellCome Login</h1>)
    // }else{
    //     return(<h1>Please Login</h1>)
    // }
    return(
        <>
        {isLogedIn == "true" ? "You are Login" : "Please login"}
        </>
    )

}

export default Login