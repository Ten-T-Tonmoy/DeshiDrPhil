import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landingpage from "./pages/landing/landingpage";
import Aboutpage from "./pages/about/aboutpage";
import Mainpage from "./pages/main/mainpage";

const App = () => {
  return (
    <div className="p-4 gap-4 flex flex-col">
      

      <Routes>
        <Route path="/" element={<Mainpage/>}/>
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/home" element={<Landingpage />} />
      </Routes>
    </div>
  );
};

export default App;
