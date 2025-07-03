import React, { useState } from "react";
import { data as allCukrovi } from "../../data/cukrovi";
import CukroviCard from "../components/CukroviCard";
import type { Cukrovi } from "../types";
import "./Home.css"; // nepovinné – jen pokud máš zvlášť CSS pro home

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<"suche" | "kremove">(
    "suche"
  );

  const filteredCukrovi: Cukrovi[] = allCukrovi.filter(
    (item) => item.type === activeFilter
  );

  return (
    <div className="home-page">
      <h1 className="page-title">Vánoční cukroví</h1>

      <div
        className="filter-buttons"
        style={{ textAlign: "center", margin: "1rem 0" }}
      >
        <button
          onClick={() => setActiveFilter("suche")}
          className={activeFilter === "suche" ? "active" : ""}
        >
          Suché
        </button>
        <button
          onClick={() => setActiveFilter("kremove")}
          className={activeFilter === "kremove" ? "active" : ""}
        >
          Krémové
        </button>
      </div>

      <div className="card-grid">
        {filteredCukrovi.map((cukrovi) => (
          <CukroviCard key={cukrovi.id} cukrovi={cukrovi} />
        ))}
      </div>
    </div>
  );
};

export default Home;
