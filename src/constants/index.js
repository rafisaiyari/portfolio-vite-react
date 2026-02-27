import { path } from "motion/react-client";

export const myProjects = [
  {
    id: 1,
    title: "BloomSentry: An Algal Bloom Prediction System",
    description:
      "A desktop application that predicts harmful algal blooms using machine learning, monitoring through a user-friendly interface.",
    subDescription: [
      "Lead and developed a project for LLDA which is a desktop application to monitor and predict algal bloom occurrences using environmental data.",
      "Trained and integrated a Gradient Boosting Regression Trees (GBRT) model for accurate bloom forecasting.",
      "Designed an intuitive geospatial heatmap for visualization, and real-time model interaction.",
    ],
    href: "https://github.com/rafisaiyari/algal-bloom-prediction-system",
    logo: "",
    image: "/assets/projects/bloomsentry-ss.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "HTML",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "Javascript",
        path: "/assets/logos/javascript.svg",
      },
    ],
  },
  {
    id: 2,
    title: "BuckChat - A Real-time Chat Application",
    description:
      "A secure authentication and authorization system using Auth0 for seamless user management.",
    subDescription: [
      "Integrated Auth0 for authentication, supporting OAuth, JWT, and multi-factor authentication.",
      "Utilized Cloudinary for Media Storage.",
      "Developed a React-based frontend with Tailwind CSS & DaisyUI.",
      "Connected to a secure MongoDB database for user data storage.",
    ],
    href: "https://github.com/rafisaiyari/chatapp",
    logo: "",
    image: "/assets/projects/buckchat-ss.png",
    tags: [
      {
        id: 1,
        name: "Auth0",
        path: "/assets/logos/auth0.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "Express.js",
        path: "/assets/logos/expressjs.svg",
      },
      {
        id: 5,
        name: "Node.js",
        path: "/assets/logos/nodejs.png",
      },
    ],
  },
  {
    id: 3,
    title: "Breast Cancer Classification and Prediction",
    description:
      "A desktop application that classifies and predicts breast cancer outcomes using a Logistic Regression machine learning model through a user-friendly interface.",
    subDescription: [
      "Led and developed a breast cancer classification using clinical diagnostic data.",
      "Trained and integrated a Logistic Regression model to accurately classify tumors as benign or malignant.",
      "Designed an intuitive interface for data input, model prediction, and result visualization in real time.",
    ],
    href: "https://github.com/rafisaiyari/breast-cancer-classifier-and-prediction-ml",
    logo: "",
    image: "/assets/projects/breastcancer-ss.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Jupyter Notebook",
        path: "/assets/logos/jupyter.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Self-Hosted Odoo 19 with reverse proxy and SSL via Nginx",
    description:
      "A fully self-hosted Odoo 19 deployment using Docker, secured with Nginx reverse proxy and SSL, and exposed to the internet via Cloudflare Tunnel to bypass CGNAT limitations.",
    subDescription: [
      "Deployed Odoo 19 in a Dockerized environment with proper container orchestration and persistent volumes.",
      "Configured Nginx as a reverse proxy with SSL termination to ensure secure HTTPS communication.",
      "Integrated Cloudflare Tunnel to securely expose the local server to the public internet without port forwarding or static IP.",
      "Implemented basic security hardening, firewall rules, and environment-based configuration for production readiness."
    ],
    href: "https://github.com/rafisaiyari/odoo-docker",
    logo: "",
    image: "/assets/projects/odoo-19.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Postgres",
        path: "/assets/logos/postgresql.svg",
      },
      {
        id: 3,
        name: "Nginx",
        path: "/assets/logos/nginx.svg",
      },
      {
        id: 4,
        name: "Docker",
        path: "/assets/logos/docker.svg",
      },
      {
        id: 5,
        name: "Cloudflare",
        path: "/assets/logos/cloudflare.svg",
      }
    ],
  },
  {
    id: 5,
    title: "Home Server / Self-Hosting with Debian (Old Laptop Repurposed)",
    description:
      "A self-hosted home server built on Debian using a repurposed laptop, providing centralized media streaming and network-attached storage for local devices.",
    subDescription: [
      "Installed and configured Debian Linux as a lightweight, stable server operating system.",
      "Deployed Jellyfin for self-hosted media streaming with remote and local network access.",
      "Configured Samba to provide cross-platform file sharing and centralized storage across devices.",
      "Optimized power usage, storage management, and network configuration for 24/7 home server reliability."
    ],
    href: "",
    logo: "",
    image: "",
    tags: [
      {
        id: 1,
        name: "Debian",
        path: "/assets/logos/debian.svg",
      },
      {
        id: 2,
        name: "Jellyfin",
        path: "/assets/logos/jellyfin.svg",
      },
      {
        id: 3,
        name: "Samba",
        path: "/assets/logos/samba.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Banking System with Spring Boot",
    description:
      "A secure banking application built with Spring Boot, featuring account management, transactions, and user authentication.",
    subDescription: [
      "Developed a full-stack banking system using Spring Boot with RESTful APIs for core banking operations.",
      "Implemented secure user authentication and authorization using Spring Security with JWT tokens.",
      "Built features for account management, fund transfers, transaction history, and balance inquiries with MySQL database integration.",
    ],
    href: "https://github.com/raf-and-jan/banking-system-spring-boot",
    logo: "",
    image: "/assets/projects/ongoing-ss.png",
    tags: [
      {
        id: 1,
        name: "Spring Boot",
        path: "/assets/logos/springboot.png",
      },
      {
        id: 2,
        name: "Java",
        path: "/assets/logos/java.svg",
      },
      {
        id: 3,
        name: "MySQL",
        path: "/assets/logos/sql.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "Github",
    href: "https://github.com/rafisaiyari",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/mohammad-rafi-saiyari-119867227/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/saiyarirafi",
    icon: "/assets/socials/facebook.svg",
  },
];

export const experiences = [
  {
    title: "First Hello World!",
    job: "First Program(HTML)",
    date: "2015",
    contents: [
      "Wrote my first 'Hello, World!' program in Grade 7, marking the beginning of my journey in software development.",
      "Joined a robotics club in high school, where I learned basic programming concepts and developed a passion for technology.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2024-2025",
    contents: [
      "Developed an Prediction System of Algal Blooms for our client LLDA using Python and machine learning, enhancing environmental monitoring capabilities.",
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    job: "Achieve Without Borders",
    date: "2025-2026",
    contents: [
      "Contributed into the development of modules in various Odoo versions (8, 13, 17, 18, 19) using Python and JavaScript, enhancing the functionality of the ERP system.",
      "Gained experience in deploying Odoo on cloud platforms and configuring reverse proxies for secure access.",
      "Collaborated with a team of developers (both ERP and HRIS teams) to implement new features and optimize existing ones, improving overall system performance.",
      "Developed a MCP Server for GitLab Issues, Merge Requests, and User Statistics using Python and GitLab API, providing valuable insights and automation for project management.",
    ],
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
