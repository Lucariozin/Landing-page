import { render, screen } from '@testing-library/react';
import { Text } from '.';

describe('<Text />', () => {
  it('should render with default values', () => {
    render(<Text>Lorem ipsum dolor</Text>);

    const p = screen.getByText(/Lorem ipsum dolor/i);

    expect(p).toHaveStyle({
      'font-size': '2rem',
    });
    expect(p).toHaveStyleRule('color', 'var(--primary-color)');
  });

  it('should render with color Light', () => {
    render(<Text lightColor>Lorem ipsum dolor</Text>);

    const p = screen.getByText(/Lorem ipsum dolor/i);

    expect(p).toHaveStyleRule('color', 'var(--white)');
  });

  it('should to match snapshot', () => {
    const { container } = render(<Text>Lorem ipsum dolor</Text>);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        color: var(--primary-color);
        font-style: normal;
        font-size: 2rem;
      }

      <div>
        <p
          class="c0"
        >
          Lorem ipsum dolor
        </p>
      </div>
    `);
  });
});
