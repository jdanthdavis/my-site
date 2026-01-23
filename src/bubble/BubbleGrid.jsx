import Bubble from "./Bubble";
import "./Bubble.scss";

const BubbleGrid = ({ data }) => {
  return (
    <div className="bubble-grid">
      {data?.map((bubble) => (
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
