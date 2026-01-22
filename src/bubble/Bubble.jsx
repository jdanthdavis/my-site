import React from "react";
import "./Bubble.scss";

const Bubble = ({ label, emoji, theme, size = "medium" }) => {
  const handleClick = () => {
    const searchQuery = encodeURIComponent(label);
    window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank");
  };

  return (
    <div
      className={`bubble bubble-${size} bubble-${theme}`}
      onClick={handleClick}
    >
      <div className="bubble-content">
        <span className="bubble-emoji">{emoji}</span>
        <p className="bubble-label">{label}</p>
      </div>
    </div>
  );
};

export default Bubble;
