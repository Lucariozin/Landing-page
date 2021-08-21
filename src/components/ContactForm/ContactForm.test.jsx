import { ContactForm } from '.';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<ContactForm />', () => {
  it('should render ContactForm correctly', () => {
    const { container } = render(<ContactForm />);

    const button = container.querySelector('button');
    const input = container.querySelector('input[placeholder]');

    expect(screen.getAllByPlaceholderText(/Your/i)).toHaveLength(4);
    expect(button).toHaveTextContent(/Send message/i);
    expect(screen.getByAltText(/Imagem representando formas de contato/i));

    userEvent.type(input, 'test');
    expect(input).toHaveValue('test');
  });

  it('should to match snapshot', () => {
    const { container } = render(<ContactForm />);
    expect(container).toMatchSnapshot();
  });
});
