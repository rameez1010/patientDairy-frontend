import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="min-h-screen w-full flex bg-background-light dark:bg-background-dark">
      {/* Left Side: Image & Branding (Desktop Only) */}
      <div className="hidden lg:flex lg:w-[35%] relative overflow-hidden">
        <img 
          src="/assets/images/auth-bg.png" 
          alt="Medical Hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#10B981] via-primary to-primary-dark opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.2),transparent)]" />
        
        <div className="relative z-10 p-12 xl:p-16 flex flex-col justify-between h-full text-white border-r border-white/10">
          <div className="flex items-center gap-3">
            <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-black/10">
              <div className="w-4 h-4 bg-primary rounded-sm" />
            </div>
            <span className="text-3xl font-black tracking-tighter">Patient Diary</span>
          </div>

          <div>
            <h2 className="text-4xl xl:text-5xl font-black leading-tight mb-6 drop-shadow-sm">
              Empowering <span className="text-white/80">Digital Healthcare.</span>
            </h2>
            <p className="text-lg text-white/70 font-medium leading-relaxed max-w-sm">
              Efficient patient management for modern medical professionals who demand excellence.
            </p>
          </div>

          <div className="flex gap-4">
            <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-3xl border border-white/20 shadow-xl">
              <p className="text-2xl font-black">99.9%</p>
              <p className="text-xs text-white/60 font-bold uppercase tracking-widest mt-1">Reliability</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-3xl border border-white/20 shadow-xl">
              <p className="text-2xl font-black">256-bit</p>
              <p className="text-xs text-white/60 font-bold uppercase tracking-widest mt-1">AES Security</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Form Content */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-12 lg:p-16 relative bg-background-light dark:bg-background-dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(43,182,115,0.08),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(43,182,115,0.04),transparent)] pointer-events-none" />
        <div className="w-full max-w-[600px] relative z-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
