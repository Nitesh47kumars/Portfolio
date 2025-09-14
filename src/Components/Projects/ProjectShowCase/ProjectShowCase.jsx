import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectData from '../ProjectData.json';
import ProjectNav from './ProjectNav';
import ProjectHero from './ProjectHero';
import Accordion from './Accordion';
import TechStack from './TechStack';
import CalloutBox from './CalloutBox';

const ProjectShowCase = () => {
  const { slug } = useParams();

  const project = ProjectData.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!project) {
    throw new Error('Project not found');
  }

  return (
    <div className="relative w-screen min-h-screen mt-35 bg-black text-white overflow-visible flex justify-center">
      <div className="w-[90%] lg:max-w-[70%] flex justify-between gap-15">
        <main className="flex-1">
          <ProjectHero project={project} />

          <section className="relative flex flex-col gap-15 my-30">
            <Accordion features={project.keyFeatures} />
            <TechStack tech={project.techStack} />
            <CalloutBox project={project} />
          </section>
        </main>

        {/* Sidebar nav for large screens */}
        <aside className="flex-1 py-16 max-xl:hidden">
          <ProjectNav />
        </aside>
      </div>
    </div>
  );
};

export default ProjectShowCase;
