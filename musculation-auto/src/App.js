import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppsRouter";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
