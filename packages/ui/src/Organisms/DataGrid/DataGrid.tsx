import { useState, useEffect } from "react";
import { DataGridHeaderRow } from "../../Molecules/DataGridHeaderRow/DataGridHeaderRow";
import { DataGridRow } from "../../Molecules/DataGridRow/DataGridRow";
import { DataGridControlMenu } from "../../Molecules/DataGridControlMenu/DataGridControlMenu";
import { Pagination } from "../../Molecules/Pagination/Pagination";
import {
  SortingState,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { ExtendedColumnDef } from "../../types/types";
import styles from "./DataGrid.module.css";

interface DataGridProps<T> {
  title?: string;
  data: T[];
  columns: ExtendedColumnDef<T, any>[];
  enableSorting?: boolean;
  selectable?: boolean;
  enableSearch?: boolean;
  enablePagination?: boolean;
  paginationPosition?: "left" | "center" | "right";
  pageSize?: number;
  currentPage?: number;
  onPageChange?: (pageIndex: number) => void;
  selectedRows?: string[];
  onSelectRow?: (rowId: string, checked: boolean) => void;
  showDeleteButton?: boolean;
  showStatistics?: boolean;
}

export default function DataGrid<T extends { id: string }>({
  title,
  data,
  columns,
  enableSorting = false,
  selectable = false,
  enableSearch = false,
  enablePagination = false,
  paginationPosition = "center",
  pageSize = 10,
  currentPage = 0,
  onPageChange,
  selectedRows = [],
  onSelectRow,
  showDeleteButton = false,
  showStatistics = false,
}: DataGridProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [initialData] = useState<T[]>(data);
  const [tableData, setTableData] = useState<T[]>(data);
  const [pageIndex, setPageIndex] = useState<number>(currentPage);

  const [totalPages, setTotalPages] = useState<number>(
    Math.ceil(tableData.length / pageSize)
  );

  const table = useReactTable({
    data: tableData,
    columns,
    getRowId: (row) => row.id,
    state: {
      sorting,
      pagination: { pageIndex, pageSize },
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
    getPaginationRowModel: enablePagination
      ? getPaginationRowModel()
      : undefined,
    manualPagination: !enablePagination,
  });

  useEffect(() => {
    setTotalPages(Math.ceil(tableData.length / pageSize));
  }, [tableData, pageSize]);

  const handlePageChange = (newPageIndex: number) => {
    selectedRows.length = 0;
    setPageIndex(newPageIndex);
    onPageChange?.(newPageIndex);
  };

  const handleSelectAllChange = (checked: boolean) => {
    if (checked) {
      const allRowIds = table.getRowModel().rows.map((row) => row.id);
      allRowIds.forEach((id) => {
        if (!selectedRows.includes(id)) {
          onSelectRow && onSelectRow(id, true);
        }
      });
    } else {
      selectedRows.forEach((id) => {
        onSelectRow && onSelectRow(id, false);
      });
    }
  };

  const handleSortChange = (columnId: string) => {
    const column = columns.find((col) => col.id === columnId);
    const isNumericColumn = column?.type === "number";

    const currentSort = sorting.find((s) => s.id === columnId);
    let nextSortOrder: "asc" | "desc" | "none" = "none";

    if (isNumericColumn) {
      if (!currentSort) {
        nextSortOrder = "desc";
      } else if (currentSort.desc) {
        nextSortOrder = "asc";
      } else {
        nextSortOrder = "none";
      }
    } else {
      if (!currentSort) {
        nextSortOrder = "asc";
      } else if (!currentSort.desc) {
        nextSortOrder = "desc";
      } else {
        nextSortOrder = "none";
      }
    }

    const newSortingState: SortingState =
      nextSortOrder === "none"
        ? []
        : [{ id: columnId, desc: nextSortOrder === "desc" }];

    setSorting(newSortingState);

    if (nextSortOrder === "none") {
      setTableData(initialData);
    }
  };

  const handleSearch = (query: string) => {
    const filteredData = initialData.filter((row) =>
      Object.values(row).join(" ").toLowerCase().includes(query.toLowerCase())
    );

    setTableData(filteredData);
    setPageIndex(0);
  };

  const transformedSorting = sorting.map((sort) => ({
    id: sort.id,
    sortOrder: sort.desc
      ? ("desc" as "desc" | "asc" | "none")
      : sorting.length
        ? ("asc" as "asc" | "desc" | "none")
        : ("none" as "asc" | "desc" | "none"),
  }));

  const handleDeleteRow = (rowId: string) => {
    const updatedData = tableData.filter((row) => row.id !== rowId);
    setTableData(updatedData);
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
              sorting={transformedSorting}
              onSelectAll={handleSelectAllChange}
              onSortChange={handleSortChange}
              isSelectAllChecked={
                selectedRows.length === table.getRowModel().rows.length
              }
            />
          </thead>
        )}
        <tbody>
          {tableData.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <DataGridRow
                key={row.id}
                rowData={row.original}
                columns={columns}
                onDeleteRow={handleDeleteRow}
                showDeleteButton={showDeleteButton}
                rowIndex={table.getRowModel().rows.indexOf(row)}
                selectable={selectable}
                isSelected={selectedRows.includes(row.id)}
                onSelectRow={(checked) => {
                  if (checked && !selectedRows.includes(row.id)) {
                    onSelectRow && onSelectRow(row.id, true);
                  } else if (!checked && selectedRows.includes(row.id)) {
                    onSelectRow && onSelectRow(row.id, false);
                  }
                }}
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
        <div className={styles.statistics}>
          Total Rows: {initialData.length}
        </div>
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
