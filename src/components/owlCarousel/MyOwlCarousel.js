import React from "react";
import { Cards } from "../owlCarousel/Cards";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "./Owl.css";

const breakPoints = {
  0: {
    items: 1,
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
      margin={50}
      responsive={breakPoints}
    >
      {Cards.map((card, index) => {
        return (
          <div className="item" key={index}>
            <img
              className="max-h-28 md:max-h-40 lg:max-h-52 w-1/2 grid justify-center m-auto"
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
