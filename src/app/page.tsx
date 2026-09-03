"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Setting the target date for the seminar
    const targetDate = new Date("2026-12-20T08:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white flex flex-col">
      {/* Marvel-style Header */}
      <header className="w-full p-6 border-b border-zinc-800 flex justify-between items-center bg-black/90 backdrop-blur-md fixed top-0 z-50">
        <div className="bg-red-600 text-white font-black tracking-tighter text-2xl px-2 py-1 uppercase">
          Interact
        </div>
        <nav>
          <button className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
            Login
          </button>
        </nav>
      </header>

      {/* Main Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center pt-32 pb-16 px-6 text-center relative overflow-hidden">
        {/* Background visual effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center gap-8 max-w-5xl">
          <span className="text-red-500 font-bold tracking-[0.3em] uppercase text-sm md:text-base">
            Coordination Nationale d'Interact Tunisie
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none">
            SÉMINAIRE DE FORMATION <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              INTERACT 8.0 ✨
            </span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed mt-4">
            L'événement incontournable pour développer votre leadership, maîtriser la gestion de projet et libérer votre potentiel créatif. Préparez-vous à l'impact.
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 md:gap-8 my-8">
            {[
              { label: "Jours", value: timeLeft.days },
              { label: "Heures", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Secondes", value: timeLeft.seconds },
            ].map((unit, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center text-2xl md:text-4xl font-black text-red-500 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                  {unit.value.toString().padStart(2, '0')}
                </div>
                <span className="text-xs md:text-sm text-zinc-500 uppercase tracking-widest mt-3 font-semibold">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          <button className="group relative flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95">
            S'inscrire maintenant
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 border-2 border-red-500 translate-x-2 translate-y-2 pointer-events-none group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full p-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 uppercase tracking-widest font-semibold gap-4 z-10 bg-black">
        <p>© 2026 Interact Tunis Golfe Carthagène. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-red-500 transition-colors">Privacy</a>
          <a href="#" className="hover:text-red-500 transition-colors">Terms</a>
        </div>
      </footer>
    </div>
  );
}