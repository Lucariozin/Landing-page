import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 2fr;
  gap: 2rem;

  margin-top: 3rem;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;

    text-align: center;
  }
`;

export const TextContainer = styled.div``;

export const Title = styled.div`
  margin-bottom: 5rem;
`;

export const Image = styled.img`
  width: 100%;
`;
