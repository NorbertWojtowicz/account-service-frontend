import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import SignupForm from "./components/SignupForm";
import UploadPayrolls from "./components/UploadPayrolls";
import SigninForm from "./components/SigninForm";
import NavBar from "./components/NavBar";
import ChangeRoleForm from "./components/ChangeRoleForm";
import ChangePasswordForm from "./components/ChangePasswordForm";
import EmployeePayrolls from "./components/EmployeePayrolls";
import AllUsers from "./components/AllUsers";
import DeleteUserForm from "./components/DeleteUserForm";
import UpdatePaymentForm from "./components/UpdatePaymentForm";
import AllPayrolls from "./components/AllPayrolls";
import LockUserForm from "./components/LockUserForm";
import SecurityEvents from "./components/SecurityEvents";

function App() {
  return (
    <Fragment>
      <NavBar />
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Menu />} />
            <Route exact path="/signup" element={<SignupForm />} />
            <Route exact path="/signin" element={<SigninForm />} />
            <Route exact path="/upload-payrolls" element={<UploadPayrolls />} />
            <Route exact path="/change-role" element={<ChangeRoleForm />} />
            <Route exact path="/change-password" element={<ChangePasswordForm />} />
            <Route exact path="/employee-payrolls" element={<EmployeePayrolls />} />
            <Route exact path="/users" element={<AllUsers />} />
            <Route exact path="/users/delete" element={<DeleteUserForm />} />
            <Route exact path="/payroll/update" element={<UpdatePaymentForm/>} />
            <Route exact path="/payrolls" element={<AllPayrolls/>} />
            <Route exact path="/users/lock" element={<LockUserForm/>} />
            <Route exact path="/security-events" element={<SecurityEvents/>} />
          </Routes>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
