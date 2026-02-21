import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function AllUsersData() {

    const [users, setUsers] = useState([])
    const url = "https://fake-json-api.mock.beeceptor.com/users";


    const getUsers = async () =>{
        const response = await axios.get(url);
        setUsers(response.data);
        
    }

    
    useEffect(() => {
        getUsers(); 

    }, []);
  return (
    <>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Username</th>
                <th>Country</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user) =>(
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.company}</td>
                    <td>{user.username}</td>
                    <td>{user.country}</td>
                    
                    <td><Link to={`/user/${user.id}`}>Show User information</Link></td>
                </tr>
            ))}
        </tbody>
    </table>
    
    </>
  )
}

export default AllUsersData