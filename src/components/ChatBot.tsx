import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Message = { role: "bot" | "user"; content: string };

const faqResponses: Record<string, string> = {
  "bonjour": "Bonjour ! 👋 Bienvenue sur RECRUEDG. Comment puis-je vous aider aujourd'hui ?",
  "offres": "Nous avons plusieurs offres d'emploi disponibles ! Visitez la page **Offres** pour voir les postes ouverts. Vous pouvez filtrer par département, localisation et type de contrat.",
  "postuler": "Pour postuler :\n1. Créez un compte sur RECRUEDG\n2. Complétez votre profil\n3. Uploadez votre CV (PDF, max 5Mo)\n4. Cliquez sur « Postuler » sur l'offre qui vous intéresse",
  "candidature spontanée": "Même sans offre correspondante, vous pouvez soumettre une candidature spontanée ! Rendez-vous sur la page **Candidature spontanée** et remplissez le formulaire.",
  "compte": "Pour créer un compte, cliquez sur **S'inscrire** en haut de page. Vous aurez besoin de votre email, téléphone et d'un mot de passe sécurisé.",
  "cv": "Nous acceptons les CV au format **PDF uniquement**, avec une taille maximale de **5 Mo**. Assurez-vous qu'il est à jour et lisible.",
  "suivi": "Connectez-vous à votre **Espace candidat** pour suivre l'état de vos candidatures en temps réel : en cours, entretien, acceptée ou rejetée.",
  "contact": "Vous pouvez nous contacter :\n📧 recrutement@edg.gn\n📞 +224 621 00 00 00\nLun-Ven : 8h-17h",
  "edg": "**Électricité de Guinée (EDG)** est l'entreprise nationale de production, transport et distribution d'électricité en Guinée. Nous sommes engagés dans la modernisation du réseau électrique national.",
  "directions": "EDG comprend plusieurs directions : Production, Transport, Distribution, R&D, Finance, Ressources Humaines, Informatique et Maintenance. Chacune joue un rôle clé dans notre mission.",
  "délai": "Le processus de recrutement prend généralement **2 à 4 semaines** selon le poste. Vous serez notifié par email à chaque étape.",
  "entretien": "Si votre candidature est retenue, un entretien sera planifié. Vous recevrez une notification avec la date, l'heure et le lieu de l'entretien.",
};

function findResponse(input: string): string {
  const lower = input.toLowerCase().trim();
  for (const [key, value] of Object.entries(faqResponses)) {
    if (lower.includes(key)) return value;
  }
  if (lower.includes("merci")) return "Avec plaisir ! N'hésitez pas si vous avez d'autres questions. 😊";
  if (lower.includes("aide") || lower.includes("help")) return "Je peux vous aider avec :\n• Les **offres d'emploi**\n• Comment **postuler**\n• La **candidature spontanée**\n• Le **suivi** de candidature\n• Créer un **compte**\n• Les **directions** d'EDG\n• Nous **contacter**\n\nQue souhaitez-vous savoir ?";
  return "Je ne suis pas sûr de comprendre votre question. Essayez de me demander des informations sur les **offres**, comment **postuler**, la **candidature spontanée**, ou tapez **aide** pour voir ce que je peux faire ! 😊";
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Bonjour ! 👋 Je suis l'assistant RECRUEDG. Comment puis-je vous aider ?" }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "bot", content: findResponse(userMsg) }]);
      setTyping(false);
    }, 800 + Math.random() * 600);
  };

  return (
    <>
      {/* FAB */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
          >
            <MessageCircle className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-6rem)] rounded-2xl overflow-hidden shadow-2xl border border-border flex flex-col bg-background"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                <div>
                  <p className="font-bold text-sm">Assistant RECRUEDG</p>
                  <p className="text-xs opacity-80">En ligne</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="p-1 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {m.role === "bot" && <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1"><Bot className="h-4 w-4 text-primary" /></div>}
                  <div className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-muted text-foreground rounded-bl-md"
                  }`}>
                    {m.content.split(/\*\*(.*?)\*\*/g).map((part, j) =>
                      j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                    )}
                  </div>
                  {m.role === "user" && <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1"><User className="h-4 w-4 text-primary" /></div>}
                </motion.div>
              ))}
              {typing && (
                <div className="flex gap-2 items-center">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center"><Bot className="h-4 w-4 text-primary" /></div>
                  <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3 flex gap-1">
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
            </div>

            {/* Quick actions */}
            <div className="px-4 pb-2 flex gap-2 overflow-x-auto shrink-0">
              {["Offres", "Postuler", "Contact", "Aide"].map(q => (
                <button key={q} onClick={() => { setInput(q); }}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium whitespace-nowrap hover:bg-primary/20 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border flex gap-2 shrink-0">
              <Input
                value={input} onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && send()}
                placeholder="Posez votre question..."
                className="flex-1 rounded-xl border-0 bg-muted/50"
              />
              <Button onClick={send} size="sm" variant="default" className="rounded-xl px-3">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
