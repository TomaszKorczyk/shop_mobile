import React, { useState } from "react";
import "./index.css";
import Icon from "./Icon";
import { storage, db } from "../../../config/Config";

export default function AddProducts() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productImg, setProductImg] = useState("");
  const [error, setError] = useState("");

  const types = ["image/png", "image/jpeg", "image/jpg"];

  const productImgHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setProductImg(selectedFile);
      setError("");
    } else {
      setProductImg(null);
      setError("Please select a valid image type png or jpeg");
    }
  };

  const addProduct = (e) => {
    e.preventDefault();
    const uploadTask = storage
      .ref(`product-images/${productImg.name}`)
      .put(productImg);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (err) => {
        setError(err.message);
      },
      () => {
        storage
          .ref("product-images")
          .child(productImg.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("Products")
              .add({
                ProductName: productName,
                ProductPrice: Number(productPrice),
                ProductImg: url,
              })
              .then(() => {
                setProductName("");
                setProductPrice(0);
                setProductImg("");
                setError("");
                document.getElementById("file").value = "";
              })
              .catch((err) => setError(err.message));
          });
      }
    );
  };

  return (
    <div className="my-5 py-5 init">
      <div className="flex flex-wrap w-10/12 bg-blue-300 rounded-md my-5">
        <p className="w-full flex justify-center pt-1 border-b border-black border-opacity-50">
          Hi Admin
        </p>
        <form
          onSubmit={addProduct}
          autoComplete="off"
          className="flex flex-wrap w-full overflow-hidden "
        >
          <label htmlFor="product-name" className="w-full text-center py-2">
            Product Name
          </label>
          <input
            type="text"
            required
            className="w-full mx-3 rounded text-center py-1 outline-none"
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
          />
          <label htmlFor="product-price" className="w-full text-center py-2">
            Product Price
          </label>
          <input
            type="number"
            required
            className="w-full mx-3 rounded text-center py-1 outline-none"
            onChange={(e) => setProductPrice(e.target.value)}
            value={productPrice}
          />
          <p className="w-full text-center py-2">Product Image</p>
          <label
            htmlFor="file"
            className="flex items-center text-white justify-center w-full border mx-3 mb-2 cursor-pointer"
          >
            <Icon />
            <input
              className="input"
              type="file"
              id="file"
              onChange={productImgHandler}
              required
              accept="image/*"
            />
          </label>
          <button className="uppercase bg-yellow-700 w-full mx-4 mb-4 p-1 rounded-lg outline-none">
            add
          </button>
        </form>
        {error && (
          <span className="w-full flex justify-center pb-2">{error}</span>
        )}
      </div>
    </div>
  );
}
