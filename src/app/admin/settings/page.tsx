"use client";

import { Save, Plus, Trash2, Bus } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function AdminSettings() {
  const [loading, setLoading] = useState(false);
  
  // États dynamiques
  const [buses, setBuses] = useState([
    { id: 1, name: "Bus A (Grand Tunis)", capacity: 50 },
    { id: 2, name: "Bus B (Ligne Nord)", capacity: 30 }
  ]);
  const [roles, setRoles] = useState([{ id: 1, name: "Président", priority: "1" }]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    toast.success("Paramètres globaux sauvegardés avec succès !");
    setTimeout(() => setLoading(false), 1000);
  };

  // Logique des Bus
  const addBus = () => setBuses([...buses, { id: Date.now(), name: "", capacity: 50 }]);
  const removeBus = (id: number) => setBuses(buses.filter(b => b.id !== id));
  const updateBus = (id: number, field: string, value: string | number) => {
    setBuses(buses.map(bus => bus.id === id ? { ...bus, [field]: value } : bus));
  };
  
  // Calcul automatique de la capacité totale
  const totalBusCapacity = buses.reduce((acc, bus) => acc + (Number(bus.capacity) || 0), 0);

  // Logique des Rôles
  const addRole = () => setRoles([...roles, { id: Date.now(), name: "", priority: "3" }]);
  const removeRole = (id: number) => setRoles(roles.filter(r => r.id !== id));

  return (
    <div className="p-8 max-w-6xl">
      <header className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tighter">Configuration Globale</h1>
          <p className="text-zinc-400 text-sm mt-1 tracking-widest uppercase">Tarifs, Bus, Quotas et Logique d'Attente</p>
        </div>
        <button onClick={handleSave} disabled={loading} className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-black uppercase tracking-widest transition-all active:scale-95">
          <Save size={18} /> {loading ? "Sauvegarde..." : "Enregistrer tout"}
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Contrôle Financier & Bus */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-lg space-y-8">
          <div>
            <h2 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-4 border-b border-zinc-800 pb-2">Tarification (TND)</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Prix SFI (Sans Bus)</label>
                <input type="number" defaultValue={50} className="w-full bg-black border border-zinc-800 rounded p-3 text-white focus:border-red-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Prix SFI + Bus</label>
                <input type="number" defaultValue={70} className="w-full bg-black border border-zinc-800 rounded p-3 text-white focus:border-red-500 focus:outline-none" />
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-end mb-4 border-b border-zinc-800 pb-2">
              <h2 className="text-red-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2"><Bus size={16}/> Flotte de Bus</h2>
              <button onClick={addBus} className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 uppercase tracking-widest"><Plus size={14}/> Ajouter</button>
            </div>
            <div className="space-y-3">
              {buses.map((bus) => (
                <div key={bus.id} className="flex items-center gap-3 bg-black border border-zinc-800 p-2 rounded">
                  <input 
                    type="text" 
                    placeholder="Nom du Bus (ex: Ligne Nord)" 
                    value={bus.name} 
                    onChange={(e) => updateBus(bus.id, 'name', e.target.value)}
                    className="flex-1 bg-transparent border-none text-xs text-white focus:outline-none" 
                  />
                  <input 
                    type="number" 
                    placeholder="Capacité" 
                    value={bus.capacity} 
                    onChange={(e) => updateBus(bus.id, 'capacity', parseInt(e.target.value) || 0)}
                    className="w-20 bg-zinc-900 border border-zinc-700 rounded p-1 text-xs text-center text-white focus:outline-none" 
                  />
                  <button onClick={() => removeBus(bus.id)} className="text-zinc-600 hover:text-red-500 p-1"><Trash2 size={16} /></button>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-red-950/20 border border-red-900/30 rounded flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-red-500">Capacité totale de la flotte :</span>
              <span className="text-lg font-black text-white">{totalBusCapacity} places</span>
            </div>
          </div>
        </div>

        {/* Quotas & Intelligence de la file d'attente */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-lg space-y-8">
          <div>
            <h2 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-4 border-b border-zinc-800 pb-2">Quotas Universels</h2>
            <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Limite par défaut (Tous les clubs)</label>
            <input type="number" defaultValue={25} className="w-full bg-black border border-zinc-800 rounded p-3 text-white focus:border-red-500 focus:outline-none mb-2" />
            <p className="text-xs text-zinc-500 leading-relaxed">
              Si un club dépasse ce quota, une validation d'exception sera requise lors de l'approbation du membre.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-end mb-4 border-b border-zinc-800 pb-2">
              <h2 className="text-red-500 font-bold uppercase tracking-widest text-sm">Catégorisation des Postes</h2>
              <button onClick={addRole} className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 uppercase tracking-widest"><Plus size={14}/> Ajouter</button>
            </div>
            <div className="space-y-3">
              {roles.map((role) => (
                <div key={role.id} className="flex justify-between items-center bg-black border border-zinc-800 p-2 rounded gap-3">
                  <input type="text" placeholder="Poste (ex: Trésorier)" defaultValue={role.name} className="bg-transparent border-none focus:outline-none text-xs text-white font-bold uppercase tracking-widest flex-1" />
                  <select defaultValue={role.priority} className="bg-zinc-900 border border-zinc-700 text-xs text-zinc-300 rounded p-1 focus:outline-none">
                    <option value="1">Priorité 1 (Bureau Exé)</option>
                    <option value="2">Priorité 2 (Bureau Élargi)</option>
                    <option value="3">Priorité 3 (Membre)</option>
                  </select>
                  <button onClick={() => removeRole(role.id)} className="text-zinc-600 hover:text-red-500 p-1"><Trash2 size={16} /></button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}