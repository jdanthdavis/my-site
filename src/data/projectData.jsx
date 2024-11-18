import {
  discordIcon,
  hookIcon,
  rlIcon,
  statsIcon,
  jdPitcherIcon,
  theLeviathan,
} from '../assets/Index';

export const projectData = [
  {
    name: 'Custom Webhook',
    technologyUsed: 'JS / Cloudflare Workers',
    desc: 'A JavaScript and Cloudflare Workers-based tool that handles over 10,000 requests monthly, with payload routing for more than 100 active users.',
    extra: '',
    img: hookIcon,
    spin: true,
    btn: (
      <button
        onClick={() =>
          window.open('https://github.com/jdanthdavis/custom-dink-webhook')
        }
      >
        View Repo
      </button>
    ),
  },
  {
    name: 'DinkPlugin',
    technologyUsed: 'Java',
    desc: 'Integrated total points tracking and tier progress to enhance combat achievement notifications, implemented multi-tier progress display, and expanded unit tests to improve reliability and coverage.',
    extra: 'Open-Source Contributor',
    img: rlIcon,
    btn: (
      <button
        onClick={() => window.open('https://github.com/pajlads/DinkPlugin')}
      >
        View Repo
      </button>
    ),
  },
  {
    name: 'Leaderboard Bot',
    technologyUsed: 'JS / Discord.js / Discord',
    desc: 'Built with JavaScript and Discord.js, this bot generates a formatted leaderboard using user-submitted data, allowing for seamless tracking and display of rankings within Discord.',
    extra: '',
    img: discordIcon,
    btn: (
      <button
        onClick={() =>
          window.open('https://github.com/jdanthdavis/discord-stats-tracker')
        }
      >
        View Repo
      </button>
    ),
  },
  {
    name: 'Stat Tracker',
    technologyUsed: 'Python / Discord',
    desc: 'A Python app for Discord server management, deployed on Heroku, with features like music playback and message tracking.',
    extra: '',
    img: statsIcon,
    btn: (
      <button
        onClick={() => window.open('https://github.com/pajlads/DinkPlugin')}
      >
        View Repo
      </button>
    ),
  },
  {
    name: 'JD Pitchers',
    technologyUsed: 'MERN Stack',
    desc: 'A MERN application for managing hobby collections, featuring CRUD functionalities, admin login, responsive and dynamic UI, smooth client-server communication with Axios, and AWS S3 functionality for secure image storage and retrieval.',
    extra: 'WIP',
    img: jdPitcherIcon,
    btn: (
      <button onClick={() => window.open('https://jdpitchers.netlify.app')}>
        View Site
      </button>
    ),
  },
  {
    name: 'Leviathan Projectiles',
    technologyUsed: 'Java',
    desc: "Alters in-game projectiles by allowing users to customize the various styles, replacing the default projectiles based on the selected configuration. Added to RuneLite's Plugin Hub with over 140,000 active players.",
    extra: 'Maintainer / Open-Source Contributor',
    img: theLeviathan,
    btn: [
      <button
        key="btn1"
        className="btn-primary"
        onClick={() =>
          window.open('https://github.com/jdanthdavis/leviathan-Projectiles')
        }
      >
        View Repo
      </button>,
      <button
        key="btn2"
        className="btn-secondary"
        onClick={() => window.open('https://github.com/runelite')}
      >
        Learn About RuneLite
      </button>,
    ],
  },
];
