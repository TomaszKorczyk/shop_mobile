import React from "react";
import "./style.css";

export const Pro = ({ product }) => {
  return (
    <div className="mb-2 border border-gray-500 bg-white dark:bg-gray-800  overflow-hidden anime">
      <div>
        <div className="relative flex justify-center imgs mt-1">
          <img
            className="absolute h-full top-0 object-contain shadow-lg rounded-lg"
            src={product.ProductImg}
            alt={product.ProductName}
          />
        </div>
      </div>
      <section className="px-2 pt-1">
        <h4 className="w-full text-center capitalize text-lg text-gray-800 dark:text-white">
          {product.ProductName}
        </h4>
        <h5 className="w-full pr-2 text-right tracking-wide text-gray-700 opacity-70 dark:text-white">
          {product.ProductPrice}.00 zł
        </h5>
        <p className="text-justify text-sm dark:text-gray-200 tracking-wider">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          expedita.
        </p>
      </section>
      <div className="flex justify-center py-1">
        <button className="bg-blue-300 dark:hover:text-black dark:bg-yellow-300 rounded-xl cursor-pointer px-4 py-0.5 my-1 focus:outline-none anime">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Pro;
