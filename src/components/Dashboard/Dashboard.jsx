import { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    localStorage.getItem("logged") && setIsLogged(true);
  }, []);

  return isLogged ? (
    <div className="wrapperDashboard">
      <h1>Dashboard</h1>
      <p>Username</p>
      <p>Impostazioni</p>
      <p>dati</p>
      <button>
        <Link to="/">Back</Link>
      </button>
    </div>
  ) : (
    <h1>Utente non collegato</h1>
  );
};

export default Dashboard;
