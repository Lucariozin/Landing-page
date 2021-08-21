import P from 'prop-types';

import * as Styled from './styles';

import { SectionContainer } from '../SectionContainer';
import { Heading } from '../Heading';
import { Text } from '../Text';

export function SectionTwoColumns({
  title,
  description,
  image,
  children,
  idRef = '',
}) {
  return (
    <SectionContainer backgroundDark idRef={idRef}>
      <Styled.Container>
        <Styled.TextContainer>
          <Styled.Title>
            <Heading lightColor as="h2" upperCase>
              {title}
            </Heading>
          </Styled.Title>

          <Text lightColor>{description}</Text>
        </Styled.TextContainer>

        <Styled.Image src={image.src} alt={image.alt} />
      </Styled.Container>

      {children}
    </SectionContainer>
  );
}

SectionTwoColumns.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  image: P.shape({
    src: P.string,
    alt: P.string,
  }),
  children: P.node,
  idRef: P.string,
};
