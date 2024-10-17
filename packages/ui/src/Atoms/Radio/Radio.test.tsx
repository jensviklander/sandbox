import { render, screen, fireEvent } from '@testing-library/react';
import { Radio } from './Radio';

describe('Radio Component', () => {
  it('should render the radio button', () => {
    render(
      <Radio id="radio" name="radioGroup" checked={false} onChange={vi.fn()} />
    );
    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
  });

  it('should trigger onChange with true when the radio button is checked', () => {
    const handleChange = vi.fn();

    render(
      <Radio
        id="radio"
        name="radioGroup"
        checked={false}
        onChange={handleChange}
      />
    );

    const radio = screen.getByRole('radio');

    fireEvent.click(radio);

    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('should not allow unchecking the radio button once it is checked', () => {
    const handleChange = vi.fn();

    render(
      <Radio
        id="radio"
        name="radioGroup"
        checked={true}
        onChange={handleChange}
      />
    );

    const radio = screen.getByRole('radio');

    fireEvent.click(radio);

    expect(handleChange).not.toHaveBeenCalledWith(false);
  });

  it('should trigger onBlur event when the radio button loses focus', () => {
    const handleBlur = vi.fn();

    render(
      <Radio
        id="radio"
        name="radioGroup"
        checked={false}
        onChange={vi.fn()}
        onBlur={handleBlur}
      />
    );

    const radio = screen.getByRole('radio');

    fireEvent.blur(radio);

    expect(handleBlur).toHaveBeenCalled();
  });

  it('should have the required attribute when passed as a prop', () => {
    render(
      <Radio
        id="radio"
        name="radioGroup"
        checked={false}
        onChange={vi.fn()}
        required={true}
      />
    );
    const radio = screen.getByRole('radio');
    expect(radio).toBeRequired();
  });

  it('should have aria attributes when passed as props', () => {
    render(
      <Radio
        id="radio"
        name="radioGroup"
        checked={false}
        onChange={vi.fn()}
        ariaRequired={true}
        ariaInvalid={true}
      />
    );

    const radio = screen.getByRole('radio');

    expect(radio).toHaveAttribute('aria-required', 'true');
    expect(radio).toHaveAttribute('aria-invalid', 'true');
  });
});
