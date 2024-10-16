import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('should render the button element', () => {
    render(
      <Button id="test-button" onClick={() => {}}>
        Click Me
      </Button>
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should render with the correct text', () => {
    render(
      <Button id="test-button" onClick={() => {}}>
        Click Me
      </Button>
    );

    const button = screen.getByRole('button', { name: 'Click Me' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click Me');
  });

  it('should call onClick when the button is clicked', () => {
    const handleClick = vi.fn();
    render(
      <Button id="test-button" onClick={handleClick}>
        Click Me
      </Button>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should render with the correct variant class', () => {
    render(
      <Button id="test-button" onClick={() => {}} variant="danger">
        Delete
      </Button>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass(/button/);
    expect(button).toHaveClass(/danger/);
  });

  it('should render with the correct aria-label when provided', () => {
    render(
      <Button id="test-button" onClick={() => {}} ariaLabel="Delete Button">
        Delete
      </Button>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Delete Button');
  });

  it('should be disabled when the disabled prop is true', () => {
    render(
      <Button id="test-button" onClick={() => {}} disabled>
        Disabled Button
      </Button>
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});
