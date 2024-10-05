"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Define the type for the tab data
interface TabData {
  title: string;
  id: string;
  content: React.ReactNode; // Use React.ReactNode for content
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>NoSQL</li>
        <li>Tailwind</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Student Of Govenrnor Initiative Course Ai Web3 & Metavere</li>
        <li>3 Year Diploam in Software Engineering</li>
        <li>UnderGraduate in Software Engineering from Karachi University</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Web & Mobile App Development from SMIT</li>
        <li>Cisco Certified Pytohn Programming from SMIT</li>
        <li>Wordpress Development from Digiskill</li>
        <li>Digital Marketing DigiSkill</li>
      </ul>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [, startTransition] = useTransition(); // Remove `isPending`

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  // Find the current tab data
  const currentTabData = TAB_DATA.find((t) => t.id === tab);

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about.jpeg" alt="about" width={500} height={600} className="h-[200px] sm:h-[400px]"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Next, Node.js, Express, NoSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {currentTabData ? currentTabData.content : <div>No content available</div>}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
