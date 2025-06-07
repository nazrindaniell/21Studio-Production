import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * A custom hook that scrolls to the top of the page when the route changes
 */
function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
}

export default useScrollToTop;
