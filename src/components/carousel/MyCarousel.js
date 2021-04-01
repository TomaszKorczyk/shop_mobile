import React from "react";
import { Card } from "./Card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";

export default function MyCarousel() {
  return (
    <div className="flex">
      <Carousel
        className="bg-green-700 w-full "
        autoPlay
        infiniteLoop
        stopOnHover
        // selectedItem={4}
        centerMode
        centerSlidePercentage={20}
        // showIndicators={false}
        showThumbs={false}
        showStatus={false}
        // showArrows={false}
        // dynamicHeight={true}
      >
        {Card.map((item, index) => {
          return (
            <div className="" key={index}>
              <img className="py-2 bg-black" src={item.img} alt={item.title} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
