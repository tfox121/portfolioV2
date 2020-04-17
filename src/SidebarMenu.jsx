import React from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive';

import projects from './data/projects';

const SidebarMenu = (props) => {
  const { onChange, visible } = props;

  const isLaptopOrBigger = useMediaQuery({ query: '(min-width: 1224px)' });

  const handleChange = (event) => {
    if (!isLaptopOrBigger && event) {
      onChange();
    }
  };

  const menuItems = (projectsObj) => (
    <Menu.Menu>
      {projectsObj.map((project) => (
        <Menu.Item as="a" href={`#${project.id}`} key={project.id}>
          {project.name}
        </Menu.Item>
      ))}
    </Menu.Menu>
  );

  return (
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      onHide={handleChange}
      vertical
      visible={visible}
    >
      <Menu.Item as="h2">
        TF
      </Menu.Item>
      <Menu.Item>
        <Menu.Header>
          Projects
        </Menu.Header>
        {menuItems(projects)}
      </Menu.Item>
    </Sidebar>
  );
};

export default SidebarMenu;
