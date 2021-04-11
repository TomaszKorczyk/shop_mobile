import React from "react";
import Product from "./Product/Product";

export const Products = ({ products }) => {
  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="grid">
            <Product product={product} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Products;
