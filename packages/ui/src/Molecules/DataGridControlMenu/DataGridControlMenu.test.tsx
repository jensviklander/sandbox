import { render, screen, fireEvent } from '@testing-library/react';
import { DataGridControlMenu } from './DataGridControlMenu';

describe('DataGridControlMenu Component', () => {
  it('should render the Input component', () => {
    render(<DataGridControlMenu onSearch={vi.fn()} />);

    const inputElement = screen.getByPlaceholderText('Search...');
    expect(inputElement).toBeInTheDocument();
  });

  it('should call onSearch when the input value changes', () => {
    const handleSearch = vi.fn();

    render(<DataGridControlMenu onSearch={handleSearch} />);

    const inputElement = screen.getByPlaceholderText('Search...');

    fireEvent.change(inputElement, { target: { value: 'test query' } });

    expect(handleSearch).toHaveBeenCalledWith('test query');
  });

  it('should call onSearch with an empty string if input is cleared', () => {
    const handleSearch = vi.fn();

    render(<DataGridControlMenu onSearch={handleSearch} />);

    const inputElement = screen.getByPlaceholderText('Search...');

    fireEvent.change(inputElement, { target: { value: 'some value' } });
    expect(handleSearch).toHaveBeenCalledWith('some value');

    fireEvent.change(inputElement, { target: { value: '' } });
    expect(handleSearch).toHaveBeenCalledWith('');
  });
});
