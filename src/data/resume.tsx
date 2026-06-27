import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, File} from "lucide-react";

export const DATA = {
  name: "Avinash Bajpai",
  initials: "AB",
  url: "https://avinash-bajpai.vercel.app", // Placeholder until deployment
  location: "Delhi NCR, India",
  locationLink: "https://www.google.com/maps/place/Delhi",
  description:
    "B.Tech Computer Science student at KCCITM (2023 - 2027) & Full-Stack Developer specializing in React, Node.js, Electron.js, and databases.",
  summary:
    "I am Avinash Bajpai, a B.Tech Computer Science student at KCCITM. I specialize in Full-Stack development, creating interactive UIs and solid backends using React, Node.js, Electron.js, and modern databases like Supabase, PostgreSQL, SQL, and Firebase. I have a passion for open-source contributions and building high-performance, utility-driven desktop and web applications.",
  avatarUrl: "/avatar.jpg", // Generic fallback avatar or customized later
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Tailwind CSS",
    "Framer Motion",
    "Node.js",
    "Electron.js",
    "Python",
    "REST APIs",
    "SQL",
    "Supabase",
    "PostgreSQL",
    "Firebase",
    "Git",
    "GitHub",
    "VS Code",
    "Responsive Design",
    "i18next (Multilingual)",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { 
      href: "/resume.pdf", 
      icon: File, 
      label: "Resume",
      target: "_blank",
      rel: "noopener noreferrer"
    }
  ],
  contact: {
    email: "avinashbajpai11764@gmail.com",
    tel: "+91 9532009373",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Avenger11764",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/avinash-bajpai",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:avinashbajpai11764@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  education: [
    {
      school: "KCC Institute of Technology and Management (KCCITM)",
      href: "https://www.kccitm.edu.in/",
      degree: "B.Tech in Computer Science",
      logoUrl: "", // Optional/Blank fallback
      start: "2023",
      end: "2027",
    },
  ],
  experience: [] as any[], // Left empty as per user resume
  projects: [
    {
      title: "Smart Notch",
      href: "https://dynamic-island-windows.vercel.app/",
      dates: "March 2026 - May 2026",
      active: true,
      description:
        "Engineered an interactive, lightweight Windows desktop utility using React and Electron.js, utilizing Framer Motion to build fluid, spring-physics-based UI transitions. Integrated Windows System Media Transport Controls (SMTC) to build a native Spotify controller with a dynamic ambient glow, and low-level system polling to display real-time CPU, RAM, and network telemetry. Configured AppX manifests, managed application sandboxing, and successfully cleared Microsoft's strict runFullTrust capability security audits to deploy the app globally on the Microsoft Store.",
      technologies: [
        "React",
        "Electron.js",
        "Framer Motion",
        "Vite",
        "Tailwind CSS",
        "Node.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://dynamic-island-windows.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Avenger11764",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "MediVault",
      href: "https://medivault-healthcare.vercel.app/",
      dates: "February 2026 - April 2026",
      active: true,
      description:
        "Designed a secure, intelligent digital health wallet aimed at streamlining healthcare management, simplifying patient document workflows, and ensuring unified access to critical medical histories. Engineered a robust architecture integrating healthcare data tracking with dynamic AI-powered summarization to convert dense medical documents into clear, actionable health insights. Implemented structural backend API workflows for secure records management and seamless ABHA ID integration, while crafting an intuitive, responsive frontend interface for rapid patient navigation.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Python",
      ],
      links: [
        {
          type: "Website",
          href: "https://medivault-healthcare.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Avenger11764",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Duo Learning",
      href: "https://duo-learning.vercel.app/",
      dates: "November 2025 - January 2026",
      active: true,
      description:
        "Developed a community-driven ed-tech platform to democratize education and combat student isolation by connecting global learners for real-time, peer-to-peer mentorship and accountability. Engineered a scalable full-stack application using React and Node.js, featuring structured MongoDB schemas to track user study milestones, collaborative room data, and global activity. Built robust RESTful APIs with Express to handle secure authentication and progress synchronization, while utilizing Tailwind CSS to ensure a high-performance, responsive UI across all devices.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://duo-learning.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Avenger11764",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "AlgoPrep",
      href: "https://github.com/Avenger11764/algoprep",
      dates: "2025 - Present",
      active: true,
      description:
        "A comprehensive coding preparation repository focusing on mastering Data Structures, Algorithms (DSA), and problem-solving. Contains clean, optimized implementations of core computer science algorithms and solutions to competitive programming challenges.",
      technologies: [
        "Java",
        "Python",
        "C++",
        "Data Structures",
        "Algorithms",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Avenger11764/algoprep",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  patents: [] as any[], // Left empty
  articles: [] as any[], // Left empty
  certificate: [
    {
      title: "Hacktoberfest 2025: Open Source Contributor",
      dates: "Oct 2025",
      description:
        "Actively participated in Hacktoberfest 2025, making numerous web development contributions to various open-source projects. Utilized Git and GitHub to fork repositories, create branches, submit detailed pull requests, and collaborate with project maintainers on issues.",
      image: "",
      links: [
        {
          title: "Show GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Avenger11764",
        },
        {
          title: "Show Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.holopin.io/hacktoberfest2025/userbadge/cmgp9k8em006clb04tnpfhqse",
        },
      ],
    },
    {
      title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
      dates: "June 2026",
      description:
        "Completed the Generative AI professional learning path, gaining practical insights into Generative AI workflows, Microsoft Copilot, and the principles of Responsible AI.",
      image: "/microsoft-gen-ai-cert.jpg",
      links: [
        {
          title: "Show Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.linkedin.com/learning/certificates/aa049cb7347af6e1017d018312aee5fcfcaa120162290c1c0f5290dd9945c9a0",
        },
      ],
    },
    {
      title: "Auditing Design Systems for Accessibility",
      dates: "June 2026",
      description:
        "Completed course instruction covering accessibility audits, components design systems, and compliance guidelines for digital accessibility.",
      image: "/accessibility-design-cert.jpg",
      links: [
        {
          title: "Show Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://lnkd.in/gXfMBrN9",
        },
      ],
    },
  ],
} as const;
