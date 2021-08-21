import { render, screen } from '@testing-library/react';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render MenuLink', () => {
    render(<MenuLink to="#">text</MenuLink>);

    const link = screen.getByRole('link', { name: 'text' });

    expect(link).toHaveAttribute('target', '_self');
  });

  it('should render MenuLink with opening in new tab', () => {
    render(
      <MenuLink to="https://google.com.br/" newTab>
        text
      </MenuLink>,
    );

    const link = screen.getByRole('link', { name: 'text' });

    expect(link).toHaveAttribute('target', '_blank');
  });

  it('should create a snapshot', () => {
    render(<MenuLink to="#">text</MenuLink>);

    const link = screen.getByRole('link', { name: 'text' });

    expect(link).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        font-size: 1.8rem;
        color: var(--primary-color);
        padding: 1.5rem;
        position: relative;
      }

      .c0::after {
        content: '';
        position: absolute;
        bottom: 0.3rem;
        left: 50%;
        width: 0;
        background-color: var(--secondary-color);
        height: 0.2rem;
        -webkit-transition: 300ms all ease-in-out;
        transition: 300ms all ease-in-out;
      }

      .c0:hover::after {
        left: 25%;
        width: 50%;
      }

      <a
        class="c0"
        href="#"
        target="_self"
      >
        text
      </a>
    `);
  });
});
