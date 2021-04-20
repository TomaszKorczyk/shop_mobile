import React from "react";
import "./style.css";

export const Pro = ({ product }) => {
  return (
    <div className="m-1 border border-black rounded-md overflow-hidden">
      <div className="relative flex justify-center imgs">
        <img
          className="absolute h-full top-0 object-contain shadow-lg rounded-lg bg-white"
          src={product.ProductImg}
          alt={product.ProductName}
        />
      </div>
      <section className="p-3">
        <h4 className="w-full text-center font-semibold tracking-wider text-gray-800">
          " {product.ProductName} "
        </h4>
        <h5 className="w-full text-right tracking-wide text-gray-700">
          {product.ProductPrice}.00 zł
        </h5>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          expedita.
        </p>
      </section>
      <button className="flex w-full text-center justify-center items-center m-3 bg-red-400 rounded-xl cursor-pointer">
        Add to cart
      </button>
    </div>
  );
};

export default Pro;
