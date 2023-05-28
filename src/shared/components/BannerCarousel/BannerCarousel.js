import React from "react";
import Carousel from "react-elastic-carousel";

import cliente1 from "../../../assets/imagens/cliente-moises.jpeg";
import cliente2 from "../../../assets/imagens/cliente-vicente.png";
import cliente3 from "../../../assets/imagens/cliente-eriko.png";
import cliente4 from "../../../assets/imagens/cliente-rafa.png";
import cliente5 from "../../../assets/imagens/cliente-buza.png";

import "./BannerCarousel.scss";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 4 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
  { width: 1400, itemsToShow: 4 },
];

export const BannerCarousel = () => {
  return (
    <div className="banner-carousel">
      <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={1900}>
        <div class="flex flex-col items-center cursor-pointer mx-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={cliente1}
            alt=""
          />
          <div class="flex flex-col w-full h-32 justify-start p-4 leading-normal">
            <h5 class="text-lg font-bold tracking-tight text-[#313131] dark:text-white">
              Moisés Guilherme de Oliveira
            </h5>
            <p class="overflow-hidden text-gray-500 dark:text-gray-400">
              "Gostei muito! O Dojo é limpo, organizado e o professor sempre
              preocupado com o bem estar dos alunos e muito cuidadoso com os
              novatos que chegam."
            </p>
          </div>
        </div>

        <div class="flex flex-col items-center cursor-pointer mx-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={cliente2}
            alt=""
          />
          <div class="flex flex-col w-full h-32 justify-start p-4 leading-normal">
            <h5 class="text-lg font-bold tracking-tight text-[#313131] dark:text-white">
              Vicente Paiva
            </h5>
            <p class="overflow-hidden text-gray-500 dark:text-gray-400">
              "Local limpo e organizado, excelente para toda a família praticar
              o esporte. Professor competente e atencioso."
            </p>
          </div>
        </div>

        <div class="flex flex-col items-center cursor-pointer mx-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={cliente3}
            alt=""
          />
          <div class="flex flex-col w-full h-32 justify-start p-4 leading-normal">
            <h5 class="text-lg font-bold tracking-tight text-[#313131] dark:text-white">
              Eriko Gentil
            </h5>
            <p class="overflow-hidden text-gray-500 dark:text-gray-400">
              "Lugar maravilhoso, sempre limpo e organizado, com pessoas
              incríveis. Local ideal para quem quer aprender essa arte suave."
            </p>
          </div>
        </div>

        <div class="flex flex-col items-center cursor-pointer mx-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={cliente4}
            alt=""
          />
          <div class="flex flex-col w-full h-32 justify-start p-4 leading-normal">
            <h5 class="text-lg font-bold tracking-tight text-[#313131] dark:text-white">
              Rafaella Siqueira
            </h5>
            <p class="overflow-hidden text-gray-500 dark:text-gray-400">
              "Local super agradável, familiar, pessoas acolhedoras, parceiras,
              tanto o mestre como as crianças e os adultos. Mestre firme e
              carinhoso com as crianças, super atencioso. "
            </p>
          </div>
        </div>

        <div class="flex flex-col items-center cursor-pointer mx-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={cliente5}
            alt=""
          />
          <div class="flex flex-col w-full h-32 justify-start p-4 leading-normal">
            <h5 class="text-lg font-bold tracking-tight text-[#313131] dark:text-white">
              Buzar Filho
            </h5>
            <p class="overflow-hidden text-gray-500 dark:text-gray-400">
              "O Dojo possui uma excelente qualidade em todos os sentidos.
              Espaço limpo e bem cuidado que proporciona aos alunos
              tranquilidade na prática do esporte."
            </p>
          </div>
        </div>

        <div class="flex flex-col items-center cursor-pointer mx-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={cliente1}
            alt=""
          />
          <div class="flex flex-col w-full h-32 justify-start p-4 leading-normal">
            <h5 class="text-lg font-bold tracking-tight text-[#313131] dark:text-white">
              Moisés Guilherme de Oliveira
            </h5>
            <p class="overflow-hidden text-gray-500 dark:text-gray-400">
              "Gostei muito! O Dojo é limpo, organizado e o professor sempre
              preocupado com o bem estar dos alunos e muito cuidadoso com os
              novatos que chegam."
            </p>
          </div>
        </div>

        <div class="flex flex-col items-center cursor-pointer mx-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={cliente2}
            alt=""
          />
          <div class="flex flex-col w-full h-32 justify-start p-4 leading-normal">
            <h5 class="text-lg font-bold tracking-tight text-[#313131] dark:text-white">
              Vicente Paiva
            </h5>
            <p class="overflow-hidden text-gray-500 dark:text-gray-400">
              "Local limpo e organizado, excelente para toda a família praticar
              o esporte. Professor competente e atencioso."
            </p>
          </div>
        </div>

        <div class="flex flex-col items-center cursor-pointer mx-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={cliente3}
            alt=""
          />
          <div class="flex flex-col w-full h-32 justify-start p-4 leading-normal">
            <h5 class="text-lg font-bold tracking-tight text-[#313131] dark:text-white">
              Eriko Gentil
            </h5>
            <p class="overflow-hidden text-gray-500 dark:text-gray-400">
              "Lugar maravilhoso, sempre limpo e organizado, com pessoas
              incríveis. Local ideal para quem quer aprender essa arte suave."
            </p>
          </div>
        </div>

        <div class="flex flex-col items-center cursor-pointer mx-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={cliente4}
            alt=""
          />
          <div class="flex flex-col w-full h-32 justify-start p-4 leading-normal">
            <h5 class="text-lg font-bold tracking-tight text-[#313131] dark:text-white">
              Rafaella Siqueira
            </h5>
            <p class="overflow-hidden text-gray-500 dark:text-gray-400">
              "Local super agradável, familiar, pessoas acolhedoras, parceiras,
              tanto o mestre como as crianças e os adultos. Mestre firme e
              carinhoso com as crianças, super atencioso. "
            </p>
          </div>
        </div>

        <div class="flex flex-col items-center cursor-pointer mx-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={cliente5}
            alt=""
          />
          <div class="flex flex-col w-full h-32 justify-start p-4 leading-normal">
            <h5 class="text-lg font-bold tracking-tight text-[#313131] dark:text-white">
              Buzar Filho
            </h5>
            <p class="overflow-hidden text-gray-500 dark:text-gray-400">
              "O Dojo possui uma excelente qualidade em todos os sentidos.
              Espaço limpo e bem cuidado que proporciona aos alunos
              tranquilidade na prática do esporte."
            </p>
          </div>
        </div>

        <div class="flex flex-col items-center cursor-pointer mx-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={cliente1}
            alt=""
          />
          <div class="flex flex-col w-full h-32 justify-start p-4 leading-normal">
            <h5 class="text-lg font-bold tracking-tight text-[#313131] dark:text-white">
              Moisés Guilherme de Oliveira
            </h5>
            <p class="overflow-hidden text-gray-500 dark:text-gray-400">
              "Gostei muito! O Dojo é limpo, organizado e o professor sempre
              preocupado com o bem estar dos alunos e muito cuidadoso com os
              novatos que chegam."
            </p>
          </div>
        </div>

        <div class="flex flex-col items-center cursor-pointer mx-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={cliente2}
            alt=""
          />
          <div class="flex flex-col w-full h-32 justify-start p-4 leading-normal">
            <h5 class="text-lg font-bold tracking-tight text-[#313131] dark:text-white">
              Vicente Paiva
            </h5>
            <p class="overflow-hidden text-gray-500 dark:text-gray-400">
              "Local limpo e organizado, excelente para toda a família praticar
              o esporte. Professor competente e atencioso."
            </p>
          </div>
        </div>

        <div class="flex flex-col items-center cursor-pointer mx-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={cliente3}
            alt=""
          />
          <div class="flex flex-col w-full h-32 justify-start p-4 leading-normal">
            <h5 class="text-lg font-bold tracking-tight text-[#313131] dark:text-white">
              Eriko Gentil
            </h5>
            <p class="overflow-hidden text-gray-500 dark:text-gray-400">
              "Lugar maravilhoso, sempre limpo e organizado, com pessoas
              incríveis. Local ideal para quem quer aprender essa arte suave."
            </p>
          </div>
        </div>

        <div class="flex flex-col items-center cursor-pointer mx-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={cliente4}
            alt=""
          />
          <div class="flex flex-col w-full h-32 justify-start p-4 leading-normal">
            <h5 class="text-lg font-bold tracking-tight text-[#313131] dark:text-white">
              Rafaella Siqueira
            </h5>
            <p class="overflow-hidden text-gray-500 dark:text-gray-400">
              "Local super agradável, familiar, pessoas acolhedoras, parceiras,
              tanto o mestre como as crianças e os adultos. Mestre firme e
              carinhoso com as crianças, super atencioso. "
            </p>
          </div>
        </div>

        <div class="flex flex-col items-center cursor-pointer mx-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={cliente5}
            alt=""
          />
          <div class="flex flex-col w-full h-32 justify-start p-4 leading-normal">
            <h5 class="text-lg font-bold tracking-tight text-[#313131] dark:text-white">
              Buzar Filho
            </h5>
            <p class="overflow-hidden text-gray-500 dark:text-gray-400">
              "O Dojo possui uma excelente qualidade em todos os sentidos.
              Espaço limpo e bem cuidado que proporciona aos alunos
              tranquilidade na prática do esporte."
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
