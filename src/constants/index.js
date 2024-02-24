import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
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
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Web Developer",
      company_name: "Comet Beauty",
      icon: meta,
      iconBg: "#383E56",
      date: "July 2023 - Present",
      points: [
        "Design, build, and launch an interactive full-stack website for a beauty salon with 2000+ customers, engaging customer traffic and appointment management.",
        "Leverage JavaScript, React, Bootstrap, and CSS to create an intuitive, responsive user interface",
        "Establish RESTful APIs with Node.js for efficient communication between the front and back end, leveraging MongoDB for data storage",
        "Implement an online booking system, appointment reminder system, and support for multiple languages.",
        "Integration of diverse REST/SOAP APIs to seamlessly weave functionalities like Google sign-in, social media logins, and payment gateways into the website.",
        "Integration of diverse REST/SOAP APIs to seamlessly weave functionalities like Google sign-in, social media logins, and payment gateways into the website.",
      ],
    },
    {
      title: "Java Full Stack Developer",
      company_name: "Comet Beauty",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Nov 2023 - Jan 2024",
      points: [
        "Designed and developed a comprehensive internal full-stack web application for users to manage members.",
        "Implemented RESTful API via Spring MVC to handle user requests.",
        "Utilized Hibernate to map Java classes to MySQL data types. Integrated JpaRepository for seamless CRUD operations.",
        "Developed a dynamic and user-friendly frontend using Thymelea.",
        "Deployed the Apache Tomcat web service on AWS Elastic Beanstalk.",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Amazon Robotics",
      icon: meta,
      iconBg: "#383E56",
      date: "July 2022 - Dec 2022",
      points: [
        "Designed and implemented a UI-centric web application to allow users to create, update, and retrieve ETL job definitions and utilized an internal library to validate SQL syntax.",
        "Designed and built a user-friendly front-end using Amazon’s internal React-based platform Vantage.",
        "Utilized CloudFormation to deploy backend infrastructure.",
        "Utilized API Gateway and Lambda functions to process requests in the backend and store ETL job definitions data in DynamoDB.",
        "Simplified and automated previous manual ETL job setup into a centralized application and reduced the setup time from 4 hours to less than 1 hour",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };