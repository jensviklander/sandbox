import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination } from "./Pagination";
import styles from "./Pagination.module.css";

describe("Pagination Component", () => {
  const totalPages = 5;

  it("should render the correct pagination controls", () => {
    render(
      <Pagination
        currentPage={2}
        totalPages={totalPages}
        onPageChange={vi.fn()}
      />
    );

    const firstLink = screen.getByText("First");
    const previousLink = screen.getByText("Previous");
    const nextLink = screen.getByText("Next");
    const lastLink = screen.getByText("Last");

    expect(firstLink).toBeInTheDocument();
    expect(previousLink).toBeInTheDocument();
    expect(nextLink).toBeInTheDocument();
    expect(lastLink).toBeInTheDocument();

    const pageLinks = screen.getAllByText(/\d+/);
    expect(pageLinks.length).toBe(totalPages);
  });

  it("should trigger onPageChange when First link is clicked", () => {
    const handlePageChange = vi.fn();
    render(
      <Pagination
        currentPage={2}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    );

    const firstLink = screen.getByText("First");
    fireEvent.click(firstLink);

    expect(handlePageChange).toHaveBeenCalledWith(0);
  });

  it("should trigger onPageChange when Previous link is clicked", () => {
    const handlePageChange = vi.fn();
    render(
      <Pagination
        currentPage={2}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    );

    const previousLink = screen.getByText("Previous");
    fireEvent.click(previousLink);

    expect(handlePageChange).toHaveBeenCalledWith(1);
  });

  it("should trigger onPageChange when Next link is clicked", () => {
    const handlePageChange = vi.fn();
    render(
      <Pagination
        currentPage={2}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    );

    const nextLink = screen.getByText("Next");
    fireEvent.click(nextLink);

    expect(handlePageChange).toHaveBeenCalledWith(3);
  });

  it("should trigger onPageChange when Last link is clicked", () => {
    const handlePageChange = vi.fn();
    render(
      <Pagination
        currentPage={2}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    );

    const lastLink = screen.getByText("Last");
    fireEvent.click(lastLink);

    expect(handlePageChange).toHaveBeenCalledWith(totalPages - 1);
  });

  it("should trigger onPageChange when a page number link is clicked", () => {
    const handlePageChange = vi.fn();
    render(
      <Pagination
        currentPage={2}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    );

    const pageLink = screen.getByText("4");
    fireEvent.click(pageLink);

    expect(handlePageChange).toHaveBeenCalledWith(3);
  });

  it("should disable First and Previous links on the first page", () => {
    render(
      <Pagination
        currentPage={0}
        totalPages={totalPages}
        onPageChange={vi.fn()}
      />
    );

    const firstLink = screen.getByText("First");
    const previousLink = screen.getByText("Previous");

    expect(firstLink).toHaveAttribute("aria-disabled", "true");
    expect(previousLink).toHaveAttribute("aria-disabled", "true");
  });

  it("should disable Next and Last links on the last page", () => {
    render(
      <Pagination
        currentPage={totalPages - 1}
        totalPages={totalPages}
        onPageChange={vi.fn()}
      />
    );

    const nextLink = screen.getByText("Next");
    const lastLink = screen.getByText("Last");

    expect(nextLink).toHaveAttribute("aria-disabled", "true");
    expect(lastLink).toHaveAttribute("aria-disabled", "true");
  });

  it("should apply current page style to the active page", () => {
    render(
      <Pagination
        currentPage={2}
        totalPages={totalPages}
        onPageChange={vi.fn()}
      />
    );

    const currentPage = screen.getByText("3");
    expect(currentPage).toHaveClass(styles["current-page"]);
  });
});
