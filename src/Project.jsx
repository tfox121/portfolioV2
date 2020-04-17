import React from 'react';
import {
  Button, Container, Grid, Header, Popup, Image,
} from 'semantic-ui-react';

import './Project.css';

const Project = (props) => {
  const { project, color } = props;
  const {
    name,
    id,
    date,
    description,
    image,
    tech,
    githubFE,
    githubBE,
  } = project;

  if (!name) {
    return null;
  }

  const buttonOrPopup = () => {
    if (githubBE) {
      return (
        <Popup
          trigger={<Button>See it on GitHub</Button>}
          content={(
            <Grid centered columns={2} verticalAlign="middle" className="github-buttons">
              <Grid.Row>
                <Grid.Column>
                  <Button as="a" href={githubFE} target="_blank">Front End</Button>
                </Grid.Column>
                <Grid.Column>
                  <Button as="a" href={githubBE} target="_blank">Back End</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          )}
          on="click"
          basic
        />
      );
    }
    return (
      <Button as="a" href={githubFE} target="_blank">See it on GitHub</Button>
    );
  };

  return (
    <div className="project" id={id} style={{ backgroundColor: `${color}` }}>
      <Container text textAlign="center">
        <Header as="h2">{name}</Header>
        <Header as="h3">{date}</Header>
        <p className="description">{description}</p>
        <Grid centered columns={1} className="icons">
          <Grid.Row>
            <Grid.Column><Image src={image} alt="project" rounded bordered /></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column><ul>{tech.map((item) => <li key={item}>{item}</li>)}</ul></Grid.Column>
          </Grid.Row>
        </Grid>
        {buttonOrPopup()}
      </Container>
    </div>
  );
};

export default Project;
