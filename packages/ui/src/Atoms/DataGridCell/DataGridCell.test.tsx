import { render, screen } from "@testing-library/react";
import { DataGridCell } from "./DataGridCell";

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
});
