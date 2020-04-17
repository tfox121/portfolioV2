import React, { useEffect, useState } from 'react';
import { Segment, Sidebar } from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive';

import './App.css';

import Introduction from './Introduction';
import Header from './Header';
import Projects from './Projects';
import SidebarMenu from './SidebarMenu';

const App = () => {
  const [visible, setVisible] = useState(false);

  const isLaptopOrBigger = useMediaQuery({ query: '(min-width: 1224px)' });

  useEffect(() => {
    isLaptopOrBigger
      ? setVisible(true)
      : setVisible(false);
  }, [isLaptopOrBigger]);

  const handleChange = () => {
    setVisible(!visible);
  };

  return (
    <>
      <SidebarMenu visible={visible} onChange={handleChange} />
      <Header onChange={handleChange} />
      <Sidebar.Pushable>
        <Sidebar.Pusher>
          <Segment vertical basic className="content">
            <Introduction />
            <Projects />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};

export default App;
