// Library imports
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation(); // current url path

  // useEffect hook to scroll to top when the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top
  }, [pathname]);

  return null;
};
