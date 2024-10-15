import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Checkbox Component', () => {
  it('should render the checkbox', () => {
    render(<Checkbox checked={false} onChange={vi.fn()} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  it('should render the label when provided', () => {
    render(
      <Checkbox label="Accept Terms" checked={false} onChange={vi.fn()} />
    );
    const label = screen.getByText('Accept Terms');
    expect(label).toBeInTheDocument();
  });

  it('should trigger onChange with true when checkbox is checked', () => {
    const handleChange = vi.fn();

    render(
      <Checkbox label="Accept Terms" checked={false} onChange={handleChange} />
    );

    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('should trigger onChange with false when checkbox is unchecked', () => {
    const handleChange = vi.fn();

    render(
      <Checkbox label="Accept Terms" checked={true} onChange={handleChange} />
    );

    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledWith(false);
  });
});
