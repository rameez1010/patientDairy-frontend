import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Timer, HelpCircle } from 'lucide-react';

const OtpVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(119); // 01:59 = 119 seconds
  const inputs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Filter to check if all inputs are filled
    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const code = otp.join('');
    if (code.length === 6) {
      console.log('Verifying code:', code);
      // Simulate verification
      navigate('/dashboard');
    }
  };

  const handleResend = () => {
    if (timer === 0) {
      setTimer(119);
      setOtp(['', '', '', '', '', '']);
      inputs.current[0].focus();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-[32px] p-8 md:p-12 shadow-2xl transition-all duration-200 w-full flex flex-col items-center relative"
    >
      {/* Help Icon (Top Right of Card) */}
      <div className="absolute top-6 right-6">
        <button className="text-muted-light dark:text-muted-dark hover:text-primary transition-all p-2 hover:bg-background-light dark:hover:bg-background-dark rounded-full shadow-sm">
          <HelpCircle size={22} strokeWidth={2} />
        </button>
      </div>

      {/* Logo */}
      <div className="mb-8">
        <div className="w-16 h-16 bg-background-light dark:bg-background-dark rounded-[24px] shadow-sm flex items-center justify-center p-3">
          <div className="relative w-full h-full">
            {/* Medical Book Icon */}
            <div className="absolute inset-0 border-2 border-primary rounded-md" />
            <div className="absolute inset-x-1.5 inset-y-1 bg-primary rounded-[1px]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-0.5 bg-white rounded-full" />
              <div className="w-0.5 h-3 bg-white rounded-full absolute" />
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-black text-text-light dark:text-text-dark mb-3 tracking-tight text-center">
        Two-Step Verification
      </h1>
      <p className="text-muted-light dark:text-muted-dark text-center mb-10 text-base font-medium leading-relaxed max-w-sm px-2">
        We've sent a 6-digit verification code to your registered email. Please enter it below to proceed.
      </p>

      {/* OTP Inputs */}
      <div className="flex gap-2 md:gap-3 mb-10 w-full justify-center">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputs.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-10 h-14 md:w-16 md:h-24 text-4xl font-black text-center border-2 border-primary/40 bg-primary/5 dark:bg-surface-dark text-text-light dark:text-text-dark rounded-[24px] focus:border-primary focus:bg-white focus:ring-[10px] focus:ring-primary/10 outline-none transition-all shadow-sm"
          />
        ))}
      </div>

      {/* Countdown & Resend */}
      <div className="flex flex-col items-center gap-4 mb-10">
        <div className="flex items-center gap-2 bg-background-light dark:bg-background-dark px-5 py-2 rounded-full border border-border-light dark:border-border-dark shadow-sm">
          <Timer size={16} className="text-primary animate-pulse" />
          <span className="text-[11px] font-black text-text-light dark:text-text-dark uppercase tracking-widest leading-none">
            Resend in <span className="text-primary">{formatTime(timer)}</span>
          </span>
        </div>
        <button 
          onClick={handleResend}
          disabled={timer > 0}
          className={`font-black uppercase tracking-[0.2em] text-[10px] transition-all py-1 border-b ${
            timer > 0 
              ? 'text-muted-light/20 border-transparent cursor-not-allowed' 
              : 'text-primary border-primary/30 hover:border-primary'
          }`}
        >
          Resend OTP
        </button>
      </div>

      {/* Verify Button */}
      <button
        onClick={handleVerify}
        className="w-full bg-[#2BB673] hover:bg-primary-dark text-white font-black py-4 md:py-5 rounded-full shadow-[0_15px_40px_-5px_rgba(43,182,115,0.3)] transition-all transform hover:scale-[1.02] active:scale-[0.98] text-base md:text-lg uppercase tracking-widest mb-8"
      >
        Verify Identity
      </button>

      {/* Return Link */}
      <Link 
        to="/login" 
        className="flex items-center gap-2 text-muted-light dark:text-muted-dark font-black uppercase tracking-widest text-[10px] hover:text-primary transition-colors group"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Return to login
      </Link>
    </motion.div>
  );
};

export default OtpVerification;
