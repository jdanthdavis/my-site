import {
  reactIcon,
  jsIcon,
  nodeIcon,
  azureIcon,
  mongoIcon,
  apiIcon,
  awsIcon,
  tsIcon,
} from "../assets/Index";

const sizes = ["medium", "large"];

export const skillCategories = [
  { id: "about", label: "About", isText: true },
  { id: "technical", label: "Technical Skills" },
  { id: "interests", label: "Interests & Hobbies" },
];

export const interestBubbles = [
  {
    id: 1,
    label: "Gardening",
    emoji: "🪴",
    theme: "gardening",
    size: sizes[Math.floor(Math.random() * sizes.length)],
  },
  {
    id: 2,
    label: "Photography",
    emoji: "📸",
    theme: "photography",
    size: sizes[Math.floor(Math.random() * sizes.length)],
  },
  {
    id: 5,
    label: "Aquascaping",
    emoji: "🐟",
    theme: "aquascaping",
    size: sizes[Math.floor(Math.random() * sizes.length)],
  },
  {
    id: 3,
    label: "Cars",
    emoji: "🚗",
    theme: "cars",
    size: sizes[Math.floor(Math.random() * sizes.length)],
  },
  {
    id: 4,
    label: "Hockey",
    emoji: "🏒",
    theme: "hockey",
    size: sizes[Math.floor(Math.random() * sizes.length)],
  },
  {
    id: 5,
    label: "Flower Arranging",
    emoji: "💐",
    theme: "flowers",
    size: sizes[Math.floor(Math.random() * sizes.length)],
  },
  {
    id: 6,
    label: "Carnivorous Plants",
    emoji: "🌱",
    theme: "carnivorous",
    size: sizes[Math.floor(Math.random() * sizes.length)],
  },
];

export const skillsBubbles = [
  {
    id: "react",
    label: "React",
    emoji: reactIcon,
    size: sizes[Math.floor(Math.random() * sizes.length)],
    theme: "react",
    category: "technical",
  },
  {
    id: "javascript",
    label: "JavaScript",
    emoji: jsIcon,
    size: sizes[Math.floor(Math.random() * sizes.length)],
    theme: "js",
    category: "technical",
  },
  {
    id: "node",
    label: "Node.js",
    emoji: nodeIcon,
    size: sizes[Math.floor(Math.random() * sizes.length)],
    theme: "node",
    category: "technical",
  },
  {
    id: "mongodb",
    label: "MongoDB",
    emoji: mongoIcon,
    size: sizes[Math.floor(Math.random() * sizes.length)],
    theme: "mongo",
    category: "technical",
  },
  {
    id: "aws",
    label: "Amazon Web Services",
    emoji: awsIcon,
    size: sizes[Math.floor(Math.random() * sizes.length)],
    theme: "aws",
    category: "technical",
  },
  {
    id: "azure",
    label: "Microsoft Azure",
    emoji: azureIcon,
    size: sizes[Math.floor(Math.random() * sizes.length)],
    theme: "azure",
    category: "technical",
  },
  {
    id: "api",
    label: "RESTful APIs",
    emoji: apiIcon,
    size: sizes[Math.floor(Math.random() * sizes.length)],
    theme: "api",
    category: "technical",
  },
  {
    id: "typescript",
    label: "TypeScript",
    emoji: tsIcon,
    size: sizes[Math.floor(Math.random() * sizes.length)],
    theme: "typescript",
    category: "technical",
  },
];

export const AboutText = () => (
  <>
    My name is <span className="highlights">Justin Davis</span> and I'm a
    <span className="highlights"> Solutions Engineer</span>. Originally, I was a
    software engineer with a focus on the{" "}
    <span className="highlights">front-end</span>. Over time, I discovered my
    passion for being <span className="highlights">the bridge </span>
    between technology and business needs.
  </>
);
