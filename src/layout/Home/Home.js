import React, { useEffect, useState } from "react";
import MyOwlCarousel from "../../components/owlCarousel/MyOwlCarousel";
import { commerce } from "../../lib/commerce";
import Products from "./Products/Products";

export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <div className="overflow-hidden">
      <MyOwlCarousel />
      <Products products={products} />
    </div>
  );
}
