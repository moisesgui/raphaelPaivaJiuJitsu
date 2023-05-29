import React from "react";

export const StudentCard = ({ name, image, faixa, texto }) => {
  return (
    <div
      className="max-w-[250px] max-h-[350px] cursor-pointer border border-gray-200 rounded-lg shadow hover:shadow-xl dark:bg-gray-800 dark:border-gray-700"
      style={{ backgroundColor: faixa }}
    >
      <a href="#">
        <img
          className="rounded-t-lg w-[20rem] h-[260px]"
          src={image}
          alt="aluno-moises"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5
            className="mb-2 text-xl text-center tracking-wide font-bold text-white dark:text-white"
            style={{ color: texto }}
          >
            {name}
          </h5>
        </a>
      </div>
    </div>
  );
};
