import axios from "axios";
import API_URL from "./API_URL";
import MessageUtility from "./MessageUtility";
import ErrorMessage from "./ErrorMessage";
import {useState} from "react";
import SuccessMessage from "./SuccessMessage";

const LockUserForm = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function lockUser(e) {
    e.preventDefault();
    setError("");
    setMessage("");
    const changeUserAccessForm = document.querySelector("#lock-user-form");
    const changeAccessDto = {
      user: changeUserAccessForm.email.value,
      operation: changeUserAccessForm.operation.value,
    };
    axios
      .put(API_URL + "/api/admin/user/access", changeAccessDto, {
        auth: {
          username: localStorage.getItem("username"),
          password: localStorage.getItem("password"),
        },
      })
      .then((res) => setMessage("User access changed successfully"))
      .catch((err) => setError(() => MessageUtility.getErrorFromResponse(err)));
  }

  return (
    <div>
      <h6>Required any of these roles: ADMINISTRATOR</h6>
      <h1>Changes user access (lock / unlock)</h1>
      {error !== "" ? <ErrorMessage error={error} /> : ""}
      {message !== "" ? <SuccessMessage message={message} /> : ""}
      <form id="lock-user-form">
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
        <div className="form-group">
          <label htmlFor="operation">Operation</label>
          <select id="operation" className="form-control">
            <option>LOCK</option>
            <option>UNLOCK</option>
          </select>
        </div>
        <button onClick={(e) => lockUser(e)} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LockUserForm;
