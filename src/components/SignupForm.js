import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import API_URL from "./API_URL";
import {useState} from "react";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";
const SignupForm = () => {

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    async function signup(e) {
        e.preventDefault();
        setMessage("");
        setError("");
        const signupForm = document.querySelector("#signupForm");
        const newUser = {
            name: signupForm.fName.value,
            lastname: signupForm.lName.value,
            email: signupForm.email.value,
            password: signupForm.password.value,
        };
        await axios
            .post(API_URL + "/api/auth/signup", newUser)
            .then((res) => setMessage("User was added successfully"))
            .catch((err) => setError(() => getErrorFromResponse(err)));
    }

    function getErrorFromResponse(err) {
        if (err.response.data.errors?.length > 0) {
            return err.response.data.errors[0].defaultMessage;
        }
        return err.response.data.message;
    }

    return (
      <div>
          {error !== "" ? <ErrorMessage error={error}/> : ""}
          {message !== "" ? <SuccessMessage message={message}/>: ""}
          <form id={"signupForm"}>
              <h1>Sign up!</h1>
              <div className="form-group">
                  <label htmlFor="fName" style={{marginTop: "1em"}}>First name</label>
                  <input type="text" className="form-control" id="fName" name={"fName"}
                         placeholder="Enter first name"/>
              </div>
              <div className="form-group">
                  <label htmlFor="lName" style={{marginTop: "1em"}}>Last name</label>
                  <input type="text" className="form-control" id="lName" name={"lName"}
                         placeholder="Enter last name"/>
              </div>
              <div className="form-group" style={{marginTop: "1em"}}>
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email" name={"email"}
                         placeholder="Enter email"/>
              </div>
              <div className="form-group" style={{marginTop: "1em"}}>
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password"
                         placeholder="Password"  name={"password"}/>
              </div>
              <button onClick={(e) => signup(e)} className="btn btn-primary"
                      style={{marginTop: "1em"}}>Sign up</button>
          </form>
      </div>
    );
}

export default SignupForm;
