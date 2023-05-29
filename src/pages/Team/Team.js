import React from "react";

import { StudentCard } from "shared/components/StudentCard/StudentCard";
import { Header } from "shared/components/Header/Header";
import { Footer } from "shared/components/Footer/Footer";
import "./Team.scss";

import moisesIMG from "../../assets/imagens/cliente-moises.png";
import buzarIMG from "../../assets/imagens/cliente-buza.png";
import vicenteIMG from "../../assets/imagens/cliente-vicente.png";
import logo from "../../assets/imagens/rapha-logo.png";

export const TeamPage = () => {
  return (
    <>
      <Header />
      <section className=" p-14">
        <div className="container">
          <div className="flex flex-col items-center justify-center w-full">
            <h1 className="font-audiowide text-[50px] font-bold text-[#313131]">
              Essa é nossa família!
            </h1>
            <p className="text-base font-bold text-[#313131]">
              Oss, aqui estão todos os nossos amigos, por ordem de graduação.
            </p>
          </div>
          <div className="belt-content">
            <StudentCard
              image={vicenteIMG}
              name={"Vicente Paiva"}
              faixa={"#560bad"}
              texto={"#fff"}
            />
            <StudentCard
              image={vicenteIMG}
              name={"Vicente Paiva"}
              faixa={"#560bad"}
              texto={"#fff"}
            />
            <StudentCard
              image={vicenteIMG}
              name={"Vicente Paiva"}
              faixa={"#560bad"}
              texto={"#fff"}
            />
            <StudentCard
              image={vicenteIMG}
              name={"Vicente Paiva"}
              faixa={"#560bad"}
              texto={"#fff"}
            />
            <StudentCard
              image={vicenteIMG}
              name={"Vicente Paiva"}
              faixa={"#560bad"}
              texto={"#fff"}
            />
            <StudentCard
              image={vicenteIMG}
              name={"Vicente Paiva"}
              faixa={"#560bad"}
              texto={"#fff"}
            />
            <StudentCard
              image={vicenteIMG}
              name={"Vicente Paiva"}
              faixa={"#560bad"}
              texto={"#fff"}
            />
            <StudentCard
              image={vicenteIMG}
              name={"Vicente Paiva"}
              faixa={"#560bad"}
              texto={"#fff"}
            />
          </div>
          <div>
            <img className="logo" src={logo} />
          </div>
          <div className="belt-content">
            <StudentCard
              image={moisesIMG}
              name={"Moisés Guilherme"}
              faixa={"#3a86ff"}
              texto={"#fff"}
            />
            <StudentCard
              image={moisesIMG}
              name={"Moisés Guilherme"}
              faixa={"#3a86ff"}
              texto={"#fff"}
            />
            <StudentCard
              image={moisesIMG}
              name={"Moisés Guilherme"}
              faixa={"#3a86ff"}
              texto={"#fff"}
            />
            <StudentCard
              image={moisesIMG}
              name={"Moisés Guilherme"}
              faixa={"#3a86ff"}
              texto={"#fff"}
            />
            <StudentCard
              image={moisesIMG}
              name={"Moisés Guilherme"}
              faixa={"#3a86ff"}
              texto={"#fff"}
            />
            <StudentCard
              image={moisesIMG}
              name={"Moisés Guilherme"}
              faixa={"#3a86ff"}
              texto={"#fff"}
            />
            <StudentCard
              image={moisesIMG}
              name={"Moisés Guilherme"}
              faixa={"#3a86ff"}
              texto={"#fff"}
            />
            <StudentCard
              image={moisesIMG}
              name={"Moisés Guilherme"}
              faixa={"#3a86ff"}
              texto={"#fff"}
            />
          </div>
          <div>
            <img className="logo" src={logo} />
          </div>
          <div className="belt-content">
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
        </div>
      </section>
      <Footer />
    </>
  );
};
