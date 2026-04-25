import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Bell, Settings, Search, Menu, User as UserIcon } from 'lucide-react';
import useAuth from '../hooks/useAuth';
import useThemeMode from '../hooks/useThemeMode';
import { motion } from 'framer-motion';

const Navbar = ({ onMenuClick }) => {
  const { user } = useAuth();
  const { mode, toggleTheme } = useThemeMode();
  const location = useLocation();

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Patients', path: '/patients' },
    { name: 'Schedules', path: '/schedules' },
    { name: 'Medical Records', path: '/medical-records' },
  ];

  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-5 bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark sticky top-0 z-[100] backdrop-blur-md">
      {/* Left: Logo */}
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="lg:hidden p-2 text-text-light dark:text-text-dark hover:bg-background-light dark:hover:bg-background-dark rounded-lg">
          <Menu size={24} />
        </button>
        <Link to="/" className="text-2xl font-black text-primary flex items-center gap-2 tracking-tighter">
          <div className="bg-primary/10 p-2 rounded-xl">
             <div className="w-5 h-5 bg-primary rounded-md" />
          </div>
          <span className="hidden sm:inline">Patient<span className="text-text-light dark:text-text-dark">Diary</span></span>
        </Link>
      </div>

      {/* Center: Navigation Links (Desktop Only) */}
      <div className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link 
            key={link.path} 
            to={link.path} 
            className={`text-sm font-bold transition-all ${
              location.pathname === link.path 
                ? 'text-primary border-b-2 border-primary pb-1' 
                : 'text-muted-light dark:text-muted-dark hover:text-text-light dark:hover:text-text-dark'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right: Search, Notifications, Settings, Theme, Profile */}
      <div className="flex items-center gap-3 md:gap-5">
        <div className="hidden md:flex items-center relative group">
          <Search size={18} className="absolute left-3 text-muted-light/50 group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Search patients..." 
            className="pl-10 pr-4 py-2 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none w-[200px] transition-all"
          />
        </div>

        <div className="flex items-center gap-1">
          <button className="p-2 text-muted-light dark:text-muted-dark hover:bg-background-light dark:hover:bg-background-dark rounded-full transition-all">
            <Bell size={20} />
          </button>
          <Link to="/setting" className="p-2 text-muted-light dark:text-muted-dark hover:bg-background-light dark:hover:bg-background-dark rounded-full transition-all">
            <Settings size={20} />
          </Link>
          <button 
            onClick={toggleTheme} 
            className="p-2 text-muted-light dark:text-muted-dark hover:bg-background-light dark:hover:bg-background-dark rounded-full transition-all"
          >
            {mode === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Profile Card */}
        <div className="flex items-center gap-3 pl-4 border-l border-border-light dark:border-border-dark">
          <div className="hidden xl:flex flex-col items-end">
            <span className="text-sm font-black text-text-light dark:text-text-dark leading-none">{user?.name || 'Dr. Julian Vance'}</span>
            <span className="text-[10px] font-bold text-primary uppercase tracking-wider mt-1">Vanguard Health</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-sm overflow-hidden border border-primary/20">
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
