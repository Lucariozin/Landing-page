import P from 'prop-types';

import * as Styled from './styles';

export function MenuLink({ children, to = '#', newTab = false }) {
  const target = newTab ? '_blank' : '_self';

  return (
    <Styled.Link href={to} target={target}>
      {children}
    </Styled.Link>
  );
}

MenuLink.propTypes = {
  children: P.node.isRequired,
  to: P.string,
  newTab: P.bool,
};
