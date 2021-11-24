import { cloneElement, useState, useEffect } from "react";

export default function ResponsiveMedia({ breakPoints, children }) {
  const [mediaWidth, setMediaWidth] = useState(0);

  const maxWidth = breakPoints[0],
    minWidth = breakPoints[breakPoints.length - 1];

  useEffect(() => {
    function handleResize() {
      let width = breakPoints[0];

      breakPoints.forEach((breakPoint) => {
        if (window.innerWidth <= breakPoint) {
          width = breakPoint;
        }
      });

      width = Math.max(width, minWidth);

      setMediaWidth(width);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
  });

  return cloneElement(children, { mediaWidth });
}
