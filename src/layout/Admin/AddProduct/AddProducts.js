import React, { useState } from "react";
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
    // console.log(productName, productPrice, productImg);
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
    <div className="flex justify-center items-center min-h-screen bg-indigo-500">
      <div className="flex flex-wrap w-10/12">
        <p className="">Hi Admin</p>
        <form
          onSubmit={addProduct}
          autoComplete="off"
          className="bg-yellow-200 flex flex-wrap w-full overflow-hidden "
        >
          <label htmlFor="product-name" className="w-full">
            Product Name
          </label>
          <input
            type="text"
            required
            className="w-full"
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
          />
          <label htmlFor="product-price">Product Price</label>
          <input
            type="number"
            required
            onChange={(e) => setProductPrice(e.target.value)}
            value={productPrice}
          />
          <label htmlFor="product-img">Product Image</label>
          <input type="file" required onChange={productImgHandler} id="file" />
          <button>ADD</button>
        </form>
        {error && <span>{error}</span>}
      </div>
    </div>
  );
}
