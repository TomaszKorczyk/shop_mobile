import React from "react";
import { Card } from "./Card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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
