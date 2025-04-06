import Link from "next/link"
import { Flame, Home, BookOpen, HelpCircle, Info } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-orange-900/20 bg-black/90 py-8">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-orange-500" />
            <span className="text-lg font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
              E-LIYAB
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/"
              className="text-orange-100/70 hover:text-orange-400 transition-colors flex items-center gap-1"
            >
              <Home className="h-4 w-4" /> Pangunahing Pahina
            </Link>
            <Link
              href="/dictionary"
              className="text-orange-100/70 hover:text-orange-400 transition-colors flex items-center gap-1"
            >
              <BookOpen className="h-4 w-4" /> Diksyunaryo
            </Link>
            <Link
              href="/quiz"
              className="text-orange-100/70 hover:text-orange-400 transition-colors flex items-center gap-1"
            >
              <HelpCircle className="h-4 w-4" /> Pagsusulit
            </Link>
            <Link
              href="/about"
              className="text-orange-100/70 hover:text-orange-400 transition-colors flex items-center gap-1"
            >
              <Info className="h-4 w-4" /> Tungkol Sa
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center text-orange-100/50 text-sm">
          <p>© {new Date().getFullYear()} E-LIYAB. Lahat ng karapatan ay nakalaan.</p>
          <p className="mt-2">
            Isang digital na plataporma tungkol sa wika at kultura ng tradisyunal na proseso ng pag-uuling ng bao sa San
            Lorenzo Ruiz, Camarines Norte.
          </p>
        </div>
      </div>
    </footer>
  )
}

