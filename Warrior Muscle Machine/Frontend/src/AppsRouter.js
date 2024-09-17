import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home.js";
import Login from "./Pages/Login.js";
import Notfound from "./Pages/Notfound.js";
import About from "./Pages/About.js";
import Registration from "./Pages/Registration.js";
import ResetPassword from "./Pages/Resetpassword.js";
import Dashboard from "./Pages/Dashboard.js";
import Soon from "./Pages/Soon.js";
import Contact from "./Pages/Contact.js";

function Approuter() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Registration" element={<Registration />} />
      <Route path="/forgotPassword" element={<ResetPassword />} />
      <Route path="/" element={<Home />} />
      <Route path="/Dashboard/:userId" element={<Dashboard />} />
      <Route path="/Soon" element={<Soon />} />
      <Route path="*" element={<Notfound />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}

export default Approuter;
