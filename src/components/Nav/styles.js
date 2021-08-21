import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: ${'var(--white)'};
  width: 100%;
  border-bottom: 0.1rem solid ${'var(--light-gray-color)'};
  position: fixed;
  z-index: 2;

  @media (max-width: 800px) {
    ${({ show }) => css`
      display: ${show ? 'flex' : 'none'};
    `}

    min-height: 100vh;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`;

export const ToggleMenu = styled.div`
  z-index: 3;

  width: 4rem;
  height: 4rem;
  padding-bottom: 0.2rem;
  background: ${'var(--primary-color)'};
  color: ${'var(--white)'};

  ${({ show }) => css`
    font-size: ${show ? '5rem' : '3.3rem'};
  `}

  cursor: pointer;

  display: none;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 2rem;
  right: 2rem;

  &::after {
    ${({ show }) => css`
      content: ${show ? "'×'" : "'☰'"};
    `}
  }

  @media (max-width: 800px) {
    display: flex;
  }
`;

export const LogoLink = styled.a``;

export const ArrowSpan = styled.span``;

export const BackArrow = styled.a`
  display: flex;

  text-align: center;
  justify-content: center;

  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid var(--primary-color);
  background: var(--white);
  cursor: pointer;

  position: fixed;
  bottom: 2rem;
  right: 2rem;

  > ${ArrowSpan} {
    font-size: 30px;
    transform: rotate(-91deg);

    position: relative;
    left: 2px;
  }
`;
