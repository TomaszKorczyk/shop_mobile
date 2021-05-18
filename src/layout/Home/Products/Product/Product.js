import React from "react";

export const Product = ({ product }) => {
  return (
    <div className="grid m-2 border border-gray-500 bg-white dark:bg-gray-800 overflow-hidden anime">
      <div className="pt-2 mx-4">
        <img
          className="flex p-1 m-auto w-auto h-28 md:h-40 lg:h-48 rounded-lg dark:bg-gray-100"
          src={product.ProductImg}
          alt={product.ProductName}
        />
      </div>

      <section className="px-2 pt-1">
        <p className="w-full text-center capitalize text-base lg:text-lg text-gray-800 dark:text-white">
          {product.ProductName}
        </p>
        <p className="w-full pr-2 text-xs lg:text-base text-right tracking-wide text-gray-700 opacity-70 dark:text-white">
          {product.ProductPrice}.00 zł
        </p>
        <p className="text-center text-xs lg:text-base dark:text-gray-200 tracking-wider">
          {product.ProductDescription}
        </p>
      </section>

      <div className="flex justify-center mb-2 pt-1">
        <button className="bg-blue-300 dark:hover:text-black dark:bg-yellow-300 rounded-xl cursor-pointer px-3 py-1  m-auto text-xs lg:text-base focus:outline-none anime">
          Dodaj do koszyka
        </button>
      </div>
    </div>
  );
};

export default Product;
