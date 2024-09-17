import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppsRouter";

import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
