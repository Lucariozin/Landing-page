import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  padding: 1rem;
  padding-top: 8rem;

  ${({ backgroundDark }) => css`
    ${backgroundDark
      ? css`
          background-image: ${'url(assets/img/background.svg)'};
          background-position: center center;
          background-size: cover;

          color: ${'var(--white)'};
        `
      : css`
          background-color: ${'var(--white)'};
          color: ${'var(--primary-color)'};
        `}
  `}
`;

export const Wrapper = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;
