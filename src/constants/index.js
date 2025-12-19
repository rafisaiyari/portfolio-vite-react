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
    ],
  },
  {
    id: 4,
    title: "Discord Schedule Bot",
    description:
      "An automated Discord bot that manages scheduling, reminders, and event notifications for server communities.",
    subDescription: [
      "Developed a Discord bot using discord.py to automate scheduling and event management for server members.",
      "Implemented features for creating reminders, recurring events, and timezone-aware notifications.",
      "Integrated database storage for persistent schedule data and user preferences across server restarts.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/discord-ss.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Discord",
        path: "/assets/logos/discord.svg",
      },
      {
        id: 3,
        name: "MySQL",
        path: "/assets/logos/sql.svg",
      },
    ],
  },
  {
    id: 5,
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
      "Wrote my first 'Hello, World!' program in Grade 7, marking the beginning of my journey in software development."
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2024-Present",
    contents: [
      "Developed an Prediction System of Algal Blooms for our client LLDA using Python and machine learning, enhancing environmental monitoring capabilities.",
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
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
