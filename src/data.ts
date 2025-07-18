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
