/**
 * BEYOND CODE — PERSONAL PROFILE DATA CONFIGURATION
 * Official Instagram: @siliconsweat
 */

// 1. Centralized Instagram Configuration
export const INSTAGRAM_URL = "https://www.instagram.com/siliconsweat";

// 2. Personal Profile Data Structure
export const personalProfile = {
  hero: {
    title: "Beyond Code.",
    subtitle: "The things I build, chase, enjoy and obsess over when I'm not writing code.",
    tags: ["FITNESS & SILICONSWEAT", "TRAVEL", "MUSIC", "LIFE"],
    intro: "Software is what I do. SiliconSweat is where discipline meets physical strength."
  },

  // 01 — Fitness Section (SiliconSweat)
  fitness: {
    headline: "SiliconSweat — Where Code Meets Sweat.",
    philosophy: "Building physical strength and mental resilience. Training is my daily reset where discipline built in the gym translates directly into engineering problem solving.",
    currentGoals: [
      "Progressive overload & compound lifting milestones",
      "Endurance flow, agility, and calisthenics mobility",
      "Maintaining high daily energy, recovery, and focus"
    ],
    gallery: [
      {
        type: "image",
        title: "SiliconSweat Reset",
        caption: "Late evening workout session. Consistency over everything. @siliconsweat",
        image: "assets/imgs/folio-1.jpg",
        instagramUrl: INSTAGRAM_URL
      },
      {
        type: "reel",
        title: "Rope Skipping & Agility Flow",
        caption: "Cardio endurance and rhythm training. Follow @siliconsweat",
        image: "assets/imgs/folio-2.jpg",
        instagramUrl: INSTAGRAM_URL
      },
      {
        type: "image",
        title: "Strength & Power Work",
        caption: "Focusing on compound movements, form, and progressive load.",
        image: "assets/imgs/folio-3.jpg",
        instagramUrl: INSTAGRAM_URL
      },
      {
        type: "image",
        title: "Athletic Progression",
        caption: "Tracking physical and mental milestones month over month.",
        image: "assets/imgs/folio-4.jpg",
        instagramUrl: INSTAGRAM_URL
      }
    ]
  },

  // 02 — Travel Section
  travel: {
    headline: "Exploring mountain trails, lake views, and quiet landscapes.",
    timeline: [
      {
        location: "Nainital & Himalayan Trails",
        year: "2024",
        description: "Mountain views, quiet lakes, and high-altitude trekking trails.",
        coverImage: "assets/imgs/blog-1.jpg"
      },
      {
        location: "Central India & Heritage Expeditions",
        year: "2023",
        description: "Exploring historical architecture, local food cultures, and road trips.",
        coverImage: "assets/imgs/blog-2.jpg"
      },
      {
        location: "Upcoming Expedition",
        year: "Next",
        description: "Planning the next high-altitude mountain trek and coastal road trip.",
        coverImage: "assets/imgs/blog-3.jpg"
      }
    ]
  },

  // 03 — Music Section
  music: {
    headline: "Sometimes I trade the keyboard for a guitar.",
    subtitle: "Acoustic fingerstyle sessions, vocal jams, and musical flow.",
    items: [
      {
        title: "Acoustic Fingerstyle Covers",
        type: "Instrumental",
        description: "Unwinding with fingerstyle acoustic guitar riffs and ambient chord progressions.",
        link: INSTAGRAM_URL
      },
      {
        title: "Acoustic Vocal Jam",
        type: "Singing",
        description: "Casual weekend singing sessions and acoustic song covers.",
        link: INSTAGRAM_URL
      }
    ]
  },

  // 04 — Things I Like (Lifestyle Interests)
  interests: [
    {
      name: "SiliconSweat Fitness",
      category: "Health & Lifting",
      description: "Strength training, functional mobility, and daily workout routines (@siliconsweat)."
    },
    {
      name: "Mountain Trekking",
      category: "Exploration",
      description: "Discovering mountain trails, lake views, and road trip journeys."
    },
    {
      name: "Guitar & Singing",
      category: "Creative",
      description: "Playing acoustic guitar fingerstyle and singing acoustic covers."
    },
    {
      name: "Coffee & Espresso",
      category: "Lifestyle",
      description: "Brewing great coffee to fuel early mornings and late nights."
    },
    {
      name: "Consumer Tech & Gadgets",
      category: "Interest",
      description: "Exploring new mobile tech, IoT hardware, and audio gear."
    }
  ]
};
