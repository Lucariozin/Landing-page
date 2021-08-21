import P from 'prop-types';

import * as Styled from './styles';

export function Heading({
  children,
  as = 'h1',
  lightColor = false,
  size = 'huge',
  upperCase = false,
}) {
  return (
    <Styled.Title
      as={as}
      lightColor={lightColor}
      size={size}
      upperCase={upperCase}
    >
      {children}
    </Styled.Title>
  );
}

Heading.propTypes = {
  children: P.node.isRequired,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  lightColor: P.bool,
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
  upperCase: P.bool,
};
