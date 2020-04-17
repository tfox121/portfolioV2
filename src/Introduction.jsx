import React from 'react';
import {
  Button, Grid, Header, Icon, Popup, Container,
} from 'semantic-ui-react';

import './Introduction.css';

const PopupRender = (props) => {
  const { name, classN } = props;
  return (
    <Popup
      trigger={<i className={classN} />}
      content={name}
      basic
    />
  );
};

const PopupContent = () => (
  <Grid centered columns={2} verticalAlign="middle" divided>
    <Grid.Row>
      <Grid.Column>
        <Header as="h4" content="Front End" />
        <Grid centered columns={3} verticalAlign="middle" className="skills-sub-grid">
          <Grid.Row>
            <Grid.Column><PopupRender name="HTML5" classN="devicon-html5-plain-wordmark" /></Grid.Column>
            <Grid.Column><PopupRender name="CSS3" classN="devicon-css3-plain-wordmark" /></Grid.Column>
            <Grid.Column><PopupRender name="D3" classN="devicon-d3js-plain" /></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column><PopupRender name="JavaScript" classN="devicon-javascript-plain" /></Grid.Column>
            <Grid.Column><PopupRender name="jQuery" classN="devicon-jquery-plain-wordmark" /></Grid.Column>
            <Grid.Column>
              <Popup
                trigger={<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width="1em" height="1em" style={{ msTransform: 'rotate(360deg)', WebkitTransform: 'rotate(360deg)', transform: 'rotate(360deg)' }} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" className="iconify" data-icon="simple-icons:redux" data-inline="false"><path d="M16.633 16.504c.869-.075 1.543-.84 1.499-1.754c-.046-.914-.795-1.648-1.708-1.648h-.061a1.71 1.71 0 0 0-1.648 1.769c.03.479.226.869.494 1.153c-1.048 2.038-2.621 3.536-5.004 4.795c-1.603.838-3.296 1.154-4.944.929c-1.378-.194-2.456-.81-3.116-1.798c-.988-1.499-1.078-3.116-.255-4.734c.601-1.169 1.499-2.023 2.099-2.443a9.96 9.96 0 0 1-.42-1.542C-.867 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456c.599 0 1.229-.044 1.843-.194c3.896-.749 6.847-3.086 8.54-6.532l.014-.031zm5.348-3.746c-2.321-2.727-5.738-4.225-9.634-4.225h-.51c-.253-.554-.837-.899-1.497-.899h-.045c-.943 0-1.678.81-1.647 1.753c.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 0 0 1.498-1.049h.555c2.309 0 4.495.674 6.488 1.992c1.527 1.004 2.622 2.322 3.236 3.896c.538 1.288.509 2.547-.045 3.597c-.854 1.647-2.293 2.517-4.195 2.517c-1.199 0-2.367-.375-2.967-.644c-.359.298-.959.793-1.394 1.093c1.318.598 2.652.943 3.94.943c2.922 0 5.093-1.647 5.918-3.236c.898-1.798.824-4.824-1.469-7.416l-.014.03zM6.49 17.042a1.724 1.724 0 0 0 1.708 1.648h.06a1.688 1.688 0 0 0 1.648-1.768c0-.899-.779-1.647-1.693-1.647h-.061c-.06 0-.149 0-.225.029c-1.243-2.098-1.768-4.346-1.572-6.771c.119-1.828.719-3.417 1.797-4.735c.899-1.124 2.592-1.679 3.746-1.708c3.236-.061 4.585 3.971 4.689 5.574l1.498.449c-.345-4.914-3.4-7.492-6.322-7.492c-2.742 0-5.273 1.993-6.293 4.915c-1.393 3.896-.479 7.641 1.229 10.638c-.149.195-.239.539-.209.868z" fill="currentColor" /></svg>}
                content="Redux"
                basic
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid.Column>
      <Grid.Column>
        <Header as="h4" content="Back End" />
        <Grid centered columns={3} verticalAlign="middle" className="skills-sub-grid">
          <Grid.Row>
            <Grid.Column><PopupRender name="Express" classN="devicon-express-original" /></Grid.Column>
            <Grid.Column><PopupRender name="MongoDB" classN="devicon-mongodb-plain-wordmark" /></Grid.Column>
            <Grid.Column><PopupRender name="PostgreSQL" classN="devicon-postgresql-plain-wordmark" /></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column><PopupRender name="Mocha" classN="devicon-mocha-plain" /></Grid.Column>
            <Grid.Column><PopupRender name="Linux" classN="devicon-linux-plain" /></Grid.Column>
            <Grid.Column><PopupRender name="Git" classN="devicon-git-plain" /></Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const Introduction = () => (
  <div className="introduction">
    <Container text textAlign="middle">
      <Grid verticalAlign="center" columns={1}>
        <Grid.Row>
          <Grid.Column>
            <Header as="h1">Tom Fox</Header>
            <p className="intro">I am an experienced general manager from the hospitality sector based in Manchester and I&apos;m looking to start my career in web development. I&apos;ve been learning primarily using freeCodeCamp and other free online resources and I&apos;m excited to put my hard-earned skills to work.</p>
            <Grid centered columns={2} className="icons">
              <Grid.Row>
                <Grid.Column><Icon name="react" size="massive" /></Grid.Column>
                <Grid.Column><Icon name="node js" size="massive" /></Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column><Header>React</Header></Grid.Column>
                <Grid.Column><Header>Node.js</Header></Grid.Column>
              </Grid.Row>
            </Grid>
            <Popup
              content={PopupContent()}
              size="big"
              position="bottom center"
              on="click"
              pinned
              trigger={<Button color="grey" content="See the rest of my skills" />}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>

);

export default Introduction;
