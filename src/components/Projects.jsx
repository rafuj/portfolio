import React from "react";
import usePorjects from "../hooks/usePorjects";
import Project from "./Project";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

export default function Projects({ bg }) {
  const { loading, error, projects } = usePorjects();

  return (
    <Section background={bg ? bg : "bg--section"}>
      <SectionHeader
        center
        cate="Projects"
        title="Some Envato Projects"
        txt="Magni, modi autem velit deserunt cum libero blanditiis quibusdam officia non illum, nemo maiores, quae neque rerum!"
      />
      <div className="row g-4 justify-content-center">
        {!loading && projects.length === 0 && <div>No Data Available Here</div>}
        {error && <div>Something Went Wrong Please Try Again</div>}
        {!loading &&
          projects.length > 0 &&
          projects.map((project) => (
            <Project
              key={project.id}
              image={project.image}
              link={project.links}
              title={project.title}
            />
          ))}
      </div>
    </Section>
  );
}
