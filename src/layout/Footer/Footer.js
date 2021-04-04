import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-800 dark:text-white anime bottom-0 ">
      <div className="flex justify-around">
        <div>
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <h1>Services</h1>
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div>
          <h1>Social</h1>
          <p>Lorem, ipsum.</p>
          {/* <i className="fas fa-twitter text-pink-800">cos</i> */}
        </div>
      </div>
    </footer>
  );
}
