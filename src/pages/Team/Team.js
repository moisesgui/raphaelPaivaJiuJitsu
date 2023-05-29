import React from "react";
import "./Team.scss";

import { StudentCard } from "shared/components/StudentCard/StudentCard";

import moisesIMG from "../../assets/imagens/cliente-moises.png";
import erikoIMG from "../../assets/imagens/cliente-eriko.png";
import buzarIMG from "../../assets/imagens/cliente-buza.png";

export const TeamPage = () => {
  return (
    <section className="h-screen p-14">
      <div className="container">
        <StudentCard
          image={moisesIMG}
          name={"Moisés Guilherme"}
          faixa={"#3a86ff"}
          texto={"#fff"}
        />
        <StudentCard
          image={erikoIMG}
          name={"Eriko Gentil"}
          faixa={"#3a86ff"}
          texto={"#fff"}
        />
        <StudentCard
          image={buzarIMG}
          name={"Buzar Filho"}
          faixa={"#ffff"}
          texto={"#000"}
        />
        <StudentCard
          image={buzarIMG}
          name={"Buzar Filho"}
          faixa={"#ffff"}
          texto={"#000"}
        />
        <StudentCard
          image={buzarIMG}
          name={"Buzar Filho"}
          faixa={"#ffff"}
          texto={"#000"}
        />
        <StudentCard
          image={buzarIMG}
          name={"Buzar Filho"}
          faixa={"#ffff"}
          texto={"#000"}
        />
      </div>
    </section>
  );
};
