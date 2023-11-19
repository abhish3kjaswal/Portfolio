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
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React Js Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  // {
  //   title: "NodeJs Developer",
  //   icon: backend,
  // },
  {
    title: "Javascript Developer",
    icon: creator,
  },
  {
    title: "Redux Toolkit",
    icon: web,
  },
  {
    title: "Redux",
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
  // {
  //   name: "Next JS",
  //   icon: nextJs,
  // },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Angular",
  //   icon: angular,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Java",
  //   icon: java,
  // },
  // {
  //   name: "MySQL",
  //   icon: mysql,
  // },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Systems Engineer C1",
    company_name: "Tata Consultancy Services",
    company_website: "https://www.tcs.com/",
    icon: null,
    iconBg: "#E6DEDD",
    date: "May 2023 - Nov 2023",
    points: [
      "In the role of a Frontend React JS developer at Government E-marketplace, I tackled intricate challenges, swiftly adapted to modifications, and elevated my project proficiency.",
"Enhanced project with React, Redux toolkit, Jest, Material UI, showcasing strong problem-solving in ReactJS"

    ],
  },
  {
    title: "Software Engineer L1",
    company_name: "BidonHomes dot com",
    company_website: "https://www.bidonhomes.com/",
    // icon: newgen,
    icon: null,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - May 2023",
    points: [
      "Leveraged ReactJS and Redux to maintain and optimize live applications, showcasing adaptability, active learning, and creative troubleshooting skills for peak performance",
      "Spearheaded the development of a feature-rich CRM in ReactJS, driving a 40-50% productivity boost and optimizing Google Maps API integration by 60-70%",
      "Collaborated effectively, fostering a culture of problem-solving and creativity while enhancing data visualization for agents and sellers"
    ],
  },
  {
    title: "Associate Consultant",
    company_name: "Bristlecone",
    company_website: "https://www.bristlecone.com/",
    icon: skillrisers,
    iconBg: "#E6DEDD",
    date: "Aug 2020 - Sept 2021",
    points: [
      "Drove Oracle Integration Cloud projects by enhancing PayPal and SugarCRM adapters with Java, SOAP, REST APIs, Docker, and React.js for future endeavors."
    ],
  },
];

const projects = [
  {
    name: "Aptihealth Web",
    description:
      "Revolutionizing mental healthcare in New York State with a user-friendly platform for personalized therapy and progress tracking. Provides the digital gateway to comprehensive behavioral healthcare.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthWeb,
    hosted_link: "https://www.aptihealth.com/",
  },
  {
    name: "Aptihealth App",
    description:
      "Access top-notch mental healthcare anytime, anywhere in New York State with our innovative app. Track your progress, schedule appointments, and connect with expert therapists for personalized care.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "sendbird",
        color: "green-text-gradient",
      },
      {
        name: "twilio",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthApp,
    hosted_link: "https://apps.apple.com/us/app/aptihealth/id1477170874",
  },
  {
    name: "Zeal Web",
    description:
      "The Zeal website elevates the experience of enjoying activities with trusted friends, fostering connections and making every interaction exciting.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb,
    hosted_link: "https://getzeal.co/",
  },
  {
    name: "Zeal App",
    description:
      "Discover a world of activities with friends through Zeal, an engaging platform. Create events, post updates, chat, and enjoy in-person activities hassle-free. Boost your social life with Zeal!",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "sendgrid",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: zealApp,
    hosted_link:
      "https://apps.apple.com/us/app/zeal-activities-with-friends/id6446917140",
  },
  {
    name: "Roll Web",
    description:
      "The Roll website is the gateway to the future of decentralized communities and digital assets. It allows users to seamlessly earn, redeem, send, and trade social tokens.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "formik",
        color: "pink-text-gradient",
      },
    ],
    image: rollWeb,
    hosted_link: "https://app.tryroll.com/",
  },
  {
    name: "Roll App",
    description:
      "Join the future of decentralized communities and digital assets with Roll. Earn, redeem, send, and trade social tokens on this innovative platform. Experience transparent transactions and captivating UI design.",
    tags: [
      {
        name: "react-native-web",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "storybook",
        color: "pink-text-gradient",
      },
    ],
    image: rollApp,
    hosted_link:
      "https://play.google.com/store/apps/details?id=com.roll&hl=en_GB",
  },
];

const personalInfo = {
  name: "Abhishek",
  fullName: "Abhishek Jaswal",
  email: "abhishek.jaswal.1999@gmail.com",
  role: "Software Developer",
  about: `I'm a skilled software developer with experience in JavaScript and expertise in frameworks like React.Js,
  Redux etc. I'm a quick learner and collaborate closely with clients to
  create efficient, scalable, and user-friendly solutions that solve
  real-world problems. Let's work together to bring your ideas to life!`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. 
  // Each project is briefly described with
  // live demos.
   It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1vmiPiCLaCuqM0uuDcXQlAd8pY8yBDEOU/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/shridharrai/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/shridharrai",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
