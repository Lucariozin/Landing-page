import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 8rem 0;

  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: 2rem;

  @media (max-width: 950px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ContactImg = styled.img`
  width: 100%;
`;

export const ImgContainer = styled.div`
  @media (max-width: 950px) {
    display: none;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputEmail = styled.input`
  font-size: 1.6rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  min-width: 30rem;
  width: 100%;
`;

export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: flex-start;

    ${InputEmail} {
      min-width: 10rem;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  font-size: 1.6rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  max-width: 15rem;
  width: 100%;
`;

export const TextArea = styled.textarea`
  margin: 2rem 0;
  padding: 1rem;
  font-size: 1.6rem;
  border-radius: 0.5rem;
  resize: none;
  max-width: 64rem;
  width: 100%;
  height: 15rem;
`;

export const Button = styled.button`
  margin-top: 2rem;
  max-width: 15rem;
  font-size: 1.6rem;
  font-weight: 600;
  border-radius: 0.5rem;
  border: 0.2rem solid var(--white);

  padding: 1rem;

  transition: 300ms all ease-in-out;

  &:hover {
    filter: brightness(0.8);
    color: var(--white);
    background: transparent;
    border: 0.2rem solid var(--white);
  }
`;
