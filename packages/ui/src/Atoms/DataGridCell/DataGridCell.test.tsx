import { render, screen } from "@testing-library/react";
import { DataGridCell } from "./DataGridCell";
import styles from "./DataGridCell.module.css";

describe("DataGridCell Component", () => {
  it("should render the cell with provided children", () => {
    render(
      <table>
        <tbody>
          <tr>
            <DataGridCell width={100}>Test Content</DataGridCell>
          </tr>
        </tbody>
      </table>
    );

    const cell = screen.getByText("Test Content");
    expect(cell).toBeInTheDocument();
  });

  it("should apply the correct width", () => {
    const { container } = render(
      <table>
        <tbody>
          <tr>
            <DataGridCell width={150}>Test Width</DataGridCell>
          </tr>
        </tbody>
      </table>
    );

    const cell = container.querySelector("td");
    expect(cell).toHaveStyle("width: 150px");
  });

  it("should apply a different width when updated", () => {
    const { rerender, container } = render(
      <table>
        <tbody>
          <tr>
            <DataGridCell width={150}>Test Width</DataGridCell>
          </tr>
        </tbody>
      </table>
    );

    let cell = container.querySelector("td");
    expect(cell).toHaveStyle("width: 150px");

    rerender(
      <table>
        <tbody>
          <tr>
            <DataGridCell width={200}>Test Width</DataGridCell>
          </tr>
        </tbody>
      </table>
    );

    cell = container.querySelector("td");
    expect(cell).toHaveStyle("width: 200px");
  });

  it("should apply the borderless class when borderless is true", () => {
    const { container } = render(
      <table>
        <tbody>
          <tr>
            <DataGridCell width={150} borderless={true}>
              Borderless Content
            </DataGridCell>
          </tr>
        </tbody>
      </table>
    );

    const cell = container.querySelector("td");
    expect(cell).toHaveClass(styles.borderless);
  });

  it("should not apply the borderless class when borderless is false", () => {
    const { container } = render(
      <table>
        <tbody>
          <tr>
            <DataGridCell width={150} borderless={false}>
              Regular Content
            </DataGridCell>
          </tr>
        </tbody>
      </table>
    );

    const cell = container.querySelector("td");
    expect(cell).not.toHaveClass(styles.borderless);
  });

  it("should not apply the borderless class when borderless is not provided", () => {
    const { container } = render(
      <table>
        <tbody>
          <tr>
            <DataGridCell width={150}>Regular Content</DataGridCell>
          </tr>
        </tbody>
      </table>
    );

    const cell = container.querySelector("td");
    expect(cell).not.toHaveClass(styles.borderless);
  });
});
