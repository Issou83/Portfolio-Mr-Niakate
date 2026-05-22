import React, { useEffect } from "react";

const Mouse = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    if (!cursor || window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e) => {
      cursor.classList.add("active");
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    };

    const addHover = () => cursor.classList.add("hovered");
    const removeHover = () => cursor.classList.remove("hovered");

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll(".hover").forEach((link) => {
      link.addEventListener("mouseover", addHover);
      link.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll(".hover").forEach((link) => {
        link.removeEventListener("mouseover", addHover);
        link.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return <span className="cursor"></span>;
};

export default Mouse;
