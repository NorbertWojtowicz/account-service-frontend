import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import API_URL from "./API_URL";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
const SigninForm = () => {
  const [error, setError] = useState("");

  async function signin(e) {
    e.preventDefault();
    setError("");
    const signinForm = document.querySelector("#signin-form");
    const loginData = {
      username: signinForm.email.value,
      password: signinForm.password.value,
    };
    await axios
      .post(API_URL + "/login", loginData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .catch((err) => handleLogin(err.response, loginData));
  }

  async function handleLogin(res, loginData) {
    if (res.data.path === "/success") {
      localStorage.setItem("username", loginData.username);
      localStorage.setItem("password", loginData.password);
      window.location.reload();
      return;
    }
    setError("Bad credentials");
  }

  return (
    <div>
      {error !== "" ? <ErrorMessage error={error} /> : ""}
      <form id={"signin-form"}>
        <h1>Sign in!</h1>
        <div className="form-group" style={{ marginTop: "1em" }}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name={"email"}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group" style={{ marginTop: "1em" }}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            name={"password"}
          />
        </div>
        <button
          onClick={(e) => signin(e)}
          className="btn btn-primary"
          style={{ marginTop: "1em" }}
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SigninForm;
