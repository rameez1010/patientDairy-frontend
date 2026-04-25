import { User, Activity, MoreVertical } from 'lucide-react';

const PatientCard = ({ patient }) => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="flex justify-between items-start mb-6">
        <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
          Patient #{patient?.id?.slice(-4) || '0000'}
        </div>
        <button className="text-muted-light dark:text-muted-dark hover:text-primary transition-colors">
          <MoreVertical size={16} />
        </button>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-background-light dark:bg-background-dark rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
          <User size={24} />
        </div>
        <div>
          <h3 className="text-lg font-black text-text-light dark:text-text-dark tracking-tight leading-tight">
            {patient?.name || 'Unknown Patient'}
          </h3>
          <p className="text-xs text-muted-light dark:text-muted-dark font-medium">Cardiopathology</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 mb-6">
        <div className="flex items-center gap-3 text-xs text-muted-light dark:text-muted-dark">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          Age: <span className="font-bold text-text-light dark:text-text-dark ml-auto">45 yrs</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-light dark:text-muted-dark">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          Condition: <span className="font-bold text-green-500 ml-auto uppercase tracking-tighter">Healthy</span>
        </div>
      </div>

      <button className="w-full py-3 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark text-xs font-black uppercase tracking-widest rounded-xl hover:bg-primary hover:text-white transition-all duration-200">
        View History
      </button>
    </div>
  );
};

export default PatientCard;
