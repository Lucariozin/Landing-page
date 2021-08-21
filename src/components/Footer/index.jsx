import P from 'prop-types';

import * as Styled from './styles';

export function Footer({ children }) {
  return <Styled.Container>{children}</Styled.Container>;
}

Footer.propTypes = {
  children: P.node,
};
