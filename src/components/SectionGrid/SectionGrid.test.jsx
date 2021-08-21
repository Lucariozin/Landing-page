import { render, screen } from '@testing-library/react';
import { SectionGrid } from '.';
import { textMock, imageMock } from './mock';

describe('<SectionGrid />', () => {
  it('should render <SectionGrid /> with textMock', () => {
    render(<SectionGrid {...textMock} />);

    expect(screen.getByRole('heading', { name: /My grid/i }));
    expect(screen.getByText(/Uma breve descrição./i));
    expect(screen.getAllByText(/Teste/i)).toHaveLength(3);
    expect(screen.getAllByText(/Lorem ipsum dolor sit/i)).toHaveLength(3);
  });

  it('should render <SectionGrid /> with imageMock', () => {
    render(<SectionGrid {...imageMock} />);

    expect(screen.getByRole('heading', { name: /Gallery/i }));
    expect(screen.getByText(/Uma breve descrição./i));
    expect(screen.getAllByAltText(/Teste/i)).toHaveLength(6);
  });

  it('should to match snapshot', () => {
    const { container } = render(<SectionGrid {...textMock} />);
    expect(container).toMatchSnapshot();
  });
});
