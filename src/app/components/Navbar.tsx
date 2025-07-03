import React from "react";
import "./Navbar.css";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="navbar-top">
        <nav className="navbar-right">
          <button
            className={location.pathname === "/" ? "active" : ""}
            onClick={() => navigate("/")}
          >
            Cukroví
          </button>
          <button
            className={location.pathname === "/objednavka" ? "active" : ""}
            onClick={() => navigate("/objednavka")}
          >
            Objednávka
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
