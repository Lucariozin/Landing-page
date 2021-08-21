import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 3rem;

  @media (max-width: 640px) {
    text-align: center;
  }
`;

export const Title = styled.div`
  margin-bottom: 1rem;
`;

export const TextContainer = styled.div``;

export const GridContainer = styled.div`
  margin: 0 auto;
  margin-top: 7rem;

  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

export const ItemText = styled.div`
  width: 100%;
`;

export const TextContent = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  width: 100%;
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  max-height: 36rem;
`;

export const ItemImage = styled.img`
  width: 100%;
  transition: 300ms all ease-in-out;

  &:hover {
    transform: translate(-3%, 3%) scale(1.2) rotate(5deg);
  }
`;
