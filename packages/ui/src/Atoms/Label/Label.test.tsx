import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('Label Component', () => {
  it('should render the label with the correct text', () => {
    render(<Label htmlFor="example" labelText="Example Label" />);

    const labelElement = screen.getByText('Example Label');

    expect(labelElement).toBeInTheDocument();
  });

  it('should associate the label with the correct htmlFor attribute', () => {
    render(<Label htmlFor="example" labelText="Example Label" />);

    const labelElement = screen.getByText('Example Label').closest('label');

    expect(labelElement).toHaveAttribute('for', 'example');
  });

  it('should render children when passed', () => {
    render(
      <Label htmlFor="example" labelText="Example Label">
        <input id="example" />
      </Label>
    );

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('id', 'example');
  });

  it('should apply the clickable class when isClickable is true', () => {
    render(<Label htmlFor="example" labelText="Clickable Label" isClickable />);

    const labelElement = screen.getByText('Clickable Label').closest('label');

    expect(labelElement).toHaveClass(/clickable/);
  });

  it('should not apply the clickable class when isClickable is false', () => {
    render(
      <Label
        htmlFor="example"
        labelText="Non-Clickable Label"
        isClickable={false}
      />
    );

    const labelElement = screen
      .getByText('Non-Clickable Label')
      .closest('label');

    expect(labelElement).not.toHaveClass(/clickable/);
  });
});
