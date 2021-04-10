import React from "react";
import "./style.css";
import socials from "./social";

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-800 dark:text-white anime bottom-0 ">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 sm:gap-x-20 md:gap-x-0 grid-rows-2 md:grid-rows-none lg:flex lg:justify-around p-4 mt-4">
        <div className="place">
          <h1 className="pb-2">Services</h1>
          <div className="lg:pl-5">
            <p>Metody płatności</p>
            <p>Program partnerski</p>
            <p>Program lojalnościowy</p>
          </div>
        </div>
        <div className="place">
          <h1 className="pb-2">About Us</h1>
          <div className="lg:pl-5">
            <p>O nas</p>
            <p>Praca</p>
            <p>Kariera</p>
            <p>Reklam</p>
          </div>
        </div>
        <div className="place">
          <h1 className="pb-2">Contact</h1>
          <div className="lg:pl-5">
            <p>Napisz do nas</p>
            <p>Biuro Obsługi Klienta</p>
            <p>Dane kontaktowe</p>
          </div>
        </div>
        <div className="place md:ml-5">
          <h1 className="pb-2 ">Social</h1>
          <div>
            {socials.map((social, index) => {
              return (
                <a
                  href={social.path}
                  key={index}
                  rel="noreferrer"
                  target="_blank"
                  className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-2"
                >
                  <i
                    className={`fab fa-${social.icons} py-1 pr-2 lg:text-center`}
                  >
                  </i>
                    <p className="">{social.title}</p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-full pb-5 md:p-5">
        <p className="text-sm text-center">
          Copyright © 2021 TK. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
