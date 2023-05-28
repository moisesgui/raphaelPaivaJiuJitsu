import React from "react";
import Carousel from "react-elastic-carousel";
import { ProductCard } from "../../components/productCard/ProductCard";

import htmlThumbnail from "../../../assets/imagens/html-thumbnail.png";
import reactThumbnail from "../../../assets/imagens/react-thumbnail.png";
import gestaoThumbnail from "../../../assets/imagens/gestao-thumbnail.png";
import fullstackThumbnail from "../../../assets/imagens/fullstack-thumbnail.png";
import componentThumbnail from "../../../assets/imagens/componente-thumbnail.png";
import "./Slider.scss"

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 }
];

export const Slider = () => {

  return (

    <div className="carousel-wrapper">
      <Carousel breakPoints={breakPoints}>

        <ProductCard img={reactThumbnail} title="Curso básico de React e Redux" description="Aprenda React Js, Redux, Webpack, Redux-Form, MongoDB, Express, Node e Vários exercícios práticos e Duas Apps do ZERO!" />

        <ProductCard img={htmlThumbnail} title="Curso básico de Html e css" description="Aprenda a manipular o DOM, criar páginas inteiras usando técnicas básicas e compreendendo os elementos." />

        <ProductCard img={gestaoThumbnail} title="Curso avançado de Gestão de TI" description="Entenda as metodologias e etapas de cada projeto e aprenda as melhores formas de acompanhar e mensurar cada um deles." />

        <ProductCard img={fullstackThumbnail} title="Curso básico para Fullstack" description="Aprenda a partir de uma visão ampla do mercado de TI. Se desenvolva em programação Phyton e JavaScript. Crie sites, e trabalhe com bancos de dados." />

        <ProductCard img={componentThumbnail} title="Curso básico de Componentização" description="Aprenda React Js, Redux, Webpack, Redux-Form, MongoDB, Express, Node e Vários exercícios práticos e Duas Apps do ZERO!" />

        <ProductCard img={reactThumbnail} title="Curso básico de React e Redux" description="Aprenda React Js, Redux, Webpack, Redux-Form, MongoDB, Express, Node e Vários exercícios práticos e Duas Apps do ZERO!" />

        <ProductCard img={htmlThumbnail} title="Curso básico de Html e css" description="Aprenda a manipular o DOM, criar páginas inteiras usando técnicas básicas e compreendendo os elementos." />

        <ProductCard img={gestaoThumbnail} title="Curso avançado de Gestão de TI" description="Entenda as metodologias e etapas de cada projeto e aprenda as melhores formas de acompanhar e mensurar cada um deles." />

        <ProductCard img={fullstackThumbnail} title="Curso básico de Fullstack" description="Aprenda a partir de uma visão ampla do mercado de TI. Se desenvolva em programação Phyton e JavaScript. Crie sites, e trabalhe com bancos de dados." />

        <ProductCard img={componentThumbnail} title="Curso básico de Componentização" description="Aprenda React Js, Redux, Webpack, Redux-Form, MongoDB, Express, Node e Vários exercícios práticos e Duas Apps do ZERO!" />

      </Carousel>
    </div>
  );
}
