import axios from "axios";
import API_URL from "./API_URL";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";
import MessageUtility from "./MessageUtility";

const ChangeRoleForm = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function changeUserRole(e) {
    e.preventDefault();
    setError("");
    setMessage("");
    const changeRoleForm = document.querySelector("#change-role-form");
    const changeRoleDto = {
      user: changeRoleForm.email.value,
      role: changeRoleForm.role.value,
      operation: changeRoleForm.operation.value,
    };
    await axios
      .put(API_URL + "/api/admin/user/role", changeRoleDto, {
        auth: {
          username: localStorage.getItem("username"),
          password: localStorage.getItem("password"),
        },
      })
      .then((res) => setMessage("Role updated successfully"))
      .catch((err) => setError(() => MessageUtility.getErrorFromResponse(err)));
  }

  return (
    <div>
      <h6>Required any of these roles: ADMINISTRATOR</h6>
      <h1>Change user roles</h1>
      {error !== "" ? <ErrorMessage error={error} /> : ""}
      {message !== "" ? <SuccessMessage message={message} /> : ""}
      <form id="change-role-form">
        <div className="form-group">
          <label htmlFor="email">Email address of employee</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email of employee"
            required={true}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select id="role" className="form-control">
            <option>ACCOUNTANT</option>
            <option>USER</option>
            <option>ADMINISTRATOR</option>
            <option>AUDITOR</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="operation">Operation</label>
          <select id="operation" className="form-control">
            <option>GRANT</option>
            <option>REMOVE</option>
          </select>
        </div>
        <button onClick={(e) => changeUserRole(e)} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ChangeRoleForm;
