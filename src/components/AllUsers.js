import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import API_URL from "./API_URL";
import MessageUtility from "./MessageUtility";
import ErrorMessage from "./ErrorMessage";

const AllUsers = () => {
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  let usersCounter = 0;

  useEffect(() => {
    axios
      .get(API_URL + "/api/admin/user", {
        auth: {
          username: localStorage.getItem("username"),
          password: localStorage.getItem("password"),
        },
      })
      .then((res) => setUsers(res.data))
      .catch((err) => setError(() => MessageUtility.getErrorFromResponse(err)));
  }, []);

  return (
    <div>
      <h6>Required any of these roles: ADMINISTRATOR</h6>
      <h1>All users</h1>
      {error !== "" ? <ErrorMessage error={error} /> : ""}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Roles</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <th>{++usersCounter}</th>
              <th scope="row">{user.email}</th>
              <td>{user.name}</td>
              <td>{user.lastname}</td>
              <td>{user.roles.map((role) => role.split("_")[1] + " ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
