import { DataGridCell } from "../../Atoms/DataGridCell/DataGridCell";
import { IconButton } from "../../Atoms/IconButton/IconButton";
import { Checkbox } from "../../Atoms/Checkbox/Checkbox";
import { ExtendedColumnDef } from "../../types/types";
import styles from "./DataGridRow.module.css";

interface DataGridRowProps<T> {
  rowData: T;
  columns: ExtendedColumnDef<T, any>[];
  onDeleteRow: (rowId: string) => void;
  rowIndex: number;
  selectable?: boolean;
  isSelected?: boolean;
  onSelectRow?: (checked: boolean) => void;
  showDeleteButton?: boolean;
}

export const DataGridRow = <T extends { id: string }>({
  rowData,
  columns,
  onDeleteRow,
  rowIndex,
  selectable = false,
  isSelected = false,
  onSelectRow,
  showDeleteButton = true,
}: DataGridRowProps<T>) => {
  const isEvenRow = rowIndex % 2 === 0;

  return (
    <tr
      className={`${styles.tableRow} ${isEvenRow ? styles.evenRow : styles.oddRow}`}
    >
      {selectable && (
        <td className={styles.checkboxCell}>
          <Checkbox
            checked={isSelected}
            onChange={(checked) => onSelectRow && onSelectRow(checked)}
          />
        </td>
      )}

      {columns.map((col, index) => {
        const cellKey = `${rowIndex}-${col.id || index}`;
        const width = col.width || 180;
        const cellValue =
          "accessorKey" in col
            ? rowData[col.accessorKey as keyof T]
            : col.accessorFn
              ? col.accessorFn(rowData, rowIndex)
              : null;

        return (
          <DataGridCell key={cellKey} width={width}>
            {cellValue ?? ""}
          </DataGridCell>
        );
      })}

      <td className={styles.spacerCell}></td>

      {showDeleteButton && (
        <td className={styles.iconCell}>
          <IconButton icon="trash" onClick={() => onDeleteRow(rowData.id)} />
        </td>
      )}
    </tr>
  );
};
