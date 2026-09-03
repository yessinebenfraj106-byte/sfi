"use client";

import { Save, User as UserIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ProfilePage() {
  const [loading, setLoading] = useState(false);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Profil mis à jour avec succès !");
    }, 1000);
  };

  return (
    <div className="p-8 max-w-4xl">
      <header className="mb-10">
        <h1 className="text-3xl font-black uppercase tracking-tighter">Mon Profil</h1>
        <p className="text-zinc-400 text-sm mt-1 tracking-widest uppercase">Gérer vos informations personnelles</p>
      </header>

      <form onSubmit={handleUpdate} className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-lg">
        <h2 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-6 border-b border-zinc-800 pb-2 flex items-center gap-2">
          <UserIcon size={16} /> Données du Participant
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Champs figés (Lecture seule) */}
          <div>
            <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Nom et Prénom (Non modifiable)</label>
            <input type="text" value="Yessine Ben Fraj" disabled className="w-full bg-black border border-zinc-800 rounded p-3 text-zinc-500 opacity-70 cursor-not-allowed" />
          </div>
          <div>
            <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Club Interact (Non modifiable)</label>
            <input type="text" value="Tunis Golfe Carthagène" disabled className="w-full bg-black border border-zinc-800 rounded p-3 text-zinc-500 opacity-70 cursor-not-allowed" />
          </div>

          {/* Champs modifiables */}
          <div>
            <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Choix de Transport</label>
            <select className="w-full bg-black border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-red-500">
              <option value="bus">Bus SFI</option>
              <option value="private">Transport Privé (Moyens Propres)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Allergies / Régime Alimentaire</label>
            <input type="text" placeholder="Ex: Sans gluten, allergie aux arachides..." className="w-full bg-black border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-red-500" />
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t border-zinc-800">
          <button 
            type="submit" 
            disabled={loading}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-black uppercase tracking-widest transition-all active:scale-95 disabled:opacity-50"
          >
            <Save size={18} /> {loading ? "Sauvegarde..." : "Sauvegarder"}
          </button>
        </div>
      </form>
    </div>
  );
}