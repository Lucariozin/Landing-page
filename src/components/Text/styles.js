import styled, { css } from 'styled-components';

const sizes = {
  small: () => css`
    font-size: 1.6rem;
  `,
  medium: () => css`
    font-size: 2rem;
  `,
  big: () => css`
    font-size: 2.4rem;
  `,
};

export const Text = styled.p`
  ${({ lightColor, size, italic }) => css`
    color: ${lightColor ? 'var(--white)' : 'var(--primary-color)'};
    font-style: ${italic ? 'italic' : 'normal'};
    ${sizes[size]()}
  `}
`;
