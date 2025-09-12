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

  // Find project by slug
  const project = ProjectData.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === slug
  );

  // Handle scroll freeze on route change
  useEffect(() => {
    const scrollY = window.scrollY || window.pageYOffset;

    const freezeScroll = () => {
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflowY = 'hidden';
      document.body.style.width = '100%';
      window.scrollTo(0, 0);
    };

    const unfreezeScroll = () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflowY = '';
      document.body.style.width = '';
      window.scrollTo(0, 0);
    };

    freezeScroll();
    const timer = setTimeout(unfreezeScroll, 800);

    return () => {
      clearTimeout(timer);
      unfreezeScroll();
    };
  }, [slug]);

  // Return fallback if project not found
  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        Project not found
      </div>
    );
  }

  // Render project details
  return (
    <div className="relative w-screen min-h-screen mt-35 bg-black text-white overflow-hidden flex justify-center">
      <div className="w-[90%] lg:max-w-[70%] flex justify-between gap-15">
        <main className="flex-1">
          <ProjectHero project={project} />

          <section className="relative flex flex-col gap-25 my-20">
            <Accordion features={project.keyFeatures} />
            <TechStack tech={project.techStack} />
            <CalloutBox project={project} />
          </section>
        </main>

        {/* Sidebar nav for large screens */}
        <aside className=" flex-1 py-16 max-xl:hidden">
          <ProjectNav />
        </aside>
      </div>
    </div>
  );
};

export default ProjectShowCase;
