/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Habi Tri Surya Ananda",
  title: "Hi all, I'm Abii",
  subTitle: emoji("Isi dengan bio"),
  resumeLink:
    "https://drive.google.com/file/d/1ZofMoamaaqVaRo3lUsxLTYkXIu5quhnz/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/abiisikumbang",
  linkedin: "https://www.linkedin.com/in/habi-tri-surya-ananda/",
  gmail: "abiisikumbang313@gmail.com",
  // gitlab: "https://gitlab.com/habi-tri-surya-ananda",
  // facebook: "https://www.facebook.com/habi.tri.surya.ananda",
  // medium: "https://medium.com/@habi-tri-surya-ananda",
  // stackoverflow: "https://stackoverflow.com/users/10422806/habi-tri-surya-ananda",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    // {
    //   skillName: "JavaScript",
    //   fontAwesomeClassname: "fab fa-js"
    // },
    {
      skillName: "Postman",
      fontAwesomeClassname: "fas fa-envelope"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },

    {
      skillName: "Tableau",
      fontAwesomeClassname: "fas fa-th"
    },
    {
      skillName: "Draw.io",
      fontAwesomeClassname: "fas fa-puzzle-piece"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universitas Pembangunan Panca Budi",
      logo: require("./assets/images/Unpab_logo.png"),
      subHeader: "Bachelor of Computer System",
      duration: "2022 - 2026",
      desc: "Judul skripsi",
      descBullets: ["isi dari paper"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend",
      level: "Intermediate"
    },
    {
      Stack: "Backend",
      level: "Advanced"
    },
    {
      Stack: "Analytics",
      level: "Intermediate"
    },
    {
      Stack: "Machine Learning",
      level: "Basic"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Mobile Developer Intern",
      company: "CV. Infotek Andalas Metrodata",
      companylogo: require("./assets/images/logo-infotek-new.png"),
      date: "May 2025 – Nov 2025",
      desc: "CV. Infotek Andalas Metrodata adalah perusahaan agency yang bergerak dibidang jasa pengembangana website dan aplikasi.",
      descBullets: [
        "Mengembangkan aplikasi mobile menggunakan Flutter",
        "Membangun backend menggunakan Laravel",
        "Membuat Dashboard Admin menggunakan Laravel",
        "Berkolaborasi dengan tim untuk merancang dan mengimplementasikan fitur baru"
      ]
    },
    {
      role: "Data Analyst Intern",
      company: "Bitlabs Academy",
      companylogo: require("./assets/images/bitlabsLogo.png"),
      date: "Jun 2024 – Jan 2025",
      desc: "Internship ini adalah bagian dari program Kampus Merdeka, Bitlabs Academy membuka peluang mahasiswa untuk belajar dan berkontribusi dalam proyek nyata dalam bidang Data Analyst.",
      descBullets: [
        "Menganalisis data reservasi dari RedDoorz dan menganalisisnya untuk mendapatkan insight",
        "Menggunakan Google Colab untuk mengolah data",
        "Membuat visualisasi data menggunakan Tableau",
        "Membuat laporan analisis data dalam bentuk presentasi"
      ]
    }
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/logo_bangJAKI.png"),
      projectName: "Aplikasi Bang Jaki",
      projectDesc:
        "Aplikasi mobile untuk menjual sampah dan menukar dengan produk menarik",
      footerLink: [
        {
          name: "Visit Aplikasi",
          url: "http://app.bangjaki.id"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/logo-infotek-new.png"),
      projectName: "Dashboard Admin Bang Jaki",
      projectDesc:
        "Dashboard untuk mengelola permintaan user (pembelian atau penukaran poin) dari aplikasi Bang Jaki",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://app.bangjaki.id"
        }
      ]
    },
    {
      image: require("./assets/images/bitlabs-reddoorz.png"),
      projectName: "Menganalisis Data Reservasi RedDoorz",
      projectDesc:
        "Bitlabs Academy x RedDoorz - Mengelola data reservasi dari RedDoorz dan menganalisisnya untuk mendapatkan insight",
      footerLink: [
        {
          name: "Visit Colab",
          url: "https://colab.research.google.com/drive/1sg4ZBJC63FfuhJsBWdsRBljFKyhpNxJ8?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Data Analytic for Business in Bitlabs Academy",
      subtitle:
        "Completed Data Analytic for Business course in Bitlabs Academy",
      image: require("./assets/images/sertifikat-bitlabs.png"),
      imageAlt: "Bitlabs Academy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1spC2vvOTFjKS7lHk3vYu1A-JjzgkGXEb/view?usp=sharing"
        },
      ]
    },
    {
      title: "Kepesertaan Kampus Merdeka",
      subtitle:
        "Participated in the Merdeka Campus program and completed various projects.",
      image: require("./assets/images/sertifikat-mbkm.png"),
      imageAlt: "Kampus Merdeka Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1KLSVX5pXaRSFfGaMHKiDFlq02Yz_eUJ5/view?usp=sharing"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+62 812-6583-3657",
  email_address: "abiisikumbang313@gmail.com"
};

// Twitter Section

// const twitterDetails = {
//   userName: "twitter", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
// };


const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  // blogSection,
  // talkSection,
  // podcastSection,
  contactInfo,
  // twitterDetails,
  isHireable,
  resumeSection
};
