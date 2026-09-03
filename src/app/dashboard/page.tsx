"use client";

import { AlertTriangle, Clock, CheckCircle, Megaphone, FileText, Ban } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function UserDashboard() {
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);

  // Simulation du statut du participant (0: Bloqué, 1: En attente Docs, 2: En attente Paiement, 3: Confirmé)
  const userStatus = 2; 

  const handleCancel = () => {
    setIsCancelled(true);
    setShowCancelModal(false);
    toast.error("Votre participation a été annulée. Votre place a été réattribuée.");
  };

  if (isCancelled) {
    return (
      <div className="p-8 h-full flex flex-col items-center justify-center text-center">
        <Ban size={64} className="text-red-600 mb-6" />
        <h1 className="text-3xl font-black uppercase tracking-tighter text-white mb-2">Participation Annulée</h1>
        <p className="text-zinc-400 max-w-md">Vous avez cédé votre place. Si c'est une erreur, veuillez contacter l'administration de l'Interact Club Tunis Golfe Carthagène immédiatement.</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-5xl">
      <header className="mb-10">
        <h1 className="text-3xl font-black uppercase tracking-tighter">Bienvenue, Yessine</h1>
        <p className="text-zinc-400 text-sm mt-1 tracking-widest uppercase">Interact Club Tunis Golfe Carthagène</p>
      </header>

      {/* Barre de Progression du Statut */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-lg mb-8">
        <h2 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-6">Statut de votre dossier</h2>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative">
          {/* Ligne de fond (Barre) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-zinc-800 -z-0 -translate-y-1/2 rounded"></div>
          <div className={`hidden md:block absolute top-1/2 left-0 h-1 bg-red-600 -z-0 -translate-y-1/2 rounded transition-all duration-1000 ${userStatus === 1 ? 'w-1/3' : userStatus === 2 ? 'w-2/3' : userStatus === 3 ? 'w-full' : 'w-0'}`}></div>

          {/* Étape 1 : Inscription */}
          <div className="flex flex-col items-center gap-2 z-10 bg-zinc-950 px-2">
            <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.4)]">
              <CheckCircle size={20} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-white">Inscrit</span>
          </div>

          {/* Étape 2 : Documents */}
          <div className="flex flex-col items-center gap-2 z-10 bg-zinc-950 px-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${userStatus >= 1 ? 'bg-red-600 border-red-600 text-white' : 'bg-black border-zinc-700 text-zinc-600'}`}>
              {userStatus > 1 ? <CheckCircle size={20} /> : <FileText size={20} />}
            </div>
            <span className={`text-xs font-bold uppercase tracking-widest ${userStatus >= 1 ? 'text-white' : 'text-zinc-600'}`}>Documents</span>
          </div>

          {/* Étape 3 : Paiement */}
          <div className="flex flex-col items-center gap-2 z-10 bg-zinc-950 px-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${userStatus >= 2 ? 'bg-yellow-500 border-yellow-500 text-black' : 'bg-black border-zinc-700 text-zinc-600'}`}>
              {userStatus > 2 ? <CheckCircle size={20} /> : <Clock size={20} />}
            </div>
            <span className={`text-xs font-bold uppercase tracking-widest ${userStatus >= 2 ? 'text-yellow-500' : 'text-zinc-600'}`}>Paiement</span>
          </div>

          {/* Étape 4 : E-Badge */}
          <div className="flex flex-col items-center gap-2 z-10 bg-zinc-950 px-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${userStatus >= 3 ? 'bg-green-500 border-green-500 text-black shadow-[0_0_15px_rgba(34,197,94,0.4)]' : 'bg-black border-zinc-700 text-zinc-600'}`}>
              {userStatus >= 3 ? <CheckCircle size={20} /> : <Ban size={20} />}
            </div>
            <span className={`text-xs font-bold uppercase tracking-widest ${userStatus >= 3 ? 'text-green-500' : 'text-zinc-600'}`}>E-Badge</span>
          </div>
        </div>

        {/* Message contextuel selon le statut */}
        <div className="mt-8 p-4 bg-yellow-950/20 border border-yellow-900/30 rounded text-sm text-yellow-500 flex items-start gap-3">
          <AlertTriangle size={18} className="shrink-0 mt-0.5" />
          <p>
            <strong>Action Requise :</strong> Vos documents sont validés. Veuillez procéder au paiement auprès de votre président de club pour débloquer votre E-Badge final.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Fil d'actualité (Annonces) */}
        <div className="lg:col-span-2 bg-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-zinc-400 font-bold uppercase tracking-widest text-sm mb-6 border-b border-zinc-800 pb-2 flex items-center gap-2">
            <Megaphone size={16} /> Annonces Officielles
          </h2>
          
          <div className="space-y-4">
            <div className="p-4 rounded bg-red-950/20 border border-red-900/50">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-sm uppercase tracking-widest text-red-500">Ouverture des Inscriptions</h3>
                <span className="text-xs text-zinc-500">Aujourd'hui</span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">Les inscriptions pour le SFI 8.0 sont officiellement ouvertes ! Pensez à ramener vos autorisations parentales signées au plus vite.</p>
            </div>
          </div>
        </div>

        {/* Zone de Danger (Annulation) */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-lg h-fit">
          <h2 className="text-zinc-400 font-bold uppercase tracking-widest text-sm mb-6 border-b border-zinc-800 pb-2">
            Zone de Danger
          </h2>
          <p className="text-xs text-zinc-500 mb-4 leading-relaxed">
            Si vous ne pouvez plus assister à l'événement, vous pouvez annuler votre participation. Votre place sera immédiatement donnée à la personne suivante sur la liste d'attente. <strong className="text-red-500">Cette action est irréversible.</strong>
          </p>
          <button 
            onClick={() => setShowCancelModal(true)}
            className="w-full bg-transparent border border-red-900/50 hover:bg-red-950/30 text-red-500 p-3 rounded font-bold uppercase tracking-widest text-xs transition-colors"
          >
            Annuler ma participation
          </button>
        </div>
      </div>

      {/* Pop-up de Confirmation d'Annulation */}
      {showCancelModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-zinc-950 border border-red-900/50 p-8 rounded-xl w-full max-w-md shadow-[0_0_50px_rgba(220,38,38,0.2)] mx-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-red-950 text-red-500 rounded-full flex items-center justify-center shrink-0">
                <AlertTriangle size={24} />
              </div>
              <div>
                <h3 className="text-lg font-black text-white uppercase tracking-widest">Êtes-vous absolument sûr ?</h3>
              </div>
            </div>
            <p className="text-sm text-zinc-300 mb-8 leading-relaxed">
              En confirmant, vous perdez définitivement votre place pour le SFI 8.0. Elle sera immédiatement réattribuée par l'algorithme.
            </p>
            <div className="flex gap-3">
              <button onClick={() => setShowCancelModal(false)} className="flex-1 bg-zinc-900 hover:bg-zinc-800 text-white p-3 rounded font-bold uppercase tracking-widest text-xs transition-colors">
                Retour
              </button>
              <button onClick={handleCancel} className="flex-1 bg-red-600 hover:bg-red-700 text-white p-3 rounded font-bold uppercase tracking-widest text-xs transition-colors">
                Oui, Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}