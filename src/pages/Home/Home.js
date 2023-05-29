import React from "react";
import { Header } from "shared/components/Header/Header";
import { Slider } from "../../shared/components/slider/Slider";
import { BannerCarousel } from "shared/components/BannerCarousel/BannerCarousel";
import { initFlowbite } from "flowbite";
import "flowbite";
import "./Home.scss";

export const Home = () => {
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
                  <h2 class="mt-8 mb-6 px-8 text-4xl lg:text-5xl font-bold text-[#FEF102]">
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
                    className="flex items-center justify-center gap-2 border bg-[#25D146] border-[#25D146] text-white focus:ring-4 focus:outline-none font-medium font-inter rounded-xl  
      w-[200px] h-[46px] text-base text-center mr-3 md:mr-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
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

      <section>
        <div className="flex flex-col items-center px-4 md:px-0 md:flex-row md:items-start justify-center gap-6 py-[100px]">
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
              <p className="text-[#6C717B] font-inter leading-5 text-18 tracking-tight mb-4">
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

      <section className="newsletter">
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
                  href="#"
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

      <section className="hidden md:block">
        <di>
          <BannerCarousel />
        </di>
      </section>

      <section className="carousel-slick">
        <div className="py-10">
          <div className="carousel-slick--title">
            <p>Vestuário Casual</p>
            <hr></hr>
          </div>
          <Slider />
        </div>
      </section>

      <footer>
        <div className="footer__container">
          <div className="footer__content">
            <div>
              <h2>Contatos</h2>
              <ul>
                <li className="mb-4">
                  <a
                    href="https://reactjs.org/"
                    className="hover:underline hover:text-yellow-500"
                    target="_blank"
                    rel="noreferrer"
                  >
                    (85)9.8238-0699
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline hover:text-yellow-500"
                    target="_blank"
                    rel="noreferrer"
                  >
                    (85)9.8238-0699
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2>Siga-nos</h2>
              <ul>
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/raphaelpaivajiujitsu/"
                    className="hover:underline hover:text-yellow-500"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/raphaelpaivajiujitsu/"
                    className="hover:underline hover:text-yellow-500"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2>Políticas</h2>
              <ul>
                <li className="mb-4">
                  <a href="#" className="hover:underline hover:text-yellow-500">
                    política de privacidade
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="social-media">
          <span className="text-sm text-gray-300 sm:text-center dark:text-gray-400">
            © 2023.Todos os direitos reservados.
          </span>
          <div className="social-media__container">
            <a>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
