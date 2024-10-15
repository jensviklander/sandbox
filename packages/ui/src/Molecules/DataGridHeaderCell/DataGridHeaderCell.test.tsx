import { render, screen, fireEvent } from "@testing-library/react";
import { DataGridHeaderCell } from "./DataGridHeaderCell";
import styles from "./DataGridHeaderCell.module.css";

describe("DataGridHeaderCell Component", () => {
  it("should render the header cell with the correct label", () => {
    render(<DataGridHeaderCell label="Name" sortOrder="none" />);

    const labelElement = screen.getByText("Name");
    expect(labelElement).toBeInTheDocument();
  });

  it("should render the sort button when sortable is true with default sort icon", () => {
    render(
      <DataGridHeaderCell label="Name" sortable={true} sortOrder="none" />
    );

    const sortIcon = screen.getByLabelText("sort");
    expect(sortIcon).toBeInTheDocument();
  });

  it("should render the sortAsc icon when sortOrder is asc", () => {
    render(<DataGridHeaderCell label="Name" sortable={true} sortOrder="asc" />);

    const sortAscIcon = screen.getByLabelText("sortAsc");
    expect(sortAscIcon).toBeInTheDocument();
  });

  it("should render the sortDesc icon when sortOrder is desc", () => {
    render(
      <DataGridHeaderCell label="Name" sortable={true} sortOrder="desc" />
    );

    const sortDescIcon = screen.getByLabelText("sortDesc");
    expect(sortDescIcon).toBeInTheDocument();
  });

  it("should render the default sort icon when sortOrder is none", () => {
    render(
      <DataGridHeaderCell label="Name" sortable={true} sortOrder="none" />
    );

    const sortIcon = screen.getByLabelText("sort");
    expect(sortIcon).toBeInTheDocument();
  });

  it("should call onSort when the sort button is clicked", () => {
    const handleSort = vi.fn();
    render(
      <DataGridHeaderCell
        label="Name"
        sortable={true}
        sortOrder="none"
        onSort={handleSort}
      />
    );

    const sortButton = screen.getByRole("button");
    fireEvent.click(sortButton);

    expect(handleSort).toHaveBeenCalledTimes(1);
  });

  it("should apply the correct width when provided", () => {
    const { container } = render(
      <DataGridHeaderCell
        label="Name"
        sortable={true}
        sortOrder="none"
        width={200}
      />
    );

    const headerCell = container.querySelector("th");
    expect(headerCell).toHaveStyle("width: 200px");
  });

  it("should apply the default width if no width is provided", () => {
    const { container } = render(
      <DataGridHeaderCell label="Name" sortable={true} sortOrder="none" />
    );

    const headerCell = container.querySelector("th");
    expect(headerCell).toHaveStyle("width: 180px");
  });

  it("should apply the borderless class when borderless is true", () => {
    const { container } = render(
      <DataGridHeaderCell label="Name" borderless={true} sortOrder="none" />
    );

    const headerCell = container.querySelector("th");
    expect(headerCell).toHaveClass(styles.borderless);
  });

  it("should not apply the borderless class when borderless is false", () => {
    const { container } = render(
      <DataGridHeaderCell label="Name" borderless={false} sortOrder="none" />
    );

    const headerCell = container.querySelector("th");
    expect(headerCell).not.toHaveClass(styles.borderless);
  });

  it("should not apply the borderless class when borderless is not provided", () => {
    const { container } = render(
      <DataGridHeaderCell label="Name" sortOrder="none" />
    );

    const headerCell = container.querySelector("th");
    expect(headerCell).not.toHaveClass(styles.borderless);
  });

  it("should use default onSort function if not provided", () => {
    const { container } = render(
      <DataGridHeaderCell label="Name" sortable={true} sortOrder="none" />
    );

    const sortButton = screen.getByRole("button");
    fireEvent.click(sortButton);

    // No errors should occur
    expect(container).toBeInTheDocument();
  });
});
