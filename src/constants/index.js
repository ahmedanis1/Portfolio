
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  thunder2,
  MercedesBenzLogo,
  fabimage,
  wanclouds,
  softoo,
  netorc,
  vpc,
  next,
  python,
} from '../assets'





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
    title: "Full-stack AI application",
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
    title: "Ui UX Designer",
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
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
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
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Working Student – Frontend Developer",
    company_name: "Mercedes-Benz",
    icon: MercedesBenzLogo,
    iconBg: "#1A1A1A",
    date: "Apr 2024 - Apr 2025",
    points: [
      "Built a real-time diagnostics dashboard using React and TypeScript, reducing fault detection time by 20%.",
      "Integrated RAG using FAISS and ChromaDB, improving ticket classification accuracy by 25%.",
      "Optimized API payloads and component lifecycles to halve data retrieval time (4s → 2s).",
      "Collaborated with backend, QA, and design teams to deliver aligned features on time.",
      "Ensured accessibility compliance (WCAG 2.1) using axe-core and semantic HTML refactoring.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "SOFTOO (Pvt.) Ltd.",
    icon: softoo,
    iconBg: "#292C34",
    date: "May 2022 - Apr 2024",
    points: [
      "Led frontend development for Thunder, an energy platform built with Next.js and TypeScript.",
      "Built scalable component libraries and dashboards with D3.js, reducing page load time by 25%.",
      "Created a schema-driven form engine, cutting custom rollout time in half.",
      "Integrated Mapbox and D3.js for real-time geo-visualizations, improving engagement by 20%.",
      "Mentored junior devs and enforced linting and CI checks for better code quality and team efficiency.",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Wanclouds Inc",
    icon: wanclouds,
    iconBg: "#1F2937",
    date: "Mar 2019 - May 2022",
    points: [
      "Developed dashboards for VPC+, a cloud migration and disaster recovery platform.",
      "Built interfaces to monitor spend and compliance across AWS, GCP, and IBM Cloud.",
      "Reduced migration errors by 25% through better UI feedback in SQL and Kubernetes workflows.",
      "Improved frontend security and Lighthouse performance, achieving 90+ scores.",
      "Collaborated with DevOps to improve frontend test coverage and reduce bugs by 35%.",
    ],
  },
]


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ahmad proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ahmad does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Ahmad optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects =[
  {
    name: "Predictive Maintenance LLM Platform",
    description:
        "A full-stack AI system designed for predictive maintenance, featuring data cleaning automation, a RAG-based LLM backend, a conversational React.js frontend, and custom data analysis pipelines. The platform streamlines industrial insights by combining ML preprocessing with intelligent, real-time outputs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "llm",
        color: "pink-text-gradient",
      },
      {
        name: "faiss",
        color: "white-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
    ],
    image: MercedesBenzLogo,
    source_code_link: "https://github.com/",
  },
    {
    name: "FAB ERP System",
    description:
        "FAB ERP is an enterprise-grade application to manage frequency allocation workflows with dynamic JSON forms, automated multi-role processes, document generation, and real-time tracking via Mapbox. It streamlines departmental approvals and frequency licensing operations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "white-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mapbox",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
    ],
    image: fabimage,
      source_code_link: "https://www.youtube.com/watch?v=RggjTea785U&ab_channel=ahmedanis35",
  },
  {
    name: "Thunder Energy Platform",
    description:
        "Thunder is a real-time energy management and analytics platform for telecom infrastructure, featuring live monitoring, predictive ML insights, automated actions, and dynamic visualization dashboards for reducing OPEX and carbon footprint.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "white-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "d3.js",
        color: "green-text-gradient",
      },
      {
        name: "Mapbox",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
    ],
    image: thunder2,
    source_code_link: "https://thunderenergy.ai", // not GitHub, but the demo link
  },
  {
    name: "VPC+",
    description:
        "VPC+ is a SaaS platform delivering end-to-end orchestration for multi-cloud migrations, disaster recovery, and cost optimization as a service. It offers resource discovery, infrastructure visualization, spending & compliance tracking, and secure, automated backups, all through a simple and intuitive UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "kubernetes",
        color: "green-text-gradient",
      },
      {
        name: "multi-cloud",
        color: "white-text-gradient",
      },
      {
        name: "cloud-migration",
        color: "pink-text-gradient",
      },
      {
        name: "disaster-recovery",
        color: "green-text-gradient",
      },
      {
        name: "cost-optimization",
        color: "blue-text-gradient",
      },
    ],
    image: vpc, // replace with your imported image variable
    source_code_link: "https://www.wanclouds.net/vpc+" // replace with your actual demo URL
  },
  {
    name: "NetOrc",
    description:
        "NetOrc is a multi-cloud inter-networking orchestration and monitoring platform supporting IBM Cloud, Microsoft Azure, and AWS, featuring secure VPN monitoring, device health checks, alerting, and centralized dashboard for efficient network management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "rest-api",
        color: "green-text-gradient",
      },
      {
        name: "snmp",
        color: "pink-text-gradient",
      },
      {
        name: "multi-cloud",
        color: "white-text-gradient",
      },
      {
        name: "monitoring",
        color: "green-text-gradient",
      },
    ],
    image: netorc,
    source_code_link: "https://netorc.wanclouds.net/"
  }
];

export { services, technologies, experiences, testimonials, projects };
