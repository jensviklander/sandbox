import { render, screen, fireEvent } from "@testing-library/react";
import { DataGridHeaderRow } from "./DataGridHeaderRow";
import { ExtendedColumnDef } from "../../types/types";

describe("DataGridHeaderRow Component", () => {
  const columns: ExtendedColumnDef<any, any>[] = [
    { id: "name", header: "Name", width: 150 },
    { id: "age", header: "Age", width: 100 },
  ];

  it("should render the header cells with the correct labels", () => {
    render(
      <table>
        <thead>
          <DataGridHeaderRow columns={columns} />
        </thead>
      </table>
    );

    const nameHeader = screen.getByText("Name");
    const ageHeader = screen.getByText("Age");

    expect(nameHeader).toBeInTheDocument();
    expect(ageHeader).toBeInTheDocument();
  });

  it("should render the select all checkbox when selectable is true", () => {
    const handleSelectAll = vi.fn();
    render(
      <table>
        <thead>
          <DataGridHeaderRow
            columns={columns}
            selectable={true}
            onSelectAll={handleSelectAll}
            isSelectAllChecked={false}
          />
        </thead>
      </table>
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();

    fireEvent.click(checkbox);
    expect(handleSelectAll).toHaveBeenCalledWith(true);
  });

  it("should apply the correct checked state to the select all checkbox", () => {
    render(
      <table>
        <thead>
          <DataGridHeaderRow
            columns={columns}
            selectable={true}
            isSelectAllChecked={true}
          />
        </thead>
      </table>
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });

  it("should trigger onSortChange when the sorting icon is clicked", () => {
    const handleSortChange = vi.fn();
    render(
      <table>
        <thead>
          <DataGridHeaderRow
            columns={columns}
            enableSorting={true}
            onSortChange={handleSortChange}
            sorting={[{ id: "name", desc: false }]}
          />
        </thead>
      </table>
    );

    const sortIcon = screen.getByLabelText("sortAsc");
    fireEvent.click(sortIcon);

    expect(handleSortChange).toHaveBeenCalledWith("name");
  });

  it("should render the correct sorting icon based on the sortOrder", () => {
    render(
      <table>
        <thead>
          <DataGridHeaderRow
            columns={columns}
            enableSorting={true}
            sorting={[{ id: "name", desc: false }]}
          />
        </thead>
      </table>
    );

    const sortAscIcon = screen.getByLabelText("sortAsc");
    expect(sortAscIcon).toBeInTheDocument();
  });

  it("should render the correct sorting icon for descending order", () => {
    render(
      <table>
        <thead>
          <DataGridHeaderRow
            columns={columns}
            enableSorting={true}
            sorting={[{ id: "name", desc: true }]}
          />
        </thead>
      </table>
    );

    const sortDescIcon = screen.getByLabelText("sortDesc");
    expect(sortDescIcon).toBeInTheDocument();
  });

  it("should render the correct width for each column", () => {
    const { container } = render(
      <table>
        <thead>
          <DataGridHeaderRow columns={columns} />
        </thead>
      </table>
    );

    const headerCells = container.querySelectorAll("th");
    expect(headerCells[0]).toHaveStyle("width: 150px");
    expect(headerCells[1]).toHaveStyle("width: 100px");
  });
});
