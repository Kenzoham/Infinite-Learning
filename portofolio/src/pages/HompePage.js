import React, { useState } from "react";
import Hero from "../components/Hero";
import Project from "../components/Project";

function HomePage() {
 

  const [project] = useState([]);

 

  return (
    <>
      <Hero />
      <Project
        title="Projects"
        subtitle="Project Snapshot"
        data={project}
      />
    </>
  );
}

export default HomePage;
