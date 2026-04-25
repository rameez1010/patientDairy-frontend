import { motion } from 'framer-motion';
import { Plus, Users, Landmark, ArrowUpRight, Signal, ShieldCheck, MoreHorizontal } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'TOTAL PATIENTS', value: '1,284', trend: '+12% from last month', icon: Users, color: 'primary' },
    { label: 'ACTIVE CLINICS', value: '03', subValue: 'Facilities Active', icon: Landmark, color: 'secondary' },
  ];

  const clinics = [
    { name: 'Central Metro', count: 842 },
    { name: 'East Annex', count: 310 },
    { name: 'North Point', count: 132 },
  ];

  const recentPatients = [
    { id: 'PX-9921', name: 'Eleanor Shellstrop', date: 'Oct 24, 2023', time: '09:15 AM', location: 'Central Metro', status: 'Completed', statusColor: 'bg-green-500' },
    { id: 'PX-9922', name: 'Chidi Anagonye', date: 'Oct 24, 2023', time: '10:42 AM', location: 'East Annex', status: 'In Progress', statusColor: 'bg-amber-500' },
    { id: 'PX-9923', name: 'Tahani Al-Jamil', date: 'Oct 24, 2023', time: '11:20 AM', location: 'Central Metro', status: 'Completed', statusColor: 'bg-green-500' },
    { id: 'PX-9924', name: 'Jason Mendoza', date: 'Oct 24, 2023', time: '01:55 PM', location: 'North Point', status: 'Pending', statusColor: 'bg-slate-400' },
    { id: 'PX-9925', name: 'Janet Dell-Tello', date: 'Oct 23, 2023', time: '08:30 AM', location: 'East Annex', status: 'Completed', statusColor: 'bg-green-500' },
    { id: 'PX-9926', name: 'Michael Scott', date: 'Oct 23, 2023', time: '03:45 PM', location: 'Central Metro', status: 'Completed', statusColor: 'bg-green-500' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10 pb-20"
    >
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-black text-text-light dark:text-text-dark tracking-tighter mb-2">Clinician Dashboard</h1>
          <p className="text-lg text-muted-light dark:text-muted-dark font-medium">Welcome back, Dr. Vance. Here's your clinical overview for today.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex flex-col items-end mr-4">
            <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">
              <Signal size={12} />
              System Status: Optimal
            </div>
          </div>
          <button className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-2xl shadow-xl shadow-primary/20 transition-all transform hover:scale-[1.02] active:scale-95 group">
            <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            Add Patient
          </button>
        </div>
      </div>

      {/* Top Stats & Clinic Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Total Patients Card */}
        <div className="lg:col-span-4 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-[32px] p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -mr-8 -mt-8 group-hover:scale-110 transition-transform duration-500" />
          <p className="text-[10px] font-black text-muted-light dark:text-muted-dark uppercase tracking-widest mb-6">Total Patients</p>
          <div className="flex items-baseline gap-2 mb-2">
            <h2 className="text-6xl font-black text-text-light dark:text-text-dark tracking-tighter">1,284</h2>
            <ArrowUpRight size={24} className="text-primary" />
          </div>
          <p className="text-sm font-bold text-primary flex items-center gap-1.5">
            <span className="bg-primary/10 px-2 py-0.5 rounded-md">+12%</span> 
            <span className="text-muted-light dark:text-muted-dark opacity-60">from last month</span>
          </p>
          <div className="mt-8 flex -space-x-3">
             {[1,2,3,4].map(i => (
               <div key={i} className="w-10 h-10 rounded-full border-4 border-surface-light dark:border-surface-dark bg-background-light dark:bg-background-dark flex items-center justify-center overflow-hidden">
                 <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Avatar" />
               </div>
             ))}
             <div className="w-10 h-10 rounded-full border-4 border-surface-light dark:border-surface-dark bg-primary text-white text-[10px] font-black flex items-center justify-center">
               +99
             </div>
          </div>
        </div>

        {/* Active Clinics Card */}
        <div className="lg:col-span-8 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-[32px] p-8 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 border-r border-border-light dark:border-border-dark md:pr-8 pr-0 border-r-0 md:border-b-0 border-b pb-8 md:pb-0">
             <p className="text-[10px] font-black text-muted-light dark:text-muted-dark uppercase tracking-widest mb-6">Active Clinics</p>
             <h2 className="text-7xl font-black text-text-light dark:text-text-dark tracking-tighter leading-none mb-4">03</h2>
             <p className="text-sm font-bold text-muted-light dark:text-muted-dark">Facilities Active Across <br /> Your Network</p>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4 h-fit self-center">
             {clinics.map(clinic => (
               <div key={clinic.name} className="bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark p-4 rounded-2xl hover:border-primary/40 transition-colors group cursor-pointer">
                 <p className="text-[10px] font-black text-muted-light dark:text-muted-dark uppercase tracking-widest mb-1">{clinic.name}</p>
                 <p className="text-lg font-black text-text-light dark:text-text-dark">
                   {clinic.count} <span className="text-[10px] text-muted-light font-bold">Patients</span>
                 </p>
                 <div className="w-full h-1.5 bg-primary/10 rounded-full mt-3 overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: '70%' }} className="h-full bg-primary" />
                 </div>
               </div>
             ))}
             <button className="flex flex-col items-center justify-center gap-1 border-2 border-dashed border-border-light dark:border-border-dark rounded-2xl text-muted-light hover:border-primary hover:text-primary transition-all group p-4">
                <Plus size={20} className="group-hover:rotate-90 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-widest">Add Clinic</span>
             </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <section className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-[32px] overflow-hidden shadow-sm">
        <div className="p-8 border-b border-border-light dark:border-border-dark flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-text-light dark:text-text-dark tracking-tight">Newly Added Patients</h2>
            <p className="text-sm font-medium text-muted-light dark:text-muted-dark mt-1">Onboarding registrations from the last 24 hours.</p>
          </div>
          <button className="text-sm font-black text-primary hover:underline uppercase tracking-widest">View All Patients</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-background-light/50 dark:bg-background-dark/50">
                <th className="px-8 py-4 text-[10px] font-black text-muted-light dark:text-muted-dark uppercase tracking-[0.2em]">Patient Name</th>
                <th className="px-8 py-4 text-[10px] font-black text-muted-light dark:text-muted-dark uppercase tracking-[0.2em]">Registration Date</th>
                <th className="px-8 py-4 text-[10px] font-black text-muted-light dark:text-muted-dark uppercase tracking-[0.2em]">Clinic Location</th>
                <th className="px-8 py-4 text-[10px] font-black text-muted-light dark:text-muted-dark uppercase tracking-[0.2em]">Status</th>
                <th className="px-8 py-4 text-[10px] font-black text-muted-light dark:text-muted-dark uppercase tracking-[0.2em]">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light dark:divide-border-dark">
              {recentPatients.map((patient) => (
                <tr key={patient.id} className="hover:bg-background-light/50 dark:hover:bg-background-dark/50 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-xs">
                        {patient.name.split(' ').map(n=>n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-black text-text-light dark:text-text-dark">{patient.name}</p>
                        <p className="text-[10px] font-bold text-muted-light dark:text-muted-dark uppercase tracking-widest mt-0.5">ID: {patient.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <p className="text-sm font-bold text-text-light dark:text-text-dark">{patient.date}</p>
                    <p className="text-[10px] font-bold text-muted-light opacity-60 uppercase tracking-tighter mt-1">{patient.time}</p>
                  </td>
                  <td className="px-8 py-5">
                    <span className="bg-background-light dark:bg-background-dark px-3 py-1 rounded-full text-[10px] font-black text-muted-light dark:text-muted-dark tracking-widest border border-border-light dark:border-border-dark">
                      {patient.location}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2">
                       <div className={`w-1.5 h-1.5 rounded-full ${patient.statusColor}`} />
                       <span className="text-sm font-bold text-text-light dark:text-text-dark">{patient.status}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <button className="p-2 text-muted-light dark:text-muted-dark hover:bg-background-light dark:hover:bg-background-dark rounded-xl transition-all">
                      <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Bottom Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#EBF5EF] dark:bg-surface-dark border border-primary/10 dark:border-border-dark rounded-[24px] p-6 flex items-center gap-6">
           <div className="bg-white dark:bg-background-dark p-4 rounded-xl shadow-sm text-primary">
              <ArrowUpRight size={28} />
           </div>
           <div>
              <h3 className="text-sm font-black text-text-light dark:text-text-dark uppercase tracking-widest mb-1">System Insights</h3>
              <p className="text-xs text-muted-light dark:text-muted-dark font-medium leading-relaxed">
                Patient engagement has increased by <span className="text-primary font-bold">14%</span> this week across all diary entries.
              </p>
           </div>
        </div>
        <div className="bg-[#F4F9F6] dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-[24px] p-6 flex items-center gap-6">
           <div className="bg-white dark:bg-background-dark p-4 rounded-xl shadow-sm text-primary">
              <ShieldCheck size={28} />
           </div>
           <div>
              <h3 className="text-sm font-black text-text-light dark:text-text-dark uppercase tracking-widest mb-1">Security Compliance</h3>
              <p className="text-xs text-muted-light dark:text-muted-dark font-medium leading-relaxed">
                All medical reports are currently encrypted and <span className="text-primary font-bold">HIPAA compliant</span>.
              </p>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
