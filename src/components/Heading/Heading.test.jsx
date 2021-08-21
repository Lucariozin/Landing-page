import { render, screen } from '@testing-library/react';
import { Heading } from '.';

describe('<Heading />', () => {
  it('should render with default values', () => {
    render(<Heading>Title</Heading>);

    const heading = screen.getByRole('heading', { name: 'Title' });

    expect(heading).toHaveStyle({
      'font-size': '6.4rem',
      'text-transform': 'none',
    });
    expect(heading).toHaveStyleRule('color', 'var(--primary-color)');
  });

  it('should render with uppercase letters', () => {
    render(<Heading upperCase>Title</Heading>);

    const heading = screen.getByRole('heading', { name: 'Title' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render with white color', () => {
    render(<Heading lightColor>Title</Heading>);

    const heading = screen.getByRole('heading', { name: 'Title' });
    expect(heading).toHaveStyleRule('color', 'var(--white)');
  });

  it('should render with small size', () => {
    render(
      <Heading size="small" lightColor>
        Title
      </Heading>,
    );

    const heading = screen.getByRole('heading', { name: 'Title' });
    expect(heading).toHaveStyleRule('font-size', '2.4rem');
  });

  it('should render with medium size', () => {
    render(
      <Heading size="medium" lightColor>
        Title
      </Heading>,
    );

    const heading = screen.getByRole('heading', { name: 'Title' });
    expect(heading).toHaveStyleRule('font-size', '3.2rem');
  });

  it('should render with big size', () => {
    render(
      <Heading size="big" lightColor>
        Title
      </Heading>,
    );

    const heading = screen.getByRole('heading', { name: 'Title' });
    expect(heading).toHaveStyleRule('font-size', '4rem');
  });

  it('should render correctly huge size', () => {
    render(
      <Heading size="huge" lightColor>
        Title
      </Heading>,
    );

    const heading = screen.getByRole('heading', { name: 'Title' });
    expect(heading).toHaveStyleRule('font-size', '4rem', {
      media: '(max-width: 768px)',
    });
  });

  it('should render as h6', () => {
    const { container } = render(<Heading as="h6">Title</Heading>);

    const h6 = container.querySelector('h6');
    expect(h6.tagName.toLowerCase()).toBe('h6');
  });

  it('should to match snapshot', () => {
    const { container } = render(<Heading>Title</Heading>);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        color: var(--primary-color);
        font-size: 6.4rem;
        text-transform: none;
      }

      @media (max-width:768px) {
        .c0 {
          font-size: 4rem;
        }
      }

      <div>
        <h1
          class="c0"
        >
          Title
        </h1>
      </div>
    `);
  });
});
