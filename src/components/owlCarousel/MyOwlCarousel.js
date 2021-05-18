import React from "react";
import { Cards } from "../owlCarousel/Cards";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

const breakPoints = {
  0: {
    items: 3,
  },
  600: {
    items: 5,
  },
  1200: {
    items: 5,
  },
};

function MyOwlCarousel() {
  return (
    <OwlCarousel
      className="bg-blue-300 dark:bg-gray-800 dark:border-white border-t py-4 anime"
      loop
      autoplay
      dots={false}
      margin={40}
      responsive={breakPoints}
    >
      {Cards.map((card, index) => {
        return (
          <div className="item" key={index}>
            <img
              className="w-auto h-32 md:h-40 lg:h-48"
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
