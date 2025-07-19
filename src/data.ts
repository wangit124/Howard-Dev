// ABOUT
export const PERSONAL_SKILLS = [
  "Typescript",
  "Python",
  "React.js",
  "React Native",
  "Javascript",
  "PostgreSQL",
  "MySQL",
  "Ruby",
  "GraphQL",
  "HTML",
  "CSS",
  "AWS",
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
    logo: "/scaleai.png",
    role: "Software Engineer, Gen AI",
    start: "Jan 2025",
    end: "Current",
    achievements: [
      `International Public Sector - pioneering industry-leading fullstack AI software solutions for pub sec. Currently leading a 0 => 1 product building an AI Analytics Dashboard for government customers (architecting infra, backend and frontend from scratch). Previous worked on another project related to building permits - built multiple frontend features for a first-of-its-kind AI-backed app used in construction industry - including a HTML Canvas measuring and drawing feature with measure mode + move mode, point to point line snapping, orthogonal line mode (hold shift), and undo + clear drawing features.`,
      `Hackathon - Built an MCP server tool that refactors UI code to follow repo best practices - performance best-practices (ex: memoization, state management with zustand, caching with react query, lazy loading, etc...), component splitting best practices (smaller component files) and maintains near-perfect file / folder structure.`,
      `Growth - led the e2e development of Platform and Project referrals for labeling experts working on RLHF data training projects. Scaled to 20k active users and 36k referrals created.
      Labeling experts share referral links to their ML projects for a paid incentive while referred users get expedited onboarding and are screened for project-specific qualifications.
      Built the frontends for the expedited onboarding with project skills screening tracks and a new referral links management dashboard.
      Implemented performance improvements via db indexing, backend caching and frontend caching with react query.
      This was THE biggest project activation rate win in over a year. It drove weekly project activation rates up 5x from 2% to 10% and onboarding conversion rates up by 2x from 25% => 50%.
      Built a new feature for a popular company internal tool. The tool automates referral payout rate updates and saved the team 500 hours worth of dev manual scripting work per year.`,
    ],
  },
  {
    company: "Kajabi",
    logo: "/kajabi.png",
    role: "Senior Software Engineer",
    start: "July 2022",
    end: "Dec 2024",
    achievements: [
      `Led key phases in the development of Kajabi Communities v1 and v2 - post-acquisition integration phases of Vibely Communities x Kajabi. This was a year long initiative that required massive planning, large scale data migrations, full frontend rebranding, smart eng resourcing and stakeholder alignment. Since its inception, the product has reached nearly 2M+ MAU, powering over $440 million GMV for customers.`,
    ],
  },
  {
    company: "Vibely",
    logo: "/vibely.png",
    role: "Co-Founder & Tech Lead",
    start: "Jul 2019",
    end: "Jul 2022",
    achievements: [
      `Tech lead on a 2 eng team that I helped scale to 8 engs as the company grew close to $1M ARR in just a couple years.`,
      `Built Vibely Communities - both web and mobile products - from 0 -> 1.`,
      `Architected entire frontend, backend and infra from scratch. Built authentication, onboarding, real time chats, challenges & meetups, user profile, community search & discovery, push, in-app & email notifications, and 50+ more features.`,
      `Drove performance improvement efforts to heavily improve UX via postgres indexing, frontend caching with Apollo, list virtualization, react memoization (useCallback, useMemo, useRef, etc...), code splitting, lazy loading, moving to SVG images, data pagination and first contentful paint + TTI optimizations. On the mobile side made memory performance optimizations by upgrading react native versions.`,
      `Led high risk & large-scale DB and infra migrations that enabled 1M+ concurrent users on real time features.`,
      `Led large frontend refactors and rewrites that touched the entire codebase. Was the go-to frontend expert on React and React Native.`,
      `Took active part in making product and architectural decisions that determined the direction of the product and company as a whole.`,
    ],
  },
  {
    company: "ServiceNow",
    logo: "/servicenow.png",
    role: "Quality Engineer Intern",
    start: "Jun 2020",
    end: "Sept 2020",
    achievements: [
      `Worked on QE performance team's beta tool Jmeter Now - an automated testing tool used by 90+ engineers. Used Docker and Jenkins to containerize and automate deployment of the Node.js server, cutting dev setup time by 3x and enabling widespread adoption into CI / CD pipelines.`,
      `Became the frontend expert on a team of 4 interns - revamped a legacy Javascript scripting tool used by 20+ teams org-wide by implementing IDE features from scratch such as autocomplete and syntax highlighting.`,
    ],
  },
  {
    company: "UCSD",
    logo: "/ucsd.png",
    role: "Machine Learning Researcher",
    start: "Jan 2020",
    end: "Apr 2020",
    achievements: [
      `Worked in a team of 2 at UCSD's radiology lab. Trained a popular open-source CNN (U-Net) to generate T2 maps (muscle relaxation heat maps) from MRI scans, accelerating detection for fatal heart conditions such as myocardial edema.`,
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
    name: "Easy Tour - Mood-based Trip Planner",
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
    skills: ["Swift", 'SwiftUI, "Objective-C'],
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
    skills: ["Swift", 'SwiftUI, "Objective-C'],
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
