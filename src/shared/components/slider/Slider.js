import React from "react";
import Carousel from "react-elastic-carousel";
import { ProductCard } from "../../components/productCard/ProductCard";

import blusa10 from "../../../assets/imagens/blusa10.jpg";
import blusa9 from "../../../assets/imagens/blusa9.jpg";
import blusa8 from "../../../assets/imagens/blusa8.jpg";
import blusa7 from "../../../assets/imagens/blusa7.jpg";
import blusa6 from "../../../assets/imagens/blusa6.jpg";

import "./Slider.scss";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];

export const Slider = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel breakPoints={breakPoints}>
        <ProductCard
          img={blusa10}
          title="Blusa Brasiliam jiu jitsu competidor"
          description="CAMISETA JIUJITSU BRAZILIAN COMPETIDOR BJJ EM ALGODÃO PREMIUM FIO 30.1 CONSULTAR TABELA DE TAMANHOS"
        />

        <ProductCard
          img={blusa9}
          title="Camiseta jiu jitsu for life casual"
          description="Aprenda a manipular o DOM, criar páginas inteiras usando técnicas básicas e compreendendo os elementos."
        />

        <ProductCard
          img={blusa8}
          title="Camiseta masculina BJJ"
          description="CAMISETA JIUJITSU BRAZILIAN COMPETIDOR BJJ EM ALGODÃO PREMIUM FIO 30.1 CONSULTAR TABELA DE TAMANHOS"
        />

        <ProductCard
          img={blusa7}
          title="Camiseta JIU-JITSU RED FULL"
          description="CAMISETA JIUJITSU BRAZILIAN COMPETIDOR BJJ EM ALGODÃO PREMIUM FIO 30.1 CONSULTAR TABELA DE TAMANHOS"
        />

        <ProductCard
          img={blusa6}
          title="Blusca casual BJJ everyday"
          description="CAMISETA JIUJITSU BRAZILIAN COMPETIDOR BJJ EM ALGODÃO PREMIUM FIO 30.1 CONSULTAR TABELA DE TAMANHOS"
        />

        <ProductCard
          img={blusa10}
          title="Blusa brasil BJJ competidor"
          description="CAMISETA JIUJITSU BRAZILIAN COMPETIDOR BJJ EM ALGODÃO PREMIUM FIO 30.1 CONSULTAR TABELA DE TAMANHOS"
        />

        <ProductCard
          img={blusa9}
          title="Camisa casual Jiu jitsu brasileiro"
          description="CAMISETA JIUJITSU BRAZILIAN COMPETIDOR BJJ EM ALGODÃO PREMIUM FIO 30.1 CONSULTAR TABELA DE TAMANHOS"
        />

        <ProductCard
          img={blusa8}
          title="Blusa brazilian Jiu-jitsu competidor"
          description="CAMISETA JIUJITSU BRAZILIAN COMPETIDOR BJJ EM ALGODÃO PREMIUM FIO 30.1 CONSULTAR TABELA DE TAMANHOS"
        />

        <ProductCard
          img={blusa7}
          title="Camiseta casual BJJ OSS"
          description="CAMISETA JIUJITSU BRAZILIAN COMPETIDOR BJJ EM ALGODÃO PREMIUM FIO 30.1 CONSULTAR TABELA DE TAMANHOS"
        />

        <ProductCard
          img={blusa6}
          title="Camiseta masculina BJJ"
          description="CAMISETA JIUJITSU BRAZILIAN COMPETIDOR BJJ EM ALGODÃO PREMIUM FIO 30.1 CONSULTAR TABELA DE TAMANHOS"
        />
      </Carousel>
    </div>
  );
};
