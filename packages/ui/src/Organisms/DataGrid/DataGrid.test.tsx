import {
  render,
  screen,
  fireEvent,
  within,
  waitFor,
  act
} from '@testing-library/react';
import DataGrid from './DataGrid';
import { ExtendedColumnDef } from '../../types/types';
import styles from './DataGrid.module.css';

describe('DataGrid Component', () => {
  const columns: ExtendedColumnDef<any, any>[] = [
    {
      id: 'name',
      header: 'Name',
      accessorKey: 'name',
      width: 150,
      type: 'string'
    },
    {
      id: 'age',
      header: 'Age',
      accessorKey: 'age',
      width: 100,
      type: 'number'
    }
  ];

  const data = [
    { id: '1', name: 'Alice', age: 30 },
    { id: '2', name: 'Bob', age: 25 },
    { id: '3', name: 'Charlie', age: 35 }
  ];

  const hierarchicalData = [
    {
      id: '1',
      name: 'Project A',
      age: null,
      subRows: [
        { id: '1.1', name: 'Task 1', age: null },
        { id: '1.2', name: 'Task 2', age: null }
      ]
    },
    {
      id: '2',
      name: 'Project B',
      age: null,
      subRows: [
        { id: '2.1', name: 'Task 1', age: null },
        { id: '2.2', name: 'Task 2', age: null }
      ]
    },
    { id: '3', name: 'Project C', age: null }
  ];

  it('should render the title and data correctly', () => {
    render(
      <DataGrid
        title="User List"
        data={data}
        columns={columns}
        enableSorting={false}
      />
    );

    expect(screen.getByText('User List')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('Charlie')).toBeInTheDocument();
  });

  it('should sort data by name when sorting is enabled by clicking the sorting icon', async () => {
    const { container } = render(
      <DataGrid
        data={data}
        columns={columns}
        enableSorting={true}
        selectable={false}
      />
    );

    const nameHeader = screen.getByText('Name').closest('th') as HTMLElement;

    const sortIcon = within(nameHeader).getByLabelText('sort');

    await act(async () => {
      fireEvent.click(sortIcon);
    });

    await waitFor(() => {
      const rows = container.querySelectorAll(
        'tbody tr'
      ) as NodeListOf<HTMLElement>;

      const firstRowCells = within(rows[0] as HTMLElement).getAllByRole('cell');
      const secondRowCells = within(rows[1] as HTMLElement).getAllByRole(
        'cell'
      );
      const thirdRowCells = within(rows[2] as HTMLElement).getAllByRole('cell');

      expect(firstRowCells[0]).toHaveTextContent('Alice');
      expect(secondRowCells[0]).toHaveTextContent('Bob');
      expect(thirdRowCells[0]).toHaveTextContent('Charlie');
    });

    const ascIcon = within(nameHeader).getByLabelText('sortAsc');

    await act(async () => {
      fireEvent.click(ascIcon);
    });

    await waitFor(() => {
      const rows = container.querySelectorAll(
        'tbody tr'
      ) as NodeListOf<HTMLElement>;

      const firstRowCells = within(rows[0] as HTMLElement).getAllByRole('cell');
      const secondRowCells = within(rows[1] as HTMLElement).getAllByRole(
        'cell'
      );
      const thirdRowCells = within(rows[2] as HTMLElement).getAllByRole('cell');

      expect(firstRowCells[0]).toHaveTextContent('Charlie');
      expect(secondRowCells[0]).toHaveTextContent('Bob');
      expect(thirdRowCells[0]).toHaveTextContent('Alice');
    });

    const descIcon = within(nameHeader).getByLabelText('sortDesc');

    await act(async () => {
      fireEvent.click(descIcon);
    });

    await waitFor(() => {
      const rows = container.querySelectorAll(
        'tbody tr'
      ) as NodeListOf<HTMLElement>;

      const firstRowCells = within(rows[0] as HTMLElement).getAllByRole('cell');
      const secondRowCells = within(rows[1] as HTMLElement).getAllByRole(
        'cell'
      );
      const thirdRowCells = within(rows[2] as HTMLElement).getAllByRole('cell');

      expect(firstRowCells[0]).toHaveTextContent('Alice');
      expect(secondRowCells[0]).toHaveTextContent('Bob');
      expect(thirdRowCells[0]).toHaveTextContent('Charlie');
    });
  });

  it('should sort data by age when sorting is enabled by clicking the sorting icon', async () => {
    const { container } = render(
      <DataGrid
        data={data}
        columns={columns}
        enableSorting={true}
        selectable={false}
      />
    );

    const rows = container.querySelectorAll(
      'tbody tr'
    ) as NodeListOf<HTMLElement>;

    const firstRowCells = within(rows[0] as HTMLElement).getAllByRole('cell');
    const secondRowCells = within(rows[1] as HTMLElement).getAllByRole('cell');
    const thirdRowCells = within(rows[2] as HTMLElement).getAllByRole('cell');

    expect(firstRowCells[1]).toHaveTextContent('30');
    expect(secondRowCells[1]).toHaveTextContent('25');
    expect(thirdRowCells[1]).toHaveTextContent('35');

    const ageHeader = screen.getByText('Age').closest('th') as HTMLElement;
    const sortIcon = within(ageHeader).getByLabelText('sort');

    await act(async () => {
      fireEvent.click(sortIcon);
    });

    await waitFor(() => {
      const rows = container.querySelectorAll(
        'tbody tr'
      ) as NodeListOf<HTMLElement>;

      const firstRowCells = within(rows[0] as HTMLElement).getAllByRole('cell');
      const secondRowCells = within(rows[1] as HTMLElement).getAllByRole(
        'cell'
      );
      const thirdRowCells = within(rows[2] as HTMLElement).getAllByRole('cell');

      expect(firstRowCells[1]).toHaveTextContent('35');
      expect(secondRowCells[1]).toHaveTextContent('30');
      expect(thirdRowCells[1]).toHaveTextContent('25');
    });

    const descIcon = within(ageHeader).getByLabelText('sortDesc');

    await act(async () => {
      fireEvent.click(descIcon);
    });

    await waitFor(() => {
      const rows = container.querySelectorAll(
        'tbody tr'
      ) as NodeListOf<HTMLElement>;

      const firstRowCells = within(rows[0] as HTMLElement).getAllByRole('cell');
      const secondRowCells = within(rows[1] as HTMLElement).getAllByRole(
        'cell'
      );
      const thirdRowCells = within(rows[2] as HTMLElement).getAllByRole('cell');

      expect(firstRowCells[1]).toHaveTextContent('25');
      expect(secondRowCells[1]).toHaveTextContent('30');
      expect(thirdRowCells[1]).toHaveTextContent('35');
    });

    const ascIcon = within(ageHeader).getByLabelText('sortAsc');

    await act(async () => {
      fireEvent.click(ascIcon);
    });

    await waitFor(() => {
      const rows = container.querySelectorAll(
        'tbody tr'
      ) as NodeListOf<HTMLElement>;

      const firstRowCells = within(rows[0] as HTMLElement).getAllByRole('cell');
      const secondRowCells = within(rows[1] as HTMLElement).getAllByRole(
        'cell'
      );
      const thirdRowCells = within(rows[2] as HTMLElement).getAllByRole('cell');

      expect(firstRowCells[1]).toHaveTextContent('30');
      expect(secondRowCells[1]).toHaveTextContent('25');
      expect(thirdRowCells[1]).toHaveTextContent('35');
    });

    const unsortedIcon = within(ageHeader).getByLabelText('sort');
    expect(unsortedIcon).toBeInTheDocument();
  });

  it('should reset sorting to none for both string and numeric columns', async () => {
    const { container } = render(
      <DataGrid
        data={data}
        columns={columns}
        enableSorting={true}
        selectable={false}
      />
    );

    const nameHeader = screen.getByText('Name').closest('th') as HTMLElement;
    const nameSortIcon = within(nameHeader).getByLabelText('sort');

    expect(nameSortIcon).toHaveAttribute('aria-label', 'sort');

    await act(async () => {
      fireEvent.click(nameSortIcon);
    });

    await waitFor(() => {
      const rows = container.querySelectorAll(
        'tbody tr'
      ) as NodeListOf<HTMLElement>;
      expect(within(rows[0]).getByText('Alice')).toBeInTheDocument();
    });

    const nameAscIcon = within(nameHeader).getByLabelText('sortAsc');
    await act(async () => {
      fireEvent.click(nameAscIcon);
    });

    await waitFor(() => {
      const rows = container.querySelectorAll(
        'tbody tr'
      ) as NodeListOf<HTMLElement>;
      expect(within(rows[0]).getByText('Charlie')).toBeInTheDocument();
    });

    const nameDescIcon = within(nameHeader).getByLabelText('sortDesc');
    await act(async () => {
      fireEvent.click(nameDescIcon);
    });

    await waitFor(() => {
      const rows = container.querySelectorAll(
        'tbody tr'
      ) as NodeListOf<HTMLElement>;
      expect(within(rows[0]).getByText('Alice')).toBeInTheDocument();
    });

    expect(within(nameHeader).getByLabelText('sort')).toBeInTheDocument();

    const ageHeader = screen.getByText('Age').closest('th') as HTMLElement;
    const ageSortIcon = within(ageHeader).getByLabelText('sort');

    expect(ageSortIcon).toHaveAttribute('aria-label', 'sort');

    await act(async () => {
      fireEvent.click(ageSortIcon);
    });

    await waitFor(() => {
      const rows = container.querySelectorAll(
        'tbody tr'
      ) as NodeListOf<HTMLElement>;
      expect(within(rows[0]).getByText('Charlie')).toBeInTheDocument();
    });

    const ageDescIcon = within(ageHeader).getByLabelText('sortDesc');
    await act(async () => {
      fireEvent.click(ageDescIcon);
    });

    await waitFor(() => {
      const rows = container.querySelectorAll(
        'tbody tr'
      ) as NodeListOf<HTMLElement>;
      expect(within(rows[0]).getByText('Bob')).toBeInTheDocument();
    });

    const ageAscIcon = within(ageHeader).getByLabelText('sortAsc');
    await act(async () => {
      fireEvent.click(ageAscIcon);
    });

    await waitFor(() => {
      const rows = container.querySelectorAll(
        'tbody tr'
      ) as NodeListOf<HTMLElement>;
      expect(within(rows[0]).getByText('Alice')).toBeInTheDocument();
    });

    expect(within(ageHeader).getByLabelText('sort')).toBeInTheDocument();
  });

  it('should paginate the data when pagination is enabled', () => {
    const handlePageChange = vi.fn();
    render(
      <DataGrid
        data={data}
        columns={columns}
        enablePagination={true}
        pageSize={2}
        currentPage={0}
        onPageChange={handlePageChange}
      />
    );

    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);

    expect(handlePageChange).toHaveBeenCalledWith(1);
  });

  it('should allow row selection', () => {
    const handleSelectRow = vi.fn();
    render(
      <DataGrid
        data={data}
        columns={columns}
        selectable={true}
        selectedRows={[]}
        onSelectRow={handleSelectRow}
      />
    );

    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[1]);

    expect(handleSelectRow).toHaveBeenCalledWith('1', true);
  });

  it('should allow row de-selection', () => {
    const handleSelectRow = vi.fn();

    const selectedRows = ['1'];

    render(
      <DataGrid
        data={data}
        columns={columns}
        selectable={true}
        selectedRows={selectedRows}
        onSelectRow={handleSelectRow}
      />
    );

    const selectFirstCheckbox = screen.getAllByRole('checkbox')[1];
    fireEvent.click(selectFirstCheckbox);

    expect(handleSelectRow).toHaveBeenCalledWith('1', false);
  });

  it('should select all rows when the select-all checkbox is clicked', () => {
    const handleSelectRow = vi.fn();
    render(
      <DataGrid
        data={data}
        columns={columns}
        selectable={true}
        selectedRows={[]}
        onSelectRow={handleSelectRow}
      />
    );

    const selectAllCheckbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(selectAllCheckbox);

    expect(handleSelectRow).toHaveBeenCalledTimes(3);
  });

  it('should deselect all rows when the select-all checkbox is unchecked', () => {
    const handleSelectRow = vi.fn();

    const selectedRows = ['1', '2', '3'];

    render(
      <DataGrid
        data={data}
        columns={columns}
        selectable={true}
        selectedRows={selectedRows}
        onSelectRow={handleSelectRow}
      />
    );

    const selectAllCheckbox = screen.getAllByRole('checkbox')[0];

    fireEvent.click(selectAllCheckbox);

    expect(handleSelectRow).toHaveBeenCalledWith('1', false);
    expect(handleSelectRow).toHaveBeenCalledWith('2', false);
    expect(handleSelectRow).toHaveBeenCalledWith('3', false);
    expect(handleSelectRow).toHaveBeenCalledTimes(3);
  });

  it('should delete a row when the delete button is clicked', () => {
    const { rerender } = render(
      <DataGrid data={data} columns={columns} showDeleteButton={true} />
    );

    const deleteButtons = screen.getAllByRole('button', { name: /trash/i });
    fireEvent.click(deleteButtons[0]);

    rerender(
      <DataGrid
        data={data.filter((item) => item.id !== '1')}
        columns={columns}
        showDeleteButton={true}
      />
    );

    expect(screen.queryByText('Alice')).not.toBeInTheDocument();
  });

  it('should display the correct pagination position', () => {
    const { container } = render(
      <DataGrid
        data={data}
        columns={columns}
        enablePagination={true}
        pageSize={2}
        currentPage={0}
        paginationPosition="right"
      />
    );

    const paginationWrapper = container.querySelector(
      `.${styles.paginationWrapper}`
    );
    expect(paginationWrapper).toHaveClass(styles.right);
  });

  it('should display a message when table is empty', () => {
    render(<DataGrid data={[]} columns={columns} />);
    expect(screen.getByText('No data available')).toBeInTheDocument();
  });

  it('should show statistics if enabled', () => {
    render(<DataGrid data={data} columns={columns} showStatistics={true} />);

    expect(screen.getByText('Total Rows: 3')).toBeInTheDocument();
  });

  it('should filter the data based on the search query', () => {
    render(<DataGrid data={data} columns={columns} enableSearch={true} />);

    const searchInput = screen.getByPlaceholderText('Search...');

    fireEvent.change(searchInput, { target: { value: 'Bob' } });

    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.queryByText('Alice')).not.toBeInTheDocument();
    expect(screen.queryByText('Charlie')).not.toBeInTheDocument();
  });

  it('should delete selected rows when the first delete button is clicked', () => {
    const selectedRows = ['1', '2'];

    const { rerender } = render(
      <DataGrid
        data={data}
        columns={columns}
        selectable={true}
        selectedRows={selectedRows}
        showDeleteButton={true}
      />
    );

    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();

    const deleteButtons = screen.getAllByLabelText('trash');
    fireEvent.click(deleteButtons[0]);

    rerender(
      <DataGrid
        data={data.filter((item) => !selectedRows.includes(item.id))}
        columns={columns}
        selectable={true}
        showDeleteButton={true}
      />
    );

    expect(screen.queryByText('Alice')).not.toBeInTheDocument();
    expect(screen.queryByText('Bob')).not.toBeInTheDocument();

    expect(screen.getByText('Charlie')).toBeInTheDocument();
  });

  it('should call onDeleteSelected when the delete selected button is clicked', () => {
    const handleDeleteSelected = vi.fn();
    const selectedRows = ['1', '2'];

    render(
      <DataGrid
        data={data}
        columns={columns}
        selectable={true}
        selectedRows={selectedRows}
        showDeleteButton={true}
        onDeleteSelected={handleDeleteSelected}
      />
    );

    const deleteButtons = screen.getAllByLabelText('trash');
    fireEvent.click(deleteButtons[0]);

    expect(handleDeleteSelected).toHaveBeenCalled();
  });

  it('should select all rows including those with empty or undefined subRows', async () => {
    const handleSelectRow = vi.fn();
    const hierarchicalDataWithEmptySubRows = [
      {
        id: '1',
        name: 'Project A',
        subRows: []
      },
      {
        id: '2',
        name: 'Project B',
        subRows: undefined
      }
    ];

    render(
      <DataGrid
        data={hierarchicalDataWithEmptySubRows}
        columns={columns}
        selectable={true}
        selectedRows={[]}
        onSelectRow={handleSelectRow}
        getSubRows={(row) => row.subRows}
      />
    );

    const selectAllCheckbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(selectAllCheckbox);

    await waitFor(() => {
      expect(handleSelectRow).toHaveBeenCalledWith('1', true);
      expect(handleSelectRow).toHaveBeenCalledWith('2', true);
    });
  });

  it('should reset sorting to none when no sorting order is applied', async () => {
    const { container } = render(
      <DataGrid
        data={data}
        columns={columns}
        enableSorting={true}
        selectable={false}
      />
    );

    const nameHeader = screen.getByText('Name').closest('th') as HTMLElement;
    const sortIcon = within(nameHeader).getByLabelText('sort');

    await act(async () => {
      fireEvent.click(sortIcon);
    });

    await waitFor(() => {
      const rows = container.querySelectorAll('tbody tr');
      expect(rows[0].textContent).toContain('Alice');
    });

    await act(async () => {
      fireEvent.click(sortIcon);
    });

    await waitFor(() => {
      const rows = container.querySelectorAll('tbody tr');
      expect(rows[0].textContent).toContain('Alice');
    });
  });

  it('should select a non-parent row', () => {
    const handleSelectRow = vi.fn();

    render(
      <DataGrid
        data={hierarchicalData}
        columns={columns}
        selectable={true}
        selectedRows={[]}
        onSelectRow={handleSelectRow}
        getSubRows={(row) => row.subRows}
      />
    );

    const subRowCheckbox = screen.getAllByRole('checkbox')[2];
    fireEvent.click(subRowCheckbox);

    expect(handleSelectRow).toHaveBeenCalledWith('1.1', true);
  });

  it('should deselect a non-parent row', () => {
    const handleSelectRow = vi.fn();
    const selectedRows = ['1.1'];

    render(
      <DataGrid
        data={hierarchicalData}
        columns={columns}
        selectable={true}
        selectedRows={selectedRows}
        onSelectRow={handleSelectRow}
        getSubRows={(row) => row.subRows}
      />
    );

    const subRowCheckbox = screen.getAllByRole('checkbox')[2];
    fireEvent.click(subRowCheckbox);

    expect(handleSelectRow).toHaveBeenCalledWith('1.1', false);
  });

  it('triggers onSelectRow for each child when parent row is selected', async () => {
    const handleSelectRow = vi.fn();

    render(
      <DataGrid
        data={hierarchicalData}
        columns={columns}
        selectable={true}
        selectedRows={[]}
        onSelectRow={handleSelectRow}
        getSubRows={(row) => row.subRows}
      />
    );

    const parentCheckbox = screen.getAllByRole('checkbox')[1];
    fireEvent.click(parentCheckbox);

    await waitFor(() => {
      expect(handleSelectRow).toHaveBeenCalledWith('1', true);
      expect(handleSelectRow).toHaveBeenCalledWith('1.1', true);
      expect(handleSelectRow).toHaveBeenCalledWith('1.2', true);
    });
  });

  it('deselects all child rows when parent row is deselected', async () => {
    const handleSelectRow = vi.fn();

    render(
      <DataGrid
        data={hierarchicalData}
        columns={columns}
        selectable={true}
        selectedRows={['1', '1.1', '1.2']}
        onSelectRow={handleSelectRow}
        getSubRows={(row) => row.subRows}
      />
    );

    const parentCheckbox = screen.getAllByRole('checkbox')[1];
    fireEvent.click(parentCheckbox);

    await waitFor(() => {
      expect(handleSelectRow).toHaveBeenCalledWith('1', false);
      expect(handleSelectRow).toHaveBeenCalledWith('1.1', false);
      expect(handleSelectRow).toHaveBeenCalledWith('1.2', false);
    });
  });

  it('selects the parent row only when all child rows are selected', async () => {
    const handleSelectRow = vi.fn();

    render(
      <DataGrid
        data={hierarchicalData}
        columns={columns}
        selectable={true}
        selectedRows={[]}
        onSelectRow={handleSelectRow}
        getSubRows={(row) => row.subRows}
      />
    );

    const firstChildCheckbox = screen.getAllByRole('checkbox')[2];
    fireEvent.click(firstChildCheckbox);

    await waitFor(() => {
      expect(handleSelectRow).toHaveBeenCalledWith('1.1', true);
    });
    expect(handleSelectRow).toHaveBeenCalledTimes(1);

    const secondChildCheckbox = screen.getAllByRole('checkbox')[3];
    fireEvent.click(secondChildCheckbox);

    await waitFor(() => {
      expect(handleSelectRow).toHaveBeenCalledWith('1.2', true);
      expect(handleSelectRow).toHaveBeenCalledWith('1', true);
    });

    expect(handleSelectRow.mock.calls).toEqual([
      ['1.1', true],
      ['1.2', true],
      ['1', true]
    ]);
  });

  it('deselects the parent row when a single child row is deselected', async () => {
    const handleSelectRow = vi.fn();

    render(
      <DataGrid
        data={hierarchicalData}
        columns={columns}
        selectable={true}
        selectedRows={['1', '1.1', '1.2']}
        onSelectRow={handleSelectRow}
        getSubRows={(row) => row.subRows}
      />
    );

    const firstChildCheckbox = screen.getAllByRole('checkbox')[2];
    fireEvent.click(firstChildCheckbox);

    await waitFor(() => {
      expect(handleSelectRow).toHaveBeenCalledWith('1', false);
      expect(handleSelectRow).toHaveBeenCalledWith('1.1', false);
    });
  });

  it('should collect all row IDs even when some rows have empty or undefined subRows', () => {
    const handleSelectRow = vi.fn();

    const dataWithEmptyAndUndefinedSubRows = [
      { id: '1', name: 'Project A', subRows: [] },
      { id: '2', name: 'Project B', subRows: undefined },
      { id: '3', name: 'Project C', subRows: [{ id: '3.1', name: 'Task C1' }] }
    ];

    render(
      <DataGrid
        data={dataWithEmptyAndUndefinedSubRows}
        columns={columns}
        selectable={true}
        selectedRows={[]}
        onSelectRow={handleSelectRow}
        getSubRows={(row) => row.subRows}
      />
    );

    const selectAllCheckbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(selectAllCheckbox);

    waitFor(() => {
      expect(handleSelectRow).toHaveBeenCalledWith('1', true);
      expect(handleSelectRow).toHaveBeenCalledWith('2', true);
      expect(handleSelectRow).toHaveBeenCalledWith('3', true);
      expect(handleSelectRow).toHaveBeenCalledWith('3.1', true);
    });
  });

  it('should handle row selection correctly when subRowIds is empty or undefined', () => {
    const handleSelectRow = vi.fn();

    const dataWithSingleRow = [
      { id: '1', name: 'Single Project', subRows: undefined }
    ];

    render(
      <DataGrid
        data={dataWithSingleRow}
        columns={columns}
        selectable={true}
        selectedRows={[]}
        onSelectRow={handleSelectRow}
        getSubRows={(row) => row.subRows}
      />
    );

    const rowCheckbox = screen.getAllByRole('checkbox')[1];
    fireEvent.click(rowCheckbox);

    waitFor(() => {
      expect(handleSelectRow).toHaveBeenCalledWith('1', true);
      expect(handleSelectRow).toHaveBeenCalledTimes(1);
    });
  });

  it('collects all row IDs for various subRows configurations', () => {
    const handleSelectRow = vi.fn();

    const complexData = [
      { id: '1', name: 'Project X', subRows: [] },
      { id: '2', name: 'Project Y', subRows: undefined },
      {
        id: '3',
        name: 'Project Z',
        subRows: [
          {
            id: '3.1',
            name: 'Task Z1',
            subRows: [{ id: '3.1.1', name: 'Subtask Z1-1' }]
          }
        ]
      }
    ];

    render(
      <DataGrid
        data={complexData}
        columns={columns}
        selectable={true}
        selectedRows={[]}
        onSelectRow={handleSelectRow}
        getSubRows={(row) => row.subRows}
      />
    );

    const selectAllCheckbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(selectAllCheckbox);

    waitFor(() => {
      expect(handleSelectRow).toHaveBeenCalledWith('1', true);
      expect(handleSelectRow).toHaveBeenCalledWith('2', true);
      expect(handleSelectRow).toHaveBeenCalledWith('3', true);
      expect(handleSelectRow).toHaveBeenCalledWith('3.1', true);
      expect(handleSelectRow).toHaveBeenCalledWith('3.1.1', true);
    });
  });

  it('deselects parent row when any child row is deselected', async () => {
    const handleSelectRow = vi.fn();

    render(
      <DataGrid
        data={hierarchicalData}
        columns={columns}
        selectable={true}
        selectedRows={['1', '1.1', '1.2']}
        onSelectRow={handleSelectRow}
        getSubRows={(row) => row.subRows}
      />
    );

    const firstChildCheckbox = screen.getAllByRole('checkbox')[2];
    fireEvent.click(firstChildCheckbox);

    await waitFor(() => {
      expect(handleSelectRow).toHaveBeenCalledWith('1.1', false);
      expect(handleSelectRow).toHaveBeenCalledWith('1', false);
    });

    expect(handleSelectRow.mock.calls).toEqual([
      ['1.1', false],
      ['1', false]
    ]);
  });
});
