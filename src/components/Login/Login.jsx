import { useNavigate } from "react-router-dom";
import "./Login.css";
import Auth from "../../mock/login.js";
import { Link } from "react-router-dom";

import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onHandleUsername = (e) => setUsername(e.target.value);
  const onHandlePassword = (e) => setPassword(e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (Auth.username === username && Auth.password === password) {
      navigate("/dashboard");
      localStorage.setItem("logged", true);
    } else {
      alert("Dati non corretti");
    }
  };

  return (
    <div className="wrapperLogin">
      <form onSubmit={onHandleSubmit}>
        <input type="text" value={username} placeholder="Insert Username" onChange={onHandleUsername} required />
        <input type="password" value={password} placeholder="Insert Password" onChange={onHandlePassword} required />
        <input type="submit" value="Log-In" />
      </form>
      <button>
        <Link to="/">Back</Link>
      </button>
    </div>
  );
};

export default Login;
