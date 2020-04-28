import React from 'react';
import {
  Button, Container, Grid, Header, Popup, Icon, Image, Modal, Segment,
} from 'semantic-ui-react';

import './Project.css';

const Project = (props, ref) => {
  const { project, color } = props;
  const {
    name,
    id,
    date,
    description,
    image,
    tech,
    url,
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
          trigger={(
            <Button>
              <div className="button-text">
                <Icon name="github" />
                GitHub
              </div>
            </Button>
          )}
          content={(
            <Grid centered columns={1} verticalAlign="middle" className="github-buttons">
              <Grid.Row>
                <Grid.Column>
                  <Button as="a" href={githubFE} target="_blank" rel="noopener noreferrer">Front End</Button>
                  <Button as="a" href={githubBE} target="_blank" rel="noopener noreferrer">Back End</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          )}
          on="click"
          position="top center"
          size="large"
          basic
        />
      );
    }
    return (
      <Button as="a" href={githubFE} target="_blank" rel="noopener noreferrer">
        <div className="button-text">
          <Icon name="github" />
          GitHub
        </div>
      </Button>
    );
  };

  const launchButton = () => {
    if (url) {
      return (
        <Button as="a" href={url} target="_blank" rel="noopener noreferrer">
          <div className="button-text">
            <Icon name="rocket" />
            Launch
          </div>
        </Button>
      );
    }
    return null;
  };

  return (
    <div className="project section" id={id} ref={ref} style={{ backgroundColor: `${color}` }}>
      <Container text textAlign="center">
        <Header as="h2">{name}</Header>
        <Header as="h3">{date}</Header>
        <Segment basic>
          <Modal
            trigger={(
              <div className="image-container">
                <Image src={process.env.PUBLIC_URL + image} alt="project" rounded bordered />
                <div className="image-text"><Header>{tech.join(' / ')}</Header></div>
              </div>
            )}
          >
            <Modal.Content image>
              <Image wrapped src={process.env.PUBLIC_URL + image} alt="project" size="massive" />
            </Modal.Content>
          </Modal>
        </Segment>
        <p className="description">{description}</p>

        <Segment basic>
          {buttonOrPopup()}
          {launchButton()}
        </Segment>
      </Container>
    </div>
  );
};

export default React.forwardRef(Project);
