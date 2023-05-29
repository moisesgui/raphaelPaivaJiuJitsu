import React from "react";
import "./StudentCard.scss";

export const StudentCard = ({ name, image, faixa, texto }) => {
  return (
    <div className="card-container" style={{ backgroundColor: faixa }}>
      <a href="#">
        <img className="rounded-t-lg" src={image} alt="aluno-moises" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 style={{ color: texto }}>{name}</h5>
        </a>
      </div>
    </div>
  );
};
