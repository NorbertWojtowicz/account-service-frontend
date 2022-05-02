import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Menu from "./components/Menu";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route exact path="/" element={<Menu />} />
              <Route exact path="/signup" element={<SignupForm />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
