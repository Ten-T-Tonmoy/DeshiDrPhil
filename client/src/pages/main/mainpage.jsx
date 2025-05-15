import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const page = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Skeleton Daisy+React Router</h1>

      <div className="flex gap-2 mb-4">
        <Link to="/home">
          <button className="btn btn-primary">Go to Home</button>
        </Link>
        <Link to="/about">
          <button className="btn btn-primary">About Us</button>
        </Link>
        <button className="btn btn-secondary">Click Me</button>
      </div>
    </div>
  );
};

export default page;
