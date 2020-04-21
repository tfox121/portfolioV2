import React from 'react';
import {
  Button, Container, Grid, Header, Popup, Icon, Image, Modal, Reveal, Segment,
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

  const MouseEnterHandler = () => {
    if (ref) {
      const imageNode = ref.current.querySelector('.ui.content > .image');
      const node = ref.current.querySelector('.ui.reveal > div.ui.content.text');
      if (imageNode) {
        imageNode.style.filter = 'blur(2px)';
        node.style.opacity = '1';
        node.style.visibility = 'visible';
      }
    }
  };

  const MouseLeaveHandler = () => {
    if (ref) {
      const imageNode = ref.current.querySelector('.ui.content > .image');
      const node = ref.current.querySelector('.ui.reveal > div.ui.content.text');
      if (imageNode) {
        imageNode.style.filter = 'blur(0)';
        node.style.opacity = '0';
        node.style.visibility = 'hidden';
      }
    }
  };

  return (
    <div className="project section" id={id} ref={ref} style={{ backgroundColor: `${color}` }}>
      <Container text textAlign="center">
        <Header as="h2">{name}</Header>
        <Header as="h3">{date}</Header>
        <Segment basic>
          <Modal
            trigger={(
              <Reveal animated="fade" onMouseEnter={MouseEnterHandler} onMouseLeave={MouseLeaveHandler}>
                <Reveal.Content className="text">
                  <Segment className="image-text"><Header>{tech.join(' / ')}</Header></Segment>
                </Reveal.Content>
                <Reveal.Content>
                  <Image src={image} alt="project" rounded bordered />
                </Reveal.Content>
              </Reveal>
            )}
          >
            <Modal.Content image>
              <Image wrapped src={image} alt="project" size="massive" />
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