const ReportTable = ({ reports }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b-2 border-border-light dark:border-border-dark">
            <th className="p-4 text-[10px] font-black text-muted-light dark:text-muted-dark uppercase tracking-widest">Date</th>
            <th className="p-4 text-[10px] font-black text-muted-light dark:text-muted-dark uppercase tracking-widest">Report Title</th>
            <th className="p-4 text-[10px] font-black text-muted-light dark:text-muted-dark uppercase tracking-widest">Assigned Doctor</th>
            <th className="p-4 text-[10px] font-black text-muted-light dark:text-muted-dark uppercase tracking-widest text-right">Status</th>
          </tr>
        </thead>
        <tbody>
          {reports && reports.length > 0 ? (
            reports.map((r, i) => (
              <tr key={i} className="border-b border-border-light dark:border-border-dark hover:bg-background-light/30 dark:hover:bg-background-dark/30 transition-colors group">
                <td className="p-4 text-sm font-medium text-text-light dark:text-text-dark">{r.date}</td>
                <td className="p-4 text-sm font-bold text-text-light dark:text-text-dark group-hover:text-primary transition-colors">{r.report}</td>
                <td className="p-4 text-sm text-text-light dark:text-text-dark">{r.doctor}</td>
                <td className="p-4 text-right">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                    Completed
                  </span>
                </td>
              </tr>
            ))
          ) : (
            [
              { date: '2026-04-20', report: 'Blood Test Results', doctor: 'Dr. Smith', status: 'Completed' },
              { date: '2026-04-18', report: 'Annual Checkup', doctor: 'Dr. John Doe', status: 'Pending' },
              { date: '2026-04-15', report: 'X-Ray Analysis', doctor: 'Dr. Sarah Wilson', status: 'Completed' }
            ].map((r, i) => (
              <tr key={i} className="border-b border-border-light dark:border-border-dark hover:bg-background-light/30 dark:hover:bg-background-dark/30 transition-colors group">
                <td className="p-4 text-sm font-medium text-text-light dark:text-text-dark">{r.date}</td>
                <td className="p-4 text-sm font-bold text-text-light dark:text-text-dark group-hover:text-primary transition-colors">{r.report}</td>
                <td className="p-4 text-sm text-text-light dark:text-text-dark">{r.doctor}</td>
                <td className="p-4 text-right">
                  <span className={`
                    px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight
                    ${r.status === 'Completed' 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' 
                      : 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400'
                    }
                  `}>
                    {r.status}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
