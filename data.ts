import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "Handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "A daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "Stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Social Activist",
    about:
      "I am a <b>Rotaractor</b>. I was responsible for the web designing of the official website of the <b>Rotaract Club of VITC</b>",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Canva",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Premiere Pro",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Matlab",
    level: "30",
  },
  {
    Icon: BsCircleFill,
    name: "Arduino",
    level: "45",
  },
];

export const projects: IProject[] = [
  { 
    name: "Game Planet",
    description:
      "This online web gaming review system allows an user to view a catalogue of preferred games by gamers and give feedback",
    image_path: "/images/gamePlanet.png",
    deployed_url: "https://www.youtube.com/watch?v=jGbaidGz6j0",
    github_url: "https://github.com/astrodestroyergithub/GamePlanet",
    category: ["mysql"],
    key_techs: ["HTML5", "CSS3", "Javascript", "php", "MySQL"],
  },
  {
    name: "CMS",
    description: "This is an online counselling website with added functionalities to relieve people from their mental trauma",
    image_path: "/images/cms.png",
    deployed_url: "https://www.youtube.com/watch?v=6U2-ZkwB94M",
    github_url: "https://github.com/astrodestroyergithub/CMS",
    category: ["mysql"],
    key_techs: ["HTML5", "CSS3", "Javascript", "php", "MySQL"],
  },

  {
    name: "My Awesome Cart",
    image_path: "/images/myAwesomeCart.png",
    deployed_url: "https://www.google.com",
    github_url: "https://github.com/astrodestroyergithub/MyAwesomeCart",
    category: ["django"],
    description:
      "E-Commerce website made using django framework with additional plugins and functionalities",
    key_techs: [
      "Django",
      "Python",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
  },

  {
    name: "Transact Star",
    image_path: "/images/transactStar.png",
    deployed_url: "https://www.youtube.com/watch?v=qA1tBs3gHOQ",
    github_url: "https://github.com/astrodestroyergithub/TransactStar",
    category: ["c"],
    description:
      "Basic transaction management program which keeps track of the lending and borrowing processes between friends and saves them from getting entangled in debt trap",
    key_techs: ["C", "Shell", "Script"],
  },

  {
    name: "Smart City",
    image_path: "/images/smartCity.png",
    deployed_url: "https://www.youtube.com/watch?v=qmnq67fIQpY",
    github_url: "https://github.com/astrodestroyergithub/Smart-City",
    category: ["arduino"],
    description:
      "A simulation of a typical smart city made using arduino and some important components",
    key_techs: ["Arduino"],
  },

  {
    name: "Text Utils",
    image_path: "/images/textUtils.png",
    deployed_url: "https://www.google.com",
    github_url: "https://github.com/astrodestroyergithub/TextUtils",
    category: ["django"],
    description:
      "This is an online text analyzer for formatting text entered by user made by django framework",
      key_techs: [
        "Django",
        "Python",
        "HTML5",
        "CSS3",
        "Bootstrap",
      ],
  },
  {
    name: "Parallel Chess Engine",
    image_path: "/images/parallelChessEngine.png",
    deployed_url: "https://www.youtube.com/watch?v=rnsW6OrNzKc",
    github_url: "https://github.com/astrodestroyergithub/Parallel-Chess-Engine",
    category: ["python"],
    description:
      'A chess engine made using the Negamax implementation of the MiniMax algorithm, and optimized using Alpha-Beta pruning',
    key_techs: [
      "Python",
      "Jupyter Notebook",
      "Flask",
    ],
  },
  {
    name: "Image Search Engine",
    image_path: "/images/imageSearchEngine.png",
    deployed_url: "https://www.youtube.com/watch?v=rnsW6OrNzKc",
    github_url: "https://github.com/astrodestroyergithub/Image-Search-Engine",
    category: ["python"],
    description:
      'An image search engine made using python GUI, that extracts and stores features from images in database in the form of color correlogram and compares each against that of the query image, to retrieve similar images from the database',
    key_techs: [
      "Python",
      "OpenCV",
      "Tkinter",
    ],
  },
  {
    name: "Game Recommendation System",
    image_path: "/images/gameRecommendationSystem.png",
    deployed_url: "https://www.youtube.com/watch?v=g4he8i43XCY",
    github_url: "https://github.com/astrodestroyergithub/Game-Recommendation-System",
    category: ["r"],
    description: "A recommendation system for video games, which suggests gamers the best fit game for them based upon their choice and gaming-habit",
    key_techs: ["R", "HTML", "CSV", "Rmd"],
  },
];
