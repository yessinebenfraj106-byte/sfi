"use client";

import Link from "next/link";
import { Home, FileUp, User, LogOut } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white flex font-sans selection:bg-red-600">
      {/* Sidebar Participant */}
      <aside className="w-64 bg-zinc-950 border-r border-zinc-800 flex flex-col hidden md:flex fixed h-full z-10">
        <div className="p-6 border-b border-zinc-800">
          <h2 className="text-xl font-black text-red-500 tracking-tighter uppercase">Espace Membre</h2>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">SFI 8.0</p>
        </div>
        
        <nav className="flex-1 p-4 flex flex-col gap-2">
          <Link href="/dashboard" className="flex items-center gap-3 p-3 rounded bg-red-600/10 text-red-500 border border-red-500/20 transition-colors">
            <Home size={18} /> <span className="text-sm font-bold uppercase tracking-widest">Accueil</span>
          </Link>
          <Link href="/dashboard" className="flex items-center gap-3 p-3 rounded text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors cursor-not-allowed opacity-50" title="Bientôt disponible">
            <FileUp size={18} /> <span className="text-sm font-bold uppercase tracking-widest">Documents</span>
          </Link>
          <Link href="/dashboard" className="flex items-center gap-3 p-3 rounded text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors cursor-not-allowed opacity-50" title="Bientôt disponible">
            <User size={18} /> <span className="text-sm font-bold uppercase tracking-widest">Mon Profil</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-zinc-800">
          <Link href="/" className="flex items-center gap-3 p-3 w-full rounded text-zinc-500 hover:text-red-500 hover:bg-red-950/30 transition-colors">
            <LogOut size={18} /> <span className="text-sm font-bold uppercase tracking-widest">Déconnexion</span>
          </Link>
        </div>
      </aside>

      {/* Contenu Principal */}
      <main className="flex-1 ml-0 md:ml-64 bg-black overflow-y-auto h-screen">
        {children}
      </main>
    </div>
  );
}