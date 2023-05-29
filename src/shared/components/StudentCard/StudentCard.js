import React from "react";
import "./StudentCard.scss";

export const StudentCard = ({ name, image, faixa, texto }) => {
  return (
    <div className="card-student" style={{ backgroundColor: faixa }}>
      <a href="#">
        <img
          className="rounded-t-lg w-[20rem]"
          src={image}
          alt="aluno-moises"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 style={{ color: texto }}>{name}</h5>
        </a>
      </div>
    </div>
  );
};
