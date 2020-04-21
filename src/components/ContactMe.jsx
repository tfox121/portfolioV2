import React, { useState } from 'react';
import {
  Header, Container, Form, Segment,
} from 'semantic-ui-react';

import './ContactMe.css';
import projects from '../data/projects';
import colours from '../data/colours';

const ContactMe = (props, ref) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [result, setResult] = useState('');

  const sendMessage = async () => {
    const url = 'https://qnfwo92feh.execute-api.eu-west-1.amazonaws.com/prod/contact';
    const data = { name, email, message };

    const fetchData = {
      method: 'POST',
      body: JSON.stringify(data),
    };
    try {
      const responseBody = await fetch(url, fetchData);

      const response = await responseBody.json();
      setResult(response.message);
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setResult('Sorry your message could not be sent, please try again!');
      console.error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <div
      className="contact-me section"
      id="contactMe"
      ref={ref}
      style={{
        backgroundColor: colours[(projects.length + 1) % colours.length],
        color: colours[(projects.length + 1) % colours.length],
      }}
    >
      <Container text textAlign="center">
        <Header as="h2">Get in touch!</Header>
        <Segment inverted>
          <Form action="submit" onSubmit={handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input fluid label="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
              <Form.Input fluid label="Your email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Form.TextArea rows="5" label="Your message" value={message} onChange={(e) => setMessage(e.target.value)} />
            <p>{result}</p>
            <Form.Button type="submit" disabled={success} inverted>Submit</Form.Button>
          </Form>
        </Segment>
      </Container>
    </div>
  );
};

export default React.forwardRef(ContactMe);
