import P from 'prop-types';
import * as Styled from './styles';

export function SectionContainer({
  children,
  backgroundDark = false,
  idRef = '',
}) {
  return (
    <Styled.Container backgroundDark={backgroundDark} id={idRef}>
      <Styled.Wrapper>{children}</Styled.Wrapper>
    </Styled.Container>
  );
}

SectionContainer.propTypes = {
  children: P.node.isRequired,
  backgroundDark: P.bool,
  idRef: P.string,
};
