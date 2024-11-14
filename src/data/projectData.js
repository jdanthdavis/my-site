import {
  discordIcon,
  hookIcon,
  rlIcon,
  statsIcon,
  jdPitcherIcon,
} from '../assets/Index';

export const projectData = [
  {
    name: 'Custom Webhook',
    technologyUsed: 'JS / Cloudflare Workers',
    link: 'https://github.com/jdanthdavis/custom-dink-webhook',
    desc: 'A JavaScript and Cloudflare Workers-based tool that handles over 10,000 requests monthly, with payload routing for more than 100 active users.',
    extra: '',
    img: hookIcon,
    spin: true,
  },
  {
    name: 'DinkPlugin',
    technologyUsed: 'Java',
    link: 'https://github.com/pajlads/DinkPlugin',
    desc: 'Integrated total points tracking and tier progress to enhance combat achievement notifications, implemented multi-tier progress display, and expanded unit tests to improve reliability and coverage.',
    extra: 'Open-Source Contributor',
    img: rlIcon,
  },
  {
    name: 'Leaderboard Bot',
    technologyUsed: 'JS / Discord.js / Discord',
    link: 'https://github.com/jdanthdavis/discord-stats-tracker',
    desc: 'Built with JavaScript and Discord.js, this bot generates a formatted leaderboard using user-submitted data, allowing for seamless tracking and display of rankings within Discord.',
    extra: '',
    img: discordIcon,
  },
  {
    name: 'Stat Tracker',
    technologyUsed: 'Python / Discord',
    link: 'https://github.com/pajlads/DinkPlugin',
    desc: 'A Python app for Discord server management, deployed on Heroku, with features like music playback and message tracking.',
    extra: '',
    img: statsIcon,
  },
  {
    name: 'JD Pitchers',
    technologyUsed: 'MERN Stack',
    link: 'https://jdpitchers.netlify.app',
    desc: 'A MERN application for managing hobby collections, featuring CRUD functionalities, admin login, responsive and dynamic UI, smooth client-server communication with Axios, and AWS S3 functionality for secure image storage and retrieval.',
    extra: 'WIP',
    img: jdPitcherIcon,
  },
];
