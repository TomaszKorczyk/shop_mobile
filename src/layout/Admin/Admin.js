import React from "react";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div className="w-full lg:h-2/3 flex flex-wrap sm:h-full anime">
      <div className="grid w-full h-12 justify-center border-t bg-blue-300 dark:bg-gray-800 dark:text-white lg:flex lg:h-16 lg:justify-start lg:pl-5 anime">
        <p className="flex text-2xl font-bold items-center">Admin</p>
      </div>
      <div className="flex flex-wrap w-full px-2 sm:h-2/3 md:flex-nowrap dark:text-white">
        <div className="flex w-full justify-center border-b border-yellow-500 dark:border-yellow-600 py-2 sm:items-center md:border-b-0 md:border-r">
          <Link to="/addproducts" className="grid cursor-pointer">
            <i className="fas fa-shopping-cart flex w-full justify-center"></i>
            <p className="grid pt-1 w-full">Dodaj product</p>
          </Link>
        </div>
        <div className="flex w-full justify-center py-2 sm:items-center">
          <Link to="/login" className="grid cursor-pointer">
            <i className="fas fa-user flex w-full justify-center mt-2"></i>
            <p className="grid pt-1 w-full">Zaloguj</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
