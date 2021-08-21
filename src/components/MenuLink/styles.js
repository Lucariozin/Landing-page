import styled from 'styled-components';

export const Link = styled.a`
  display: block;
  font-size: 1.8rem;
  color: ${'var(--primary-color)'};
  padding: 1.5rem;

  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0.3rem;
    left: 50%;
    width: 0;
    background-color: ${'var(--secondary-color)'};
    height: 0.2rem;

    transition: 300ms all ease-in-out;
  }

  &:hover::after {
    left: 25%;
    width: 50%;
  }
`;
