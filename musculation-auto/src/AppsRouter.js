import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home.js";
import Login from "./Pages/Login.js";
import Notfound from "./Pages/Notfound.js";
import About from "./Pages/About.js";

function Approuter() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Notfound />} />
      <Route path="/About" element={<About />} />
    </Routes>
  );
}

export default Approuter;
