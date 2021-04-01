import React from "react";
import { Card } from "./Card";
import "react-responsive-carousel-v2/dist/carousel.css";
import { Carousel } from "react-responsive-carousel-v2";

export default function MyCarousel() {
  return (
    <Carousel>
      {Card.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.img} alt={item.title} />
          </div>
        );
      })}
    </Carousel>
  );
}
