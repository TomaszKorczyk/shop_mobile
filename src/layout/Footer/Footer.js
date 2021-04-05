import React from "react";
import "./style.css";
import socials from "./social";

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-800 dark:text-white anime bottom-0 ">
      <div className="grid grid-cols-2 grid-rows-2 p-4 mt-4">
        <div className="place">
          <h1 className="pb-2">About Us</h1>
          <p>Lorem </p>
        </div>
        <div className="place">
          <h1 className="pb-2">Services</h1>
          <p>Lorem, ipsum dolor.</p>
        </div>

        <div className="place">
          <h1 className="pb-2">Contact</h1>
          <a>Napisz do nas!</a>
        </div>
        <div className="place">
          <h1 className="pb-2">Social</h1>
          <div>
            {socials.map((social, index) => {
              return (
                <a
                  href={social.path}
                  key={index}
                  rel="noreferrer"
                  target="_blank"
                >
                  <i
                    className={`fab fa-${social.icons} py-1 pr-2 grid grid-cols-4 text-center`}
                  >
                    <p className="grid col-auto">{social.title}</p>
                  </i>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
