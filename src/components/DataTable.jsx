// src/components/DataTable.jsx
import React, { useState, useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  flexRender,
} from '@tanstack/react-table';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const DataTable = ({ data }) => {
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');

  // Definimos las columnas basados en el JSON de ejemplo
  const columns = useMemo(() => [
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'disc_year_u', header: 'Año Desc.' },
    { accessorKey: 'period', header: 'Periodo (días)' },
    { accessorKey: 'prad', header: 'Radio Planeta (R⊕)' },
    { accessorKey: 'st_teff', header: 'Temp. Estrella (K)'},
    { accessorKey: 'source', header: 'Fuente' },
  ], []);

  const table = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="glass-pane p-4 md:p-6 shadow-2xl">
      {/* Controles: Buscador y Filtros */}
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          value={globalFilter ?? ''}
          onChange={e => setGlobalFilter(e.target.value)}
          placeholder="Search for exoplanet..."
          className="bg-space-blue bg-opacity-60 border border-slate-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-cyan"
        />
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b border-slate-700">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} className="p-4 cursor-pointer select-none" onClick={header.column.getToggleSortingHandler()}>
                    <div className="flex items-center gap-2">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {{
                        asc: <FaArrowUp className="text-accent-cyan" />,
                        desc: <FaArrowDown className="text-accent-cyan" />,
                      }[header.column.getIsSorted()] ?? null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="hover:bg-space-blue/60 transition-colors duration-200 cursor-pointer border-b border-slate-800" onClick={() => alert(`Clickeado el objeto: ${row.original.name}`)}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="p-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

       {/* Paginación */}
      <div className="flex items-center justify-between mt-6 text-sm text-accent-light">
        <span>
          Página{' '}
          <strong>
            {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
          </strong>
        </span>
        <div className="flex items-center gap-2">
          <button onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()} className="px-3 py-1 rounded-md bg-space-blue hover:bg-accent-cyan hover:text-space-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors">« First</button>
          <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} className="px-3 py-1 rounded-md bg-space-blue hover:bg-accent-cyan hover:text-space-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors">Previous</button>
          <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} className="px-3 py-1 rounded-md bg-space-blue hover:bg-accent-cyan hover:text-space-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors">Next</button>
          <button onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()} className="px-3 py-1 rounded-md bg-space-blue hover:bg-accent-cyan hover:text-space-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors">Last »</button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;