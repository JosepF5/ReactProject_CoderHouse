import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div style={{ fontFamily: "'Permanent Marker', cursive" }}>
      <h1 className="m-4">WHOOPS! PARECE QUE TE HAS PERDIDO. VUELVE A LA TIENDA AQUI</h1>
      <h1 className="m-4">👇</h1>
      <Link to="/" className="bg-green-500 hover:bg-green-700 p-2 m-4 rounded text-white font-semibold m-5">
        Home <i className="fas fa-home"></i>
      </Link>
    </div>
  );
};

export default Error;
