// src/pages/Register.js
import React, { useState, useEffect, useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate, Link } from "react-router-dom";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, rgba(110, 231, 183, 0.15), transparent 80%)`;

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { left, top } = cardRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
      animate(radius, 300, { duration: 0.5 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, radius]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
    } catch (error) {
      alert("Registration Failed: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-neutral-950 overflow-hidden isolate">
      {/* Floating Islands Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Holographic Particles */}
      <motion.div
        style={{ background }}
        className="absolute inset-0 z-10 pointer-events-none"
      />

      {/* Registration Card */}
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative z-20 bg-neutral-900/80 backdrop-blur-2xl p-12 rounded-3xl shadow-2xl w-full max-w-xl mx-4 border border-white/10 hover:shadow-emerald-500/20 transition-shadow duration-300"
      >
        <div className="text-center mb-12 space-y-4">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-xl opacity-30 animate-pulse-slow" />
            <h1 className="text-6xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent relative">
              ROAD MATES
            </h1>
          </div>
          <p className="text-neutral-400 text-lg font-light tracking-wide">
           
          </p>
        </div>
        <form onSubmit={handleRegister} className="space-y-8">
          <div className="group relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 bg-neutral-800/50 border border-neutral-700 rounded-2xl text-neutral-200 placeholder-transparent focus:border-emerald-400/50 focus:ring-0 peer transition-all duration-300"
              placeholder=" "
            />
            <label className="absolute left-4 -top-2.5 px-2 bg-neutral-900 text-sm text-emerald-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm">
              Email Address
            </label>
            <div className="absolute inset-0 rounded-2xl border border-emerald-400/20 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />
          </div>

          <div className="group relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 bg-neutral-800/50 border border-neutral-700 rounded-2xl text-neutral-200 placeholder-transparent focus:border-cyan-400/50 focus:ring-0 peer transition-all duration-300"
              placeholder=" "
            />
            <label className="absolute left-4 -top-2.5 px-2 bg-neutral-900 text-sm text-cyan-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm">
              Password
            </label>
            <div className="absolute inset-0 rounded-2xl border border-cyan-400/20 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-5 px-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl text-neutral-900 font-bold tracking-wide hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isLoading ? (
                <div className="h-6 w-6 border-2 border-neutral-900 border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Begin Adventure</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H3"
                    />
                  </svg>
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-15 transition-opacity duration-300" />
          </button>

          <div className="relative flex items-center justify-center gap-4 text-neutral-500">
            <div className="flex-1 border-t border-neutral-800" />
            <span className="text-sm">Secure Connection</span>
            <div className="flex-1 border-t border-neutral-800" />
          </div>

          <p className="text-center text-neutral-400">
            Already Registered?{" "}
            <Link
              to="/login"
              className="text-cyan-400 font-semibold hover:text-emerald-400 transition-colors underline decoration-2 underline-offset-4 decoration-cyan-400/30 hover:decoration-emerald-400/50"
            >
              Continue to Login
            </Link>
          </p>
        </form>
      </motion.div>{/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(3deg); }
          66% { transform: translateY(10px) rotate(-3deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(30px) rotate(-5deg); }
          66% { transform: translateY(-10px) rotate(5deg); }
        }

        .animate-float {
          animation: float 12s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 15s ease-in-out infinite;
          animation-delay: 2s;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.15; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default RegisterPage;