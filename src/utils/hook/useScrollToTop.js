import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

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

  return [visible];
}
