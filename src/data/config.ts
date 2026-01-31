const config = {
  title: "Sanjay Kumar | Laravel & Full Stack Developer",
  description: {
    long: "I'm Sanjay Kumar, a PHP/Laravel & Node.js Developer passionate about crafting seamless digital experiences. My journey involves building School ERP systems, e-commerce platforms, payroll applications, and robust mobile app APIs. I specialize in turning complex requirements into elegant, scalable solutions.",
    short:
      "Sanjay Kumar, a Laravel & Full Stack Developer building scalable web solutions and APIs.",
  },
  keywords: [
    "Sanjay Kumar",
    "Sanjay",
    "sanjaykm098",
    "Laravel Developer",
    "PHP Developer",
    "Full Stack Developer",
    "Node.js",
    "Nest.js",
    "School ERP",
    "E-commerce development",
    "API Development",
    "Web Development",
    "Ludhiana Developer",
  ],
  author: "Sanjay Kumar",
  email: "sanjaykm.live@gmail.com",
  site: "https://sanjaykm.in",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/sanjaykm098", // Placeholder or from profile if found
    linkedin: "https://www.linkedin.com/in/sanjaykm098",
    instagram: "https://www.instagram.com/sanjaykm098", // Placeholder
    // facebook: "https://www.facebook.com/sanjaykm098", // Placeholder
    github: "https://github.com/sanjaykm098",
  },
};
export { config };
