import React from "react";
import type { Cukrovi } from "../types";
import "./CukroviCard.css";

type Props = {
  cukrovi: Cukrovi;
};

const CukroviCard: React.FC<Props> = ({ cukrovi }) => {
  const { name, image, preparation, ingredients, cream, recipe } = cukrovi;
  return (
    <div className="card-container">
      <div className="card">
        {/* PŘEDNÍ STRANA */}
        <div className="card-front">
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <p>
            <strong>Čas přípravy:</strong> {preparation} minut
          </p>
          <p>
            <strong>Ingredience:</strong> {ingredients}
          </p>
          {cream && (
            <p>
              <strong>Krém:</strong> {cream}
            </p>
          )}
        </div>

        {/* ZADNÍ STRANA */}
        <div className="card-back">
          <h3>Recept</h3>
          <p>{recipe}</p>
        </div>
      </div>
    </div>
  );
};

export default CukroviCard;
