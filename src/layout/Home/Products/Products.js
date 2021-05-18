import React, { useContext } from "react";
import { ProductsContext } from "../../../store/ProductsContext";
import Product from "./Product/Product";
import Loading from "../../../components/Loading";

export const Products = () => {
  const { products } = useContext(ProductsContext);

  return (
    <section className="py-2">
      {products.length !== 0 && (
        <h1 className="block text-center font-bold tracking-wider uppercase text-2xl">
          Products
        </h1>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.length === 0 && <Loading />}
        {products.map((product) => (
          <div className="grid" key={product.ProductID}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
