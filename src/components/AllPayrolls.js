import ErrorMessage from "./ErrorMessage";
import {useEffect, useState} from "react";
import axios from "axios";
import API_URL from "./API_URL";
import MessageUtility from "./MessageUtility";

const AllPayrolls = () => {
    const [error, setError] = useState("");
    const [payrolls, setPayrolls] = useState([]);
    let payrollsCounter = 0;

    useEffect(() => {
        axios
            .get(API_URL + "/api/acct/payments", {
                auth: {
                    username: localStorage.getItem("username"),
                    password: localStorage.getItem("password"),
                },
            })
            .then((res) => setPayrolls(res.data))
            .catch((err) => setError(() => MessageUtility.getErrorFromResponse(err)));
    }, []);

    return (
        <div>
            <h6>Required any of these roles: ACCOUNTANT</h6>
            <h1>Payments of all employees</h1>
            {error !== "" ? <ErrorMessage error={error} /> : ""}
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Employee</th>
                    <th scope="col">Period</th>
                    <th scope="col">Salary</th>
                </tr>
                </thead>
                <tbody>
                {payrolls.map((payroll) => (
                    <tr>
                        <th>{++payrollsCounter}</th>
                        <th scope="row">{payroll.name + " " + payroll.lastname}</th>
                        <td>{payroll.period}</td>
                        <td>{payroll.salary}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default AllPayrolls;
