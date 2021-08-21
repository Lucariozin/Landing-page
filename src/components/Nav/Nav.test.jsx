import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Nav } from '.';
import NavMock from './mock';

describe('<Nav />', () => {
  it('should render <Nav /> correctly', () => {
    render(<Nav linksData={NavMock} />);

    const menuLinks = screen.getAllByRole('link');
    const logo = screen.getByRole('heading', { name: 'logo' });
    const navContainer = logo.parentElement.parentElement;

    expect(menuLinks).toHaveLength(8);

    expect(logo).toBeInTheDocument();

    expect(navContainer).toHaveStyleRule('background-color', 'var(--white)');
    expect(navContainer).toHaveStyleRule('display', 'none', {
      media: '(max-width: 800px)',
    });
  });

  it('should open Menu with click in <ToggleMenu />', () => {
    const { container } = render(<Nav linksData={NavMock} />);

    const toggleMenu = container.firstChild;
    const logo = screen.getByRole('heading', { name: 'logo' });
    const navContainer = logo.parentElement.parentElement;

    expect(toggleMenu).toHaveStyleRule('display', 'flex', {
      media: '(max-width: 800px)',
    });

    userEvent.click(toggleMenu);

    expect(navContainer).toHaveStyleRule('display', 'flex', {
      media: '(max-width: 800px)',
    });

    userEvent.click(toggleMenu);

    expect(navContainer).toHaveStyleRule('display', 'none', {
      media: '(max-width: 800px)',
    });
  });

  it('should to match snapshot', () => {
    const { container } = render(<Nav linksData={NavMock} />);
    expect(container).toMatchSnapshot();
  });
});
