import { render, screen } from '@testing-library/react';
import { Icon, IconNames } from './Icon';

vi.mock('react-icons/io5', () => ({
  IoTrash: () => <svg data-testid="mock-io-trash" />
}));
vi.mock('react-icons/fa', () => ({
  FaSort: () => <svg data-testid="mock-fa-sort" />,
  FaSortUp: () => <svg data-testid="mock-fa-sort-up" />,
  FaSortDown: () => <svg data-testid="mock-fa-sort-down" />
}));

describe('Icon Component', () => {
  it("should render the IoTrash icon when 'trash' is passed as name", () => {
    render(<Icon name="trash" />);

    const trashIcon = screen.getByTestId('mock-io-trash');
    expect(trashIcon).toBeInTheDocument();
  });

  it("should render the FaSort icon when 'sort' is passed as name", () => {
    render(<Icon name="sort" />);

    const sortIcon = screen.getByTestId('mock-fa-sort');
    expect(sortIcon).toBeInTheDocument();
  });

  it("should render the FaSortUp icon when 'sortAsc' is passed as name", () => {
    render(<Icon name="sortAsc" />);

    const sortUpIcon = screen.getByTestId('mock-fa-sort-up');
    expect(sortUpIcon).toBeInTheDocument();
  });

  it("should render the FaSortDown icon when 'sortDesc' is passed as name", () => {
    render(<Icon name="sortDesc" />);

    const sortDownIcon = screen.getByTestId('mock-fa-sort-down');
    expect(sortDownIcon).toBeInTheDocument();
  });

  it('should not render any icon when an invalid name is passed', () => {
    const { container } = render(
      <Icon name={'invalidIconName' as IconNames} />
    );

    expect(container.firstChild).toBeNull();
  });
});
