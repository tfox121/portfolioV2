import React from 'react';
import {
  Icon, Menu, Popup,
} from 'semantic-ui-react';

const Header = (props) => {
  const { onChange } = props;

  const handleItemClick = (e, { name }) => {
    if (name === 'side') {
      onChange();
    }
  };

  return (
    <Menu className="fixed main menu" size="huge" inverted>
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
