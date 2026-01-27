import React, { useState, useEffect } from "react";
import User from "../assets/user.json";
import axios from "axios";

function UserData() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    let url = "https://dummyjson.com/users";
    let response = await axios.get(url);
    console.log("response", response.data.users);
    setUsers(response.data.users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <table border={2}>
      <thead>
        <tr>
          <th>Id</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {/* {User.users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.email}</td>
          </tr>
        ))} */}
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserData;
