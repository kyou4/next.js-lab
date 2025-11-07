"use client";
import Hero from "@/components/hero";
import NavBar from "@/components/navbar";
import ProjectPreviewCard from "@/components/project-preview-card";
import { useState } from "react";
const data = [
  {
    title: "Project One",
    desc: "Short blurb.",
    img: "https://placehold.co/300.png",
    link: "#",
  },
  {
    title: "Project Two",
    desc: "Short blurb.",
    img: "https://placehold.co/300.png",
    link: "#",
  },
  {
    title: "Project Three",
    desc: "Short blurb.",
    img: "https://placehold.co/300.png",
    link: "#",
  },
  {
    title: "Project Four",
    desc: "Short blurb.",
    img: "https://placehold.co/300.png",
    link: "#",
  },
];

export default function Home() {
  const [projects, setProjects] = useState(data.slice(0, 3));

  return (
    <div>
      <NavBar />
      <Hero />
      <div className="flex flex-row w-full justify-center flex-wrap items-center">
        {projects.map((project, index) => (
          <ProjectPreviewCard project={project} key={index} />
        ))}
      </div>
    </div>
  );
}
