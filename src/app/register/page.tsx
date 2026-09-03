"use client";

import { useState } from "react";
import { toast } from "sonner";
import Link from "next/link";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      toast.error("Vous devez accepter le règlement pour continuer.");
      return;
    }
    
    setLoading(true);
    toast.info("Création de votre profil en cours...");
    
    // Database connection will go here
    
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 flex items-center justify-center p-6 py-20">
      <div className="w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-xl p-8 shadow-[0_0_40px_rgba(220,38,38,0.05)]">
        
        <div className="mb-8 text-center">
          <Link href="/" className="text-red-500 hover:text-red-400 text-sm font-bold tracking-widest uppercase mb-4 inline-block transition-colors">
            ← Retour à l'accueil
          </Link>
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-2 mt-4">
            Rejoindre <span className="text-red-500">l'Initiative</span>
          </h2>
          <p className="text-zinc-400 text-sm uppercase tracking-widest">
            Séminaire de Formation Interact 8.0
          </p>
        </div>

        <form onSubmit={handleRegister} className="flex flex-col gap-6">
          
          <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800/50">
            <h3 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-4">Identifiants de connexion</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="email" placeholder="Adresse Mail *" required className="w-full bg-black border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-red-500 transition-colors" />
              <input type="password" placeholder="Mot de passe *" required className="w-full bg-black border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-red-500 transition-colors" />
            </div>
          </div>

          <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800/50">
            <h3 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-4">Informations Personnelles</h3>
            <div className="flex flex-col gap-5">
              <input type="text" placeholder="Nom et Prénom *" required className="w-full bg-black border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-red-500 transition-colors" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input type="text" placeholder="Club Interact *" required className="w-full bg-black border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-red-500 transition-colors" />
                <input type="text" placeholder="Poste (Ex: Président, Membre) *" required className="w-full bg-black border border-zinc-800 rounded p-3 text-white focus:outline-none focus:border-red-500 transition-colors" />
              </div>
            </div>
          </div>

          {/* Terms and Conditions Box */}
          <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800/50">
            <h3 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-4">Règlement et Engagement</h3>
            
            <div className="h-48 overflow-y-auto bg-black border border-zinc-800 rounded p-4 text-sm text-zinc-400 mb-4 space-y-4 custom-scrollbar">
              <p><strong className="text-white">Article 1 : Participation et Assiduité</strong><br/>Le participant s’engage à assister et à prendre part activement à l’ensemble des ateliers, conférences et activités programmés lors du Séminaire de Formation (SFI) les 20 et 21 Décembre 2026. Le respect des horaires, la ponctualité aux rassemblements et la présence à toutes les séances sont obligatoires.</p>
              
              <p><strong className="text-white">Article 2 : Respect des Lieux, des Équipements et du Matériel</strong><br/>Les participants ainsi que les encadrants s'engagent à préserver l’état général des infrastructures d’accueil. Tout acte de dégradation volontaire, vandalisme ou non-respect des installations engage la responsabilité financière directe du participant et de ses représentants légaux pour remise en état immédiate.</p>
              
              <p><strong className="text-white">Article 3 : Comportement, Sécurité et Valeurs Rotariennes</strong><br/>Les participants sont tenus de maintenir une conduite exemplaire, respectueuse d'autrui et conforme aux valeurs de camaraderie, d'éthique et de civisme de l'Interact. Sont formellement prohibés : l'usage ou la détention de substances illicites, de tabac/vape, d'alcool, ainsi que tout acte de violence verbale ou physique. Tout manquement grave entraînera l'exclusion immédiate du séminaire, sans remboursement.</p>
              
              <h4 className="text-white font-bold mt-6">III. RÈGLEMENT ET CONDITIONS SPÉCIFIQUES DU TRANSPORT EN BUS</h4>
              
              <p><strong className="text-white">Article 4 : Ponctualité aux Points de Départ et de Retour</strong><br/>Le transport aller-retour est assuré par un service d'autocar affrété par l'organisation. Le participant doit impérativement respecter les heures et lieux de rendez-vous fixés par le comité d'organisation. Aucun retard ne sera toléré afin de ne pas compromettre le déroulement du programme.</p>
              
              <p><strong className="text-white">Article 5 : Sécurité et Discipline à Bord</strong><br/>Il est formellement interdit de rester debout, de circuler dans les allées sans nécessité impérieuse ou de distraire le chauffeur. Chaque participant doit veiller à la propreté de sa place, remporter ses déchets et respecter le matériel du transporteur.</p>
              
              <h4 className="text-white font-bold mt-6">IV. PROTOCOLE MÉDICAL, URGENCE ET DÉCHARGE</h4>
              
              <p><strong className="text-white">Article 6 : Prise en Charge Médicale et Hospitalisation d'Urgence</strong><br/>Le représentant légal autorise expressément l'équipe encadrante et les responsables de l'Interact Club Tunis Golfe Carthagène à prendre toute mesure d'urgence requise pour préserver la santé du participant (premiers secours, appel des services d'urgence, transport médicalisé ou privé vers l'établissement hospitalier ou la clinique la plus proche sur le territoire tunisien, ainsi que toute intervention médicale ou chirurgicale jugée urgente par le corps médical).</p>
            </div>

            <label className="flex items-start gap-3 cursor-pointer group">
              <input 
                type="checkbox" 
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 w-5 h-5 accent-red-600 bg-black border-zinc-700 rounded cursor-pointer"
              />
              <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                J'ai lu et j'accepte formellement l'intégralité du règlement et des conditions du séminaire.
              </span>
            </label>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="mt-2 w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest p-4 rounded transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100"
          >
            {loading ? "Création en cours..." : "Soumettre ma candidature"}
          </button>
          
          <p className="text-center text-sm text-zinc-500 mt-4">
            Vous avez déjà un compte ? <Link href="/login" className="text-red-500 hover:text-red-400 font-bold transition-colors">Se connecter</Link>
          </p>
        </form>
      </div>
    </div>
  );
}