import React from 'react';

import projects from '../data/projects';
import colours from '../data/colours';

import Project from './Project';

const projectsRender = (refs) => projects.map((project, index) => (
  <React.Fragment key={project.id}>
    <Project
      project={project}
      color={colours[(index + 1) % colours.length]}
      ref={refs[index]}
    />
  </React.Fragment>
));

const Projects = (props) => {
  const { refs } = props;
  return (
    <>
      {projectsRender(refs)}
    </>
  );
};

export default Projects;
