import P from 'prop-types';

import { MenuLink } from '../MenuLink';
import { Heading } from '../Heading';

import * as Styled from './styles';

import { useState } from 'react';

export function Nav({ linksData }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function handleClick() {
    setShowMobileMenu((state) => !state);
  }

  return (
    <>
      <Styled.ToggleMenu show={showMobileMenu} onClick={handleClick} />

      <Styled.BackArrow href="#" target="_self">
        {' '}
        <Styled.ArrowSpan>➤</Styled.ArrowSpan>{' '}
      </Styled.BackArrow>

      <Styled.Container show={showMobileMenu}>
        <Styled.Wrapper>
          <Heading as="h1" size="small" upperCase>
            <Styled.LogoLink href="#" alt="logo" onClick={handleClick}>
              logo
            </Styled.LogoLink>
          </Heading>

          <Styled.LinksContainer onClick={handleClick}>
            {linksData.map((link, index) => (
              <MenuLink key={index} to={link.to} newTab={link.newTab}>
                {link.text}
              </MenuLink>
            ))}
          </Styled.LinksContainer>
        </Styled.Wrapper>
      </Styled.Container>
    </>
  );
}

Nav.propTypes = {
  linksData: P.arrayOf(
    P.shape({
      text: P.string,
      newTab: P.bool,
      to: P.string,
    }).isRequired,
  ),
};
