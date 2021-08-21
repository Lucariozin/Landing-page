import { FooterMessage } from '.';
import { render, screen } from '@testing-library/react';

describe('<FooterMessage />', () => {
  it('should render FooterMessage correctly', () => {
    render(<FooterMessage />);

    expect(screen.getByText(/Feito com/i));
  });

  it('should to match snapshot', () => {
    const { container } = render(<FooterMessage />);
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        color: var(--secondary-color);
      }

      .c0 {
        color: var(--primary-color);
        font-style: normal;
        font-size: 1.6rem;
      }

      <div>
        <p
          class="c0"
        >
          Feito com 
          <span
            class="c1"
          >
            ❤
          </span>
           por
           
          <a
            class=""
            href="https://github.com/Lucariozin"
            rel="nofollow"
            target="_blank"
          >
            Lucas Felix
          </a>
        </p>
      </div>
    `);
  });
});
