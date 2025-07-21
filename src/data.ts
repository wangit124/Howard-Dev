// ABOUT
export const PERSONAL_SKILLS = [
  "Typescript",
  "Javascript",
  "Python",
  "React.js",
  "React Native",
  "Next.js",
  "Node.js",
  "Ruby",
  "Ruby on Rails",
  "GraphQL",
  "HTML",
  "CSS",
  "Java",
  "Django",
  "Swift",
  "AWS",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
];
export const PERSONAL_LINKS = {
  LINKEDIN: "https://www.linkedin.com/in/hwangprof",
  GITHUB: "https://github.com/wangit124",
};
export const PERSONAL_EMAIL = "luhao.wang2016@gmail.com";

// CAREER
export const CAREER_ROLES = [
  {
    company: "Scale AI",
    logo: "/career/scaleai.png",
    role: "Software Engineer, Gen AI",
    start: "Jan 2025",
    end: "Current",
    achievements: [
      `IPS – AI Analytics Dashboard (0 → 1)\nLeading a team of 4 engineers and architecting an AI-powered analytics dashboard from scratch for a government client, including frontend, API server, database, and text-to-SQL RAG infra.`,
      `IPS – Building Permits AI App\nDelivered advanced HTML Canvas features (measure mode, point-to-point snapping, orthogonal lines, undo/clear) for a construction AI app. Enabled the team to meet the demo deadline and secure the client contract.`,
      `Hackathon – MCP Server Refactor Tool\nBuilt an MCP tool that parses figma designs and auto-refactors UI code for best practices, including file structure and performance patterns. Accelerated frontend dev workflows by almost 10x.`,
      `Growth – Referrals Platform (100 → 25k Active Users)\nLed end-to-end dev of expert referrals platform for RLHF data projects. Scaled platform from 100 to 25k active users and 36k referrals. Built referral link data models, api endpoints and JWT encryption. Built a new referral links management dashboard and a new expedited onboarding flow with project skills screenings. Owned all frontend architecture and led component implementation. Landed largest company-wide activation rate lift in 12+ months - weekly project activation 5x’ed (2% → 10%) and onboarding conversions 2x’ed (25% → 50%).`,
      `Growth – Internal Referral Payout Update Tool\nShipped referral payout automation self-serve tool for operators, saving the team 500+ dev hours annually.`,
      `Skills:\nTypescript, Javascript, React, Next.js, Python, Django, MongoDB, PostgreSQL`,
    ],
  },
  {
    company: "Kajabi",
    logo: "/career/kajabi.png",
    role: "Senior Software Engineer",
    start: "July 2022",
    end: "Dec 2024",
    achievements: [
      `Spearheaded rebuild of company's core new customer onboarding flow, leading to +25% new paid subs w/w.`,
      `Led team of 4 to build the company's first customer CRM app now used by C-suite execs throughout the org.`,
      `Acted as speed-lead for the team, spearheading engineering process changes to accelerate project delivery speed.`,
      `Led large-scale migration of experimentation infrastructure from Optimizely to Eppo, saving $75K / year in costs.`,
      `Led post-acquisition development of Vibely Communities x Kajabi (AKA Kajabi Communities) - including cross-system SSO authentication, self-serve community migration (SQS and Lambda), and full web app rebranding which involved rewriting 100+ frontend components to use Kajabi’s design system.`,
      `Scaled the Kajabi Communities product to nearly 2M+ MAU, earning the company over $4.4M in revenue and powering over $440 million GMV to date for customers.`,
      `Conducted 20+ interviews over 4 months, resulting in 4 key hires (2 mid-level, 1 junior-level, 1 associate-level).`,
      `Rebuilt team’s documentation hub, contributing 40+ guides on web dev, mobile dev, backend dev, code reviews, deployment, architecture and on-call processes.`,
      `Skills:\nTypescript, Javascript, React, React Native, Node.js, GraphQL, Ruby on Rails, PostgreSQL, AWS`,
    ],
  },
  {
    company: "Vibely",
    logo: "/career/vibely.png",
    role: "Co-Founder & Tech Lead",
    start: "Jul 2019",
    end: "Jul 2022",
    achievements: [
      `Tech lead on a 2 eng team that I helped scale to 8 engs as the company grew to $1M ARR in just a couple years.`,
      `Built Vibely Communities web and mobile products from 0 => 1. Architected entire frontend, backend and infra from scratch.`,
      `Built authentication, onboarding, real time chats, challenges & meetups, user profile, community search & discovery, push, in-app & email notifications and 50+ more features.`,
      `Drove performance improvement efforts to heavily improve UX via postgres indexing, frontend caching with Apollo, list virtualization, memoization, code splitting, lazy loading, migrating to SVG images, data pagination and FCP + TTI optimizations. Reduced page load times by 40%, and sped up component render time by 60%.`,
      `Led high risk & large-scale DB and infra migrations that enabled up to 1M+ concurrent real-time users.`,
      `Led large frontend refactors and rewrites that touched the entire codebase. Was the go-to frontend expert on React and React Native.`,
      `Took active part in making product and architectural decisions that determined the direction of the product and company as a whole.`,
      `Skills:\nTypescript, Javascript, React, React Native, Node.js, GraphQL, PostgreSQL, AWS`,
    ],
  },
  {
    company: "ServiceNow",
    logo: "/career/servicenow.png",
    role: "Quality Engineer Intern",
    start: "Jun 2020",
    end: "Sept 2020",
    achievements: [
      `Worked on QE performance team's beta tool Jmeter Now - an automated testing tool used by 90+ engineers. Used Docker and Jenkins to containerize and automate deployment of the Node.js server, cutting dev setup time by 3x and enabling widespread adoption into CI / CD pipelines.`,
      `Was the frontend expert on a team of 4 interns - revamped a legacy Javascript scripting tool used by 20+ teams org-wide by implementing IDE features from scratch such as autocomplete and syntax highlighting.`,
      `Skills:\nJava, Javascript, React, JUnit, Docker, Jenkins`,
    ],
  },
  {
    company: "UCSD",
    logo: "/career/ucsd.png",
    role: "Machine Learning Researcher",
    start: "Jan 2020",
    end: "Apr 2020",
    achievements: [
      `Led a team of 2 at UCSD's radiology lab. Trained a popular open-source CNN (U-Net) to generate T2 maps (muscle relaxation heat maps) from MRI scans, accelerating detection for fatal heart conditions such as myocardial edema.`,
      `Skills:\nPython, TensorFlow, MatLab`,
    ],
  },
];

// PROJECTS
export const PROJECTS = [
  {
    thumbnail: "/projects/thumbnails/genui.gif",
    name: "Gen UI - Design to Code",
    description:
      "Developer companion app that transform your figma designs into production-ready UI code with just a few clicks!",
    code: "https://github.com/wangit124/GenUI",
    video: "/projects/videos/genui.mp4",
    live: "https://gen-ui-teal.vercel.app",
    aspectRatio: "aspect-[15/8]",
    skills: [
      "Next.js",
      "Node.js",
      "Typescript",
      "TailwindCSS",
      "RadixUI",
      "Zustand",
      "Supabase",
      "Figma",
      "Claude",
    ],
  },
  {
    thumbnail: "/projects/thumbnails/ieeeqp.gif",
    name: "IEEE Quarterly Projects Website",
    description:
      "Home for IEEE Quarterly Projects Competitions, where 2k+ students apply quarterly and compete to make the best hardware and software projects! Winners get internship opportunities at sponsor companies. Hosted quarterly in September, January, and March!",
    code: "https://github.com/wangit124/IEEE-Quarterly-Projects",
    video: "/projects/videos/ieeeqp.mp4",
    skills: ["Django", "Python", "HTML", "Javascript", "CSS", "PostgreSQL"],
  },
  {
    thumbnail: "/projects/thumbnails/easytour.png",
    name: "Easy Tour - AI Trip Planner",
    description:
      "LA Hacks 2019 Submission - Trip planner that creates tour routes based on your mood. Pick a color mood for your next trip and the app will recommend places based on that mood. Created using Node.js, HTML, CSS, Javascript.",
    code: "https://github.com/wangit124/Easy-Tour",
    aspectRatio: "aspect-[16/10]",
    skills: ["Node.js", "HTML", "Javascript", "CSS"],
  },
  {
    thumbnail: "/projects/thumbnails/devbot.png",
    name: "DevBot - Voice Activated Coding Assistant",
    description:
      "SD Hacks 2022 Submission - An alexa-integrated developer's assistant that generates boilerplate code on your voice command! I created this server-side rendered app from scratch over a 2 day hackathon using Node.js, HTML, CSS, Javascript, Amazon Alexa Skills, Jovo Framework and Firebase.",
    code: "https://github.com/wangit124/DevBot-Coding-Assistant",
    skills: [
      "Node.js",
      "Alexa Skills Kit",
      "Firebase",
      "HTML",
      "CSS",
      "Javascript",
    ],
  },
  {
    thumbnail: "/projects/thumbnails/hackeye.gif",
    name: "Hackeye - Social app for Hardware Engineers",
    description:
      "The social media app for Hardware developers that points you to the nearest hardware-inspired projects for collaboration! I built this iOS app from scratch using Swift, Objective C and SwiftUI.",
    code: "https://github.com/wangit124/Hackeye-Mobile",
    video: "/projects/videos/hackeye.mp4",
    mobile: true,
    skills: ["Swift", "SwiftUI", "Objective-C"],
  },
  {
    thumbnail: "/projects/thumbnails/pipe.png",
    name: "Pi for Parkinsons",
    description:
      "Introducing PiPE, an assistive anti-tremor spoon for patients of Parkinson's disease.",
    code: "https://github.com/wangit124/Pi-for-Parkinsons",
    aspectRatio: "aspect-[16/11]",
    skills: ["Python", "Javascript", "HTML", "CSS", "PHP"],
  },
  {
    thumbnail: "/projects/thumbnails/hackernews.gif",
    name: "Hackernews",
    description:
      "Built a live Hackernews newsfeed with user authentication, and voting features created with React-native and GraphQL. Runs on Android and iOS mobile devices!",
    code: "https://github.com/wangit124/Hackernews",
    video: "/projects/videos/hackernews.mp4",
    mobile: true,
    skills: ["Swift", "SwiftUI", "Objective-C"],
  },
  {
    thumbnail: "/projects/thumbnails/foodie.gif",
    name: "Foodie",
    description:
      "Awarded Best Design at 2020 CodePath iOS Development Competition. The ultimate dating app for foodies! Get matched with fellow foodies and meetup to bond over great food! I led a team of 4 to build the app from scratch using Swift and Objective C.",
    code: "https://github.com/Tinder-for-Boba/Foodie-Social-App",
    mobile: true,
    skills: ["Swift", "Objective-C"],
  },
  {
    thumbnail: "/projects/thumbnails/twitterclone.gif",
    name: "Twitter Clone",
    description: "Twitter app to view, compose, favorite, and retweet tweets.",
    code: "https://github.com/wangit124/Twitter-Clone",
    mobile: true,
    aspectRatio: "aspect-[9/18]",
    skills: ["Swift", "Objective-C"],
  },
  {
    thumbnail: "/projects/thumbnails/flixclone.gif",
    name: "Flix Clone",
    description: "Flixster Movie app for all your favorite films!",
    code: "https://github.com/wangit124/Flix-Clone",
    mobile: true,
    aspectRatio: "aspect-[9/10]",
    skills: ["Swift", "Objective-C"],
  },
  {
    thumbnail: "/projects/thumbnails/parstagram.gif",
    name: "Instagram Clone",
    description: "An Instagram-like app for all your favorite photos!",
    code: "https://github.com/wangit124/Parstagram",
    mobile: true,
    skills: ["Swift", "Objective-C"],
  },
  {
    thumbnail: "/projects/thumbnails/tipcalculator.gif",
    name: "Tip Calculator",
    description: "Your very own handy tip calculator, called Quick Tip!",
    code: "https://github.com/wangit124/Tip-Calculator",
    mobile: true,
    skills: ["Swift", "Objective-C"],
  },
  {
    thumbnail: "/projects/thumbnails/smartfin.png",
    name: "Smartfin - Embedded Surfboard Fin",
    description:
      "A hardware-embedded surfboard fin that helps oceanographers collect data on the behaviour of waves.",
    code: "https://github.com/wangit124/Smartfin",
    skills: ["Python"],
  },
  {
    thumbnail: "/projects/thumbnails/connect4.png",
    name: "Connect 4",
    description:
      "Full stack connect4 game with Java/JavaFx front end GUI (JDK 8 Required)",
    code: "https://github.com/wangit124/Connect-4",
    aspectRatio: "aspect-[16/11]",
    skills: ["Java"],
  },
];
