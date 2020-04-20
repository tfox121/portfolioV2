import React, {
  createRef, useEffect, useLayoutEffect, useState,
} from 'react';
import { Segment, Sidebar } from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive';

import './App.css';
import projects from '../data/projects';

import Introduction from './Introduction';
import Header from './Header';
import Projects from './Projects';
import SidebarMenu from './SidebarMenu';
import ContactMe from './ContactMe';

const App = () => {
  const [visible, setVisible] = useState(false);
  const [elRefs, setElRefs] = useState([]);

  const isLaptopOrBigger = useMediaQuery({ query: '(min-width: 1224px)' });

  useEffect(() => {
    isLaptopOrBigger
      ? setVisible(true)
      : setVisible(false);
  }, [isLaptopOrBigger]);

  const arrLength = projects.length + 2;

  React.useEffect(() => {
    // add or remove refs
    setElRefs((refs) => (
      Array(arrLength).fill().map((_, i) => refs[i] || createRef())
    ));
  }, [arrLength]);

  useLayoutEffect(() => {
    if (elRefs) {
      setTimeout(() => {
        const newHeights = [];
        elRefs.slice(1, -1).forEach((ref) => {
          const node = ref.current.querySelector('.ui.content .image-text');
          const image = ref.current.querySelector('.ui.content .image');
          if (image) {
            newHeights.push([{ name: ref.current.id, height: image.height }]);
            node.style.height = `${image.height}px`;
          }
        });
      }, 0);
    }
  }, [elRefs]);


  const handleChange = () => {
    setVisible(!visible);
  };

  return (
    <>
      <SidebarMenu visible={visible} onChange={handleChange} refs={elRefs} />
      <Header onChange={handleChange} refs={elRefs} />
      <Sidebar.Pushable>
        <Sidebar.Pusher>
          <Segment vertical basic className="content">
            <Introduction ref={elRefs[0]} refs={elRefs.slice(1, -1)} />
            <Projects refs={elRefs.slice(1, -1)} />
            <ContactMe ref={elRefs.slice(-1)[0]} />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};

export default App;
