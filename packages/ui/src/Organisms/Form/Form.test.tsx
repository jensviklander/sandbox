import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Form } from './Form';

vi.mock('../../Molecules/InputGroup/InputGroup', () => ({
  InputGroup: ({ id, labelText, error, onChange, onBlur }: any) => (
    <div data-testid={`input-group-${id}`}>
      <span>{labelText}</span>
      <input
        type="text"
        placeholder={labelText}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        aria-label={labelText}
        data-testid={`input-${id}`}
      />
      {error && <span data-testid={`error-${id}`}>{error}</span>}
    </div>
  )
}));

vi.mock('../../Molecules/CheckboxGroup/CheckboxGroup', () => ({
  CheckboxGroup: ({ id, labelText, error, onChange, onBlur, checked }: any) => (
    <div data-testid={`checkbox-group-${id}`}>
      <span>{labelText}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        onBlur={onBlur}
        aria-label={labelText}
        data-testid={`checkbox-${id}`}
      />
      {error && <span data-testid={`error-${id}`}>{error}</span>}
    </div>
  )
}));

vi.mock('../../Molecules/RadioGroup/RadioGroup', () => ({
  RadioGroup: ({
    id,
    labelText,
    options,
    error,
    onChange,
    onBlur,
    selectedValue
  }: any) => (
    <div data-testid={`radio-group-${id}`}>
      <span>{labelText}</span>
      {options.map((option: any) => (
        <div key={option.value}>
          <input
            type="radio"
            name={id}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            onBlur={onBlur}
            aria-label={option.label}
            data-testid={`radio-${id}-${option.value}`}
          />
          <label>{option.label}</label>
        </div>
      ))}
      {error && <span data-testid={`error-${id}`}>{error}</span>}
    </div>
  )
}));

describe('Form Component', () => {
  const fields = [
    {
      name: 'username',
      label: 'Username',
      type: 'text' as const,
      required: true
    },
    { name: 'email', label: 'Email', type: 'email' as const, required: true },
    {
      name: 'password',
      label: 'Password',
      type: 'password' as const,
      required: true
    },
    {
      name: 'terms',
      label: 'Accept Terms and Conditions',
      type: 'checkbox' as const,
      required: true
    },
    {
      name: 'gender',
      label: 'Gender',
      type: 'radio' as const,
      required: true,
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' }
      ]
    }
  ];

  const mockOnSubmit = vi.fn();

  beforeEach(() => {
    mockOnSubmit.mockClear();
  });

  it('should render the form fields correctly', () => {
    render(
      <Form fields={fields} onSubmit={mockOnSubmit} buttonText="Submit" />
    );

    expect(screen.getByTestId('input-group-username')).toBeInTheDocument();
    expect(screen.getByTestId('input-group-email')).toBeInTheDocument();
    expect(screen.getByTestId('input-group-password')).toBeInTheDocument();
    expect(screen.getByTestId('checkbox-group-terms')).toBeInTheDocument();
    expect(screen.getByTestId('radio-group-gender')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('should update the input values when changed', () => {
    render(
      <Form fields={fields} onSubmit={mockOnSubmit} buttonText="Submit" />
    );

    const usernameInput = screen.getByTestId('input-username');
    fireEvent.change(usernameInput, { target: { value: 'user123' } });
    expect(usernameInput).toHaveValue('user123');

    const emailInput = screen.getByTestId('input-email');
    fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
    expect(emailInput).toHaveValue('user@example.com');

    const passwordInput = screen.getByTestId('input-password');
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(passwordInput).toHaveValue('password123');

    const checkbox = screen.getByTestId('checkbox-terms');
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    const radioMale = screen.getByTestId('radio-gender-male');
    fireEvent.click(radioMale);
    expect(radioMale).toBeChecked();
  });

  it('should call onSubmit with the correct values when the form is submitted', async () => {
    render(
      <Form fields={fields} onSubmit={mockOnSubmit} buttonText="Submit" />
    );

    fireEvent.change(screen.getByTestId('input-username'), {
      target: { value: 'user123' }
    });
    fireEvent.change(screen.getByTestId('input-email'), {
      target: { value: 'user@example.com' }
    });
    fireEvent.change(screen.getByTestId('input-password'), {
      target: { value: 'password123' }
    });
    fireEvent.click(screen.getByTestId('checkbox-terms'));
    fireEvent.click(screen.getByTestId('radio-gender-male'));

    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        username: 'user123',
        email: 'user@example.com',
        password: 'password123',
        terms: true,
        gender: 'male'
      });
    });
  });

  it('should show validation errors for required fields when submitted empty', async () => {
    render(
      <Form fields={fields} onSubmit={mockOnSubmit} buttonText="Submit" />
    );

    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId('error-username')).toHaveTextContent(
        'Username is required'
      );
      expect(screen.getByTestId('error-email')).toHaveTextContent(
        'Email is required'
      );
      expect(screen.getByTestId('error-password')).toHaveTextContent(
        'Password is required'
      );
      expect(screen.getByTestId('error-terms')).toHaveTextContent(
        'Accept Terms and Conditions is required'
      );
      expect(screen.getByTestId('error-gender')).toHaveTextContent(
        'Gender is required'
      );
    });

    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it('should call validateField and set/remove errors correctly for radio group', () => {
    render(
      <Form fields={fields} onSubmit={mockOnSubmit} buttonText="Submit" />
    );

    const radioFemale = screen.getByTestId('radio-gender-female');

    fireEvent.focus(radioFemale);
    fireEvent.blur(radioFemale);

    expect(screen.getByTestId('error-gender')).toHaveTextContent(
      'Gender is required'
    );

    fireEvent.click(radioFemale);
    expect(radioFemale).toBeChecked();

    expect(screen.queryByTestId('error-gender')).not.toBeInTheDocument();
  });

  it('should call validateField when handleChange is called with a touched field', () => {
    render(
      <Form fields={fields} onSubmit={mockOnSubmit} buttonText="Submit" />
    );

    const usernameInput = screen.getByTestId('input-username');
    fireEvent.focus(usernameInput);
    fireEvent.blur(usernameInput);

    fireEvent.change(usernameInput, { target: { value: 'newUser' } });

    expect(usernameInput).toHaveValue('newUser');
    expect(screen.queryByTestId('error-username')).not.toBeInTheDocument();
  });

  it('should set touched state and validate when checkbox is blurred', async () => {
    render(
      <Form fields={fields} onSubmit={mockOnSubmit} buttonText="Submit" />
    );

    const checkboxInput = screen.getByTestId('checkbox-terms');

    fireEvent.focus(checkboxInput);
    fireEvent.blur(checkboxInput);

    await waitFor(() => {
      expect(screen.getByTestId('error-terms')).toHaveTextContent(
        'Accept Terms and Conditions is required'
      );
    });

    fireEvent.click(checkboxInput);
    fireEvent.blur(checkboxInput);

    await waitFor(() => {
      expect(screen.queryByTestId('error-terms')).not.toBeInTheDocument();
    });
  });

  it('should set touched state in handleBlur and validate the field', async () => {
    render(
      <Form fields={fields} onSubmit={mockOnSubmit} buttonText="Submit" />
    );

    const emailInput = screen.getByTestId('input-email');
    fireEvent.focus(emailInput);
    fireEvent.blur(emailInput);

    await waitFor(() => {
      expect(screen.getByTestId('error-email')).toHaveTextContent(
        'Email is required'
      );
    });
  });

  it('should call validateField and set/remove errors correctly', () => {
    render(
      <Form fields={fields} onSubmit={mockOnSubmit} buttonText="Submit" />
    );

    const passwordInput = screen.getByTestId('input-password');

    fireEvent.focus(passwordInput);
    fireEvent.blur(passwordInput);

    expect(screen.getByTestId('error-password')).toHaveTextContent(
      'Password is required'
    );

    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(passwordInput).toHaveValue('password123');
    expect(screen.queryByTestId('error-password')).not.toBeInTheDocument();
  });
});
