import { render, screen, fireEvent } from "@testing-library/react";
import { Link } from "./Link";
import styles from "./Link.module.css";

describe("Link Component", () => {
  it("should render the link with the correct text", () => {
    render(
      <Link href="/test" onClick={vi.fn()}>
        Test Link
      </Link>
    );

    const linkElement = screen.getByText("Test Link");
    expect(linkElement).toBeInTheDocument();
  });

  it("should trigger onClick when clicked", () => {
    const handleClick = vi.fn();

    render(
      <Link href="/test" onClick={handleClick}>
        Test Link
      </Link>
    );

    const linkElement = screen.getByText("Test Link");

    fireEvent.click(linkElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should prevent onClick when link is disabled", () => {
    const handleClick = vi.fn();

    render(
      <Link href="/test" onClick={handleClick} isDisabled>
        Disabled Link
      </Link>
    );

    const linkElement = screen.getByText("Disabled Link");

    fireEvent.click(linkElement);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("should apply disabled class when link is disabled", () => {
    render(
      <Link href="/test" onClick={vi.fn()} isDisabled>
        Disabled Link
      </Link>
    );

    const linkElement = screen.getByText("Disabled Link");

    expect(linkElement).toHaveClass(styles.link);
    expect(linkElement).toHaveClass(styles.disabled);
    expect(linkElement).toHaveAttribute("aria-disabled", "true");
  });

  it("should apply custom class when provided", () => {
    render(
      <Link href="/test" onClick={vi.fn()} className="custom-class">
        Custom Class Link
      </Link>
    );

    const linkElement = screen.getByText("Custom Class Link");

    expect(linkElement).toHaveClass("custom-class");
    expect(linkElement).toHaveClass(styles.link);
  });
});
