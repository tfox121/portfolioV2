import React, { useState } from 'react';
import {
  Icon, Table, Menu,
} from 'semantic-ui-react';

import profiles from '../data/profiles';
import './ResourcesTable.css';

import IconPopup from './IconPopup';

const FrontEndBackEndSelector = () => {
  const [activeItem, setActiveItem] = useState('frontEnd');

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <div>
      <Menu inverted attached="top" widths="2" tabular>
        <Menu.Item
          name="frontEnd"
          active={activeItem === 'frontEnd'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="backEnd"
          active={activeItem === 'backEnd'}
          onClick={handleItemClick}
        />
      </Menu>

      <div style={{ display: `${activeItem === 'frontEnd' ? 'block' : 'none'}` }}>
        <FrontEndTable />
      </div>
      <div style={{ display: `${activeItem === 'backEnd' ? 'block' : 'none'}` }}>
        <BackEndTable />
      </div>
    </div>
  );
};

const TableRow = (resourceIndex, tickSelection) => {
  const resource = profiles[resourceIndex];
  return (
    <Table.Row>
      <Table.Cell>
        <a target="_blank" rel="noopener noreferrer" href={resource.url}>
          <Icon name="arrow right" />
          {resource.name}
        </a>
      </Table.Cell>
      {resource[tickSelection].map((tick, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Table.Cell key={resource.key + index} icon={tick && <Icon name="check" />} />
      ))}
    </Table.Row>
  );
};

const FrontEndTable = () => (
  <Table unstackable inverted attached="bottom" celled columns={5} textAlign="center" verticalAlign="middle" className="resources-table">
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell width="8" />
        <Table.HeaderCell icon={<IconPopup name="HTML5" classN="devicon-html5-plain-wordmark" />} />
        <Table.HeaderCell icon={<IconPopup name="CSS3" classN="devicon-css3-plain-wordmark" />} />
        <Table.HeaderCell icon={<IconPopup name="JavaScript" classN="devicon-javascript-plain" />} />
        <Table.HeaderCell icon={<IconPopup name="React" classN="devicon-react-plain" />} />
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {TableRow(0, 'frontEndTicks')}
      {TableRow(1, 'frontEndTicks')}
      {TableRow(2, 'frontEndTicks')}
    </Table.Body>
  </Table>
);

const BackEndTable = () => (
  <Table unstackable inverted attached="bottom" celled columns={5} textAlign="center" verticalAlign="middle" className="resources-table">
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell width="8" />
        <Table.HeaderCell><IconPopup name="Node.js" classN="devicon-nodejs-plain" /></Table.HeaderCell>
        <Table.HeaderCell><IconPopup name="Express" classN="devicon-express-original" /></Table.HeaderCell>
        <Table.HeaderCell><IconPopup name="MongoDB" classN="devicon-mongodb-plain-wordmark" /></Table.HeaderCell>
        <Table.HeaderCell><IconPopup name="Mocha" classN="devicon-mocha-plain" /></Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {TableRow(0, 'backEndTicks')}
      {TableRow(1, 'backEndTicks')}
      {TableRow(2, 'backEndTicks')}
    </Table.Body>
  </Table>
);

const ResourcesTable = () => (
  <FrontEndBackEndSelector />
);

export default ResourcesTable;
