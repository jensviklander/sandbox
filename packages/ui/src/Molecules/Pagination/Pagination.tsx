import { Link } from "../../Atoms/Link/Link";
import styles from "./Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageIndex: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className={styles["pagination-controls"]}>
      {currentPage > 0 && (
        <Link href="#" onClick={() => onPageChange(currentPage - 1)}>
          Previous
        </Link>
      )}

      {pages.map((page) => (
        <span key={page}>
          {currentPage === page - 1 ? (
            <span className={styles["current-page"]}>{page}</span>
          ) : (
            <Link href="#" onClick={() => onPageChange(page - 1)}>
              {page}
            </Link>
          )}
        </span>
      ))}

      {currentPage < totalPages - 1 && (
        <Link href="#" onClick={() => onPageChange(currentPage + 1)}>
          Next
        </Link>
      )}
    </div>
  );
};
