"use client";

import { Search, FileCheck, Banknote, FileOutput, Users as UsersIcon, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function AdminUsers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [pendingAction, setPendingAction] = useState<"doc" | "money" | null>(null);

  // Simulation de la liste dynamique des bus configurés dans les paramètres
  const [availableBuses] = useState([
    { id: "bus_1", name: "Bus A (Grand Tunis)", capacity: 50 },
    { id: "bus_2", name: "Bus B (Ligne Nord)", capacity: 30 }
  ]);

  const handleExportPDF = () => {
    toast.success("Génération des attestations PDF en cours...");
  };

  const initiateVerification = (type: "doc" | "money") => {
    const isOverLimit = true; 
    
    if (isOverLimit && type === "money") {
      setPendingAction(type);
      setShowConfirmModal(true);
    } else {
      toast.success(type === "doc" ? "Documents validés !" : "Paiement confirmé !");
    }
  };

  const confirmValidation = () => {
    setShowConfirmModal(false);
    toast.success("Exception accordée. Paiement et profil validés !");
    setPendingAction(null);
  };

  return (
    <div className="p-8 relative">
      <header className="mb-8 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tighter">Gestion des Participants</h1>
          <p className="text-zinc-400 text-sm mt-1 tracking-widest uppercase">Vérification et Assignation</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
            <input 
              type="text" 
              placeholder="Chercher un nom..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-zinc-950 border border-zinc-800 rounded pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-red-500 w-full md:w-64"
            />
          </div>
          <button onClick={handleExportPDF} className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-widest transition-colors shadow-lg shadow-red-900/20">
            <FileOutput size={14} /> Attestations PDF
          </button>
        </div>
      </header>

      {/* Pop-up Quota Exception */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-zinc-950 border border-red-900/50 p-8 rounded-xl w-full max-w-md shadow-[0_0_50px_rgba(220,38,38,0.2)]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-red-950 text-red-500 rounded-full flex items-center justify-center shrink-0">
                <AlertTriangle size={24} />
              </div>
              <div>
                <h3 className="text-lg font-black text-white uppercase tracking-widest">Limite de Club Atteinte</h3>
                <p className="text-xs text-zinc-400 mt-1">Ce club a dépassé son quota.</p>
              </div>
            </div>
            <p className="text-sm text-zinc-300 mb-8 leading-relaxed">
              Êtes-vous sûr de vouloir valider ce paiement ? Cela créera une exception de place.
            </p>
            <div className="flex gap-3">
              <button onClick={() => setShowConfirmModal(false)} className="flex-1 bg-zinc-900 hover:bg-zinc-800 text-white p-3 rounded font-bold uppercase tracking-widest text-xs transition-colors">
                Annuler
              </button>
              <button onClick={confirmValidation} className="flex-1 bg-red-600 hover:bg-red-700 text-white p-3 rounded font-bold uppercase tracking-widest text-xs transition-colors">
                Forcer la Validation
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-lg overflow-x-auto">
        <table className="w-full text-left text-sm text-zinc-300">
          <thead className="bg-black/50 text-xs uppercase tracking-widest font-semibold text-zinc-500 border-b border-zinc-800">
            <tr>
              <th className="px-6 py-4">Participant</th>
              <th className="px-6 py-4">Club & Poste</th>
              <th className="px-6 py-4">Assignation Bus</th>
              <th className="px-6 py-4 text-right">Vérifications (Docs / Paiement)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/50">
            <tr className="hover:bg-zinc-900/50 transition-colors">
              <td className="px-6 py-4">
                <p className="font-bold text-white uppercase">Participant Exemple</p>
                <p className="text-xs text-zinc-500">Statut: En attente</p>
              </td>
              <td className="px-6 py-4">
                <p className="font-semibold text-zinc-300">Club Exemple</p>
                <p className="text-xs text-zinc-500">Membre</p>
              </td>
              <td className="px-6 py-4">
                <select className="bg-zinc-900 border border-zinc-700 text-xs text-zinc-300 rounded p-2 focus:outline-none w-full max-w-[150px]">
                  <option value="">Non assigné</option>
                  {/* Génération dynamique de la liste des bus */}
                  {availableBuses.map((bus) => (
                    <option key={bus.id} value={bus.id}>
                      {bus.name} ({bus.capacity} places)
                    </option>
                  ))}
                </select>
              </td>
              <td className="px-6 py-4 text-right flex justify-end gap-3">
                <button onClick={() => initiateVerification("doc")} className="flex items-center gap-2 p-2 px-3 bg-blue-950/30 text-blue-500 hover:bg-blue-900/50 border border-blue-900/50 rounded transition-colors" title="Valider Documents">
                  <FileCheck size={16} /> <span className="text-xs font-bold uppercase hidden md:inline">Docs</span>
                </button>
                <button onClick={() => initiateVerification("money")} className="flex items-center gap-2 p-2 px-3 bg-green-950/30 text-green-500 hover:bg-green-900/50 border border-green-900/50 rounded transition-colors" title="Valider Paiement">
                  <Banknote size={16} /> <span className="text-xs font-bold uppercase hidden md:inline">Payé</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}