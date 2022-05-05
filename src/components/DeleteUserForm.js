import axios from "axios";
import API_URL from "./API_URL";
import MessageUtility from "./MessageUtility";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";

const DeleteUserForm = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function deleteUser(e) {
    e.preventDefault();
    setError("");
    setMessage("");
    const deleteUserForm = document.querySelector("#delete-user-form");
    const email = deleteUserForm.email.value;
    axios
      .delete(API_URL + "/api/admin/user/" + email, {
        auth: {
          username: localStorage.getItem("username"),
          password: localStorage.getItem("password"),
        },
      })
      .then((res) => setMessage("User deleted successfully"))
      .catch((err) => setError(() => MessageUtility.getErrorFromResponse(err)));
  }

  return (
    <div>
      <h6>Required any of these roles: ADMINISTRATOR</h6>
      <h1>Delete user</h1>
      {error !== "" ? <ErrorMessage error={error} /> : ""}
      {message !== "" ? <SuccessMessage message={message} /> : ""}
      <form id="delete-user-form">
        <div className="form-group">
          <label htmlFor="email">Email address of employee</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            required={true}
          />
        </div>
        <button onClick={(e) => deleteUser(e)} className="btn btn-primary">
          Delete
        </button>
      </form>
    </div>
  );
};

export default DeleteUserForm;
