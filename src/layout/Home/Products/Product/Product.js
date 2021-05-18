import React from "react";
import "./product.css";

export const Product = ({ product }) => {
  return (
    <div className="m-2 border border-gray-500 bg-white dark:bg-gray-800 overflow-hidden anime">
      <div className="imgs pt-2">
        <img
          className="flex m-auto p-1 h-full rounded-lg dark:bg-gray-100"
          src={product.ProductImg}
          alt={product.ProductName}
        />
      </div>

      <section className="px-2 pt-1">
        <h4 className="w-full text-center capitalize text-lg text-gray-800 dark:text-white">
          {product.ProductName}
        </h4>
        <h5 className="w-full pr-2 text-right tracking-wide text-gray-700 opacity-70 dark:text-white">
          {product.ProductPrice}.00 zł
        </h5>
        <p className="text-center text-sm dark:text-gray-200 tracking-wider">
          {product.ProductDescription}
        </p>
      </section>

      <div className="flex justify-center py-1">
        <button className="bg-blue-300 dark:hover:text-black dark:bg-yellow-300 rounded-xl cursor-pointer px-4 py-0.5 my-1 focus:outline-none anime">
          Dodaj do koszyka
        </button>
      </div>
    </div>
  );
};

export default Product;
