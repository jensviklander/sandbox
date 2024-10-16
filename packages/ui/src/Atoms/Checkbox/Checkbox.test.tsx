import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Checkbox Component', () => {
  it('should render the checkbox', () => {
    render(<Checkbox id="checkbox" checked={false} onChange={vi.fn()} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  it('should trigger onChange with true when checkbox is checked', () => {
    const handleChange = vi.fn();

    render(<Checkbox id="checkbox" checked={false} onChange={handleChange} />);

    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('should trigger onChange with false when checkbox is unchecked', () => {
    const handleChange = vi.fn();

    render(<Checkbox id="checkbox" checked={true} onChange={handleChange} />);

    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledWith(false);
  });
});
