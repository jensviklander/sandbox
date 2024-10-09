import { IconButton } from "../../Atoms/IconButton/IconButton";
import styles from "./DataGridHeaderCell.module.css";

interface DataGridHeaderCellProps {
  label: string;
  sortable?: boolean;
  sortOrder: "asc" | "desc" | "none";
  onSort?: () => void;
  width?: number;
}

export const DataGridHeaderCell: React.FC<DataGridHeaderCellProps> = ({
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