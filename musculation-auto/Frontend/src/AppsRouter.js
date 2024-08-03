import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home.js";
import Login from "./Pages/Login.js";
import Notfound from "./Pages/Notfound.js";
import About from "./Pages/About.js";
import Registration from "./Pages/Registration.js";
import ResetPassword from "./Pages/Resetpassword.js";
import Dashboard from "./Pages/Dashboard.js";

function Approuter() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Registration" element={<Registration />} />
      <Route path="/PasswordForgotten" element={<ResetPassword />} />
      <Route path="/" element={<Home />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="*" element={<Notfound />} />
      <Route path="/About" element={<About />} />
    </Routes>
  );
}

export default Approuter;
