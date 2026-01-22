import React from "react";
import Bubble from "./Bubble";
import "./Bubble.scss";

const BubbleGrid = () => {
  const bubbleData = [
    {
      id: 1,
      label: "Gardening",
      emoji: "🪴",
      theme: "gardening",
      size: "large",
    },
    {
      id: 2,
      label: "Photography",
      emoji: "📸",
      theme: "photography",
      size: "medium",
    },
    {
      id: 5,
      label: "Aquascaping",
      emoji: "🐟",
      theme: "aquascaping",
      size: "large",
    },
    { id: 3, label: "Cars", emoji: "🚗", theme: "cars", size: "small" },
    { id: 4, label: "Hockey", emoji: "🏒", theme: "hockey", size: "medium" },
    {
      id: 5,
      label: "Flower Arranging",
      emoji: "💐",
      theme: "flowers",
      size: "small",
    },
    {
      id: 6,
      label: "Carnivorous Plants",
      emoji: "🌱",
      theme: "carnivorous",
      size: "medium",
    },
  ];

  return (
    <div className="bubble-grid">
      {bubbleData.map((bubble) => (
        <Bubble
          key={bubble.id}
          label={bubble.label}
          emoji={bubble.emoji}
          theme={bubble.theme}
          size={bubble.size}
        />
      ))}
    </div>
  );
};

export default BubbleGrid;
