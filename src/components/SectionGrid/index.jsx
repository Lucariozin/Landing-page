import P from 'prop-types';

import * as Styled from './styles';

import { SectionContainer } from '../SectionContainer';
import { Heading } from '../Heading';
import { Text } from '../Text';

export function SectionGrid({
  title,
  description,
  gridItemsText = [],
  gridItemsImages = [],
  backgroundDark = false,
  idRef = '',
}) {
  return (
    <SectionContainer backgroundDark={backgroundDark} idRef={idRef}>
      <Styled.Container>
        <Styled.TextContainer>
          <Styled.Title>
            <Heading lightColor={backgroundDark} as="h2" upperCase>
              {title}
            </Heading>
          </Styled.Title>

          <Text lightColor={backgroundDark}>{description}</Text>
        </Styled.TextContainer>

        <Styled.GridContainer>
          {!!gridItemsText &&
            gridItemsText.map((itemText, index) => (
              <Styled.ItemText key={index}>
                <Heading as="h3" size="medium" lightColor>
                  {itemText.title}
                </Heading>

                <Styled.TextContent>
                  <Text lightColor>{itemText.content}</Text>
                </Styled.TextContent>
              </Styled.ItemText>
            ))}

          {!!gridItemsImages &&
            gridItemsImages.map((itemImage, index) => (
              <Styled.ImageContainer key={index}>
                <Styled.ItemImage src={itemImage.src} alt={itemImage.alt} />
              </Styled.ImageContainer>
            ))}
        </Styled.GridContainer>
      </Styled.Container>
    </SectionContainer>
  );
}

SectionGrid.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  backgroundDark: P.bool,
  gridItemsText: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      content: P.string.isRequired,
    }),
  ),
  gridItemsImages: P.arrayOf(
    P.shape({
      src: P.string.isRequired,
      alt: P.string.isRequired,
    }),
  ),
  idRef: P.string,
};
