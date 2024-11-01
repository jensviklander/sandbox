import { useState, useEffect } from 'react';
import { DataGridHeaderRow } from '../../Molecules/DataGridHeaderRow/DataGridHeaderRow';
import { DataGridRow } from '../../Molecules/DataGridRow/DataGridRow';
import { DataGridControlMenu } from '../../Molecules/DataGridControlMenu/DataGridControlMenu';
import { Pagination } from '../../Molecules/Pagination/Pagination';
import {
  SortingState,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel
} from '@tanstack/react-table';
import { ExtendedColumnDef } from '../../types/types';
import styles from './DataGrid.module.css';

interface DataGridProps<T extends { id: string }> {
  title?: string;
  data: T[];
  columns: ExtendedColumnDef<T, any>[];
  enableSorting?: boolean;
  selectable?: boolean;
  enableSearch?: boolean;
  enablePagination?: boolean;
  paginationPosition?: 'left' | 'center' | 'right';
  pageSize?: number;
  currentPage?: number;
  onPageChange?: (pageIndex: number) => void;
  selectedRows?: string[];
  onSelectRow?: (rowId: string, checked: boolean) => void;
  showDeleteButton?: boolean;
  showStatistics?: boolean;
  borderless?: boolean;
  onDeleteSelected?: () => void;
  getSubRows?: (row: T) => T[] | undefined;
}

// FIXME: Improve branch coverage
export default function DataGrid<T extends { id: string }>({
  title,
  data,
  columns,
  enableSorting = false,
  selectable = false,
  enableSearch = false,
  enablePagination = false,
  paginationPosition = 'center',
  pageSize = 10,
  currentPage = 0,
  onPageChange,
  selectedRows = [],
  onSelectRow,
  showDeleteButton = false,
  showStatistics = false,
  borderless = false,
  onDeleteSelected,
  getSubRows
}: DataGridProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [initialData] = useState<T[]>(data);
  const [tableData, setTableData] = useState<T[]>(data);
  const [pageIndex, setPageIndex] = useState<number>(currentPage);
  const [totalPages, setTotalPages] = useState<number>(
    Math.ceil(tableData.length / pageSize)
  );
  const [selectedRowsInternal, setSelectedRowsInternal] =
    useState<string[]>(selectedRows);

  const table = useReactTable({
    data: tableData,
    columns,
    getRowId: (row) => row.id,
    state: {
      sorting,
      pagination: { pageIndex, pageSize }
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
    getPaginationRowModel: enablePagination
      ? getPaginationRowModel()
      : undefined,
    manualPagination: !enablePagination,
    getSubRows: getSubRows
  });

  useEffect(() => {
    setTotalPages(Math.ceil(tableData.length / pageSize));
  }, [tableData, pageSize]);

  const collectAllRowIds = () => {
    return table
      .getRowModel()
      .rows.flatMap((row) => [
        row.id,
        ...(row.subRows?.map((subRow) => subRow.id) || [])
      ]);
  };

  const collectRowAndSubRowIds = <T extends { id: string; subRows?: T[] }>(
    row: T
  ): string[] => {
    return [row.id, ...(row.subRows?.map((subRow) => subRow.id) || [])];
  };

  const handlePageChange = (newPageIndex: number) => {
    setSelectedRowsInternal([]);
    setPageIndex(newPageIndex);
    onPageChange?.(newPageIndex);
  };

  const handleSelectAllChange = (checked: boolean) => {
    const allRowIds = collectAllRowIds();

    setSelectedRowsInternal(checked ? allRowIds : []);
    allRowIds.forEach((id) => onSelectRow && onSelectRow(id, checked));
  };

  const isAllRowsSelected = () => {
    const allRowIds = collectAllRowIds();
    return (
      allRowIds.length > 0 &&
      allRowIds.every((id) => selectedRowsInternal.includes(id))
    );
  };

  const isSelectAllChecked = isAllRowsSelected();

  const handleRowSelectChange = (
    rowId: string,
    checked: boolean,
    isParent: boolean,
    subRowIds: string[] = []
  ) => {
    setSelectedRowsInternal((prevSelectedRows) => {
      const updatedSelection = new Set(prevSelectedRows);

      if (checked) {
        updatedSelection.add(rowId);
        subRowIds.forEach((subRowId) => updatedSelection.add(subRowId));
      } else {
        updatedSelection.delete(rowId);
        subRowIds.forEach((subRowId) => updatedSelection.delete(subRowId));
      }

      onSelectRow && onSelectRow(rowId, checked);
      subRowIds.forEach(
        (subRowId) => onSelectRow && onSelectRow(subRowId, checked)
      );

      return Array.from(updatedSelection);
    });

    if (!isParent) {
      const parentRow = table
        .getRowModel()
        .rows.find((row) => row.subRows?.some((subRow) => subRow.id === rowId));

      if (parentRow) {
        setSelectedRowsInternal((currentSelectedRows) => {
          const allSiblingsSelected = parentRow.subRows.every((subRow) =>
            currentSelectedRows.includes(subRow.id)
          );

          if (allSiblingsSelected && checked) {
            onSelectRow && onSelectRow(parentRow.id, true);
            return [...currentSelectedRows, parentRow.id];
          } else if (!allSiblingsSelected && !checked) {
            onSelectRow && onSelectRow(parentRow.id, false);
            return currentSelectedRows.filter((id) => id !== parentRow.id);
          }

          return currentSelectedRows;
        });
      }
    }
  };

  const handleSortChange = (columnId: string) => {
    const column = columns.find((col) => col.id === columnId);
    const isNumericColumn = column?.type === 'number';

    const currentSort = sorting.find((s) => s.id === columnId);
    let nextSortOrder: 'asc' | 'desc' | 'none' = 'none';

    if (isNumericColumn) {
      if (!currentSort) {
        nextSortOrder = 'desc';
      } else if (currentSort.desc) {
        nextSortOrder = 'asc';
      } else {
        nextSortOrder = 'none';
      }
    } else {
      if (!currentSort) {
        nextSortOrder = 'asc';
      } else if (!currentSort.desc) {
        nextSortOrder = 'desc';
      } else {
        nextSortOrder = 'none';
      }
    }

    const newSortingState: SortingState =
      nextSortOrder === 'none'
        ? []
        : [{ id: columnId, desc: nextSortOrder === 'desc' }];

    setSorting(newSortingState);

    if (nextSortOrder === 'none') {
      setTableData(initialData);
    }
  };

  const handleSearch = (query: string) => {
    const filteredData = initialData.filter((row) =>
      Object.values(row).join(' ').toLowerCase().includes(query.toLowerCase())
    );

    setTableData(filteredData);
    setPageIndex(0);
  };

  const handleDeleteRow = (rowId: string) => {
    const updatedData = tableData.filter((row) => row.id !== rowId);
    setTableData(updatedData);
  };

  const handleDeleteSelectedRows = () => {
    if (onDeleteSelected) {
      onDeleteSelected();
    } else {
      const updatedData = tableData.filter(
        (row) => !selectedRowsInternal.includes(row.id)
      );
      setTableData(updatedData);
      setSelectedRowsInternal([]);
    }
  };

  return (
    <div className={styles.tableWrapper}>
      {title && <h2 className={styles.tableTitle}>{title}</h2>}
      {enableSearch && (
        <div className={styles.searchBar}>
          <DataGridControlMenu onSearch={handleSearch} />
        </div>
      )}

      <table className={styles.table}>
        {tableData.length > 0 && (
          <thead>
            <DataGridHeaderRow
              columns={columns}
              enableSorting={enableSorting}
              selectable={selectable}
              sorting={sorting}
              onSelectAll={handleSelectAllChange}
              onSortChange={handleSortChange}
              isSelectAllChecked={isSelectAllChecked}
              borderless={borderless}
              showMultiDelete={
                showDeleteButton && selectedRowsInternal.length > 1
              }
              onDeleteSelected={handleDeleteSelectedRows}
            />
          </thead>
        )}
        <tbody>
          {tableData.length > 0 ? (
            table
              .getRowModel()
              .rows.map((row) => (
                <DataGridRow
                  key={row.id}
                  rowData={row.original}
                  columns={columns}
                  onDeleteRow={handleDeleteRow}
                  showDeleteButton={showDeleteButton}
                  selectable={selectable}
                  isSelected={selectedRowsInternal.includes(row.id)}
                  onSelectRow={(checked) =>
                    handleRowSelectChange(
                      row.id,
                      checked,
                      true,
                      collectRowAndSubRowIds(row)
                    )
                  }
                  borderless={borderless}
                  subRows={row.subRows?.map((subRow) => subRow.original)}
                  selectedRowsInternal={selectedRowsInternal}
                  handleRowSelectChange={handleRowSelectChange}
                />
              ))
          ) : (
            <tr>
              <td colSpan={columns.length} className={styles.emptyTableMessage}>
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {showStatistics && (
        <div className={styles.statistics}>Total Rows: {tableData.length} </div>
      )}

      {enablePagination && tableData.length > 0 && (
        <div
          className={`${styles.paginationWrapper} ${styles[paginationPosition]}`}
        >
          <Pagination
            currentPage={pageIndex}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}
