// src/components/ui/ResultsTable.tsx

type ResultsTableRow = {
  id: string;
  label: string;
  value: string;
};

type ResultsTableProps = {
  leftHeader: string;
  rightHeader: string;
  rows: ResultsTableRow[];
};

function ResultsTable({ leftHeader, rightHeader, rows }: ResultsTableProps) {
  return (
    <div className="mt-10 overflow-hidden rounded-sm border border-zinc-400 bg-[#ECECEC]">
      <div className="grid grid-cols-[2fr_1fr] bg-[#E0DBDB] px-4 py-3 text-sm font-semibold text-stone-900 md:px-6">
        <span>{leftHeader}</span>
        <span className="text-right">{rightHeader}</span>
      </div>

      <div className="divide-y divide-zinc-300">
        {rows.map((row) => (
          <div
            key={row.id}
            className="grid grid-cols-[2fr_1fr] px-4 py-3 text-sm text-stone-900 md:px-6"
          >
            <span>{row.label}</span>
            <span className="text-right">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultsTable;
