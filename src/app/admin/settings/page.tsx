"use client";

import { Save, Plus } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function AdminSettings() {
  const [loading, setLoading] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    toast.success("Paramètres globaux sauvegardés avec succès !");
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="p-8 max-w-6xl">
      <header className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tighter">Configuration Globale</h1>
          <p className="text-zinc-400 text-sm mt-1 tracking-widest uppercase">Tarifs, Bus, Quotas et Logique d'Attente</p>
        </div>
        <button onClick={handleSave} disabled={loading} className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-black uppercase tracking-widest transition-all active:scale-95">
          <Save size={18} /> {loading ? "Sauvegarde..." : "Enregistrer tout"}
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Contrôle Financier & Bus */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-lg space-y-8">
          <div>
            <h2 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-4 border-b border-zinc-800 pb-2">Tarification (TND)</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Prix SFI (Sans Bus)</label>
                <input type="number" defaultValue={50} className="w-full bg-black border border-zinc-800 rounded p-3 text-white focus:border-red-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Prix SFI + Bus</label>
                <input type="number" defaultValue={70} className="w-full bg-black border border-zinc-800 rounded p-3 text-white focus:border-red-500 focus:outline-none" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-4 border-b border-zinc-800 pb-2">Logistique des Bus</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Nombre de Bus</label>
                <input type="number" defaultValue={2} className="w-full bg-black border border-zinc-800 rounded p-3 text-white focus:border-red-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Capacité par Bus</label>
                <input type="number" defaultValue={50} className="w-full bg-black border border-zinc-800 rounded p-3 text-white focus:border-red-500 focus:outline-none" />
              </div>
            </div>
            <p className="text-xs text-zinc-500 mt-2">Capacité totale calculée : 100 places.</p>
          </div>
        </div>

        {/* Quotas & Intelligence de la file d'attente */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-lg space-y-8">
          
          <div>
            <div className="flex justify-between items-end mb-4 border-b border-zinc-800 pb-2">
              <h2 className="text-red-500 font-bold uppercase tracking-widest text-sm">Quotas Universels</h2>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Limite de places par club</label>
                <input type="number" defaultValue={25} className="w-full bg-black border border-zinc-800 rounded p-3 text-white focus:border-red-500 focus:outline-none" />
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Ce quota s'applique uniformément à tous les clubs Interact. Si vous validez manuellement un membre d'un club ayant déjà atteint cette limite, le système vous demandera une confirmation d'exception.
              </p>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-end mb-4 border-b border-zinc-800 pb-2">
              <h2 className="text-red-500 font-bold uppercase tracking-widest text-sm">Catégorisation Dynamique des Postes</h2>
              <button className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 uppercase tracking-widest"><Plus size={14}/> Ajouter</button>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-black border border-zinc-800 p-2 rounded">
                <input type="text" defaultValue="Président" className="bg-transparent border-none focus:outline-none text-xs text-white font-bold uppercase tracking-widest w-1/2" />
                <select className="bg-zinc-900 border border-zinc-700 text-xs text-zinc-300 rounded p-1 focus:outline-none">
                  <option>Priorité 1 (Bureau Exécutif)</option>
                  <option>Priorité 2 (Bureau Élargi)</option>
                  <option>Priorité 3 (Membre / Recrue)</option>
                </select>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}