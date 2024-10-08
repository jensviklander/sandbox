import { useState } from "react";
import { TableHeaderRow } from "../../Molecules/TableHeaderRow/TableHeaderRow";
import { TableRow } from "../../Molecules/TableRow/TableRow";
import { TableControlMenu } from "../../Molecules/TableControlMenu/TableControlMenu";
import { Pagination } from "../../Molecules/Pagination/Pagination";
import {
  SortingState,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { ExtendedColumnDef } from "../../types/types";
import styles from "./Table.module.css";

interface TableProps<T> {
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

// TODO: Fix pagination
export default function Table<T extends { id: string }>({
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
}: TableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [initialData] = useState<T[]>(data);
  const [tableData, setTableData] = useState<T[]>(data);
  const [searchQuery, setSearchQuery] = useState("");

  const table = useReactTable({
    data: tableData,
    columns,
    getRowId: (row) => row.id,
    state: {
      sorting,
      pagination: enablePagination ? { pageIndex: 0, pageSize } : undefined,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
    getPaginationRowModel: enablePagination
      ? getPaginationRowModel()
      : undefined,
    manualPagination: !enablePagination,
  });

  const handlePageChange = (pageIndex: number) => {
    if (enablePagination) {
      table.setPageIndex(pageIndex);
    }
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
      nextSortOrder = currentSort?.desc ? "asc" : "desc";
    } else {
      nextSortOrder = currentSort?.desc ? "none" : currentSort ? "desc" : "asc";
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
    setSearchQuery(query);
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
      {enableSearch && <TableControlMenu onSearch={handleSearch} />}
      <table className={styles.table}>
        <thead>
          <TableHeaderRow
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
            <TableRow
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
          currentPage={table.getState().pagination.pageIndex}
          totalPages={table.getPageCount()}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
