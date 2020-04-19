import React, { useLayoutEffect, useState } from 'react';
import {
  Icon, Menu, Popup,
} from 'semantic-ui-react';

import colours from '../data/colours';
import './Header.css';

const Header = (props) => {
  const [colour, setColour] = useState(colours[0]);

  const { onChange, refs } = props;

  const handleItemClick = (e, { name }) => {
    if (name === 'side') {
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

  return (
    <Menu className="fixed main" size="huge" style={{ color: `${colour}` }} inverted>
      <Menu.Item
        name="side"
        onClick={handleItemClick}
        content={<Icon name="bars" />}

      />
      <Menu.Menu position="right">
        <Popup
          trigger={<Menu.Item as="a" href="https://github.com/tfox121" target="_blankd" content={<Icon name="github" />} />}
          content="See my projects on GitHub"
          basic
        />
        <Popup
          trigger={<Menu.Item as="a" href="https://www.linkedin.com/in/tfox121/" target="_blankd" content={<Icon name="linkedin" />} />}
          content="Connect with me on LinkedIn"
          basic
        />
        <Popup
          trigger={(
            <Menu.Item
              as="a"
              href="#contactMe"
              name="mail"
              onClick={handleItemClick}
              content={<Icon name="mail" />}

            />
          )}
          content="Send me a message"
          basic
        />

      </Menu.Menu>
    </Menu>
  );
};

export default Header;
