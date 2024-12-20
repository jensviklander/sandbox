import { render, screen, fireEvent } from '@testing-library/react';
import { DataGridRow } from './DataGridRow';
import { ExtendedColumnDef } from '../../types/types';
import styles from './DataGridRow.module.css';

interface RowData {
  id: string;
  name: string;
  age: number;
}

describe('DataGridRow Component', () => {
  const columns: ExtendedColumnDef<RowData, any>[] = [
    { id: 'name', header: 'Name', accessorKey: 'name', width: 150 },
    { id: 'age', header: 'Age', accessorKey: 'age', width: 100 }
  ];

  const rowData: RowData = { id: '1', name: 'John Doe', age: 30 };
  const subRowData: RowData[] = [{ id: '2', name: 'Jane Doe', age: 25 }];

  const selectedRowsInternal: string[] = [];
  const handleRowSelectChange = vi.fn();

  it('should render the row with the correct data', () => {
    render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columns}
            onDeleteRow={vi.fn()}
            selectedRowsInternal={selectedRowsInternal}
            handleRowSelectChange={handleRowSelectChange}
          />
        </tbody>
      </table>
    );

    const nameCell = screen.getByText('John Doe');
    const ageCell = screen.getByText('30');

    expect(nameCell).toBeInTheDocument();
    expect(ageCell).toBeInTheDocument();
  });

  it('should render the checkbox when selectable is true', () => {
    const handleSelectRow = vi.fn();

    render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columns}
            onDeleteRow={vi.fn()}
            selectable={true}
            isSelected={false}
            onSelectRow={handleSelectRow}
            selectedRowsInternal={selectedRowsInternal}
            handleRowSelectChange={handleRowSelectChange}
          />
        </tbody>
      </table>
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();

    fireEvent.click(checkbox);
    expect(handleSelectRow).toHaveBeenCalledWith(true);
  });

  it('should call onDeleteRow when delete button is clicked', () => {
    const handleDeleteRow = vi.fn();

    render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columns}
            onDeleteRow={handleDeleteRow}
            showDeleteButton={true}
            selectedRowsInternal={selectedRowsInternal}
            handleRowSelectChange={handleRowSelectChange}
          />
        </tbody>
      </table>
    );

    const deleteButton = screen.getByRole('button');
    fireEvent.click(deleteButton);

    expect(handleDeleteRow).toHaveBeenCalledWith(rowData.id);
  });

  it('should not render the delete button when showDeleteButton is false', () => {
    render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columns}
            onDeleteRow={vi.fn()}
            showDeleteButton={false}
            selectedRowsInternal={selectedRowsInternal}
            handleRowSelectChange={handleRowSelectChange}
          />
        </tbody>
      </table>
    );

    const deleteButton = screen.queryByRole('button');
    expect(deleteButton).not.toBeInTheDocument();
  });

  it('should render the spacer cell', () => {
    const { container } = render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columns}
            onDeleteRow={vi.fn()}
            selectedRowsInternal={selectedRowsInternal}
            handleRowSelectChange={handleRowSelectChange}
          />
        </tbody>
      </table>
    );

    const spacerCell = container.querySelector(`.${styles.spacerCell}`);
    expect(spacerCell).toBeInTheDocument();
  });

  it('should render cell content using accessorFn when provided', () => {
    const columnsWithAccessorFn: ExtendedColumnDef<RowData, any>[] = [
      {
        id: 'custom',
        header: 'Custom',
        accessorFn: (rowData, rowIndex) =>
          `${rowData.name} - Row ${rowIndex + 1}`,
        width: 200
      }
    ];

    render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columnsWithAccessorFn}
            onDeleteRow={vi.fn()}
            selectedRowsInternal={selectedRowsInternal}
            handleRowSelectChange={handleRowSelectChange}
          />
        </tbody>
      </table>
    );

    const customCell = screen.getByText('John Doe - Row 1');
    expect(customCell).toBeInTheDocument();
  });

  it('should render an empty cell if neither accessorKey nor accessorFn are provided', () => {
    const columnsWithoutAccessor: ExtendedColumnDef<RowData, any>[] = [
      { id: 'custom', header: 'Custom', width: 200 }
    ];

    render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columnsWithoutAccessor}
            onDeleteRow={vi.fn()}
            selectedRowsInternal={selectedRowsInternal}
            handleRowSelectChange={handleRowSelectChange}
          />
        </tbody>
      </table>
    );

    const allCells = screen.getAllByRole('cell');
    const customCell = allCells[0];
    expect(customCell).toBeEmptyDOMElement();
  });

  it('should use index as part of cellKey when col.id is not defined', () => {
    const columnsWithoutId: ExtendedColumnDef<RowData, any>[] = [
      { header: 'Custom', accessorKey: 'name', width: 200 }
    ];

    render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columnsWithoutId}
            onDeleteRow={vi.fn()}
            selectedRowsInternal={selectedRowsInternal}
            handleRowSelectChange={handleRowSelectChange}
          />
        </tbody>
      </table>
    );

    const allCells = screen.getAllByRole('cell');
    expect(allCells).toHaveLength(2);
    expect(allCells[0]).toBeInTheDocument();
  });

  it('should apply the provided column width when width is specified', () => {
    const columnsWithWidth: ExtendedColumnDef<RowData, any>[] = [
      { id: 'name', header: 'Name', accessorKey: 'name', width: 150 }
    ];

    const { container } = render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columnsWithWidth}
            onDeleteRow={vi.fn()}
            selectedRowsInternal={selectedRowsInternal}
            handleRowSelectChange={handleRowSelectChange}
          />
        </tbody>
      </table>
    );

    const cell = container.querySelector('td');
    expect(cell).toHaveStyle('width: 150px');
  });

  it('should apply the default column width when width is not provided', () => {
    const columnsWithoutWidth: ExtendedColumnDef<RowData, any>[] = [
      { id: 'name', header: 'Name', accessorKey: 'name' }
    ];

    const { container } = render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columnsWithoutWidth}
            onDeleteRow={vi.fn()}
            selectedRowsInternal={selectedRowsInternal}
            handleRowSelectChange={handleRowSelectChange}
          />
        </tbody>
      </table>
    );

    const cell = container.querySelector('td');
    expect(cell).toHaveStyle('width: 180px');
  });

  it('should apply borderless style to checkbox cell when borderless is true', () => {
    render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columns}
            onDeleteRow={vi.fn()}
            selectable={true}
            isSelected={false}
            borderless={true}
            selectedRowsInternal={selectedRowsInternal}
            handleRowSelectChange={handleRowSelectChange}
          />
        </tbody>
      </table>
    );

    const checkboxCell = screen
      .getAllByRole('cell')
      .find((cell) => cell.classList.contains(styles.checkboxCell));

    expect(checkboxCell).toHaveClass(styles.borderless);
  });

  it('should apply spacerWithRightBorder class to spacer cell when showDeleteButton and borderless are false', () => {
    const { container } = render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columns}
            onDeleteRow={vi.fn()}
            showDeleteButton={false}
            borderless={false}
            selectedRowsInternal={selectedRowsInternal}
            handleRowSelectChange={handleRowSelectChange}
          />
        </tbody>
      </table>
    );

    const spacerCell = container.querySelector(`.${styles.spacerCell}`);
    expect(spacerCell).toHaveClass(styles.spacerWithRightBorder);
  });

  it('should apply borderless style to delete button cell when borderless is true', () => {
    render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columns}
            onDeleteRow={vi.fn()}
            showDeleteButton={true}
            borderless={true}
            selectedRowsInternal={selectedRowsInternal}
            handleRowSelectChange={handleRowSelectChange}
          />
        </tbody>
      </table>
    );

    const deleteButtonCell = screen.getByRole('cell', { name: /trash/i });
    expect(deleteButtonCell).toHaveClass(styles.borderless);
  });

  it('should render subRows when provided', () => {
    const subRowData: RowData[] = [
      { id: '2', name: 'Jane Doe', age: 25 },
      { id: '3', name: 'Jim Doe', age: 35 }
    ];

    render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columns}
            onDeleteRow={vi.fn()}
            subRows={subRowData}
            selectedRowsInternal={selectedRowsInternal}
            handleRowSelectChange={handleRowSelectChange}
          />
        </tbody>
      </table>
    );

    const janeRow = screen.getByText('Jane Doe');
    const jimRow = screen.getByText('Jim Doe');

    expect(janeRow).toBeInTheDocument();
    expect(jimRow).toBeInTheDocument();
  });

  it('should render subRows with isSubRow set to true', () => {
    const subRowData: RowData[] = [{ id: '2', name: 'Jane Doe', age: 25 }];

    render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columns}
            onDeleteRow={vi.fn()}
            subRows={subRowData}
            selectedRowsInternal={selectedRowsInternal}
            handleRowSelectChange={handleRowSelectChange}
          />
        </tbody>
      </table>
    );

    const subRowCell = screen.getByText('Jane Doe').closest('td');
    expect(subRowCell).toHaveClass(/subrowCell/i);
  });

  it('should call handleRowSelectChange when a sub-row is selected', () => {
    const handleRowSelectChange = vi.fn();
    const selectedRowsInternal: string[] = [];

    render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columns}
            onDeleteRow={vi.fn()}
            selectable={true}
            isSelected={false}
            selectedRowsInternal={selectedRowsInternal}
            handleRowSelectChange={handleRowSelectChange}
            subRows={subRowData}
          />
        </tbody>
      </table>
    );

    const checkboxes = screen.getAllByRole('checkbox');
    const subRowCheckbox = checkboxes[1];
    expect(subRowCheckbox).toBeInTheDocument();

    fireEvent.click(subRowCheckbox);
    expect(handleRowSelectChange).toHaveBeenCalledWith('2', true, false);
  });

  it('should call handleRowSelectChange when a sub-row is deselected', () => {
    const handleRowSelectChange = vi.fn();
    const selectedRowsInternal: string[] = ['2'];

    render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columns}
            onDeleteRow={vi.fn()}
            selectable={true}
            isSelected={false}
            selectedRowsInternal={selectedRowsInternal}
            handleRowSelectChange={handleRowSelectChange}
            subRows={subRowData}
          />
        </tbody>
      </table>
    );

    const checkboxes = screen.getAllByRole('checkbox');
    const subRowCheckbox = checkboxes[1];
    expect(subRowCheckbox).toBeInTheDocument();

    fireEvent.click(subRowCheckbox);
    expect(handleRowSelectChange).toHaveBeenCalledWith('2', false, false);
  });
});
