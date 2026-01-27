import React from 'react'

function Admin() {
    const role = "Admin";
    // if(role == 'Admin'){
    //     return (<h1>Wellcome Admin</h1>)
    // }else{
    //     return(<h1>You are not Admin</h1>)
    // }
    return(
        <>
        {role == 'Admin' ? ' wellcome' : 'please you are not Admin'}
        </>
    )

}

export default Admin