"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function Register() {
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Database connection logic will go here
    toast.info("Connexion à la base de données en cours...");
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-xl p-8 shadow-[0_0_30px_rgba(220,38,38,0.1)]">
        
        <h2 className="text-3xl font-black uppercase tracking-tighter text-center mb-2">
          Rejoindre <span className="text-red-500">l'Initiative</span>
        </h2>
        <p className="text-zinc-400 text-center text-sm mb-8 uppercase tracking-widest">
          Séminaire de Formation Interact 8.0
        </p>

        <form onSubmit={handleRegister} className="flex flex-col gap-5">
          {/* Email & Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input type="email" placeholder="Adresse Mail *" required className="w-full bg-zinc-900 border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-red-500 transition-colors" />
            <input type="password" placeholder="Mot de passe *" required className="w-full bg-zinc-900 border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-red-500 transition-colors" />
          </div>

          {/* Personal Info */}
          <input type="text" placeholder="Nom et Prénom *" required className="w-full bg-zinc-900 border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-red-500 transition-colors" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input type="text" placeholder="Club Interact *" required className="w-full bg-zinc-900 border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-red-500 transition-colors" />
            <input type="text" placeholder="Poste (Ex: Président, Membre) *" required className="w-full bg-zinc-900 border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-red-500 transition-colors" />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest p-4 rounded transition-all active:scale-95 disabled:opacity-50"
          >
            {loading ? "Création en cours..." : "Soumettre ma candidature"}
          </button>
        </form>
      </div>
    </div>
  );
}