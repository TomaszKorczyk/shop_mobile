import { animateScroll as scroll } from "react-scroll";
import useScrollToTop from "../utils/hook/useScrollToTop";

export default function ScrollToTop() {
  const [visible] = useScrollToTop();

  if (!visible) {
    return false;
  } else {
    return (
      <div
        className="fixed w-12 h-12 bottom-5 right-5 rounded-full text-black dark:text-white dark:hover:text-gray-800 bg-blue-300 hover:bg-blue-500 dark:bg-yellow-300  flex cursor-pointer opacity-90 hover:opacity-100 transition duration-300 ease-in-out z-40"
        onClick={() => scroll.scrollToTop()}
      >
        <i className="icon fas fa-chevron-up text-2xl flex w-full items-center justify-around animate-up"></i>
      </div>
    );
  }
}
