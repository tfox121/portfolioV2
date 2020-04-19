import React, { useState, useLayoutEffect } from 'react';
import { Header, Menu, Sidebar } from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive';

import projects from './data/projects';
import colours from './data/colours';
import './SidebarMenu.css';

const SidebarMenu = (props) => {
  const [colour, setColour] = useState(colours[0]);

  const { onChange, visible, refs } = props;

  const isLaptopOrBigger = useMediaQuery({ query: '(min-width: 1224px)' });

  const handleChange = (event) => {
    if (!isLaptopOrBigger && event) {
      onChange();
    }
  };

  const colorChange = () => {
    refs
      .forEach((ref, index) => {
        if (ref.current.offsetTop <= window.scrollY
          && ref.current.offsetTop + ref.current.offsetHeight > window.scrollY
        ) {
          setColour(colours[index % colours.length]);
        }
      });
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', colorChange);
    return () => {
      window.removeEventListener('scroll', colorChange);
    };
  });


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
      style={{ color: `${colour}` }}
    >
      <Menu.Item as="a" href="/">
        <Header as="h2">TF</Header>
      </Menu.Item>
      <Menu.Item>
        <Menu.Header as="a" href="#intro">
          Intro
        </Menu.Header>
      </Menu.Item>
      <Menu.Item>
        <Menu.Header as="a" href={`#${projects[0].id}`}>
          Projects
        </Menu.Header>
        {menuItems(projects)}

      </Menu.Item>
      <Menu.Item>
        <Menu.Header as="a" href="#contactMe">
          Get In Touch
        </Menu.Header>
      </Menu.Item>
    </Sidebar>
  );
};

export default SidebarMenu;
