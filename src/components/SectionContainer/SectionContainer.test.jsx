import { render } from '@testing-library/react';
import { SectionContainer } from '.';

describe('<SectionContainer />', () => {
  it('should render <SectionContainer /> with background white', () => {
    const { container } = render(<SectionContainer>Hello</SectionContainer>);

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      'var(--white)',
    );
  });

  it('should render <SectionContainer /> with background dark', () => {
    const { container } = render(
      <SectionContainer backgroundDark>Hello</SectionContainer>,
    );

    expect(container.firstChild).toHaveStyle({
      'background-image': 'url(assets/img/background.svg)',
      'background-size': 'cover',
      'background-position': 'center center',
    });
  });

  it('should to match snapshot', () => {
    const { container } = render(<SectionContainer>Hello</SectionContainer>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
