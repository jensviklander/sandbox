import { TableHeaderCell } from "../TableHeaderCell/TableHeaderCell";
import { Checkbox } from "../../Atoms/Checkbox/Checkbox";
import { ExtendedColumnDef } from "../../types/types";
import styles from "./TableHeaderRow.module.css";

interface TableHeaderRowProps<T> {
  columns: ExtendedColumnDef<T, any>[];
  enableSorting?: boolean;
  selectable?: boolean;
  onSelectAll?: (checked: boolean) => void;
  onSortChange?: (columnId: string) => void;
  isSelectAllChecked?: boolean;
  sorting?: { id: string; sortOrder: "asc" | "desc" | "none" }[];
}

export const TableHeaderRow = <T,>({
  columns,
  enableSorting = false,
  selectable = false,
  onSelectAll,
  onSortChange,
  isSelectAllChecked = false,
  sorting = [],
}: TableHeaderRowProps<T>) => {
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
        const currentSort =
          sorting.find((s) => s.id === column.id)?.sortOrder || "none";

        return (
          <TableHeaderCell
            key={column.id}
            label={String(column.header)}
            sortable={enableSorting}
            sortOrder={currentSort}
            onSort={() => column.id && onSortChange && onSortChange(column.id)}
            width={column.width}
          />
        );
      })}
    </tr>
  );
};
