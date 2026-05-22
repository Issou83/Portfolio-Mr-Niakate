import React, { useEffect } from "react";

const DynamiqueText = () => {
  useEffect(() => {
    const target = document.getElementById("text-target");
    const words = ["Site vitrine", "DATA", "E-Commerce", "APP Web"];
    let wordIndex = 0;

    const createWord = (animate = true) => {
      if (!target) return;
      target.innerHTML = "";

      const word = document.createElement("span");
      target.appendChild(word);

      if (animate) {
        word.classList.add("word");
      }
      word.textContent = words[wordIndex];
      wordIndex = (wordIndex + 1) % words.length;
    };

    createWord(false);
    const startInterval = setTimeout(() => {
      createWord();
      var interval = setInterval(createWord, 2000);
      target.dataset.interval = interval;
    }, 1200);

    return () => {
      clearTimeout(startInterval);
      if (target?.dataset.interval) {
        clearInterval(Number(target.dataset.interval));
      }
    };
  }, []);

  return (
    <span className="dynamic-text">
      <span>Creation</span>
      <span id="text-target"></span>
    </span>
  );
};

export default DynamiqueText;
