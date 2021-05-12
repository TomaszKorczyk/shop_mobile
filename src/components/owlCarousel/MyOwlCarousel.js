import React from "react";
import { Cards } from "../owlCarousel/Cards";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "./Owl.css";

const breakPoints = {
  0: {
    items: 3,
  },
  600: {
    items: 3,
  },
  1200: {
    items: 5,
  },
};

function MyOwlCarousel() {
  return (
    <OwlCarousel
      className="owl-theme dark:bg-gray-800 anime border-t dark:border-white"
      loop
      autoplay
      center
      dots
      margin={40}
      responsive={breakPoints}
    >
      {Cards.map((card, index) => {
        return (
          <div className="item" key={index}>
            <img
              className="img w-1/2 grid justify-center m-auto"
              src={card.img}
              alt={card.title}
            />
          </div>
        );
      })}
    </OwlCarousel>
  );
}
export default MyOwlCarousel;