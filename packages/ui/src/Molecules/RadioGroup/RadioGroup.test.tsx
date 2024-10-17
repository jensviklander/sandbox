import { render, screen, fireEvent } from '@testing-library/react';
import { RadioGroup } from './RadioGroup';

describe('RadioGroup Component', () => {
  const mockOnChange = vi.fn();
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('should render the radio buttons and label correctly', () => {
    render(
      <RadioGroup
        id="radioGroup"
        labelText="Select an option"
        options={options}
        selectedValue=""
        onChange={mockOnChange}
      />
    );

    const labelElement = screen.getByText('Select an option');
    const radioButtons = screen.getAllByRole('radio');

    expect(labelElement).toBeInTheDocument();
    expect(radioButtons).toHaveLength(3);
    options.forEach((option, index) => {
      expect(radioButtons[index]).toHaveAttribute(
        'id',
        `radioGroup-${option.value}`
      );
      expect(screen.getByLabelText(option.label)).toBeInTheDocument();
    });
  });

  it('should call the onChange function when a radio button is selected', () => {
    render(
      <RadioGroup
        id="radioGroup"
        labelText="Select an option"
        options={options}
        selectedValue=""
        onChange={mockOnChange}
      />
    );

    const radioButton = screen.getByLabelText('Option 1');
    fireEvent.click(radioButton);

    expect(mockOnChange).toHaveBeenCalledWith('option1');
  });

  it('should render the radio button as checked when the selectedValue matches', () => {
    render(
      <RadioGroup
        id="radioGroup"
        labelText="Select an option"
        options={options}
        selectedValue="option2"
        onChange={mockOnChange}
      />
    );

    const radioButton = screen.getByLabelText('Option 2');
    expect(radioButton).toBeChecked();
  });

  it('should mark the radio buttons as required when the required prop is true', () => {
    render(
      <RadioGroup
        id="radioGroup"
        labelText="Select an option"
        options={options}
        selectedValue=""
        required
        onChange={mockOnChange}
      />
    );

    const radioButtons = screen.getAllByRole('radio');
    radioButtons.forEach((radioButton) => {
      expect(radioButton).toBeRequired();
      expect(radioButton).toHaveAttribute('aria-required', 'true');
    });
  });

  it('should display the error message when the error prop is provided', () => {
    render(
      <RadioGroup
        id="radioGroup"
        labelText="Select an option"
        options={options}
        selectedValue=""
        error="This field is required"
        onChange={mockOnChange}
      />
    );

    const errorMessage = screen.getByText('This field is required');
    expect(errorMessage).toBeInTheDocument();

    const radioButtons = screen.getAllByRole('radio');
    radioButtons.forEach((radioButton) => {
      expect(radioButton).toHaveAttribute('aria-invalid', 'true');
    });
  });

  it('should not display the error message when the error prop is not provided', () => {
    render(
      <RadioGroup
        id="radioGroup"
        labelText="Select an option"
        options={options}
        selectedValue=""
        onChange={mockOnChange}
      />
    );

    const errorMessage = screen.queryByText(/This field is required/i);
    expect(errorMessage).not.toBeInTheDocument();
  });

  it('should trigger the onBlur event when a radio button loses focus', () => {
    const mockOnBlur = vi.fn();
    render(
      <RadioGroup
        id="radioGroup"
        labelText="Select an option"
        options={options}
        selectedValue=""
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );

    const radioButton = screen.getByLabelText('Option 1');
    fireEvent.blur(radioButton);

    expect(mockOnBlur).toHaveBeenCalled();
  });
});
