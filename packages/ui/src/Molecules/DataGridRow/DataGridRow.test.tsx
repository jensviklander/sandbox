import { render, screen, fireEvent } from "@testing-library/react";
import { DataGridRow } from "./DataGridRow";
import { ExtendedColumnDef } from "../../types/types";
import styles from "./DataGridRow.module.css";

interface RowData {
  id: string;
  name: string;
  age: number;
}

describe("DataGridRow Component", () => {
  const columns: ExtendedColumnDef<RowData, any>[] = [
    { id: "name", header: "Name", accessorKey: "name", width: 150 },
    { id: "age", header: "Age", accessorKey: "age", width: 100 },
  ];

  const rowData: RowData = { id: "1", name: "John Doe", age: 30 };

  it("should render the row with the correct data", () => {
    render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columns}
            onDeleteRow={vi.fn()}
            rowIndex={0}
          />
        </tbody>
      </table>
    );

    const nameCell = screen.getByText("John Doe");
    const ageCell = screen.getByText("30");

    expect(nameCell).toBeInTheDocument();
    expect(ageCell).toBeInTheDocument();
  });

  it("should render the checkbox when selectable is true", () => {
    const handleSelectRow = vi.fn();

    render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columns}
            onDeleteRow={vi.fn()}
            rowIndex={0}
            selectable={true}
            isSelected={false}
            onSelectRow={handleSelectRow}
          />
        </tbody>
      </table>
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();

    fireEvent.click(checkbox);
    expect(handleSelectRow).toHaveBeenCalledWith(true);
  });

  it("should call onDeleteRow when delete button is clicked", () => {
    const handleDeleteRow = vi.fn();

    render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columns}
            onDeleteRow={handleDeleteRow}
            rowIndex={0}
            showDeleteButton={true}
          />
        </tbody>
      </table>
    );

    const deleteButton = screen.getByRole("button");
    fireEvent.click(deleteButton);

    expect(handleDeleteRow).toHaveBeenCalledWith(rowData.id);
  });

  it("should not render the delete button when showDeleteButton is false", () => {
    render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columns}
            onDeleteRow={vi.fn()}
            rowIndex={0}
            showDeleteButton={false}
          />
        </tbody>
      </table>
    );

    const deleteButton = screen.queryByRole("button");
    expect(deleteButton).not.toBeInTheDocument();
  });

  it("should render the spacer cell", () => {
    const { container } = render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columns}
            onDeleteRow={vi.fn()}
            rowIndex={0}
          />
        </tbody>
      </table>
    );

    const spacerCell = container.querySelector(`.${styles.spacerCell}`);
    expect(spacerCell).toBeInTheDocument();
  });

  it("should apply evenRow style for even rows", () => {
    const { container } = render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columns}
            onDeleteRow={vi.fn()}
            rowIndex={0}
          />
        </tbody>
      </table>
    );

    const rowElement = container.querySelector("tr");
    expect(rowElement).toHaveClass(styles.evenRow);
  });

  it("should apply oddRow style for odd rows", () => {
    const { container } = render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columns}
            onDeleteRow={vi.fn()}
            rowIndex={1}
          />
        </tbody>
      </table>
    );

    const rowElement = container.querySelector("tr");
    expect(rowElement).toHaveClass(styles.oddRow);
  });

  it("should render cell content using accessorFn when provided", () => {
    const columnsWithAccessorFn: ExtendedColumnDef<RowData, any>[] = [
      {
        id: "custom",
        header: "Custom",
        accessorFn: (rowData, rowIndex) =>
          `${rowData.name} - Row ${rowIndex + 1}`,
        width: 200,
      },
    ];

    render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columnsWithAccessorFn}
            onDeleteRow={vi.fn()}
            rowIndex={0}
          />
        </tbody>
      </table>
    );

    const customCell = screen.getByText("John Doe - Row 1");
    expect(customCell).toBeInTheDocument();
  });

  it("should render an empty cell if neither accessorKey nor accessorFn are provided", () => {
    const columnsWithoutAccessor: ExtendedColumnDef<RowData, any>[] = [
      { id: "custom", header: "Custom", width: 200 },
    ];

    render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columnsWithoutAccessor}
            onDeleteRow={vi.fn()}
            rowIndex={0}
          />
        </tbody>
      </table>
    );

    const allCells = screen.getAllByRole("cell");

    const customCell = allCells[0];
    expect(customCell).toBeEmptyDOMElement();
  });

  it("should use index as part of cellKey when col.id is not defined", () => {
    const columnsWithoutId: ExtendedColumnDef<RowData, any>[] = [
      { header: "Custom", accessorKey: "name", width: 200 },
    ];

    render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columnsWithoutId}
            onDeleteRow={vi.fn()}
            rowIndex={0}
          />
        </tbody>
      </table>
    );

    const allCells = screen.getAllByRole("cell");

    expect(allCells).toHaveLength(2);
    expect(allCells[0]).toBeInTheDocument();
  });

  it("should apply the provided column width when width is specified", () => {
    const columnsWithWidth: ExtendedColumnDef<RowData, any>[] = [
      { id: "name", header: "Name", accessorKey: "name", width: 150 },
    ];

    const { container } = render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columnsWithWidth}
            onDeleteRow={vi.fn()}
            rowIndex={0}
          />
        </tbody>
      </table>
    );

    const cell = container.querySelector("td");
    expect(cell).toHaveStyle("width: 150px");
  });

  it("should apply the default column width when width is not provided", () => {
    const columnsWithoutWidth: ExtendedColumnDef<RowData, any>[] = [
      { id: "name", header: "Name", accessorKey: "name" },
    ];

    const { container } = render(
      <table>
        <tbody>
          <DataGridRow
            rowData={rowData}
            columns={columnsWithoutWidth}
            onDeleteRow={vi.fn()}
            rowIndex={0}
          />
        </tbody>
      </table>
    );

    const cell = container.querySelector("td");
    expect(cell).toHaveStyle("width: 180px");
  });
});
