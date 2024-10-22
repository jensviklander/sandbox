import { DataGridCell } from '../../Atoms/DataGridCell/DataGridCell';
import { IconButton } from '../../Atoms/IconButton/IconButton';
import { Checkbox } from '../../Atoms/Checkbox/Checkbox';
import { ExtendedColumnDef } from '../../types/types';
import styles from './DataGridRow.module.css';

interface DataGridRowProps<T extends { id: string }> {
  rowData: T;
  columns: ExtendedColumnDef<T, any>[];
  onDeleteRow: (rowId: string) => void;
  selectable?: boolean;
  isSelected?: boolean;
  onSelectRow?: (checked: boolean) => void;
  showDeleteButton?: boolean;
  borderless?: boolean;
  subRows?: T[];
  isSubRow?: boolean;
}

export const DataGridRow = <T extends { id: string }>({
  rowData,
  columns,
  onDeleteRow,
  selectable = false,
  isSelected = false,
  onSelectRow,
  showDeleteButton = false,
  borderless = false,
  subRows = [],
  isSubRow = false
}: DataGridRowProps<T>) => {
  return (
    <>
      <tr className={styles.tableRow}>
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
          const cellKey = `${rowData.id}-${col.id || index}`;
          const width = col.width || 180;

          const cellValue =
            'accessorKey' in col
              ? rowData[col.accessorKey as keyof T]
              : col.accessorFn
                ? col.accessorFn(rowData, index)
                : null;

          return (
            <DataGridCell
              key={cellKey}
              width={width}
              borderless={borderless}
              isSubRow={isSubRow && index === 0}
            >
              {cellValue ?? ''}
            </DataGridCell>
          );
        })}

        <td
          className={`${styles.spacerCell} ${!showDeleteButton && !borderless ? styles.spacerWithRightBorder : ''} ${borderless ? styles.borderless : ''}`}
        ></td>

        {showDeleteButton && (
          <td
            className={`${styles.iconCell} ${borderless ? styles.borderless : ''}`}
          >
            <IconButton icon="trash" onClick={() => onDeleteRow(rowData.id)} />
          </td>
        )}
      </tr>

      {subRows.length > 0 &&
        subRows.map((subRow) => (
          <DataGridRow
            key={subRow.id}
            rowData={subRow}
            columns={columns}
            onDeleteRow={onDeleteRow}
            selectable={selectable}
            isSelected={isSelected}
            onSelectRow={onSelectRow}
            showDeleteButton={showDeleteButton}
            borderless={borderless}
            subRows={[]}
            isSubRow={true}
          />
        ))}
    </>
  );
};
