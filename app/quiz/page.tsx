import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import QuizComponent from "@/components/quiz-component"
import { HelpCircle } from "lucide-react"

export default function QuizPage() {
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
            <HelpCircle className="h-8 w-8 text-orange-500" />
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
              Pagsusulit sa Pag-uuling ng Bao
            </h1>
          </div>

          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-amber-600/20 rounded-lg blur-lg"></div>
            <div className="relative bg-black/60 border border-orange-900/30 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <HelpCircle className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                <p className="text-orange-100/80">
                  Subukan ang iyong kaalaman tungkol sa pag-uuling ng bao sa pamamagitan ng pagsusulit na ito. Piliin
                  ang tamang larawan na tumutugma sa kahulugan ng bawat salita.
                </p>
              </div>
            </div>
          </div>

          <QuizComponent />
        </div>
      </div>
      <Footer />
    </main>
  )
}

