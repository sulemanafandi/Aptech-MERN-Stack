import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SingleUser() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  const url = "https://fake-json-api.mock.beeceptor.com/users";

  useEffect(() => {
    axios.get(url).then((res) => {
      const foundUser = res.data.find((u) => u.userId == userId);
      setUser(foundUser);
    });
  }, [userId]);

  if (!user) return <h2>Loading...</h2>;

  return (
    <>
      <h1>User Details</h1>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Company:</strong> {user.company}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Country:</strong> {user.country}</p>
    </>
  );
}

export default SingleUser;
