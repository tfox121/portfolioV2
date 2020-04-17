import React from 'react';

import projects from './data/projects';

import Project from './Project';

const colors = ['#FCEAEA', '#E3E8ED', '#E3F9F2', '#FBF4E8'];

const projectsRender = () => projects.map((project, index) => (
  <React.Fragment key={project.id}>
    <Project
      project={project}
      color={colors[index < colors.length ? index : index % colors.length]}
    />
  </React.Fragment>
));

const Projects = () => (
  <>
    {projectsRender()}
  </>
);

export default Projects;
