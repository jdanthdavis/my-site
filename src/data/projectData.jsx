import { discordIcon, hookIcon, rlIcon, statsIcon } from "../assets/Index";

export const projectData = [
  {
    name: "Custom Webhook",
    technologyUsed: "JS / Cloudflare Workers",
    desc: "A JavaScript and Cloudflare Workers-based tool that handles over 10,000 requests monthly, with payload routing for more than 100 active users.",
    extra: "",
    img: hookIcon,
    btn: (
      <button
        onClick={() =>
          window.open("https://github.com/jdanthdavis/custom-dink-webhook")
        }
      >
        View Repo
      </button>
    ),
  },
  {
    name: "DinkPlugin",
    technologyUsed: "Java",
    desc: "Integrated total points tracking and tier progress to enhance combat achievement notifications, implemented multi-tier progress display, and expanded unit tests to improve reliability and coverage. Over 20,000 active installs.",
    extra: "Open-Source Contributor",
    img: rlIcon,
    btn: (
      <button
        onClick={() => window.open("https://github.com/pajlads/DinkPlugin")}
      >
        View Repo
      </button>
    ),
  },
  {
    name: "Leaderboard Bot",
    technologyUsed: "JS / Discord.js / Discord",
    desc: "Built with JavaScript and Discord.js, this bot generates a formatted leaderboard using user-submitted data, allowing for seamless tracking and display of rankings within Discord.",
    extra: "",
    img: discordIcon,
    spin: true,
    btn: (
      <button
        onClick={() =>
          window.open("https://github.com/jdanthdavis/watermelon-bot")
        }
      >
        View Repo
      </button>
    ),
  },
  {
    name: "Stat Tracker",
    technologyUsed: "Python / Discord",
    desc: "A Python app for Discord server management, deployed on Heroku, with features like music playback and message tracking.",
    extra: "",
    img: statsIcon,
    btn: (
      <button
        onClick={() =>
          window.open("https://github.com/jdanthdavis/dink-donk-bot")
        }
      >
        View Repo
      </button>
    ),
  },
];
