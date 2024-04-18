import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const TableWithHead = ({ rowData, columns }) => {
  const table = useReactTable({
    data: rowData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className={styles.parent}>
      <table className={styles.tableStyle}>
        <thead className={styles.tableHeadStyle}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className={styles.tableHeadingGap}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={styles.tableRowStyle}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={styles.tableHeadingGap}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-4" />
    </div>
  );
};

const styles = {
  parentDiv: "p-2 overflow-x-scroll",
  tableStyle: "w-full text-left rtl:text-right",
  tableHeadStyle: "text-gray-700 uppercase bg-gray-50 p-4",
  tableRowStyle: "odd:bg-white even:bg-gray-50 last:border-b",
  tableHeadingGap: "p-4",
};
export default TableWithHead;
