"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    toast.info("Authentification en cours...");
    
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-xl p-8 shadow-[0_0_30px_rgba(220,38,38,0.1)]">
        
        <div className="mb-8 text-center">
          <Link href="/" className="text-red-500 hover:text-red-400 text-sm font-bold tracking-widest uppercase mb-4 inline-block transition-colors">
            ← Retour à l'accueil
          </Link>
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-2 mt-2">
            Connexion
          </h2>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <input type="email" placeholder="Adresse Mail" required className="w-full bg-black border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-red-500 transition-colors" />
          <input type="password" placeholder="Mot de passe" required className="w-full bg-black border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-red-500 transition-colors" />

          <button 
            type="submit" 
            disabled={loading}
            className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest p-4 rounded transition-all active:scale-95 disabled:opacity-50"
          >
            {loading ? "Chargement..." : "Accéder à l'interface"}
          </button>
        </form>
      </div>
    </div>
  );
}