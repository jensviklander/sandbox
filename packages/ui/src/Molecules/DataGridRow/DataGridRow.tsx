import { DataGridCell } from '../../Atoms/DataGridCell/DataGridCell';
import { IconButton } from '../../Atoms/IconButton/IconButton';
import { Checkbox } from '../../Atoms/Checkbox/Checkbox';
import { ExtendedColumnDef } from '../../types/types';
import styles from './DataGridRow.module.css';

interface DataGridRowProps<T> {
  rowData: T;
  columns: ExtendedColumnDef<T, any>[];
  onDeleteRow: (rowId: string) => void;
  rowIndex: number;
  selectable?: boolean;
  isSelected?: boolean;
  onSelectRow?: (checked: boolean) => void;
  showDeleteButton?: boolean;
  borderless?: boolean;
}

export const DataGridRow = <T extends { id: string }>({
  rowData,
  columns,
  onDeleteRow,
  rowIndex,
  selectable = false,
  isSelected = false,
  onSelectRow,
  showDeleteButton = false,
  borderless = false
}: DataGridRowProps<T>) => {
  const isEvenRow = rowIndex % 2 === 0;

  return (
    <tr
      className={`${styles.tableRow} ${isEvenRow ? styles.evenRow : styles.oddRow}`}
    >
      {selectable && (
        <td
          className={`${styles.checkboxCell} ${borderless ? styles.borderless : ''}`}
        >
          <Checkbox
            id="data-grid-row-selection"
            checked={isSelected}
            onChange={(checked) => onSelectRow && onSelectRow(checked)}
          />
        </td>
      )}

      {columns.map((col, index) => {
        const cellKey = `${rowIndex}-${col.id || index}`;
        const width = col.width || 180;
        const cellValue =
          'accessorKey' in col
            ? rowData[col.accessorKey as keyof T]
            : col.accessorFn
              ? col.accessorFn(rowData, rowIndex)
              : null;

        return (
          <DataGridCell key={cellKey} width={width} borderless={borderless}>
            {cellValue ?? ''}
          </DataGridCell>
        );
      })}

      <td
        className={`${styles.spacerCell} ${
          !showDeleteButton && !borderless ? styles.spacerWithRightBorder : ''
        } ${borderless ? styles.borderless : ''}`}
      ></td>

      {showDeleteButton && (
        <td
          className={`${styles.iconCell} ${borderless ? styles.borderless : ''}`}
        >
          <IconButton icon="trash" onClick={() => onDeleteRow(rowData.id)} />
        </td>
      )}
    </tr>
  );
};
