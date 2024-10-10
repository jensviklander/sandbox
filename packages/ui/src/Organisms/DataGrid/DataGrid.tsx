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
  data: T[];
  columns: ExtendedColumnDef<T, any>[];
  enableSorting?: boolean;
  selectable?: boolean;
  enableSearch?: boolean;
  enablePagination?: boolean;
  pageSize?: number;
  currentPage?: number;
  onPageChange?: (pageIndex: number) => void;
  selectedRows?: string[];
  onSelectRow?: (rowId: string, checked: boolean) => void;
  showDeleteButton?: boolean;
}

// TODO:
// 1. Fix pagination styling, it skips when jumping pages
// 2. Use button icon instead of current links in pagination
// 3. Add hover style to IconButton, hover should be optional
// 4. Fix pagination position options (left, center, right)
// 5. When using search we need to do it from first page no?
// 6. Add statistics i.e. Total data:
// 7. Add story with component for the DataGrid story. i.e. Input inside cell
// 8. Setup github pages for storybook app
// 9. Implement features from README
export default function DataGrid<T extends { id: string }>({
  data,
  columns,
  enableSorting = false,
  selectable = false,
  enableSearch = false,
  enablePagination = false,
  pageSize = 10,
  currentPage = 0,
  onPageChange,
  selectedRows = [],
  onSelectRow,
  showDeleteButton = false,
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
      {enableSearch && <DataGridControlMenu onSearch={handleSearch} />}
      <table className={styles.table}>
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
        <tbody>
          {table.getRowModel().rows.map((row) => (
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
          ))}
        </tbody>
      </table>
      {enablePagination && (
        <Pagination
          currentPage={pageIndex}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
