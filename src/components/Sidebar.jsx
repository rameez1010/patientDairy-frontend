import { Link, useLocation } from 'react-router-dom';
import { LayoutGrid, Users, ClipboardMinus, CalendarDays, History, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutGrid },
    { name: 'Patients', path: '/patients', icon: Users },
    { name: 'Medical Reports', path: '/medical-records', icon: ClipboardMinus },
    { name: 'Schedule', path: '/schedules', icon: CalendarDays },
    { name: 'Archive', path: '/archive', icon: History },
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full bg-white dark:bg-surface-dark border-r border-border-light dark:border-border-dark w-[280px]">
      {/* Header */}
      <div className="p-6 flex items-center justify-between border-b border-border-light dark:border-border-dark mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-primary text-white p-2 rounded-xl shadow-lg shadow-primary/20">
            <LayoutGrid size={24} />
          </div>
          <div>
            <h2 className="text-sm font-black text-text-light dark:text-text-dark leading-none">Vitality Portal</h2>
            <p className="text-[10px] font-bold text-muted-light dark:text-muted-dark uppercase tracking-wider mt-1">Clinical Dashboard</p>
          </div>
        </div>
        <button onClick={onClose} className="lg:hidden p-2 text-muted-light dark:text-muted-dark hover:bg-background-light dark:hover:bg-background-dark rounded-full transition-all">
          <X size={20} />
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <Link 
              key={item.path} 
              to={item.path} 
              onClick={() => { if(window.innerWidth < 1024) onClose(); }}
              className={`
                flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300
                ${isActive 
                  ? 'bg-primary text-white shadow-xl shadow-primary/30 scale-[1.02]' 
                  : 'text-muted-light dark:text-muted-dark hover:text-text-light dark:hover:text-text-dark hover:bg-background-light dark:hover:bg-background-dark'
                }
              `}
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Footer info / Branding */}
      <div className="p-6 mt-auto">
        <div className="bg-background-light dark:bg-background-dark p-4 rounded-2xl border border-border-light dark:border-border-dark">
          <p className="text-[10px] font-black text-muted-light dark:text-muted-dark uppercase tracking-widest leading-relaxed">
            Patient Diary v2.4 <br /> Professional Edition
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (Optional - if we want it alongside Image 1/2) 
         Actually, Image 1/2 look like they don't have a visible sidebar on desktop.
         Image 3 shows it on a small device. I'll stick to mobile overlay. */}
      
      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[200] lg:hidden"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 z-[201] lg:hidden"
            >
              {sidebarContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
