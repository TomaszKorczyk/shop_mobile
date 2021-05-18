import React from "react";
import MyOwlCarousel from "../../components/owlCarousel/MyOwlCarousel";
import Products from "./Products/Products";

export default function Home() {
  return (
    <div className="grid grid-cols-1">
      <MyOwlCarousel />
      <Products />
    </div>
  );
}
