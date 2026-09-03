"use client";

import { Save } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function AdminSettings() {
  const [loading, setLoading] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    toast.success("Paramètres mis à jour avec succès !");
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="p-8 max-w-5xl">
      <header className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tighter">Paramètres Globaux</h1>
          <p className="text-zinc-400 text-sm mt-1 tracking-widest uppercase">Configuration Financière et Logistique</p>
        </div>
        <button 
          onClick={handleSave}
          disabled={loading}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-black uppercase tracking-widest transition-all active:scale-95 disabled:opacity-50"
        >
          <Save size={18} /> {loading ? "Sauvegarde..." : "Sauvegarder"}
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Section Tarification */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-6 border-b border-zinc-800 pb-2">Tarification Dynamique</h2>
          
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Frais de Participation de Base (TND)</label>
              <input type="number" defaultValue={50} className="w-full bg-black border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-red-500 transition-colors" />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Frais Supplémentaires Bus (TND)</label>
              <input type="number" defaultValue={20} className="w-full bg-black border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-red-500 transition-colors" />
            </div>
            
            <div className="pt-4 border-t border-zinc-800/50">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-5 h-5 accent-red-600 bg-black border-zinc-700 rounded cursor-pointer" />
                <span className="text-sm font-semibold text-zinc-300">Activer les inscriptions (Ouvrir le site)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Section Apprentissage des Postes */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-6 border-b border-zinc-800 pb-2">Catégorisation des Postes</h2>
          <p className="text-xs text-zinc-500 mb-4 leading-relaxed">
            Le système détecte les nouveaux postes saisis par les membres. Associez-les ici pour automatiser la priorité de la liste d'attente.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-black border border-zinc-800 p-3 rounded">
              <span className="text-sm font-bold uppercase tracking-widest text-white">Secrétaire Général</span>
              <select className="bg-zinc-900 border border-zinc-700 text-xs text-zinc-300 rounded p-1 focus:outline-none">
                <option>Bureau Exécutif (Priorité 1)</option>
                <option>Bureau Élargi (Priorité 2)</option>
                <option>Membre (Priorité 3)</option>
              </select>
            </div>
            
            <div className="flex items-center justify-between bg-black border border-zinc-800 p-3 rounded">
              <span className="text-sm font-bold uppercase tracking-widest text-white">Chef de Projet</span>
              <select className="bg-zinc-900 border border-zinc-700 text-xs text-zinc-300 rounded p-1 focus:outline-none">
                <option>Bureau Élargi (Priorité 2)</option>
                <option>Bureau Exécutif (Priorité 1)</option>
                <option>Membre (Priorité 3)</option>
              </select>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}