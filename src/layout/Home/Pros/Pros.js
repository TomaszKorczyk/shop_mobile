import React, { useContext } from "react";
import { ProductsContext } from "../../../store/ProductsContext";
import Pro from "./Pro/Pro";
import Loading from "../../../components/Loading";

export const Pros = () => {
  const { products } = useContext(ProductsContext);

  return (
    <main>
      {products.length !== 0 && (
        <h1 className="flex justify-center font-bold tracking-wider uppercase py-4 text-2xl">
          Products
        </h1>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.length === 0 && <Loading />}
        {products.map((product) => (
          <div className="grid" key={product.ProductID}>
            <Pro product={product} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Pros;
