import { DataGridHeaderCell } from "../DataGridHeaderCell/DataGridHeaderCell";
import { Checkbox } from "../../Atoms/Checkbox/Checkbox";
import { ExtendedColumnDef } from "../../types/types";
import { SortingState } from "@tanstack/react-table"; // Import SortingState from react-table
import styles from "./DataGridHeaderRow.module.css";

// Update the type to accept SortingState directly from react-table
interface DataGridHeaderRowProps<T> {
  columns: ExtendedColumnDef<T, any>[];
  enableSorting?: boolean;
  selectable?: boolean;
  onSelectAll?: (checked: boolean) => void;
  onSortChange?: (columnId: string) => void;
  isSelectAllChecked?: boolean;
  sorting?: SortingState;
}

export const DataGridHeaderRow = <T,>({
  columns,
  enableSorting = false,
  selectable = false,
  onSelectAll,
  onSortChange,
  isSelectAllChecked = false,
  sorting = [],
}: DataGridHeaderRowProps<T>) => {
  const handleSelectAllChange = (checked: boolean) => {
    onSelectAll && onSelectAll(checked);
  };

  return (
    <tr className={styles.tableHeaderRow}>
      {selectable && (
        <th className={styles.checkboxCell}>
          <Checkbox
            onChange={handleSelectAllChange}
            checked={isSelectAllChecked}
          />
        </th>
      )}
      {columns.map((column) => {
        const currentSort = sorting.find((s) => s.id === column.id);

        const sortOrder =
          currentSort?.desc === undefined
            ? "none"
            : currentSort?.desc
              ? "desc"
              : "asc";

        return (
          <DataGridHeaderCell
            key={column.id}
            label={String(column.header)}
            sortable={enableSorting}
            sortOrder={sortOrder}
            onSort={() => column.id && onSortChange && onSortChange(column.id)}
            width={column.width}
          />
        );
      })}
    </tr>
  );
};
