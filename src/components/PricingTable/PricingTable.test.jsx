import { PricingTable } from '.';
import { render, screen } from '@testing-library/react';

describe('<PricingTable />', () => {
  it('should render PricingTable correctly', () => {
    const { container } = render(<PricingTable />);

    const table = container.querySelector('table');

    expect(screen.getByText(/Pricing table/i));
    expect(table).toBeInTheDocument();
    expect(screen.getAllByText(/Title/i)).toHaveLength(5);
    expect(screen.getAllByText(/Content/i)).toHaveLength(15);
  });

  it('should to match snapshot', () => {
    const { container } = render(<PricingTable />);
    expect(container).toMatchSnapshot();
  });
});
