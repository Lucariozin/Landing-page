import { render, screen } from '@testing-library/react';
import { SectionTwoColumns } from '.';
import Mock from './mock';

describe('<SectionTwoColumns />', () => {
  it('should render <SectionTwoColumns /> correctly', () => {
    render(<SectionTwoColumns {...Mock} />);

    expect(screen.getByText('January brings us firefox 85'));
    expect(screen.getByText(/CSS and associated devtools/i));
    expect(screen.getAllByAltText('Uma imagem qualquer'));
  });

  it('should to match snapshot', () => {
    const { container } = render(<SectionTwoColumns {...Mock} />);
    expect(container).toMatchSnapshot();
  });
});
