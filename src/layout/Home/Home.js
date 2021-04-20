import React from "react";
import MyOwlCarousel from "../../components/owlCarousel/MyOwlCarousel";
import Pros from "./Pros/Pros";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <MyOwlCarousel />
      <Pros />
    </div>
  );
}
