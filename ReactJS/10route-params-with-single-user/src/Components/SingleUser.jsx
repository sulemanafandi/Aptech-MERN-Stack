import axios from 'axios';
import React, {useState} from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

function SingleUser() {
  const {userid} = useParams();
  const [user, setUser] = useState([]);

  const apiUrl = `https://fake-json-api.mock.beeceptor.com/users/${userid}`;

  const fetchUser = async () =>{
    const response = await axios.get(apiUrl);
    setUser(response.data);
  }
  useEffect(()=>{
    fetchUser();
  },[]);

  return (
    <>
    <div>SingleUser</div>
    <img src={user.photo} />
    <h1>User ID {userid}</h1>
    <p>Name : {user.name}</p>
    <p>Phone : {user.phone}</p>

    </>
  )
}

export default SingleUser