import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Learn Nest`;
  }, [title]);

  return null;
};
