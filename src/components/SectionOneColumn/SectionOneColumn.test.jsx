import { render, screen } from '@testing-library/react';
import { SectionOneColumn } from '.';
import Mock from './mock';

describe('<SectionOneColumn />', () => {
  it('should render <SectionTwoColumns /> correctly', () => {
    render(<SectionOneColumn {...Mock} />);

    expect(
      screen.getByRole('heading', {
        name: /News coverage and some surprises/i,
      }),
    );

    expect(
      screen.getAllByText(/The release of Apple Silicon-based/i),
    ).toHaveLength(3);
  });

  it('should to match snapshot', () => {
    const { container } = render(<SectionOneColumn {...Mock} />);
    expect(container).toMatchSnapshot();
  });
});
