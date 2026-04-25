import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(form);
      navigate('/verify-otp');
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-3xl p-8 md:p-12 shadow-xl transition-all duration-200"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black mb-3 text-text-light dark:text-text-dark tracking-tight">Welcome Back</h1>
        <p className="text-lg text-muted-light dark:text-muted-dark">Sign in to continue to your dashboard.</p>
      </div>

      <form onSubmit={handleLogin} className="flex flex-col gap-6">
        <div>
          <label className="block mb-2 font-bold text-sm text-text-light dark:text-text-dark">Work Email</label>
          <input 
            name="email" 
            type="email" 
            placeholder="jane.smith@hospital.org" 
            value={form.email} 
            onChange={handleChange} 
            required 
            className="w-full px-4 py-3 border border-border-light dark:border-border-dark rounded-2xl bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary outline-none transition-all placeholder:opacity-50"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="font-bold text-sm text-text-light dark:text-text-dark">Password</label>
            <Link to="/forgot-password" className="text-primary text-sm font-semibold hover:underline">Forgot password?</Link>
          </div>
          <div className="relative">
            <input 
              name="password" 
              type={showPassword ? 'text' : 'password'} 
              placeholder="••••••••" 
              value={form.password} 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-3 border border-border-light dark:border-border-dark rounded-2xl bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary outline-none transition-all placeholder:opacity-50"
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent p-0 text-muted-light dark:text-muted-dark hover:text-primary transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <button 
          type="submit" 
          className="mt-4 flex items-center justify-center gap-2 rounded-full py-4 bg-primary hover:bg-primary-dark text-white font-bold transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20"
        >
          Sign In <ArrowRight size={18} />
        </button>
      </form>

      <div className="my-8 flex items-center gap-4">
        <div className="flex-1 h-px bg-border-light dark:bg-border-dark" />
        <span className="text-xs font-bold text-muted-light dark:text-muted-dark uppercase tracking-widest">or continue with</span>
        <div className="flex-1 h-px bg-border-light dark:bg-border-dark" />
      </div>

      <button className="w-full flex items-center justify-center gap-3 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-full py-3 font-semibold text-text-light dark:text-text-dark hover:bg-surface-light dark:hover:bg-surface-dark transition-all">
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.11c-.22-.66-.35-1.36-.35-2.11s.13-1.45.35-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l3.66-2.84z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84c.87-2.6 3.3-4.51 6.16-4.51z"/>
        </svg>
        Sign in with Google
      </button>

      <div className="text-center mt-8 text-sm text-text-light dark:text-text-dark">
        New to Patient Diary? <Link to="/register" className="text-primary font-bold hover:underline">Create an account</Link>
      </div>
    </motion.div>
  );
};

export default Login;
