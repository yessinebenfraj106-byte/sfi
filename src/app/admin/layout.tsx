import Link from "next/link";
import { LayoutDashboard, Users, QrCode, Settings, LogOut } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white flex font-sans selection:bg-red-600">
      {/* Sidebar / Menu Latéral */}
      <aside className="w-64 bg-zinc-950 border-r border-zinc-800 flex flex-col hidden md:flex fixed h-full z-10">
        <div className="p-6 border-b border-zinc-800">
          <h2 className="text-xl font-black text-red-500 tracking-tighter uppercase">Admin Panel</h2>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">SFI 8.0</p>
        </div>
        
        <nav className="flex-1 p-4 flex flex-col gap-2">
          <Link href="/admin" className="flex items-center gap-3 p-3 rounded bg-red-600/10 text-red-500 border border-red-500/20 transition-colors">
            <LayoutDashboard size={18} /> <span className="text-sm font-bold uppercase tracking-widest">Dashboard</span>
          </Link>
          <Link href="/admin/users" className="flex items-center gap-3 p-3 rounded text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors">
            <Users size={18} /> <span className="text-sm font-bold uppercase tracking-widest">Participants</span>
          </Link>
          <Link href="/admin/scanner" className="flex items-center gap-3 p-3 rounded text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors">
            <QrCode size={18} /> <span className="text-sm font-bold uppercase tracking-widest">Scanner E-Badge</span>
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 p-3 rounded text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors">
            <Settings size={18} /> <span className="text-sm font-bold uppercase tracking-widest">Paramètres</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-zinc-800">
          <button className="flex items-center gap-3 p-3 w-full rounded text-zinc-500 hover:text-red-500 hover:bg-red-950/30 transition-colors">
            <LogOut size={18} /> <span className="text-sm font-bold uppercase tracking-widest">Déconnexion</span>
          </button>
        </div>
      </aside>

      {/* Contenu Principal (Le reste du site admin s'affichera ici) */}
      <main className="flex-1 ml-0 md:ml-64 bg-black overflow-y-auto h-screen">
        {children}
      </main>
    </div>
  );
}