"use client";

import { ScanLine, Search, UserCheck, AlertCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function AdminScanner() {
  const [refNumber, setRefNumber] = useState("");
  const [scanResult, setScanResult] = useState<"idle" | "success" | "error">("idle");

  const handleManualSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!refNumber) return;
    
    if (refNumber === "SFI123") {
      setScanResult("success");
      toast.success("E-Badge valide. Accès autorisé.");
    } else {
      setScanResult("error");
      toast.error("E-Badge introuvable ou non payé.");
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto h-full flex flex-col">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-black uppercase tracking-tighter">Pointage Digital</h1>
        <p className="text-zinc-400 text-sm mt-1 tracking-widest uppercase">Scanner les E-Badges à l'entrée</p>
      </header>

      <div className="flex-1 flex flex-col md:flex-row gap-8">
        <div className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-lg">
          <div className="absolute top-4 left-4 text-xs font-bold tracking-widest text-red-500 uppercase flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> Caméra Active
          </div>
          <div className="w-64 h-64 border-2 border-dashed border-zinc-700 rounded-2xl relative flex items-center justify-center mt-4">
            <ScanLine size={48} className="text-zinc-700" />
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50 shadow-[0_0_15px_rgba(220,38,38,0.8)] animate-[scan_2s_ease-in-out_infinite]"></div>
          </div>
          <p className="text-zinc-500 text-sm mt-8 uppercase tracking-widest text-center">
            Placez le QR Code du participant <br/> dans le cadre
          </p>
        </div>

        <div className="w-full md:w-80 flex flex-col gap-6">
          <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Recherche Manuelle</h3>
            <form onSubmit={handleManualSearch} className="flex gap-2">
              <input type="text" placeholder="Réf. ou Nom" value={refNumber} onChange={(e) => setRefNumber(e.target.value)} className="flex-1 bg-black border border-zinc-800 rounded p-3 text-sm text-white focus:outline-none focus:border-red-500 uppercase" />
              <button type="submit" className="bg-zinc-900 hover:bg-zinc-800 text-white px-4 rounded border border-zinc-800 transition-colors">
                <Search size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}