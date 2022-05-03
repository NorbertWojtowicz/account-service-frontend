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
          </Routes>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
