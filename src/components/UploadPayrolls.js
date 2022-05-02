import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";
import { useState } from "react";
import axios from "axios";
import API_URL from "./API_URL";
import MessageUtility from "./MessageUtility";

const UploadPayrolls = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function uploadPayrolls(e) {
    e.preventDefault();
    setError("");
    setMessage("");
    const payrollsForm = document.querySelector("#upload-payrolls-form");
    const payrolls = [
      {
        salary: Number(payrollsForm.salary.value),
        employee: payrollsForm.email.value,
        period: payrollsForm.period.value,
      },
    ];
    await axios
      .post(API_URL + "/api/acct/payments", payrolls, {
        auth: {
          username: localStorage.getItem("username"),
          password: localStorage.getItem("password"),
        },
      })
      .then((res) => setMessage("Added successfully!"))
      .catch((err) => setError(() => MessageUtility.getErrorFromResponse(err)));
  }

  return (
    <div>
      <h1>Upload payrolls</h1>
      {error !== "" ? <ErrorMessage error={error} /> : ""}
      {message !== "" ? <SuccessMessage message={message} /> : ""}
      <form id={"upload-payrolls-form"}>
        <div className="form-group">
          <label htmlFor="email">Email address of employee</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email of employee"
          />
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary</label>
          <input
            type="number"
            className="form-control"
            id="salary"
            placeholder="Enter salary"
          />
        </div>
        <div className="form-group">
          <label htmlFor="period">Period (format: monthNumber-year)</label>
          <input
            type="text"
            className="form-control"
            id="period"
            placeholder="Enter period like: 01-2021"
          />
        </div>
        <button onClick={(e) => uploadPayrolls(e)} className="btn btn-primary">
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadPayrolls;
