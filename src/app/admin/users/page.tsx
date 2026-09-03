"use client";

import { Search, FileText, CheckCircle, Clock, FileOutput, Users as UsersIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function AdminUsers() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleExportPDF = () => {
    toast.success("Génération des attestations PDF en cours...");
  };

  return (
    <div className="p-8">
      <header className="mb-8 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tighter">Gestion des Participants</h1>
          <p className="text-zinc-400 text-sm mt-1 tracking-widest uppercase">Base de données SFI 8.0</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
            <input 
              type="text" 
              placeholder="Chercher un nom..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-zinc-950 border border-zinc-800 rounded pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-red-500 w-full md:w-64 transition-colors"
            />
          </div>
          
          <button className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-widest transition-colors">
            <UsersIcon size={14} /> Voir Liste d'attente
          </button>
          
          <button onClick={handleExportPDF} className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-widest transition-colors shadow-lg shadow-red-900/20">
            <FileOutput size={14} /> Attestations PDF
          </button>
        </div>
      </header>

      <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-zinc-300">
            <thead className="bg-black/50 text-xs uppercase tracking-widest font-semibold text-zinc-500 border-b border-zinc-800">
              <tr>
                <th className="px-6 py-4">Participant</th>
                <th className="px-6 py-4">Club & Poste</th>
                <th className="px-6 py-4">Transport</th>
                <th className="px-6 py-4">Statut</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              <tr className="hover:bg-zinc-900/50 transition-colors">
                <td className="px-6 py-4">
                  <p className="font-bold text-white uppercase">Participant Exemple</p>
                  <p className="text-xs text-zinc-500">exemple@interact.com</p>
                </td>
                <td className="px-6 py-4">
                  <p className="font-semibold text-zinc-300">Club Exemple</p>
                  <p className="text-xs text-red-500 uppercase tracking-widest font-bold">Membre</p>
                </td>
                <td className="px-6 py-4">
                  <span className="bg-zinc-900 text-zinc-300 border border-zinc-800 px-2 py-1 rounded text-xs font-bold uppercase tracking-widest">
                    SFI + Bus
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="flex items-center gap-2 text-yellow-500 text-xs font-bold uppercase tracking-widest">
                    <Clock size={14} /> En attente de paiement
                  </span>
                </td>
                <td className="px-6 py-4 text-right flex justify-end gap-2">
                  <button className="p-2 bg-zinc-900 text-zinc-400 hover:text-white rounded transition-colors" title="Voir les documents">
                    <FileText size={16} />
                  </button>
                  <button className="p-2 bg-green-950/30 text-green-500 hover:bg-green-900/50 rounded transition-colors" title="Valider le profil">
                    <CheckCircle size={16} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}