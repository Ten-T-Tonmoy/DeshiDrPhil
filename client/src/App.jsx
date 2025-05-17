import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landingpage from "./pages/landing/landingpage";
import Aboutpage from "./pages/about/aboutpage";
import Mainpage from "./pages/main/mainpage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className=" gap-4 flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/home" element={<Landingpage />} />
      </Routes>
    </div>
  );
};

export default App;
