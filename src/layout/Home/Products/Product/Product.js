import React from "react";
import "./style.css";

export const Product = ({ product }) => {
  return (
    <main>
      <div className="grid media">
        <div className="img bg-no-repeat bg-cover bg-center block"></div>
        {/* <img src={product.media.source} alt={product.name} /> */}
      </div>
      <section>
        <div>
          <h1>{product.name}</h1>
          <h1>{product.price.formatted} zł</h1>
        </div>
        <div>
          <h2>{product.description}</h2>
        </div>
      </section>
      <div>
        <i className="fab fa-facebook"></i>
      </div>
    </main>
  );
};

export default Product;
