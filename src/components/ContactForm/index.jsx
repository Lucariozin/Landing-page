import P from 'prop-types';
import { useState } from 'react';
import * as Styled from './styles';

export function ContactForm({ idRef = '' }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleClick(e) {
    e.preventDefault();

    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');

    console.log(firstName, lastName, email, message);
  }

  return (
    <Styled.Container id={idRef}>
      <Styled.ImgContainer>
        <Styled.ContactImg
          src="assets/img/contact.svg"
          alt="Imagem representando formas de contato"
        />
      </Styled.ImgContainer>
      <Styled.Form>
        <Styled.InputsContainer>
          <Styled.Label>
            First name
            <Styled.Input
              type="text"
              placeholder="Your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Styled.Label>

          <Styled.Label>
            Last name
            <Styled.Input
              type="text"
              placeholder="Your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Styled.Label>

          <Styled.Label>
            E-mail
            <Styled.InputEmail
              type="email"
              placeholder="Your e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Styled.Label>
        </Styled.InputsContainer>

        <Styled.TextArea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Styled.Button type="submit" onClick={handleClick}>
          Send message
        </Styled.Button>
      </Styled.Form>
    </Styled.Container>
  );
}

ContactForm.propTypes = {
  idRef: P.string,
};
