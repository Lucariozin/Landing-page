import styled, { css } from 'styled-components';

const titleSizes = {
  small: '2.4rem',
  medium: '3.2rem',
  big: '4rem',
  huge: '6.4rem',
};

export const Title = styled.h1`
  ${({ lightColor, size, upperCase }) => css`
    color: ${lightColor ? 'var(--white)' : 'var(--primary-color)'};
    font-size: ${titleSizes[size]};
    text-transform: ${upperCase ? 'uppercase' : 'none'};

    ${size === 'huge' &&
    css`
      @media (max-width: 768px) {
        font-size: ${titleSizes.big};
      }
    `}
  `}
`;
