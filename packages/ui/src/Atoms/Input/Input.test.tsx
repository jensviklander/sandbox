import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';
import styles from './Input.module.css';

describe('Input Component', () => {
  it('should render an input element', () => {
    render(<Input id="input" onChange={vi.fn()} />);

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  it('should render the placeholder when provided', () => {
    const placeholderText = 'Enter text';
    render(
      <Input id="input" placeholder={placeholderText} onChange={vi.fn()} />
    );

    const inputElement = screen.getByPlaceholderText(placeholderText);
    expect(inputElement).toBeInTheDocument();
  });

  it('should call onChange with correct value when text is entered', () => {
    const handleChange = vi.fn();
    render(
      <Input id="input" placeholder="Enter text" onChange={handleChange} />
    );

    const inputElement = screen.getByPlaceholderText('Enter text');

    fireEvent.change(inputElement, { target: { value: 'Hello' } });

    expect(handleChange).toHaveBeenCalledWith('Hello');
  });

  it('should render the input with the correct class', () => {
    const { container } = render(<Input id="input" onChange={vi.fn()} />);

    const inputElement = container.querySelector('input');
    expect(inputElement).toHaveClass(styles.input);
  });
});
