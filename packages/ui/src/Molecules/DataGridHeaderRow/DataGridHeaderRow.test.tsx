import { render, screen, fireEvent } from '@testing-library/react';
import { DataGridHeaderRow } from './DataGridHeaderRow';
import { ExtendedColumnDef } from '../../types/types';
import styles from './DataGridHeaderRow.module.css';

const mockedDataGridHeaderCell = vi.fn();
vi.mock('../DataGridHeaderCell/DataGridHeaderCell', () => ({
  DataGridHeaderCell: (props: { label: string; borderless: boolean }) => {
    mockedDataGridHeaderCell(props);
    return (
      <th>
        {props.label} {props.borderless ? 'borderless' : ''}
      </th>
    );
  }
}));

vi.mock('../../Atoms/Checkbox/Checkbox', () => ({
  Checkbox: ({
    onChange,
    checked
  }: {
    onChange: (checked: boolean) => void;
    checked: boolean;
  }) => (
    <input
      type="checkbox"
      onChange={() => onChange(!checked)}
      checked={checked}
    />
  )
}));

describe('DataGridHeaderRow Component', () => {
  const columns: ExtendedColumnDef<any, any>[] = [
    { id: 'name', header: 'Name', width: 150 },
    { id: 'age', header: 'Age', width: 100 }
  ];

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should use the 'id' as the key when 'id' is provided", () => {
    render(
      <table>
        <thead>
          <DataGridHeaderRow columns={columns} />
        </thead>
      </table>
    );

    expect(mockedDataGridHeaderCell).toHaveBeenCalledWith(
      expect.objectContaining({ label: 'Name' })
    );
    expect(mockedDataGridHeaderCell).toHaveBeenCalledWith(
      expect.objectContaining({ label: 'Age' })
    );
  });

  it("should use the 'index' as the key when 'id' is not provided", () => {
    const columnsWithoutId: ExtendedColumnDef<any, any>[] = [
      { header: 'Name', width: 150 },
      { id: 'age', header: 'Age', width: 100 }
    ];

    render(
      <table>
        <thead>
          <DataGridHeaderRow columns={columnsWithoutId} />
        </thead>
      </table>
    );

    expect(mockedDataGridHeaderCell).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({ label: 'Name' })
    );
    expect(mockedDataGridHeaderCell).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({ label: 'Age' })
    );
  });

  it("should apply the 'borderless' class to the checkbox cell when 'borderless' is true", () => {
    render(
      <table>
        <thead>
          <DataGridHeaderRow
            columns={columns}
            selectable={true}
            borderless={true}
          />
        </thead>
      </table>
    );

    const checkboxCell = screen.getByRole('checkbox').closest('th');
    expect(checkboxCell).toHaveClass(
      `${styles.checkboxCell} ${styles.borderless}`
    );
  });

  it("should not apply the 'borderless' class to the checkbox cell when 'borderless' is false", () => {
    render(
      <table>
        <thead>
          <DataGridHeaderRow
            columns={columns}
            selectable={true}
            borderless={false}
          />
        </thead>
      </table>
    );

    const checkboxCell = screen.getByRole('checkbox').closest('th');
    expect(checkboxCell).toHaveClass(styles.checkboxCell);
    expect(checkboxCell).not.toHaveClass(styles.borderless);
  });

  it("should pass the 'borderless' prop to DataGridHeaderCell components when 'borderless' is true", () => {
    render(
      <table>
        <thead>
          <DataGridHeaderRow columns={columns} borderless={true} />
        </thead>
      </table>
    );

    expect(mockedDataGridHeaderCell).toHaveBeenCalledWith(
      expect.objectContaining({ borderless: true })
    );
  });

  it("should not pass the 'borderless' prop when 'borderless' is false", () => {
    render(
      <table>
        <thead>
          <DataGridHeaderRow columns={columns} borderless={false} />
        </thead>
      </table>
    );

    expect(mockedDataGridHeaderCell).toHaveBeenCalledWith(
      expect.objectContaining({ borderless: false })
    );
  });

  it("should default 'borderless' prop to false when not passed", () => {
    render(
      <table>
        <thead>
          <DataGridHeaderRow columns={columns} />
        </thead>
      </table>
    );

    expect(mockedDataGridHeaderCell).toHaveBeenCalledWith(
      expect.objectContaining({ borderless: false })
    );
  });

  it('should render the select all checkbox when selectable is true', () => {
    const handleSelectAll = vi.fn();
    render(
      <table>
        <thead>
          <DataGridHeaderRow
            columns={columns}
            selectable={true}
            onSelectAll={handleSelectAll}
          />
        </thead>
      </table>
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();

    fireEvent.click(checkbox);
    expect(handleSelectAll).toHaveBeenCalledWith(true);
  });

  it('should handle an empty columns array', () => {
    const { container } = render(
      <table>
        <thead>
          <DataGridHeaderRow columns={[]} borderless={true} />
        </thead>
      </table>
    );

    const spacerCell = container.querySelector(`th.${styles.spacerCell}`);
    expect(spacerCell).toHaveClass(styles.borderless);
  });
});
