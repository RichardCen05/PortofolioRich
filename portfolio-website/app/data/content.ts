// Edit any text below directly. No need to touch the components.
// Copy is intentionally short: the page leans on visuals and icons.

export const profile = {
  name: "Richard",
  fullName: "Richard Cen",
  roleLine: ["Aspiring Product Manager", "Business Intelligence Specialist", "Leader in Progress"],
  email: "richardcen05@gmail.com",
  linkedin: "https://www.linkedin.com/in/richard05/",
  github: "https://github.com/RichardCen05",
  cvFile: "/files/CVRichard.pdf",
};

export const chapters = [
  { id: "hero", label: "Prologue" },
  { id: "lead-self", label: "Ch. 01 Lead Self" },
  { id: "transition", label: "Transition" },
  { id: "lead-others", label: "Ch. 02 Lead Others" },
  { id: "lectura", label: "The Product" },
  { id: "memorable", label: "Memorable Moment" },
  { id: "teladan", label: "Character" },
  { id: "testimonials", label: "Testimonials" },
  { id: "growth-plan", label: "Growth Plan" },
  { id: "contact", label: "Contact" },
];

export const identity = [
  {
    icon: "S",
    title: "Student",
    body: "Informatics Engineering at Brawijaya, mixing technical depth with business sense.",
  },
  {
    icon: "P",
    title: "Purpose-Driven",
    body: "Driven by impact over recognition, especially when I see people who need help.",
  },
  {
    icon: "G",
    title: "Growth-Oriented",
    body: "Step by step, like a seed pushing through soil. Always learning, always improving.",
  },
];

export const approach = [
  { title: "Intrapersonal Strength", body: "Grounded in my values, driven by purpose." },
  { title: "Curiosity", body: "I dig deep into new ideas and think critically." },
  { title: "Business + Tech", body: "I speak both languages, so I can bridge teams." },
  { title: "Collaborative Spirit", body: "Kindness and fairness shape how I work with people." },
];

export const mission = {
  title: "Turning Technology and Business into Impact",
  body: "Building innovative, digitizable tech products that win top-tier hackathons, and proving Universitas Brawijaya students can stand alongside the world's best.",
};

export const skills = [
  "Project Management", "Scrum", "Design Thinking", "Agile", "PowerBI", "Tableau",
  "Java", "Python", "Financial Projection", "Figma", "UI/UX Design",
  "Responsive Design", "Canva", "Google Workspace", "Data Science",
];

export const projects = [
  {
    name: "Sentra",
    image: "/img/SentraPic.jpg",
    desc: "Indonesia's first financial inclusivity app for the visually impaired, built with AI and text to speech.",
    tags: ["React Native", "Golang", "MongoDB", "Google AI"],
  },
  {
    name: "Kulkita",
    image: "/img/Kulkita.jpg",
    desc: "SPPG stock inventory management with spoilage and demand prediction for the Makan Bergizi Gratis program.",
    tags: ["React Native", "Java", "Azure AI"],
  },
  {
    name: "Legana",
    image: "/img/Legana.jpg",
    desc: "Law literacy and accessibility with AI and OCR, streamlining legal processes in Indonesia.",
    tags: ["Figma", "Design Thinking", "Market Research"],
  },
  {
    name: "NUSAGO",
    image: "/img/Nusago.jpg",
    desc: "Green city urban planning platform using remote sensing for land cover, emission, and vegetation insight.",
    tags: ["React Native", "Figma", "Google Earth"],
  },
  {
    name: "BundaKu",
    image: "/img/BundaKu.jpg",
    desc: "A marketplace for baby needs that supports mothers against baby blues, with an AI chatbot.",
    tags: ["Figma", "Design Thinking", "Business Acumen"],
  },
  {
    name: "Masakuy",
    image: "/img/Masakuy.jpg",
    desc: "Cooking and nutrition assistant powered by computer vision, tied to a fresh food marketplace.",
    tags: ["Computer Vision", "Market Research", "Marketing"],
  },
];

export const experience = [
  {
    title: "Product Manager Intern",
    org: "PT. Sineas Kreatif Indonesia",
    period: "Feb 2025 - May 2025",
    body: "Led a team of 19 developers and rolled out Taiga-based delivery, cutting development time by 50%.",
  },
  {
    title: "Business Development Intern",
    org: "AnakBisnis",
    period: "Jan 2025 - Jun 2025",
    body: "Ran intensive online classes for business and stock enthusiasts, mentoring students to competition wins.",
  },
  {
    title: "Business Operation Intern",
    org: "Joki Proyek",
    period: "Feb 2025 - Present",
    body: "Competitor research and key account conversion tracking for transparent project progress.",
  },
];

export const education = [
  {
    title: "Bachelor of Computer Science",
    org: "Brawijaya University",
    period: "2023 - Present",
    body: "Specialized in AI and Software Engineering, active across 10 national youth organizations.",
  },
  {
    title: "Product Management & UI/UX Bootcamp",
    org: "Harisenin.com",
    period: "2025",
    body: "From design thinking through to delivery tooling.",
  },
  {
    title: "Academya Product Management",
    org: "Academya Arkavidia ITB",
    period: "2025",
    body: "Three months of user research, ideation, and usability testing.",
  },
];

export const achievements = [
  { rank: "1st", title: "TIK Business, 4C National Competition", body: "Universitas Brawijaya. Hukara: law literacy app." },
  { rank: "1st", title: "UI/UX, UNJ Design Festival", body: "Fresh food inventory tool for distributors and retail." },
  { rank: "2nd", title: "ICT Business Plan, Recursion 5.0", body: "Universitas Hasanuddin." },
  { rank: "2nd", title: "Software Development, UNITY 2025", body: "Financial inclusivity app for the visually impaired." },
  { rank: "3rd", title: "UI/UX, FORTEX 5.0", body: "Universitas Al-Azhar. Creasi: job-matching for designers." },
  { rank: "Finalist", title: "SIGMA WebApp Competition", body: "Universitas Padjadjaran. Nusago urban planning dashboard." },
];

// ---------------------------------------------------------------------------
// CHAPTER 02: LEAD OTHERS (Lectura)
// ---------------------------------------------------------------------------

export const transition = {
  quote:
    "I was scared my team would burn out and feel like they weren't learning anything. I was scared we'd build something impressive that no student or teacher would ever actually use.",
  answer:
    "That fear is exactly what taught me to trust. Trust the team to want to grow. Trust the students and teachers who genuinely wanted help finding their path.",
  image: "/img/lectura/lectura-team.jpeg",
  imageCaption: "The Lectura team on the ground, running a session at our partner school.",
};

export const leadOthersTrack: "community" | "organization" = "community";

export const leadOthersJourney = {
  initiativeName: "Lectura",
  tagline: "Let's be The Change Makers with Lectura",
  subTagline: "Empowering students to shape their future with clarity.",
  url: "https://lectura.web.id",
  period: "Jan 2026 - May 2026",
  role: "Website Development Lead",
  summary:
    "Lectura was started by an earlier Universitas Brawijaya cohort at the same school. We took it over to keep it alive and push it further, shipping a new guidance module called Lectura Compass plus online and onsite workshops that help high schoolers pick a major that fits who they actually are.",
  stats: [
    { value: 30, suffix: "+", label: "Active students" },
    { value: 4, suffix: "", label: "People I led" },
    { value: 5, suffix: " mo", label: "Of delivery" },
    { value: 1, suffix: "", label: "New module shipped" },
  ],
  team: [
    { role: "Website Dev Lead", icon: "crown", note: "Me" },
    { role: "Product Designer", icon: "palette", note: "1" },
    { role: "Product Manager", icon: "clipboard", note: "1" },
    { role: "Frontend", icon: "code", note: "1" },
    { role: "Backend", icon: "database", note: "1" },
  ],
  challenges: [
    { icon: "calendar", title: "Clashing schedules", body: "Everyone had a full life outside Lectura." },
    { icon: "battery", title: "Motivation dips", body: "Exams hit and energy dropped. I had to coach, not push." },
    { icon: "megaphone", title: "Non-tech stakeholders", body: "Demos and language they could actually follow." },
    { icon: "handshake", title: "Learning to let go", body: "Real ownership instead of micromanaging." },
  ],
  practices: [
    { icon: "users", title: "Weekly 1-on-1s", body: "Track progress, and keep teaching along the way." },
    { icon: "gitbranch", title: "Real delegation", body: "They owned features. I stayed close enough to help." },
    { icon: "sparkles", title: "Visible appreciation", body: "Recognition kept the team invested." },
  ],
  outcomes: [
    "Students use the platform the way it was designed to be used.",
    "The team built a quiz engine where answers get scored and reviewed.",
    "Students left knowing more about themselves, campuses, and majors.",
  ],
  learning:
    "Leading isn't about controlling every output. It's about trusting people enough to let them own their work, then showing up for them every single week.",
};

// Real modules from lectura.web.id
export const lecturaFeatures = [
  { icon: "compass", title: "Lectura Compass", body: "Career and study planning for grade 11 students." },
  { icon: "quiz", title: "Interactive Quiz", body: "Multiple choice tests that surface real interests." },
  { icon: "pen", title: "Reflective Essay", body: "Space for students to think out loud." },
  { icon: "upload", title: "Upload Assignment", body: "Profession analysis and study plans." },
  { icon: "play", title: "Information Media", body: "Curated videos and educational articles." },
  { icon: "library", title: "Library", body: "Books, plus student and teacher writing." },
];

export const lecturaSteps = [
  { step: "01", title: "Login & Register", body: "Sign in with a school academic account." },
  { step: "02", title: "Explore", body: "Open Minat Bakat and start the journey." },
  { step: "03", title: "Build the Plan", body: "Finish the modules to get a career plan." },
];

export const memorableMoment = {
  title: "The Night Before Bali",
  story:
    "One last onsite work session with the whole team before I left for my internship in Bali. We planned, we laughed, we ate together. That was the night it hit me how much they'd grown, and how much they'd learned building something that real people in education would actually use.",
};

export type TeladanCharacter = {
  name: string;
  icon: string;
  tagline: string;
  story: string;
};

// Top 3 only. These are the characters Richard genuinely values most.
export const teladanCharacters: TeladanCharacter[] = [
  {
    name: "Empower Others",
    icon: "users",
    tagline: "Lift the team, not just the output",
    story:
      "My job wasn't to be the best engineer in the room. It was to help each person grow and do their best work. Moving from doing to empowering was the biggest shift of my year.",
  },
  {
    name: "Care & Empathy",
    icon: "heart",
    tagline: "Ask what people actually need",
    story:
      "I learned to care about how my teammates felt, not just what they delivered. Same question pointed outward: would students and teachers really use this, or does it just look good?",
  },
  {
    name: "Resilience",
    icon: "flame",
    tagline: "Keep going, and bring them with you",
    story:
      "When exams piled up and energy dropped, resilience meant not giving up on the team. Sit down, talk, teach something new, and simplify the workflow so less effort goes further.",
  },
];

export const testimonials = [
  {
    quote:
      "Thank you Richard, the website genuinely turned out amazing. You were the one who showed up most to work through everything with me, and you made me feel like I belonged on this project.",
    author: "Joshua",
    role: "Lectura Project Lead",
  },
  {
    quote:
      "Richard gave us real ownership instead of micromanaging. He'd hand over a feature, trust us to run with it, and still show up every week to check in and teach.",
    author: "Product Manager",
    role: "Lectura Core Team",
  },
];

export const growthPlan = {
  vision:
    "A leader competent enough to empower people through real technical skill, using both logic and emotion rather than picking one.",
  rows: [
    { icon: "target", label: "Focus", value: "Leadership that balances empathy with analysis, and edtech people actually use." },
    { icon: "message", label: "Skill", value: "Explaining technical work so non-technical people get it instantly." },
    { icon: "zap", label: "Skill", value: "Minimum effort, maximum impact." },
    { icon: "repeat", label: "Habit", value: "Keep the weekly 1-on-1s and keep delegating real ownership." },
  ],
  assessments: [
    { label: "MBTI", value: "INFJ", note: "The Advocate" },
    { label: "StrengthsFinder", value: "Intrapersonal", note: "Self-control & self-awareness" },
  ],
  closing:
    "Leadership isn't something you finish in a year. It's a long walk of learning, growing, and being useful to the people around you.",
};
