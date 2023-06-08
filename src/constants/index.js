import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    css,
    reactjs,
    Epitomizer,
    tailwind,
    nodejs,
    mongodb,
    Moviesta,
    threejs,
    Workoutizer
  } from "../assets";
import ca from "../assets/tech/c++.webp";
import express from "../assets/tech/express.webp";
import next from "../assets/tech/next.webp";
import python from "../assets/tech/python.webp";
import vite from "../assets/tech/vite.webp";
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Coder",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "c++",
      icon: ca,
    },
    {
      name: "express",
      icon: express,
    },
    {
      name: "next",
      icon: next,
    },
    {
      name: "vite",
      icon: vite,
    },
    {
      name: "python",
      icon: python,
    }, 
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
  ];
  
  const projects = [
    {
      name: "Moviesta",
      description:
        "Discover new and popular movies on our website, created using TMDB API. Stay up-to-date with the latest releases, explore trending films, and enjoy a user-friendly interface. Find comprehensive movie information, engage with the community, and elevate your cinematic experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
      ],
      image: Moviesta,
      source_code_link: "https://github.com/",
      website_code_link:"https://moviesta.netlify.app/",
    },
    {
      name: "Epitomizer",
      description:
        "An open-source article summarizer that leverages the power of the OpenAI GPT model to transform lengthy articles into clear and concise summaries.The project aimed to enhance reading efficiency and provide users with quick access to key information within articles.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
      ],
      image: Epitomizer,
      source_code_link: "https://github.com/DarikshaAnsari/Epitomizer",
      website_code_link:"https://epitomizer.netlify.app/"
    },
    {
      name: "Workoutizer",
      description:
        "Web application that allows users to effectively track their gym exercises.Implementing user authentication and authorization features to ensure secure access and protect user information.Designing and implementing components and features for managing workout routines, exercises, and tracking progress",
      tags: [
        {
          name: "mern",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: Workoutizer,
      source_code_link: "https://github.com/DarikshaAnsari/Gym-Buddy",
      website_code_link:"https://workoutizer.netlify.app"
    },
  ];
  
  export { services, technologies, projects };