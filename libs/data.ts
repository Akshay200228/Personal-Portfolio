import { Experience, Project } from "@libs/types";

import cryptopad from "@public/images/projects/crypto1.png";
import youTube from "@public/images/projects/exp.jpg";
import codeai from "@public/images/projects/codeai.jpg";

export const projects: Project[] = [
  {
    id: 1,
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
  // {
  //   id: 2,
  //   name: "Algorithm Visualizer",
  //   image: algorithm,
  //   deployed_url: "https://visual-algorithm.web.app/",
  //   github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
  //   category: ["react"],
  //   points: [
  //     " • I am a Dev who loves DSA , So why not combine those ? :)",
  //     " • This app shows how algorithm works with cool animation",
  //   ],
  //   key_techs: ["React", "Firebase", "Framer Motion"],
  // },

  {
    id: 2,
    name: "Expense Tracker : Voice Powered React App",
    image: youTube,
    deployed_url: "https://expense-tracker-e296bd.netlify.app/",
    github_url: "https://github.com/Akshay200228/expense-tracker",
    category: ["react"],
    points: [
      " • This is a Complex Expense Budget Tracker Application using React, speechly.",
      " • It helps the users to keep track of th income expenses and its has a voice feature through which you can input the budget with basic command.",
    ],

    key_techs: ["React", "Speechly", "Material UI", "Context API"],
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
      id: 5,
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


