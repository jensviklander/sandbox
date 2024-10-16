import { render, screen, fireEvent } from '@testing-library/react';
import { CheckboxGroup } from './CheckboxGroup';

describe('CheckboxGroup Component', () => {
  const mockOnChange = vi.fn();

  it('should render the checkbox and label correctly', () => {
    render(
      <CheckboxGroup
        id="checkboxGroup"
        labelText="Accept terms"
        checked={false}
        onChange={mockOnChange}
      />
    );

    const labelElement = screen.getByText('Accept terms');
    const checkboxElement = screen.getByRole('checkbox');

    expect(labelElement).toBeInTheDocument();
    expect(checkboxElement).toBeInTheDocument();
  });

  it('should call the onChange function when the checkbox value changes', () => {
    render(
      <CheckboxGroup
        id="checkboxGroup"
        labelText="Accept terms"
        checked={false}
        onChange={mockOnChange}
      />
    );

    const checkboxElement = screen.getByRole('checkbox');
    fireEvent.click(checkboxElement);

    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  it('should render the checkbox as checked when the checked prop is true', () => {
    render(
      <CheckboxGroup
        id="checkboxGroup"
        labelText="Accept terms"
        checked={true}
        onChange={mockOnChange}
      />
    );

    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeChecked();
  });

  it('should mark the checkbox as required when the required prop is true', () => {
    render(
      <CheckboxGroup
        id="checkboxGroup"
        labelText="Accept terms"
        checked={false}
        required
        onChange={mockOnChange}
      />
    );

    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeRequired();
    expect(checkboxElement).toHaveAttribute('aria-required', 'true');
  });

  it('should display the error message when the error prop is provided', () => {
    render(
      <CheckboxGroup
        id="checkboxGroup"
        labelText="Accept terms"
        checked={false}
        error="This field is required"
        onChange={mockOnChange}
      />
    );

    const errorMessage = screen.getByText('This field is required');
    expect(errorMessage).toBeInTheDocument();

    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toHaveAttribute('aria-invalid', 'true');
  });

  it('should not display the error message when the error prop is not provided', () => {
    render(
      <CheckboxGroup
        id="checkboxGroup"
        labelText="Accept terms"
        checked={false}
        onChange={mockOnChange}
      />
    );

    const errorMessage = screen.queryByText(/This field is required/i);
    expect(errorMessage).not.toBeInTheDocument();
  });
});
