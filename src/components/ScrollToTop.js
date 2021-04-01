import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import { animateScroll as scroll } from "react-scroll";

export default function useScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { y: pageYOffset } = useWindowScroll();

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset]);

  if (!visible) {
    return false;
  }

  return (
    <div
      className="fixed w-12 h-12 bottom-5 right-5 rounded-full bg-blue-300 hover:bg-blue-500 dark:bg-gray-800 flex cursor-pointer opacity-90 hover:opacity-100 transition duration-300 ease-in-out z-40"
      onClick={() => scroll.scrollToTop()}
    >
      <i className="icon fas fa-chevron-up text-2xl text-black dark:text-white flex w-full items-center justify-around animate-up p-2"></i>
    </div>
  );
}
