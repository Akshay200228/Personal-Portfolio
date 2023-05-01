import { Experience, Project } from "@libs/types";

import cryptopad from "@public/images/projects/crypto1.png";
import codeai from "@public/images/projects/codeai.jpg";
import xpense from "@public/images/projects/xpense.png";
import Movix from "@public/images/projects/Movix.png";
// import algorithm from "@public/images/projects/algorithm.png";

export const projects: Project[] = [
  // {
  //   id: 1,
  //   name: "Algorithm Visualizer",
  //   image: algorithm,
  //   deployed_url: "https://algo-viz-drab.vercel.app/",
  //   github_url: "https://github.com/Akshay200228/algo-visualizer",
  //   category: ["react"],
  //   points: [
  //     " • I am a Dev who loves DSA , So why not combine those ? :)",
  //     " • This app shows how algorithm works with cool animation",
  //   ],
  //   key_techs: ["React", "Firebase", "Framer Motion"],
  // },
  {
    id: 1,
    name: "Xpense-tracker",
    image: xpense,
    points: [
      " • The expense tracker feature is a practical tool that can help users manage their personal finances more effectively.",
      " • The website is responsive, meaning it works well on different devices and screen sizes.",
    ],

    deployed_url: "https://xpense-traacker.vercel.app/login",
    github_url: "https://github.com/Akshay200228/xpense-traacker",
    category: ["react"],
    key_techs: ["Vanilla", "Openai API"],
  },
  {
    id: 2,
    name: "Crypto Pad : Crprto currency App",
    points: [
      " • Crypto Pad provides a fundamental analysis of the digital currency market.",
      " • In addition to tracking price, volume, and market capitalization.",
    ],
    image: cryptopad,
    deployed_url: "https://crypto-pad-mauve.vercel.app/",
    github_url: "https://github.com/Akshay200228/cryptoPad",
    category: ["react", "tailwind"],
    key_techs: ["React", "Tailwind", "CoinGecko Api", "Firebase"],
  },


  {
    id: 3,
    name: "Code AI : ChatGPT clone",
    image: codeai,
    points: [
      " • Codeai is a AI-based program that people use for generating dialogues.",
      " • Detailed responses and articulate answers across many domains of knowledge.",
    ],
    
    deployed_url: "https://code-ai-smoky.vercel.app/",
    github_url: "https://github.com/Akshay200228/codeAI",
    category: ["react"],
    key_techs: ["Vanilla", "Openai API"],
  },
  {
    id: 4,
    name: "MovieX",
    image: Movix,

    deployed_url: "https://moviex-pied.vercel.app/",
    github_url: "https://github.com/Akshay200228/moviex",
    category: ["react"],
    points: [
      " • The application is designed for movie enthusiasts and allows users to search for movies by title or keyword.",
      " • The application uses the The Movie Database (TMDb) API for retrieving movie data such as ratings, release dates, and summaries."],
    key_techs: ["React", "SCSS"],
  },
  {
    id: 5,
    name: "Shoppy",

    deployed_url: "https://dashboard-react-seven-wine.vercel.app/",
    github_url: "https://github.com/Akshay200228/dashboard-react-",
    category: ["react"],
    points: [
      " • React Admin Dashboard Application.",
      " • This Admin Panel includes one Dashboard, Three Pages, Four Apps, and Seven fully functional charts!"],
    key_techs: ["React", "Material UI"],
  },
  {
    id: 6,
    name: "Contesta",

    deployed_url: "https://contest2-orpin.vercel.app/",
    github_url: "https://github.com/Akshay200228/contest",
    category: ["Javascript"],
    points: [
      " • In this web app you will get the contest going on different website"],
    key_techs: ["HTML", "Javascript", "Bootstrap"],
  },
  // {
  //   id: 7,
  //   name: "Realtime Chat App",
  //   deployed_url: "https://sumit-chat.netlify.app/",
  //   github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
  //   //TODO type on category
  //   category: ["express", "react"],
  //   points: [
  //     " • Basic Realtime Chat App where one can create a account can talk to each other",
  //     " • working on the version_2 of this project",
  //   ],
  //   key_techs: ["React", "Node", "Express", "Firebase", "Saas"],
  // },
];

export const experiences: Experience[] = [
  {
    company: "Freelancer",
    jobTitle: "Freelance Web Developer",
    timeline: "2022 - Present",
    points: ["Working as a part-time freelancer from my 3rd of college", "Successfully completed 2+ Projects"],
  }
];


