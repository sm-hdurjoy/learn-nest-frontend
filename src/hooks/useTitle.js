// Lirary Imports
import { useEffect } from "react";

export const useTitle = (title) => {
  // useEffect to upadte the tab title
  useEffect(() => {
    document.title = `${title} - Learn Nest`;
  }, [title]);

  return null;
};
