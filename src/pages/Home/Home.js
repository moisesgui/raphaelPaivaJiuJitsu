import React from "react";

import { Slider } from "../../shared/components/slider/Slider";
import { BannerCarousel } from "shared/components/BannerCarousel/BannerCarousel";
import { initFlowbite } from "flowbite";
import { Footer } from "shared/components/Footer/Footer";
import { Header } from "shared/components/Header/Header";

import logo from "../../assets/imagens/rapha-logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "flowbite";
import "./Home.scss";

export const Home = () => {
  AOS.init();
  initFlowbite();

  return (
    <div className="home-container">
      <Header />
      <section>
        <div class="w-full h-screen bg-center bg-cover bg-hero-image">
          <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
            <div class="text-center">
              <div class="container px-4 mx-auto">
                <div class="flex flex-col items-center justify-center max-w-4xl mx-auto text-center">
                  <h2
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    class="home-container--title"
                  >
                    RAPHAEL PAIVA JIU JITSU
                  </h2>
                  {/* <p class="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laborum sit cum iure qui, nostrum at sapiente ducimus.
                  </p> */}
                  <a
                    href="https://api.whatsapp.com/send?1=pt_BR&phone=5585982380699"
                    target="_blank"
                    rel="noreferrer"
                    data-aos="zoom-in"
                    fade-aos-duration="2000"
                    className="flex items-center justify-center gap-2 border bg-[#25D146] border-[#25D146] text-white focus:ring-4 focus:outline-none font-medium font-inter rounded-xl  
      w-[200px] h-[48px] text-base text-center mr-3 md:mr-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      class="bi bi-whatsapp"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                    Enviar Mensagem
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hidden md:block pt-12">
        <div>
          <BannerCarousel />
        </div>
      </section>

      <section>
        <div
          className="flex flex-col items-center px-4 md:px-0 md:flex-row md:items-center justify-center gap-6 py-[100px] aos-init"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            className="hidden md:flex mr-20"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img src={logo} alt="rapha-logo" width="250" />
          </div>
          <div
            className="w-full md:w-1/3"
            id="accordion-collapse"
            data-accordion="collapse"
          >
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-1"
              >
                <span>Jiu Jitsu é seguro?</span>
                <svg
                  data-accordion-icon
                  class="w-6 h-6 rotate-180 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  O jiu jitsu é um esporte muito seguro, e a segurança é um dos
                  princípios básicos da equipe Raphael Paiva. Nossas Regras de
                  conduta, nosso programa de currículo e metodologia, processo
                  de prática e métodos de instrução garantem a segurança em
                  primeiro lugar.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-2">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-2"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-2"
              >
                <span>Quem pode fazer Jiu jitsu?</span>
                <svg
                  data-accordion-icon
                  class="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-2"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-2"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  O nosso jiu jitsu é para todos - independentemente do sexo ou
                  idade. O jiu jitsu brasileiro foi originalmente formulado para
                  uso por pessoas menores e mais fracas, permitindo que eles se
                  defendessem de ataques maiores e mais fortes. Dessa forma, o
                  jiu jitsu é perfeitamente adequado para mulheres, crianças,
                  jovens e idosos. Qualquer pessoa pode e deve participar!
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-3">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5  font-medium text-left text-gray-500 border border-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-3"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-3"
              >
                <span>Eu preciso participar de competições?</span>
                <svg
                  data-accordion-icon
                  class="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-3"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-3"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Não. A grande maioria das pessoas que aprendem e treinam jiu
                  jitsu não competem. É claro, as competições podem ser uma
                  razão para criar objetivos e um grande modo de se desafiar e
                  se testar. Nós encorajamos quem quer que queria competir a
                  fazê-lo, mas não temos nenhuma expectativa ou requisições para
                  tal. Venha aprender, entrar em forma e curtir o esporte. Você
                  sempre pode decidir se quer ou não competir mais tarde.
                </p>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-5">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5  font-medium text-left text-gray-500 border border-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-5"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-5"
              >
                <span>Como é o ambiente de treino?</span>
                <svg
                  data-accordion-icon
                  class="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-5"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-5"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Prezamos muito o ambiente de treinamento, para que o Dojô seja
                  um local onde se possa sentir-se à vontade e ao mesmo tempo
                  respeitar seus limites e o dos seus parceiros de treino. Neste
                  sentido, temos um conjunto de regras de conduta que seguimos
                  para manter o ambiente adequado para todos os praticantes. As
                  Regras de Conduta servem para preparar e cultivar o terreno no
                  qual será construído o jiu jitsu, viabilizando o treinamento.
                  Estas regras existem para que se crie um ambiente harmonioso
                  no dojô durante as aulas. Se cada um fosse fazer o que lhe
                  conviesse, ficaríamos em um clima insuportável no tatame.
                  Logo, este conjunto de normas de convivência e comportamento
                  durante as aulas e também fora delas é imprescincível, pois
                  este é um dos princípios da arte marcial.
                </p>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-4">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 rounded-b-xl  font-medium text-left text-gray-500 border border-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-4"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-4"
              >
                <span>Como e quando eu começo a treinar?</span>
                <svg
                  data-accordion-icon
                  class="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-4"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-4"
            >
              <div class="p-5 border border-b-1 border-t-0 rounded-b-xl border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Hoje mesmo!! Entre em contato com a gente aqui mesmo pelo
                  nosso site, e venha fazer parte da nossa família.
                </p>
              </div>
            </div>
          </div>
          <div className="md:mt-14">
            <div className="flex justify-center items-center md:items-start flex-col w-full md:w-[274px] h-full">
              <p className="text-2xl text-center md:text-left font-rajdhani w-full font-bold leading-10 tracking-tight text-[#1C1F24] mb-[16px]">
                Tem alguma dúvida?
              </p>
              <p className="text-[#6C717B] font-inter leading-5 text-18 tracking-tight mb-4">
                Talvez a resposta esteja aqui.
              </p>
              <p className="text-[#6C717B] font-inter leading-5 text-18 tracking-tight mb-8 md:mb-4">
                Se preferir, entre em contato com a nossa equipe.
              </p>
              <div className="flex md:order-2">
                <a
                  href="https://api.whatsapp.com/send?1=pt_BR&phone=5585982380699"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 border bg-[#25D146] border-[#25D146] text-white focus:ring-4 focus:outline-none font-medium font-inter rounded-xl  
      w-[200px] h-[46px] text-base text-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    class="bi bi-whatsapp"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                  Enviar Mensagem
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter" data-aos="fade-up">
        <div className="newsletter__container">
          <div className="newsletter__container--content">
            <h2>Inscreva-se para mais informações.</h2>
            <p>
              Receba um email com todas as informações necessárias sobre treinos
              e horarios da nossa equipe!
            </p>
            <form action="#">
              <div className="form__content">
                <div className="relative w-full">
                  <div className="form__content--svg_container">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    placeholder="Digite seu email"
                    type="email"
                    id="email"
                    required
                  ></input>
                </div>
                <div>
                  <button type="submit">Inscreva-se</button>
                </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-50 newsletter-form-footer dark:text-gray-300">
                Preocupamo-nos com a proteção dos seus dados.{" "}
                <a
                  href="/home"
                  className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Leia nossa política de privacidade
                </a>
                .
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="carousel-slick" data-aos="fade-up">
        <div className="py-20">
          <div className="carousel-slick--title">
            <p>Roupas e Equipamentos</p>
            <hr></hr>
          </div>
          <Slider />
        </div>
      </section>

      <section className="carousel-slick aos-init m-auto" data-aos="fade-up">
        <div className="carousel-slick--title">
          <p>Nossa Localização</p>
          <hr></hr>
        </div>
        <div className="px-8 md:px-20 pb-10">
          <iframe
            title="google maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5630.4660097554315!2d-38.4896633079575!3d-3.7357264298783557!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c749cfdc496af5%3A0xa45fcfc0959b28b6!2sRaphael%20Paiva%20Doj%C3%B4!5e0!3m2!1spt-BR!2sbr!4v1685360250957!5m2!1spt-BR!2sbr"
            allowfullscreen=""
            loading="lazy"
            class="iframe-content"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <Footer />
    </div>
  );
};
