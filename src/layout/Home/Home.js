import React, { useEffect, useState } from "react";
import MyOwlCarousel from "../../components/owlCarousel/MyOwlCarousel";
import { commerce } from "../../lib/commerce";

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
      <div className="items-center text-center justify-center m-auto">
        <p className="justify-center items-center">
          Borem ipsum dolor sit amet consectetur adipisicing elit. Rem
          exercitationem, in temporibus inventore ipsa dolores tempora magni?
          Explicabo adipisci quae voluptate, velit repudiandae magnam corrupti
          debitis? Quibusdam, commodi. Esse, quia.
        </p>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          exercitationem, in temporibus inventore ipsa dolores tempora magni?
          Explicabo adipisci quae voluptate, velit repudiandae magnam corrupti
          debitis? Quibusdam, commodi. Esse, quia.
        </p>
        <p className="text-6xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          exercitationem, in temporibus inventore ipsa dolores tempora magni?
          Explicabo adipisci quae voluptate, velit repudiandae magnam corrupti
          debitis? Quibusdam, commodi. Esse, quia.
        </p>
      </div>
    </div>
  );
}
