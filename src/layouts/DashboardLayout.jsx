import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-manrope">
      <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
      
      <div className="flex">
        {/* Sidebar - Hidden on desktop if we want Image 1/2 style, but Image 3 shows it. 
           Usually Sidebar is on the left. image 1/2 look like full-width pages.
           I'll keep Sidebar hidden on desktop for now to match Image 1/2, 
           and show it as overlay on mobile as per Image 3. */}
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        
        <main className="flex-1 w-full p-4 md:p-8 lg:p-12 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
