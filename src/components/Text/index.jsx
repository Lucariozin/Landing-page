import P from 'prop-types';

import * as Styled from './styles';

export function Text({
  children,
  lightColor = false,
  size = 'medium',
  italic = false,
}) {
  return (
    <Styled.Text lightColor={lightColor} size={size} italic={italic}>
      {children}
    </Styled.Text>
  );
}

Text.propTypes = {
  children: P.node.isRequired,
  lightColor: P.bool,
  size: P.oneOf(['small', 'medium', 'big']),
  italic: P.bool,
};
