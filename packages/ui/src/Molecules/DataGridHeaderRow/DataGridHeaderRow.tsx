import { DataGridHeaderCell } from '../DataGridHeaderCell/DataGridHeaderCell';
import { Checkbox } from '../../Atoms/Checkbox/Checkbox';
import { ExtendedColumnDef } from '../../types/types';
import { SortingState } from '@tanstack/react-table';
import { IconButton } from '../../Atoms/IconButton/IconButton';
import styles from './DataGridHeaderRow.module.css';

interface DataGridHeaderRowProps<T> {
  columns: ExtendedColumnDef<T, any>[];
  enableSorting?: boolean;
  selectable?: boolean;
  onSelectAll?: (checked: boolean) => void;
  onSortChange?: (columnId: string) => void;
  isSelectAllChecked?: boolean;
  sorting?: SortingState;
  borderless?: boolean;
  showMultiDelete?: boolean;
  onDeleteSelected?: () => void;
}

export const DataGridHeaderRow = <T,>({
  columns,
  enableSorting = false,
  selectable = false,
  onSelectAll,
  onSortChange,
  isSelectAllChecked = false,
  sorting = [],
  borderless = false,
  showMultiDelete = false,
  onDeleteSelected
}: DataGridHeaderRowProps<T>) => {
  const handleSelectAllChange = (checked: boolean) => {
    onSelectAll && onSelectAll(checked);
  };

  return (
    <tr className={styles.tableHeaderRow}>
      {selectable && (
        <th
          className={`${styles.checkboxCell} ${borderless ? styles.borderless : ''}`}
        >
          <Checkbox
            id="data-grid-header-select-all-checkbox"
            onChange={handleSelectAllChange}
            checked={isSelectAllChecked}
          />
        </th>
      )}

      {columns.map((column, index) => {
        const currentSort = sorting.find((s) => s.id === column.id);
        const sortOrder =
          currentSort?.desc === undefined
            ? 'none'
            : currentSort?.desc
              ? 'desc'
              : 'asc';

        return (
          <DataGridHeaderCell
            key={column.id || index}
            label={String(column.header)}
            sortable={enableSorting}
            sortOrder={sortOrder}
            onSort={() => column.id && onSortChange && onSortChange(column.id)}
            width={column.width}
            borderless={borderless}
          />
        );
      })}

      <th
        className={`${styles.spacerCell} ${
          !showMultiDelete && !borderless ? styles.spacerWithRightBorder : ''
        } ${borderless ? styles.borderless : ''}`}
      ></th>

      {showMultiDelete && onDeleteSelected && (
        <th
          className={`${styles.iconCell} ${borderless ? styles.borderless : ''}`}
        >
          <IconButton icon="trash" type="danger" onClick={onDeleteSelected} />
        </th>
      )}
    </tr>
  );
};
