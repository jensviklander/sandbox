import { render, screen, fireEvent } from '@testing-library/react';
import { IconButton } from './IconButton';

describe('IconButton Component', () => {
  it('should render the correct icon', () => {
    render(<IconButton icon="trash" onClick={vi.fn()} />);

    const icon = screen.getByTestId('trash');
    expect(icon).toBeInTheDocument();
  });

  it('should call onClick when button is clicked', () => {
    const handleClick = vi.fn();
    render(<IconButton icon="trash" onClick={handleClick} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should render the button element', () => {
    render(<IconButton icon="sort" onClick={vi.fn()} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
