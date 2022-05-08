import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";
import {useState} from "react";
import axios from "axios";
import API_URL from "./API_URL";
import MessageUtility from "./MessageUtility";

const ChangePasswordForm = () => {
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    async function changeUserPassword(e) {
        e.preventDefault();
        setError("");
        setMessage("");
        const changePasswordForm = document.querySelector("#change-password-form");
        const oldPassword = changePasswordForm.oPassword.value;
        if (!oldPassword) {
            setError("Please sign in first...");
            return;
        }
        if (oldPassword !== localStorage.getItem("password")) {
            setError("Incorrect old password");
            return;
        }
        const changePasswordDto = {
            new_password: changePasswordForm.nPassword.value
        }
        await axios
            .post(API_URL + "/api/auth/changepass", changePasswordDto, {
                auth: {
                    username: localStorage.getItem("username"),
                    password: localStorage.getItem("password"),
                },
            })
            .then((res) => handleChangePassword(changePasswordDto))
            .catch((err) => setError(() => MessageUtility.getErrorFromResponse(err)));
    }

    function handleChangePassword(changePasswordDto) {
        setMessage("Successfully changed password");
        localStorage.setItem("password", changePasswordDto.new_password);
    }

    return (
        <div>
            <h6>Required any of these roles: ACCOUNTANT, USER, ADMINISTRATOR</h6>
            <h1>Change your password</h1>
            {error !== "" ? <ErrorMessage error={error} /> : ""}
            {message !== "" ? <SuccessMessage message={message} /> : ""}
            <form id="change-password-form">
                <div className="form-group">
                    <label htmlFor="oPassword">Old password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="oPassword"
                        placeholder="Enter old password"
                        required={true}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nPassword">New password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="nPassword"
                        placeholder="Enter new password"
                        required={true}
                    />
                </div>
                <button onClick={(e) => changeUserPassword(e)} className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ChangePasswordForm;
