import React, { useState } from "react";
import logoCode from "../../../assets/imagens/rapha-logo.png";
import "./Header.scss";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  const burgerMenuContent = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.classList.toggle("mobile-menu--active");
  };
  return (
    <div>
      <header>
        <div className="header__content shadow-2xl">
          <div className="header__logo-container">
            <button
              className="burger-menu"
              onClick={() => {
                setIsOpen(!isOpen);
                burgerMenuContent();
              }}
            >
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100 bg-yellow-100"
                    : "opacity-50 group-hover:opacity-100 bg-yellow-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? "opacity-0"
                    : "opacity-50 group-hover:opacity-100 bg-yellow-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100 bg-yellow-100"
                    : "opacity-50 group-hover:opacity-100  bg-yellow-100"
                }`}
              />
            </button>
            <a href="/" className="header_content--logo">
              <img src={logoCode} alt="rapha-logo" width={50} />
            </a>
          </div>

          <nav>
            <div className="nav-menu mobile-menu">
              <a href="/">Home</a>
              <a href="/sobre">Sobre</a>
              <a href="/nosso-time">Nosso time</a>
            </div>
          </nav>

          <a
            href="https://api.whatsapp.com/send?1=pt_BR&phone=5585982380699"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center justify-center gap-2  bg-green-500 text-white focus:ring-4 focus:outline-none font-medium font-inter rounded-xl  
      w-[190px] h-[38px] text-base text-center mr-3 md:mr-0 hover:bg-green-450"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-whatsapp"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
            Enviar Mensagem
          </a>
        </div>
      </header>
    </div>
  );
};
