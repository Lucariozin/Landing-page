import P from 'prop-types';

import * as Styled from './styles';

import { SectionContainer } from '../SectionContainer';
import { Heading } from '../Heading';
import { Text } from '../Text';

export function SectionOneColumn({ title, paragraphs, children, idRef = '' }) {
  return (
    <SectionContainer idRef={idRef}>
      <Styled.Container>
        <Styled.Title>
          <Heading as="h2" upperCase>
            {title}
          </Heading>
        </Styled.Title>

        <Styled.Content>
          {paragraphs.map((paragraph, index) => (
            <Text key={index}>{paragraph}</Text>
          ))}
        </Styled.Content>

        {children}
      </Styled.Container>
    </SectionContainer>
  );
}

SectionOneColumn.propTypes = {
  title: P.string.isRequired,
  paragraphs: P.arrayOf(P.string).isRequired,
  children: P.node,
  idRef: P.string,
};
