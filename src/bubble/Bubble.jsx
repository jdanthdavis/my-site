import React from "react";
import "./Bubble.scss";

const Bubble = ({ label, emoji, size = "medium", theme }) => {
  const handleClick = () => {
    const searchQuery = encodeURIComponent(label);
    window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank");
  };
  const isImage = /\.(png|jpe?g|svg|webp)$/i.test(emoji);

  return (
    <div
      className={`bubble bubble-${size} bubble-${theme} is-image-${isImage}`}
      onClick={isImage ? null : handleClick}
    >
      <div className="bubble-content">
        {isImage ? (
          <img src={emoji} alt={label} className="bubble-emoji-img" />
        ) : (
          <span className="bubble-emoji">{emoji}</span>
        )}
        <p className="bubble-label">{label}</p>
      </div>
    </div>
  );
};

export default Bubble;
