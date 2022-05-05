import axios from "axios";
import API_URL from "./API_URL";
import MessageUtility from "./MessageUtility";
import {useState} from "react";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";

const UpdatePaymentForm = () => {
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    function updatePayment(e) {
        e.preventDefault();
        setError("");
        setMessage("");
        const updatePaymentForm = document.querySelector("#update-payment-form");
        const paymentDto = {
            salary: Number(updatePaymentForm.salary.value),
            employee: updatePaymentForm.email.value,
            period: updatePaymentForm.period.value,
        };
        axios
            .put(API_URL + "/api/acct/payments", paymentDto,{
                auth: {
                    username: localStorage.getItem("username"),
                    password: localStorage.getItem("password"),
                },
            })
            .then((res) => setMessage("Payment updated successfully"))
            .catch((err) => setError(() => MessageUtility.getErrorFromResponse(err)));
    }

    return (
        <div>
            <h6>Required any of these roles: ACCOUNTANT</h6>
            <h1>Update payment information</h1>
            {error !== "" ? <ErrorMessage error={error} /> : ""}
            {message !== "" ? <SuccessMessage message={message} /> : ""}
            <form id="update-payment-form">
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
                    <label htmlFor="salary">Salary</label>
                    <input
                        type="number"
                        className="form-control"
                        id="salary"
                        placeholder="Enter salary"
                        required={true}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="period">Period (format: monthNumber-year)</label>
                    <input
                        type="text"
                        className="form-control"
                        id="period"
                        placeholder="Enter period like: 01-2021"
                        required={true}
                    />
                </div>
                <button onClick={(e) => updatePayment(e)} className="btn btn-primary">
                    Update
                </button>
            </form>
        </div>
    )
}

export default UpdatePaymentForm;
