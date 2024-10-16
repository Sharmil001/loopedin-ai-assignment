"use client";
import React, { useState, useEffect } from "react";
// import { AiOutlineDelete } from "react-icons/ai";
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from "@/components/ui/table";

interface Column {
  key: string;
  label: string;
}

interface DynamicTableProps {
  columns: Column[];
  rowData: any[];
  // onDelete?: (id: number) => void;
}

export default function DynamicTable({
  columns,
  rowData,
  // onDelete,
}: DynamicTableProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredData, setFilteredData] = useState<any[]>(rowData);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredData(rowData);
    } else {
      const filtered = rowData.filter((row) =>
        columns.some((column) =>
          String(row[column.key])
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      );
      setFilteredData(filtered);
    }
  }, [searchQuery, rowData, columns]);

  return (
    <div className="w-full p-3">
      {/* Search Input */}
      <div className="flex justify-between items-center w-full py-3 border-b-2 border-[#eaf1fe]">
        <input
          type="text"
          placeholder="Search keyword"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 px-3 border rounded-[23px] min-w-[299px]"
        />
      </div>

      {/* Dynamic Table  */}
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.key} className="font-semibold text-sm p-4">
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white border border-[#eaf1fe]">
          {filteredData.length > 0 ? (
            filteredData.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column) => (
                  <TableCell
                    key={column.key}
                    className="font-bold text-base p-4"
                  >
                    {row[column.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center p-4">
                No data found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
