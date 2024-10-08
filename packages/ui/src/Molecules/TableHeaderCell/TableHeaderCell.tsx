import { IconButton } from "../../Atoms/IconButton/IconButton";
import styles from "./TableHeaderCell.module.css";

interface TableHeaderCellProps {
  label: string;
  sortable?: boolean;
  sortOrder: "asc" | "desc" | "none";
  onSort?: () => void;
  width?: number;
}

export const TableHeaderCell: React.FC<TableHeaderCellProps> = ({
  label,
  sortable = false,
  sortOrder = "none",
  onSort = () => {},
  width = 180,
}) => {
  return (
    <th className={styles.headerCell} style={{ width }}>
      <div className={styles.headerContent}>
        <span>{label}</span>
        {sortable && (
          <IconButton
            icon={
              sortOrder === "desc"
                ? "sortDesc"
                : sortOrder === "asc"
                  ? "sortAsc"
                  : "sort"
            }
            onClick={onSort}
          />
        )}
      </div>
    </th>
  );
};
