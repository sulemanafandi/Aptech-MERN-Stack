import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function AllUserData() {
  const [users, setUser] = useState([]);
  const url = "https://fake-json-api.mock.beeceptor.com/users";

  const getUser = async () => {
    const response = await axios.get(url);
    console.log("response", response);
    setUser(response.data);
  };
  useEffect(() => {
    getUser();
  }, [])
  return (
    <>
      <div className="container pt-2">
        <h1 className='pb-3'>Table User</h1>
        <div className="col">
          <table className="table">
            <thead>
              <tr className="fw-bolder">
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Company</th>
                <th scope="col">Username</th>
                <th scope="col">Country</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.company}</td>
                  <td>{user.username}</td>
                  <td>{user.country}</td>
                  <td><Link to={`/user/${user.id}`}>Show User Information</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AllUserData;
