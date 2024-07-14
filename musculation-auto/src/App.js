import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Videobackground from "./components/Videobackground";
function App() {
  return (
    <BrowserRouter>
      <Videobackground />
    </BrowserRouter>
  );
}

export default App;
