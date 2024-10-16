import { render, screen, fireEvent } from '@testing-library/react';
import { InputGroup } from './InputGroup';

describe('InputGroup Component', () => {
  const mockOnChange = vi.fn();

  it('should display the component with the label and input', () => {
    render(
      <InputGroup
        id="inputGroup"
        labelText="Some Label"
        onChange={mockOnChange}
      />
    );

    const labelElement = screen.getByText('Some Label');
    expect(labelElement).toBeInTheDocument();

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  it('should render the input with the correct type', () => {
    render(
      <InputGroup
        id="inputGroup"
        labelText="Some Label"
        type="email"
        onChange={mockOnChange}
      />
    );

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveAttribute('type', 'email');
  });

  it('should render the placeholder when provided', () => {
    render(
      <InputGroup
        id="inputGroup"
        labelText="Some Label"
        placeholder="Enter your text"
        onChange={mockOnChange}
      />
    );

    const inputElement = screen.getByPlaceholderText('Enter your text');
    expect(inputElement).toBeInTheDocument();
  });

  it('should mark the input as required when the required prop is true', () => {
    render(
      <InputGroup
        id="inputGroup"
        labelText="Some Label"
        required
        onChange={mockOnChange}
      />
    );

    screen.debug();

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeRequired();
    expect(inputElement).toHaveAttribute('aria-required', 'true');
  });

  it('should display the error message and set aria-invalid when the error prop is provided', () => {
    render(
      <InputGroup
        id="inputGroup"
        labelText="Some Label"
        error="This field is required"
        onChange={mockOnChange}
      />
    );

    const errorMessage = screen.getByText('This field is required');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage.className).toMatch(/errorMessage/);

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveAttribute('aria-invalid', 'true');
  });

  it('should call the onChange function when input value changes', () => {
    render(
      <InputGroup
        id="inputGroup"
        labelText="Some Label"
        onChange={mockOnChange}
      />
    );

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'New Value' } });

    expect(mockOnChange).toHaveBeenCalledWith('New Value');
  });

  it('should not display error message if no error prop is provided', () => {
    render(
      <InputGroup
        id="inputGroup"
        labelText="Some Label"
        onChange={mockOnChange}
      />
    );

    const errorMessage = screen.queryByText(/This field is required/i);
    expect(errorMessage).not.toBeInTheDocument();
  });
});
