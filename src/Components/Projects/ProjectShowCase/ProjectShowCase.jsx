import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProjectData from '../ProjectData.json';
import ProjectNav from './ProjectNav';
import ProjectHero from './ProjectHero';
import FeatureHighlights from './FeatureHighlights';
import TechStackList from './TechStackList';

const ProjectShowCase = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = ProjectData.find(
    p => p.title.toLowerCase().replace(/\s+/g, '-') === slug
  );

  useEffect(() => {
    const scrollY = window.scrollY || window.pageYOffset;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflowY = 'hidden';
    document.body.style.width = '100%';

    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflowY = '';
      document.body.style.width = '';
      window.scrollTo(0, 0);
    }, 800);

    return () => {
      clearTimeout(timer);
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflowY = '';
      document.body.style.width = '';
    };
  }, [slug]);

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        Project not found
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen mt-15 bg-black text-white overflow-hidden flex justify-center">
      <div>
        <ProjectHero project={project} navigate={navigate} />
        <div className="relative z-20 container mx-auto px-6 py-16">
          <FeatureHighlights features={project.features} />
          <TechStackList techs={project.technologies} />
        </div>
      </div>
      <div className="py-16 max-xl:hidden">
        <ProjectNav />
      </div>
    </div>
  );
};

export default ProjectShowCase;
