"use client";

import { Users, FileClock, CheckCircle, Bus } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-black uppercase tracking-tighter">Vue d'ensemble</h1>
        <p className="text-zinc-400 text-sm mt-1 tracking-widest uppercase">Supervision du Séminaire de Formation Interact 8.0</p>
      </header>

      {/* Cartes de Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl border-t-4 border-t-zinc-500 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Total Inscrits</p>
            <Users className="text-zinc-500" size={20} />
          </div>
          <p className="text-4xl font-black text-white">0</p>
        </div>

        <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl border-t-4 border-t-yellow-500 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">En Attente</p>
            <FileClock className="text-yellow-500" size={20} />
          </div>
          <p className="text-4xl font-black text-yellow-500">0</p>
          <p className="text-xs text-zinc-500 mt-2">Dossiers ou paiements à valider</p>
        </div>

        <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl border-t-4 border-t-green-500 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Vérifiés</p>
            <CheckCircle className="text-green-500" size={20} />
          </div>
          <p className="text-4xl font-black text-green-500">0</p>
          <p className="text-xs text-zinc-500 mt-2">Prêts pour l'événement</p>
        </div>

        <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl border-t-4 border-t-blue-500 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Places Bus Restantes</p>
            <Bus className="text-blue-500" size={20} />
          </div>
          <p className="text-4xl font-black text-blue-500">50</p>
        </div>
      </div>

      {/* Tableau des Inscriptions Récentes */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-lg">
        <div className="p-6 border-b border-zinc-800 flex justify-between items-center bg-black/50">
          <h2 className="font-bold uppercase tracking-widest text-sm">Dernières Activités</h2>
          <button className="text-xs font-bold bg-zinc-900 border border-zinc-800 hover:border-red-500 px-4 py-2 rounded text-zinc-400 hover:text-white transition-all uppercase tracking-widest">
            Voir Tout
          </button>
        </div>
        <div className="p-12 text-center flex flex-col items-center justify-center text-zinc-500">
          <Users size={40} className="mb-4 opacity-20" />
          <p className="text-sm font-semibold tracking-widest uppercase">Aucun participant pour le moment</p>
          <p className="text-xs mt-2">La base de données Supabase s'affichera ici une fois connectée.</p>
        </div>
      </div>
    </div>
  );
}