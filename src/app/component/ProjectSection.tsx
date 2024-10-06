"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 2,
    title: "Doctor Appointment",
    description: "Using Bootstrap",
    image: "/images/projects/doctor.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Muhammad-Moeed/Doctor-Appointment",
    previewUrl: "https://doctor-appointment-bootstrap.netlify.app/",
  },
  {
    id: 1,
    title: "Next-js Portfolio Website",
    description: "Using Next js & Tailwend",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Muhammad-Moeed/Portfolio-Website-Nextjs",
    previewUrl: "./",
  },
  {
    id: 3,
    title: "Lasles VPN",
    description: "Using Html Css & Bootstrap",
    image: "/images/projects/vpn.png",
    tag: ["All", "Web"],
    gitUrl: "https://landing-page-vpn.netlify.app/",
    previewUrl: "https://landing-page-vpn.netlify.app/",
  },
  {
    id: 4,
    title: "Dynamic Reusume",
    description: "Using TypeScript",
    image: "/images/projects/resume.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Muhammad-Moeed/q4giaic-Unique-Path-Shareable-Link-Resume-Builder",
    previewUrl: "https://q4giaic-shareablelink-resumebuilder.netlify.app/",
  },
  {
    id: 5,
    title: "Salt'n Pepper",
    description: "Using Html Css",
    image: "/images/projects/salt.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Muhammad-Moeed/Saltn-Pepper",
    previewUrl: "https://saltn-pepper-moeed.netlify.app/",
  },
  {
    id: 6,
    title: "Registration Form",
    description: "Using Html & Css",
    image: "/images/projects/form.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Muhammad-Moeed/saylnai-form",
    previewUrl: "https://saylani-registration-formm.netlify.app/",
  },
  {
    id: 7,
    title: "Stop Watch App",
    description: "Html Css & JavaScript",
    image: "/images/projects/watch.jpg",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/Muhammad-Moeed/Stop-Watch-Web-Application",
    previewUrl: "https://mstopwatch.netlify.app/",
  },
  {
    id: 8,
    title: "Calculator App",
    description: "Html Css & JavaScript",
    image: "/images/projects/calc.png",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://mcalculatorapp.netlify.app/",
    previewUrl: "https://github.com/Muhammad-Moeed/Calculator-Application",
  },
  {
    id: 9,
    title: "Rock Papper S Game",
    description: "CLI Game TypeScript",
    image: "/images/projects/cli1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Muhammad-Moeed/Rock-Paper-Seissors-Game-CLI-Prject",
    previewUrl: "",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };
  

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;