import { Experience, Project } from "@libs/types";

import cryptopad from "@public/images/projects/crypto1.png";
import DevNexus from "@public/images/projects/DevNexus.png";
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
    name: "DevNexus",
    image: DevNexus,
    points: [
      " • Welcome to DevNexus, your one-stop destination for supercharging your web development projects. Dive into a world of endless possibilities with our curated collection of web application components, code gems, stunning animations, and unique, eye-catching landing pages.",
      " • DevNexus is designed for web developers like you who want to take their projects to new heights. Our powerful features, components, and resources are here to supercharge your web development journey.",
    ],

    deployed_url: "https://dev-nexus.vercel.app/",
    github_url: "https://github.com/Akshay200228/DevNexus",
    category: ["react"],
    key_techs: ["Next js", "Express Js", "REST API", "Tailwind Css", "MongoDB"],
  },
  {
    id: 2,
    name: "Xpense-tracker",
    image: xpense,
    points: [
      " • The expense tracker feature is a practical tool that can help users manage their personal finances more effectively.",
      " • The website is responsive, meaning it works well on different devices and screen sizes.",
    ],

    deployed_url: "https://xpense-traacker.vercel.app/login",
    github_url: "https://github.com/Akshay200228/xpense-traacker",
    category: ["react"],
    key_techs: ["React js", "speechly"],
  },
  {
    id: 3,
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
  //   id: 3,
  //   name: "Code AI : ChatGPT clone",
  //   image: codeai,
  //   points: [
  //     " • Codeai is a AI-based program that people use for generating dialogues.",
  //     " • Detailed responses and articulate answers across many domains of knowledge.",
  //   ],

  //   deployed_url: "https://code-ai-smoky.vercel.app/",
  //   github_url: "https://github.com/Akshay200228/codeAI",
  //   category: ["react"],
  //   key_techs: ["Vanilla", "Openai API"],
  // },
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
    company: "Bot2Do",
    jobTitle: "Software Developer",
    timeline: "March 2023 - Present",
    points: [
      "Played a key role as a senior developer, guiding a team of junior developers and ensuring timely project delivery.",
      "Deployed the Next.js application on Vercel for seamless client verification.",
      "Developed a project using React.js, Express.js, Node.js, and MongoDB to analyze shipment risks with real-time data from LLM.",
      "Built a frontend for Copilot using React.js to visualize and interact with data.",
      "Automated documentation processes for a fasteners manufacturing company using Next.js and Express.js.",
      "Implemented features such as revision history, PDF downloads, and editable tables to streamline operations.",
      "Created a dynamic frontend using React.js, Redux, and Tailwind CSS for various modules including login, registration, and payment gateway.",
      "Integrated APIs to ensure seamless functionality across all frontend pages."
    ],
  },
  {
    company: "Freelancer",
    jobTitle: "Freelance Web Developer",
    timeline: "2022 - Present",
    points: [
      "Worked as a part-time freelancer from my 3rd year of college, balancing academic commitments with professional projects.",
      "Successfully completed 10+ projects, delivering high-quality web solutions to clients across various industries.",
      "Developed responsive and interactive websites using modern technologies such as React.js, Next.js, and Tailwind CSS.",
      "Collaborated with clients to gather requirements, provide technical consultations, and ensure the final product met their needs.",
      "Designed and implemented custom APIs using Node.js and Express.js to enhance website functionality and performance.",
      "Optimized websites for SEO, improving search engine rankings and driving more traffic to client sites.",
      "Integrated third-party services and APIs, such as payment gateways, email services, and social media platforms.",
      "Ensured cross-browser compatibility and mobile responsiveness to provide a seamless user experience across all devices.",
      "Utilized version control systems like Git for efficient project management and collaboration.",
      "Provided ongoing maintenance and support, addressing bugs, implementing new features, and ensuring site security.",
    ],

  },
];
