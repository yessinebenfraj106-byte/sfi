"use client";

import { UploadCloud, FileDown, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function DocumentsPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    
    setUploading(true);
    // Simulation du téléversement
    setTimeout(() => {
      setUploading(false);
      toast.success("Document envoyé avec succès. En attente de validation par l'administration.");
    }, 1500);
  };

  return (
    <div className="p-8 max-w-4xl">
      <header className="mb-10">
        <h1 className="text-3xl font-black uppercase tracking-tighter">Documents Officiels</h1>
        <p className="text-zinc-400 text-sm mt-1 tracking-widest uppercase">Autorisation parentale et conformité</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Étape 1 : Téléchargement */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-lg h-fit">
          <h2 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-4 border-b border-zinc-800 pb-2 flex items-center gap-2">
            1. Télécharger le modèle
          </h2>
          <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
            L'autorisation parentale est <strong className="text-white">obligatoire</strong> pour tous les participants. Veuillez imprimer ce document et le faire signer par votre tuteur légal.
          </p>
          <button className="w-full flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white px-6 py-4 rounded font-black uppercase tracking-widest transition-colors">
            <FileDown size={18} /> Obtenir le PDF
          </button>
        </div>

        {/* Étape 2 : Dépôt */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-4 border-b border-zinc-800 pb-2 flex items-center gap-2">
            2. Soumettre le document
          </h2>
          <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
            Prenez une photo claire ou scannez l'autorisation signée et déposez-la ici.
          </p>
          
          <form onSubmit={handleUpload}>
            <label className="border-2 border-dashed border-zinc-700 hover:border-red-500 bg-black rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition-colors group mb-4">
              <UploadCloud size={40} className="text-zinc-600 group-hover:text-red-500 mb-4 transition-colors" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors text-center">
                {file ? file.name : "Cliquez pour choisir un fichier (PDF, JPG, PNG)"}
              </span>
              <input 
                type="file" 
                className="hidden" 
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
            </label>

            <button 
              type="submit" 
              disabled={!file || uploading}
              className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded font-black uppercase tracking-widest transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100"
            >
              {uploading ? "Envoi en cours..." : "Transmettre à l'administration"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}