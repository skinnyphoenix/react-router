import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <ul className="listedUI">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          {" "}
          <Link to="/locations">Locations </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <Outlet />
      </ul>
    </>
  );
}

export default App;
