import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import DictionaryContent from "@/components/dictionary-content"
import { BookOpen } from "lucide-react"

export default function DictionaryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-black/95">
      <Navbar />
      <div className="container px-4 py-12">
        <div className="mx-auto max-w-4xl">
          {/* Animated ember particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-orange-500/80 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 7}s`,
                }}
              />
            ))}
          </div>

          <div className="flex items-center justify-start md:justify-center mb-8 gap-3 relative z-10">
            <BookOpen className="h-8 w-8 text-orange-500" />
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
              Diksyunaryo ng Pag-uuling ng Bao
            </h1>
          </div>

          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-amber-600/20 rounded-lg blur-lg"></div>
            <div className="relative bg-black/60 border border-orange-900/30 rounded-lg p-6">
              <p className="text-orange-100/80 mb-2">
                Narito ang mga natatanging termino at salita na ginagamit sa proseso ng pag-uuling ng bao sa San Lorenzo
                Ruiz, Camarines Norte. Ang mga salitang ito ay nagpapakita ng mayamang kultura at tradisyon ng mga
                manggagawa ng uling.
              </p>
            </div>
          </div>

          <DictionaryContent />
        </div>
      </div>
      <Footer />
    </main>
  )
}

