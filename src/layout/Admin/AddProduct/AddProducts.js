import React, { useState } from "react";
import "./index.css";
import Icon from "./Icon";
import { storage, db } from "../../../config/Config";

export default function AddProducts() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState();
  const [productImg, setProductImg] = useState("");
  const [productDescription, setProductDescription] = useState("");
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
                ProductDescription: productDescription,
              })
              .then(() => {
                setProductName("");
                setProductPrice("");
                setProductImg("");
                setProductDescription("");
                setError("");
                document.getElementById("file").value = "";
              })
              .catch((err) => setError(err.message));
          });
      }
    );
  };

  return (
    <div className="flex justify-center items-center my-5 lg:my-0 lg:h-2/3 dark:text-white anime">
      <div className="flex flex-wrap w-10/12 h-full lg:h-4/6 bg-blue-300 rounded-md dark:bg-gray-800">
        <p className="w-full py-2 flex justify-center items-center border-b border-black dark:border-white border-opacity-50">
          Hi Admin
        </p>
        <form
          onSubmit={addProduct}
          autoComplete="off"
          className="flex flex-wrap w-full m-2 overflow-hidden"
        >
          <div className="flex flex-wrap w-full lg:m-2 lg:grid lg:grid-rows-1 lg:grid-cols-4">
            <label
              htmlFor="product-name"
              className="w-full text-center py-2 lg:text-left"
            >
              Product Name
            </label>
            <input
              type="text"
              required
              className="w-full mx-3 rounded text-center py-1 outline-none lg:mx-0 lg:py-0 lg:my-1 lg:col-span-3 dark:text-black"
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
            />
          </div>
          <div className="flex flex-wrap w-full  lg:m-2 lg:grid lg:grid-rows-1 lg:grid-cols-4">
            <label
              htmlFor="product-price"
              className="w-full text-center py-2 lg:text-left"
            >
              Product Price
            </label>
            <input
              type="number"
              required
              min="0"
              className="w-full mx-3 rounded text-center py-1 outline-none lg:mx-0 lg:py-0 lg:my-1 lg:col-span-3 dark:text-black"
              onChange={(e) => setProductPrice(e.target.value)}
              value={productPrice}
            />
          </div>
          <div className="flex flex-wrap w-full lg:m-2 lg:grid lg:grid-rows-1 lg:grid-cols-4">
            <label
              htmlFor="product-description"
              className="w-full text-center py-2 lg:text-left"
            >
              Product Description
            </label>
            <input
              type="text"
              required
              className="w-full mx-3 rounded text-center py-1 outline-none lg:mx-0 lg:py-0 lg:my-1 lg:col-span-3 dark:text-black"
              onChange={(e) => setProductDescription(e.target.value)}
              value={productDescription}
            />
          </div>
          <div className="flex flex-wrap w-full  lg:m-2 lg:grid lg:grid-rows-1 lg:grid-cols-4">
            <p className="w-full text-center py-2 lg:text-left">
              Product Image
            </p>
            <label
              htmlFor="file"
              className="items-center sm:justify-around lg:justify-center border border-black dark:border-white p-2 mx-3 mb-2 cursor-pointer w-full sm:flex lg:mx-0 lg:py-0 lg:my-1 lg:col-span-3"
            >
              <div className="flex justify-center sm:mx-2">
                <Icon />
              </div>
              <input
                className="input flex w-full sm:w-min sm:block lg:py-3"
                type="file"
                id="file"
                onChange={productImgHandler}
                required
                accept="image/*"
              />
            </label>
          </div>

          <button className="uppercase bg-yellow-700 dark:bg-yellow-500 w-full m-4 p-1 rounded-lg focus:outline-none">
            add
          </button>
        </form>
        {error && (
          <span className="w-full flex justify-center items-center pb-2">
            {error}
          </span>
        )}
      </div>
    </div>
  );
}
