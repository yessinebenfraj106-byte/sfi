"use client";

import { useState } from "react";
import Link from "next/link";
import { LayoutDashboard, Users, QrCode, Settings, LogOut, Lock, Megaphone } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "sfi2026") {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword("");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center font-sans selection:bg-red-600">
        <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-xl w-full max-w-md shadow-[0_0_30px_rgba(220,38,38,0.1)]">
          <div className="flex flex-col items-center mb-6 text-center">
            <div className="w-12 h-12 bg-red-600/20 text-red-500 rounded-full flex items-center justify-center mb-4">
              <Lock size={24} />
            </div>
            <h2 className="text-2xl font-black uppercase tracking-tighter">Accès Restreint</h2>
            <p className="text-zinc-500 text-xs tracking-widest uppercase mt-2">Centre de Contrôle SFI</p>
          </div>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input type="password" placeholder="Mot de passe Admin" value={password} onChange={(e) => setPassword(e.target.value)} className={`w-full bg-black border ${error ? 'border-red-500' : 'border-zinc-800'} rounded p-3 text-white focus:outline-none focus:border-red-500 text-center tracking-widest`} />
            {error && <p className="text-red-500 text-xs text-center font-bold">Mot de passe incorrect</p>}
            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest p-3 rounded transition-all">
              Déverrouiller
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex font-sans selection:bg-red-600">
      <aside className="w-64 bg-zinc-950 border-r border-zinc-800 flex flex-col hidden md:flex fixed h-full z-10">
        <div className="p-6 border-b border-zinc-800">
          <h2 className="text-xl font-black text-red-500 tracking-tighter uppercase">Admin Panel</h2>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">SFI 8.0</p>
        </div>
        
        <nav className="flex-1 p-4 flex flex-col gap-2">
          <Link href="/admin" className="flex items-center gap-3 p-3 rounded text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors">
            <LayoutDashboard size={18} /> <span className="text-sm font-bold uppercase tracking-widest">Dashboard</span>
          </Link>
          <Link href="/admin/users" className="flex items-center gap-3 p-3 rounded text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors">
            <Users size={18} /> <span className="text-sm font-bold uppercase tracking-widest">Participants</span>
          </Link>
          <Link href="/admin/scanner" className="flex items-center gap-3 p-3 rounded text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors">
            <QrCode size={18} /> <span className="text-sm font-bold uppercase tracking-widest">Scanner</span>
          </Link>
          <Link href="/admin/announcements" className="flex items-center gap-3 p-3 rounded text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors">
            <Megaphone size={18} /> <span className="text-sm font-bold uppercase tracking-widest">Annonces</span>
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 p-3 rounded text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors">
            <Settings size={18} /> <span className="text-sm font-bold uppercase tracking-widest">Paramètres</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-zinc-800">
          <button onClick={() => setIsAuthenticated(false)} className="flex items-center gap-3 p-3 w-full rounded text-zinc-500 hover:text-red-500 hover:bg-red-950/30 transition-colors">
            <LogOut size={18} /> <span className="text-sm font-bold uppercase tracking-widest">Déconnexion</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 ml-0 md:ml-64 bg-black overflow-y-auto h-screen">
        {children}
      </main>
    </div>
  );
}