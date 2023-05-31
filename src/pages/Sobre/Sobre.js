import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Sobre.scss";


import bambu from "../../assets/imagens/3-bambus.jpg";
import bonzai from "../../assets/imagens/bonsai.jpg";
import leao from "../../assets/imagens/leao-no-telhado.jpg";
import guindaste from "../../assets/imagens/guindaste-de-papel.jpg";
import logo from "../../assets/imagens/rapha-logo.png";
import { Footer } from 'shared/components/Footer/Footer';
import { HeaderGeral } from "shared/components/HeaderGeral/HeaderGeral";

export const Sobre = () => {
    AOS.init()

    return (
            <div className="sobre-container">
              <HeaderGeral />  
              
            <div className="flex flex-col items-center justify-center mt-10 bg-gray-400">
            <div
            className="hidden md:flex mr-20"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img src={logo} alt="rapha-logo" width="250" />
          </div>
          <section className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl mb-4 mt-10">História do JiuJitsu</h1>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8  border-8 shadow-2xl rounded-md">
              <p className="text-left indent-1 bg-gray-100 p-4">
              A história do Jiu-Jitsu é longa, afinal essa é uma arte marcial milenar, mais conhecida como a arte suave.
                Uma das teorias sobre sua origem  é que o Jiu-Jitsu surgiu na Índia através de monges budistas.
                Outra vertente é que teria sido criada na China, entre os séculos III e IV e, em seguida, chegado ao Japão através da expansão do budismo.
                No entanto, a versão mais aceita e difundida é que o Jiu-Jitsu foi foi desenvolvido no Japão há mais de 3600 anos, e suas técnicas foram aprimoradas por samurais.
              </p>
            </div>
            <div
              className="flex flex-col items-center px-4 md:px-0 md:flex-row md:items-center justify-center gap-6 py-[100px] aos-init"
              data-aos="fade-right"
              data-aos-anchor-placement="right"
              data-aos-duration="1000"
            >
              <img src={bambu} alt="bambuImg" width="250" />
            </div>
          </section>
          <section className="flex flex-col items-center p-10">
            <h1 className="font-bold text-2xl mb-4 mt-10">História do JiuJitsu no Brasil</h1>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 border-8 shadow-2xl rounded-md">
              <p className="text-left indent-1 bg-gray-100 p-4 ">
                MITSUYO MAEDA (CONDE KOMA)
                Nascido no Japão, também conhecido como Conde Koma, foi um dos principais discípulos de Jigoro Kano. Migrou para o Brasil no início do século XIX aportando em Belém do Pará, onde conheceu o patriarca da família Gastão Gracie. Como forma de agradecimento pela ajuda em se estabelecer no país, se comprometeu a ensinar o Jiu Jitsu a seu filho mais velho Carlos Gracie. Nascia aí o Jiu Jitsu Brasileiro.<br/><br/>
                GRANDE MESTRE CARLOS GRACIE
                Filho de Gastão Gracie e aluno de Mitsuyo Maeda, Carlos Gracie foi um mestre de artes marciais e um dos fundadores do Jiu Jitsu brasileiro
                Precursor dos lutadores que tornaram a família Gracie mundialmente famosa e patriarca da família, Carlos foi responsável por ensinar Jiu Jitsu aos irmãos Gastão, Oswaldo, George. Em 1925, Carlos Gracie abriu sua primeira academia de Jiu Jitsu e começou a treinar e a ensinar suas técnicas a outros.
                Além de suas realizações como lutador e treinador, Carlos Gracie é reconhecido por ter criado a base para a evolução do jiu-jitsu e por ter divulgado a família Gracie, que é uma das mais influentes e respeitadas na história das artes marciais.<br/><br/>
                GRANDE MESTRE HÉLIO GRACIE
                Helio Gracie foi um mestre de artes marciais brasileiro, conhecido como um dos fundadores do jiu-jitsu moderno e um dos maiores influenciadores no desenvolvimento dos esportes de luta do mundo. Hélio nasceu em Belém do Pará, no Brasil, em 1913 e começou a praticar jiu-jitsu aos 15 anos de idade. Mais tarde, ele desenvolveu sua própria forma de jiu-jitsu baseada em técnicas de submissão e alavancas, no lugar da força bruta, o que permitiu a pessoas de todos os tamanhos e forças se defenderem contra oponentes maiores e mais fortes.
                Helio Gracie treinou e lutou por muitos anos e tornou-se conhecido como um mestre respeitado e habilidoso e por ter enfrentado oponentes de diferentes artes marciais para provar a eficácia do jiu-jitsu.
              </p>
            </div>
            <div
              className="flex flex-col items-center px-4 md:px-0 md:flex-row md:items-center justify-center gap-6 py-[100px] aos-init"
              data-aos="fade-left"
              data-aos-anchor-placement="right"
              data-aos-duration="1000"
            >
              <img src={leao} alt="bambuImg" width="250" />
            </div>
          </section>
          <section className="flex flex-col items-center p-10">
            <h1 className="font-bold text-2xl mb-4 mt-10">Quem sou eu?</h1>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 shadow-2xl rounded-md">
              <p className="text-left bg-gray-100 p-4 shadow-2xl rounded-md">
              Nascido em 1984 na cidade de Fortaleza/CE, Raphael iniciou sua jornada no Jiu-Jítsu aos 18 anos com o mestre William Couto, no qual tempos depois mudou de cidade e o deixou aos cuidados do mestre Guilherme Rocha(Caju), então responsável pela Gracie Humaita e posteriormente se tornando Ribeiro Jiu-Jítsu. Em 2017 foi  graduado a faixa preta.
                Ao longo dos anos , conquistou títulos na faixa branca, azul, roxa e marrom e se tornou instrutor na academia Ribeiro Jiu-jítsu.
                Em 2018  fundou a equipe Raphael Paiva Jiu-Jitsu. “Hoje acredito que posso contribuir com o crescimento pessoal da sociedade transmitindo os reais valores do Jiu-Jitsu.”
              </p>
            </div>
            <div
              className="flex flex-col items-center px-4 md:px-0 md:flex-row md:items-center justify-center gap-6 py-[100px] aos-init"
              data-aos="fade-left"
              data-aos-anchor-placement="right"
              data-aos-duration="1000"
            >
              <img src={guindaste} alt="bambuImg" width="250" />
            </div>
          </section>
          <section className="flex flex-col items-center p-10">
            <h1 className="font-bold text-2xl mb-4 mt-10">Nossa História</h1>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 shadow-2xl rounded-md">
              <p className="text-center bg-gray-100 p-4 ">
              Em 2018, o mestre Raphael Paiva fundou sua academia, onde começou a dar aula até então apenas com sua namorada (na época) como aluna.
                Sempre buscando encontrar a melhor forma de conciliar a marcialidade e a atualidade, ele trás para seus alunos uma didática onde o respeito, a vontade de crescer, a filosofia , respeito a individualidade, a técnica e o estilo de vida que o Jiu-Jitsu proporciona andem juntos e assim seus alunos , familiares e todos da sociedade possam aproveitar os benefícios da arte suave. 
                Hoje conta com praticantes que buscam melhorar sua qualidade vida, fisicamente , psicologicamente e que aprendem como se comportar em situações do dia a dia e os praticantes que buscam a parte competitiva, com técnicas refinadas e estudadas diariamente, que inclusive já vem se destacando com um Jiu-Jitsu para frente e finalizador.
              </p>
            </div>
            <div
              className="flex flex-col items-center px-4 md:px-0 md:flex-row md:items-center justify-center gap-6 py-[100px] aos-init"
              data-aos="fade-up-right"
              data-aos-anchor-placement="right"
              data-aos-duration="1000"
            >
              <img src={bonzai} alt="bambuImg" width="250" />
            </div>
          </section>
        </div>
        <Footer />
    </div>
  );
};