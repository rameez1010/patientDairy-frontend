import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Landmark, Save, Camera, Mail, Phone, MapPin, Plus, Trash2, Shield, Bell, Users } from 'lucide-react';
import useAuth from '../../hooks/useAuth';

const Settings = () => {
  const { user } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'profile');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && ['profile', 'clinics', 'security', 'notifications'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleTabChange = (id) => {
    setActiveTab(id);
    setSearchParams({ tab: id });
  };

  // Profile State
  const [profile, setProfile] = useState({
    name: user?.name || 'Dr. Julian Vance',
    email: user?.email || 'julian.vance@vanguard.com',
    specialization: 'Senior Cardiologist',
    phone: '+1 234 567 890',
    bio: 'Dedicated medical professional with over 15 years of experience in clinical practice and patient care.'
  });

  // Clinics State
  const [clinics, setClinics] = useState([
    { id: 1, name: 'Central Metro Clinic', address: '123 Health Ave, Downtown', status: 'Primary', patients: 842 },
    { id: 2, name: 'East Annex Healthcare', address: '456 Wellness Blvd, East Wing', status: 'Secondary', patients: 310 },
  ]);

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'clinics', label: 'Clinics', icon: Landmark },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ];

  return (
    <div className="max-w-6xl mx-auto pb-20 relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <header className="mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl font-black text-text-light dark:text-text-dark tracking-tighter mb-3">Account Settings</h1>
          <p className="text-lg text-muted-light dark:text-muted-dark font-medium max-w-2xl">
            Configure your professional workspace and manage your personal identity across the PatientDiary platform.
          </p>
        </motion.div>
      </header>

      {/* Modern Tab Switcher */}
      <div className="flex overflow-x-auto gap-2 p-2 bg-white/50 dark:bg-surface-dark/50 backdrop-blur-xl border border-border-light dark:border-border-dark rounded-[24px] w-fit mb-12 shadow-sm">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button 
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`relative flex items-center gap-3 px-8 py-4 rounded-[18px] font-black text-xs uppercase tracking-widest transition-all ${
                isActive ? 'text-white' : 'text-muted-light dark:text-muted-dark hover:text-text-light dark:hover:text-text-dark'
              }`}
            >
              {isActive && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-[18px] shadow-lg shadow-primary/30"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Icon size={18} className="relative z-10" />
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'profile' && (
          <motion.div
            key="profile"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Profile Info Card */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-[40px] p-10 text-center relative overflow-hidden shadow-sm group">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-primary" />
                
                <div className="relative mx-auto w-40 h-40">
                  <div className="w-full h-full rounded-[40px] bg-background-light dark:bg-background-dark p-1.5 border border-border-light dark:border-border-dark overflow-hidden shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop" 
                      alt="Profile" 
                      className="w-full h-full object-cover rounded-[34px]" 
                    />
                  </div>
                  <button className="absolute -bottom-2 -right-2 bg-primary text-white p-3 rounded-2xl shadow-xl border-4 border-surface-light dark:border-surface-dark hover:scale-110 active:scale-95 transition-all">
                    <Camera size={18} />
                  </button>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-black text-text-light dark:text-text-dark">{profile.name}</h3>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{profile.specialization}</p>
                  </div>
                </div>

                <div className="w-full h-px bg-border-light dark:bg-border-dark my-8" />

                <div className="space-y-4 text-left">
                  <div className="group/item flex items-center gap-4 bg-background-light/50 dark:bg-background-dark/50 p-4 rounded-2xl border border-transparent hover:border-primary/20 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all">
                      <Mail size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black text-muted-light dark:text-muted-dark uppercase tracking-widest leading-none mb-1.5">Email</span>
                      <span className="text-sm font-bold text-text-light dark:text-text-dark">{profile.email}</span>
                    </div>
                  </div>
                  <div className="group/item flex items-center gap-4 bg-background-light/50 dark:bg-background-dark/50 p-4 rounded-2xl border border-transparent hover:border-primary/20 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all">
                      <Phone size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black text-muted-light dark:text-muted-dark uppercase tracking-widest leading-none mb-1.5">Phone</span>
                      <span className="text-sm font-bold text-text-light dark:text-text-dark">{profile.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Edit Card */}
            <div className="lg:col-span-8">
              <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-[40px] p-10 md:p-14 shadow-sm h-full flex flex-col">
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <User size={24} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-text-light dark:text-text-dark tracking-tight">Personal Details</h2>
                    <p className="text-sm font-medium text-muted-light dark:text-muted-dark mt-1">Keep your professional information up to date.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-muted-light dark:text-muted-dark uppercase tracking-[0.2em] ml-1">Full Name</label>
                    <input 
                      name="name" 
                      value={profile.name} 
                      onChange={handleProfileChange}
                      className="w-full px-6 py-4 bg-background-light dark:bg-background-dark border-2 border-border-light dark:border-border-dark rounded-[24px] text-base font-bold focus:border-primary focus:bg-white dark:focus:bg-surface-dark focus:ring-[10px] focus:ring-primary/5 outline-none transition-all text-text-light dark:text-text-dark"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-muted-light dark:text-muted-dark uppercase tracking-[0.2em] ml-1">Work Email</label>
                    <input 
                      name="email" 
                      value={profile.email} 
                      onChange={handleProfileChange}
                      className="w-full px-6 py-4 bg-background-light dark:bg-background-dark border-2 border-border-light dark:border-border-dark rounded-[24px] text-base font-bold focus:border-primary focus:bg-white dark:focus:bg-surface-dark focus:ring-[10px] focus:ring-primary/5 outline-none transition-all text-text-light dark:text-text-dark"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-muted-light dark:text-muted-dark uppercase tracking-[0.2em] ml-1">Phone Number</label>
                    <input 
                      name="phone" 
                      value={profile.phone} 
                      onChange={handleProfileChange}
                      className="w-full px-6 py-4 bg-background-light dark:bg-background-dark border-2 border-border-light dark:border-border-dark rounded-[24px] text-base font-bold focus:border-primary focus:bg-white dark:focus:bg-surface-dark focus:ring-[10px] focus:ring-primary/5 outline-none transition-all text-text-light dark:text-text-dark"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-muted-light dark:text-muted-dark uppercase tracking-[0.2em] ml-1">Specialization</label>
                    <input 
                      name="specialization" 
                      value={profile.specialization} 
                      onChange={handleProfileChange}
                      className="w-full px-6 py-4 bg-background-light dark:bg-background-dark border-2 border-border-light dark:border-border-dark rounded-[24px] text-base font-bold focus:border-primary focus:bg-white dark:focus:bg-surface-dark focus:ring-[10px] focus:ring-primary/5 outline-none transition-all text-text-light dark:text-text-dark"
                    />
                  </div>
                </div>

                <div className="space-y-3 mb-12">
                  <label className="text-[10px] font-black text-muted-light dark:text-muted-dark uppercase tracking-[0.2em] ml-1">Bio / Professional Summary</label>
                  <textarea 
                    name="bio" 
                    value={profile.bio} 
                    onChange={handleProfileChange}
                    rows={4}
                    className="w-full px-7 py-5 bg-background-light dark:bg-background-dark border-2 border-border-light dark:border-border-dark rounded-[30px] text-base font-bold focus:border-primary focus:bg-white dark:focus:bg-surface-dark focus:ring-[10px] focus:ring-primary/5 outline-none transition-all resize-none text-text-light dark:text-text-dark leading-relaxed"
                  />
                </div>

                <div className="mt-auto flex justify-end">
                  <button className="flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-black py-5 px-12 rounded-[24px] shadow-2xl shadow-primary/30 transition-all transform hover:scale-[1.02] active:scale-95 text-xs uppercase tracking-[0.2em] leading-none">
                    <Save size={20} />
                    Save All Changes
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'clinics' && (
          <motion.div
            key="clinics"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="space-y-8"
          >
            <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-[40px] p-10 md:p-14 shadow-sm relative overflow-hidden">
               {/* Subtle background flair */}
               <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-bl-[300px] -mr-40 -mt-40 pointer-events-none transition-transform group-hover:scale-110 duration-1000" />
               
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 relative z-10">
                 <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      <Landmark size={28} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-black text-text-light dark:text-text-dark tracking-tight">Clinic Facilities</h2>
                      <p className="text-sm font-medium text-muted-light dark:text-muted-dark mt-1">Manage physical workspaces and patient allocation.</p>
                    </div>
                 </div>
                 <button className="flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-black py-5 px-10 rounded-[22px] shadow-2xl shadow-primary/30 transition-all transform hover:scale-[1.02] active:scale-95 text-xs uppercase tracking-[0.2em] leading-none">
                   <Plus size={20} />
                   Add New Facility
                 </button>
               </div>

               <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 relative z-10">
                 {clinics.map(clinic => (
                   <div key={clinic.id} className="group bg-background-light dark:bg-background-dark border-2 border-border-light dark:border-border-dark p-8 rounded-[36px] hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 cursor-pointer">
                     <div className="flex items-start justify-between mb-8">
                       <div className="bg-primary/10 p-5 rounded-[22px] text-primary group-hover:bg-primary group-hover:text-white shadow-sm transition-all duration-500">
                         <MapPin size={28} />
                       </div>
                       <button className="p-3 text-muted-light/30 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-2xl transition-all">
                         <Trash2 size={24} />
                       </button>
                     </div>
                     
                     <div className="space-y-2 mb-8">
                        <h3 className="text-2xl font-black text-text-light dark:text-text-dark group-hover:text-primary transition-colors">{clinic.name}</h3>
                        <p className="text-sm font-bold text-muted-light dark:text-muted-dark opacity-60 leading-relaxed">{clinic.address}</p>
                     </div>

                     <div className="flex items-center justify-between pt-6 border-t font-border-light dark:border-border-dark">
                        <div className="flex items-center gap-2">
                          <Users size={16} className="text-primary" />
                          <span className="text-sm font-black text-text-light dark:text-text-dark">{clinic.patients} <span className="text-muted-light font-bold">Patients</span></span>
                        </div>
                        <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full border shadow-sm transition-all ${
                          clinic.status === 'Primary' 
                            ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' 
                            : 'text-muted-light dark:text-muted-dark border-border-light dark:border-border-dark bg-white dark:bg-surface-dark'
                        }`}>
                          {clinic.status}
                        </span>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </motion.div>
        )}

        {(activeTab === 'security' || activeTab === 'notifications') && (
          <motion.div
            key="placeholder"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-[40px] p-24 text-center shadow-sm"
          >
             <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mx-auto mb-8">
                <Shield size={40} />
             </div>
             <h2 className="text-3xl font-black text-text-light dark:text-text-dark tracking-tight mb-3">Module Under Construction</h2>
             <p className="text-lg text-muted-light dark:text-muted-dark font-medium max-w-sm mx-auto">
               We're working hard to bring you advanced security and notification management tools.
             </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Settings;
