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
                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100 bg-gray-50"
                    : "opacity-50 group-hover:opacity-100 bg-gray-50"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? "opacity-0"
                    : "opacity-50 group-hover:opacity-100 bg-gray-50"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100 bg-gray-50"
                    : "opacity-50 group-hover:opacity-100  bg-gray-50"
                }`}
              />
            </button>
            <a href="#" className="header_content--logo">
              <img src={logoCode} alt="rapha-logo" width={50} />
            </a>
          </div>

          <nav>
            <div className="nav-menu mobile-menu">
              <a href="#">Home</a>
              <a href="#">Sobre</a>
              <a href="#">Nosso time</a>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};
