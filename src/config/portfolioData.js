export const portfolioData = {
  personalInfo: {
    name: "Safnee Ahamed",
    title: "BSc (Hons) in IT STUDENT",
    subTitle: "University of Moratuwa, Sri Lanka",
    bio: "BSc (Hons) in IT Student at the University of Moratuwa, Sri Lanka. Passionate about software engineering, frontend technologies, and building interactive, high-performance web systems.",
    avatar: "/avatar.png", // fallback logo/icon
    resumeUrl: "#",
    videoTutorialUrl: "", // Hide video button
    socials: [
      { name: "Instagram", url: "https://instagram.com/iamsafni", icon: "Instagram" },
      { name: "GitHub", url: "https://github.com/iamsafni04", icon: "Github" },
      { name: "Facebook", url: "https://facebook.com/MohamedSafniy", icon: "Facebook" },
      { name: "WhatsApp", url: "https://wa.me/94759673853", icon: "Phone" },
      { name: "Email", url: "mailto:safneeasm@gmail.com", icon: "Mail" }
    ],
    stats: [
      { value: "2 Yrs", label: "Experience" },
      { value: "20+", label: "Projects Completed" },
      { value: "15+", label: "Worldwide Clients" }
    ]
  },
  promoCards: [
    {
      title: "DYNAMIC ANIMATION",
      subtitle: "MOTION DESIGN",
      link: "#experience",
      type: "lime"
    },
    {
      title: "FRAMER, FIGMA, REACTJS",
      subtitle: "NEXTJS, CSS, GRAPHQL",
      link: "#projects",
      type: "orange"
    }
  ],
  projects: [
    {
      id: "billngo",
      title: "BillnGo POS System",
      description: "All-in-one footwear store POS system featuring customer loyalty point system, SMS notifications, user login, and inventory tracking.",
      category: "Full-Stack Application",
      tags: ["POS", "Loyalty System", "SMS Gateway", "Auth"],
      imageUrl: "/projects/billngo.site.png",
      link: "https://billngo.site",
      apkUrl: "https://github.com/iamsafni04/my-portfolio/releases/download/v1.0.0/billngo-pos-companion.apk"
    },
    {
      id: "ceylontrips",
      title: "CeylonTrips",
      description: "A comprehensive tourism and vehicle booking portal integrated with WhatsApp for direct, real-time admin chat support.",
      category: "Web Application",
      tags: ["Tourism", "Vehicle Booking", "WhatsApp Integration"],
      imageUrl: "/projects/Ceylontrips.lk.png",
      link: "https://ceylontrips.lk"
    },
    {
      id: "ftech",
      title: "FTech Lanka",
      description: "Product landing page for FTech Lanka Pvt Ltd, Srilanka's leading industrial and household adhesive manufacturer.",
      category: "Landing Page",
      tags: ["Industrial", "Product Catalog", "Branding"],
      imageUrl: "/projects/ftech.lk.png",
      link: "https://ftech.lk"
    },
    {
      id: "luxuryhands",
      title: "LuxuryHands E-commerce",
      description: "Fully completed premium women's accessories e-commerce store with secure payment gateway integration and SMS alerts for order placement and delivery updates.",
      category: "E-commerce Web App",
      tags: ["E-commerce", "Payment Gateway", "SMS Alerts"],
      imageUrl: "/projects/luxuryhands.lk.png",
      link: "https://luxuryhands.lk"
    },
    {
      id: "pixandigital",
      title: "Pixan Digital",
      description: "High-converting, visually appealing landing page for a modern digital marketing agency designed with sleek interactions.",
      category: "Agency Landing Page",
      tags: ["Digital Agency", "UI/UX Design", "Animations"],
      imageUrl: "/projects/pixandigital.com.png",
      link: "https://pixandigital.com"
    },
    {
      id: "ftechmaps",
      title: "FTech Customer Locations",
      description: "Interactive customer mapping and store locations lookup tool custom-built for FTech Lanka Pvt Ltd.",
      category: "Geospatial Web Tool",
      tags: ["Maps API", "Geolocation", "Customer UX"],
      imageUrl: "/projects/ftech.lk.png",
      link: "https://maps.ftech.lk"
    }
  ],
  experience: [
    {
      company: "University of Moratuwa",
      role: "BSc (Hons) in Information Technology Student",
      period: "2024 - Present",
      description: "Building strong foundations in software engineering, database systems, UI/UX design, and algorithmic problem-solving. Actively participating in academic projects and expanding practical knowledge in modern technology stacks."
    },
    {
      company: "Freelance Projects",
      role: "Full-Stack Web & Mobile Developer",
      period: "2024 - Present",
      description: "Developing responsive, user-friendly web applications for various local clients (including POS systems like BillnGo, tourism websites, and e-commerce platforms). Implementing end-to-end features, payment gateway integrations, and automatic SMS messaging systems."
    },
    {
      company: "Independent Projects",
      role: "Open-Source Creator",
      period: "2023 - Present",
      description: "Building interactive frontend designs, custom Google Maps locator integrations (maps.ftech.lk), and companion Flutter mobile applications. Actively learning new frameworks and tools to build scalable codebases."
    }
  ],
  tools: [
    { name: "Framer", category: "Website Builder", iconName: "Framer" },
    { name: "Figma", category: "Design Tool", iconName: "Figma" },
    { name: "Supabase", category: "Backend Database", iconName: "Supabase" },
    { name: "Firebase", category: "Mobile Backend", iconName: "Firebase" },
    { name: "Vercel", category: "Hosting & Serverless", iconName: "Vercel" },
    { name: "Cloudflare", category: "CDN & DNS Security", iconName: "Cloudflare" },
    { name: "Antigravity", category: "AI Agent Platform", iconName: "Antigravity" },
    { name: "Cloud Codex", category: "AI Coding Assistant", iconName: "CloudCodex" }
  ],
  blog: [
    {
      id: "career-web-design",
      title: "Starting and Growing a Career in Web Design",
      excerpt: "An in-depth look at what it takes to succeed as a modern designer in 2026, from typography principles to engineering collaboration.",
      date: "Apr 8, 2026",
      readTime: "6 min read",
      link: "#"
    },
    {
      id: "landing-page-performance",
      title: "Create a Landing Page That Performs Great",
      excerpt: "Strategies, speed optimization hacks, and UX copy frameworks that convert visitors into active paying users.",
      date: "Mar 15, 2026",
      readTime: "4 min read",
      link: "#"
    },
    {
      id: "future-of-designers",
      title: "How Can Designers Prepare for the Future?",
      excerpt: "Unpacking the influence of AI, generative tools, and spatial computing on traditional visual design workflows.",
      date: "Feb 28, 2026",
      readTime: "8 min read",
      link: "#"
    }
  ],
  contact: {
    email: "safneeasm@gmail.com",
    address: "Colombo, Sri Lanka",
    budgets: [
      "$1k - $3k",
      "$3k - $5k",
      "$5k - $10k",
      "$10k+"
    ]
  },
  partners: [
    { name: "BillnGo", logo: "/partners/Billngo.png" },
    { name: "Dujee Footwear", logo: "/partners/Dujee Footwear.jpg" },
    { name: "LuxuryHands", logo: "/partners/LuxuryHands.jpeg" },
    { name: "Maherbals", logo: "/partners/Maherbals.png" },
    { name: "Pixan Digital", logo: "/partners/Pixan Digital.jpg" },
    { name: "Wesco", logo: "/partners/Wesco.PNG" }
  ]
};
