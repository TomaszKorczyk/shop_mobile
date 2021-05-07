import React from "react";
import MyOwlCarousel from "../../components/owlCarousel/MyOwlCarousel";
// import Test from "../Navbar/Test";
import Pros from "./Pros/Pros";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <MyOwlCarousel />
      {/* <Test /> */}
      <Pros />
    </div>
  );
}
