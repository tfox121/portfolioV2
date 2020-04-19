import React from 'react';
import {
  Button, Grid, Header, Icon, Popup, Container, Segment,
} from 'semantic-ui-react';

import colours from '../data/colours';
import './Introduction.css';

import SkillsGrid from './SkillsGrid';
import ResourcesTable from './ResourcesTable';

const Introduction = (props, ref) => {
  const { refs } = props;

  const handeArrowClick = () => {
    window.scrollTo(0, refs[0].current.offsetTop);
  };

  const gridWidth = 7;

  return (
    <div className="introduction section" id="intro" ref={ref} style={{ backgroundColor: `${colours[0]}` }}>
      <Container text textAlign="center">
        <Grid verticalAlign="middle" columns={1}>
          <Grid.Row>
            <Grid.Column>
              <Header as="h1">Tom Fox</Header>
              <p className="intro">I am a junior full-stack developer looking for a new challenge! I&apos;ve always had a passion for building/fixing things and solving problems, and I&apos;ve been studying, coding and freelancing for just over a year now. I&apos;m excited to put my hard-earned skills to work in a full-time role.</p>
              <Grid centered columns={2} className="icons">
                <Grid.Row>
                  <Grid.Column width={gridWidth}><Icon name="react" size="massive" /></Grid.Column>
                  <Grid.Column width={gridWidth}><Icon name="node js" size="massive" /></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={gridWidth}><Header>React</Header></Grid.Column>
                  <Grid.Column width={gridWidth}><Header>Node.js</Header></Grid.Column>
                </Grid.Row>
              </Grid>
              <Segment basic>
                <Popup
                  inverted
                  content={<SkillsGrid />}
                  className="big popup"
                  position="bottom center"
                  on="click"
                  pinned
                  trigger={<Button content="See the rest of my skills" />}
                />
                <Popup
                  inverted
                  content={<ResourcesTable />}
                  className="massive popup"
                  position="bottom center"
                  on="click"
                  pinned
                  trigger={<Button content="...and where I got them!" />}
                />
              </Segment>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </Container>
      <Icon onClick={handeArrowClick} name="angle down" size="huge" />
    </div>

  );
};

export default React.forwardRef(Introduction);
