"use client";

import { useEffect } from "react";
import "./style.css";

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        document.getElementById("scroll-to-top").style.display = "block";
      } else {
        document.getElementById("scroll-to-top").style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      id="scroll-to-top"
      className="scroll-array"
      onClick={handleScrollToTop}
    ></button>
  );
};

export default ScrollToTopButton;
