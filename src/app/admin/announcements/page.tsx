"use client";

import { Send, Trash2, Megaphone, AlertCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function AdminAnnouncements() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const [loading, setLoading] = useState(false);

  // Simulation d'une liste d'annonces existantes
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: "Ouverture des Inscriptions", content: "Les inscriptions pour le SFI 8.0 sont officiellement ouvertes !", important: false, date: "Aujourd'hui" },
  ]);

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) {
      toast.error("Veuillez remplir tous les champs.");
      return;
    }
    setLoading(true);
    
    // Simulation de l'ajout à la base de données
    setTimeout(() => {
      const newAnnouncement = {
        id: Date.now(),
        title,
        content,
        important: isImportant,
        date: "À l'instant"
      };
      setAnnouncements([newAnnouncement, ...announcements]);
      setTitle("");
      setContent("");
      setIsImportant(false);
      setLoading(false);
      toast.success("Annonce publiée avec succès !");
    }, 1000);
  };

  const handleDelete = (id: number) => {
    setAnnouncements(announcements.filter(a => a.id !== id));
    toast.error("Annonce supprimée.");
  };

  return (
    <div className="p-8 max-w-5xl">
      <header className="mb-8">
        <h1 className="text-3xl font-black uppercase tracking-tighter">Communication SFI</h1>
        <p className="text-zinc-400 text-sm mt-1 tracking-widest uppercase">Gérer le fil d'actualité des participants</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Formulaire de Création */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-lg h-fit">
          <h2 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-6 border-b border-zinc-800 pb-2 flex items-center gap-2">
            <Megaphone size={16} /> Nouvelle Annonce
          </h2>
          
          <form onSubmit={handlePublish} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Titre de l'annonce</label>
              <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ex: Changement d'horaire..." 
                className="w-full bg-black border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-red-500 transition-colors" 
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Contenu du message</label>
              <textarea 
                rows={5}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Rédigez votre annonce ici..." 
                className="w-full bg-black border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-red-500 transition-colors resize-none" 
              />
            </div>

            <label className="flex items-center gap-3 cursor-pointer p-3 bg-red-950/20 border border-red-900/30 rounded">
              <input 
                type="checkbox" 
                checked={isImportant}
                onChange={(e) => setIsImportant(e.target.checked)}
                className="w-5 h-5 accent-red-600 bg-black border-zinc-700 rounded cursor-pointer" 
              />
              <span className="text-sm font-semibold text-red-500 flex items-center gap-2">
                <AlertCircle size={16} /> Marquer comme Urgent / Important
              </span>
            </label>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-black uppercase tracking-widest transition-all active:scale-95 disabled:opacity-50"
            >
              <Send size={18} /> {loading ? "Publication..." : "Publier l'annonce"}
            </button>
          </form>
        </div>

        {/* Historique des Annonces */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-zinc-400 font-bold uppercase tracking-widest text-sm mb-6 border-b border-zinc-800 pb-2">
            Annonces Publiées
          </h2>
          
          <div className="space-y-4">
            {announcements.length === 0 ? (
              <p className="text-zinc-500 text-sm italic text-center py-8">Aucune annonce publiée.</p>
            ) : (
              announcements.map((ann) => (
                <div key={ann.id} className={`p-4 rounded border ${ann.important ? 'bg-red-950/20 border-red-900/50' : 'bg-black border-zinc-800'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`font-bold text-sm uppercase tracking-widest ${ann.important ? 'text-red-500' : 'text-white'}`}>
                      {ann.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-zinc-500">{ann.date}</span>
                      <button onClick={() => handleDelete(ann.id)} className="text-zinc-600 hover:text-red-500 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">{ann.content}</p>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}