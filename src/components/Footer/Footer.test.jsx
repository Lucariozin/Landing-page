import { render, screen } from '@testing-library/react';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render Footer correctly', () => {
    render(<Footer>Uma mensagem qualquer</Footer>);

    expect(screen.getByText(/Uma mensagem qualquer/i));
  });

  it('should to match snapshot', () => {
    const { container } = render(<Footer>Uma mensagem qualquer</Footer>);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 100%;
        height: 6rem;
      }

      <div>
        <div
          class="c0"
        >
          Uma mensagem qualquer
        </div>
      </div>
    `);
  });
});
