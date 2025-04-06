import type React from "react"
import Link from "next/link"
import { Flame, BookOpen, Info, HelpCircle, ArrowRight, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-black/95">
      <Navbar />
      <div className="container px-4 py-16 md:py-24">
        <div className="relative mx-auto max-w-5xl">
          {/* Animated ember particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
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

          <div className="relative z-10 text-left md:text-center mb-16">
            <div className="flex items-center justify-start md:justify-center mb-4">
              <Flame className="h-12 w-12 text-orange-500 mr-2" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
                E-LIYAB
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-orange-100/80 mt-4 max-w-3xl md:mx-auto">
              Isang digital na plataporma tungkol sa wika at kultura ng tradisyunal na proseso ng pag-uuling ng bao sa
              San Lorenzo Ruiz, Camarines Norte.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-900/20 to-amber-900/20 border border-orange-900/30 rounded-lg p-6 mb-16">
            <div className="flex items-start mb-4">
              <Info className="h-6 w-6 text-orange-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-orange-100/80 mb-4">
                  Isang digital na plataporma ang E-LIYAB nagtatampok ito ng wika at kultura sa tradisyunal na proseso
                  ng pag-uuling ng bao sa bayan ng San Lorenzo Ruiz, Camarines Norte. Nilalayon nitong itampok ang mga
                  natatanging termino, at paraan ng komunikasyon na ginagamit ng mga manggagawa sa industriya ng
                  pag-uuling ng bao, na nagsisilbing salamin ng kanilang kasanayan, pamumuhay, at pagkakakilanlan bilang
                  bahagi ng pamayanang ito.
                </p>
                <p className="text-orange-100/80">
                  Sa pamamagitan ng E-LIYAB, nabibigyang-pansin ang mahahalagang terminolohiyang ginagamit ng mga
                  manggagawa, gayundin ang mga kaugnay na paniniwala, kasanayan, at paraan ng pagpapasa ng kaalaman mula
                  sa isang henerasyon patungo sa susunod. Isa itong mahalagang instrumento tungo sa mas malalim na
                  pag-unawa at pagpapanatili ng tradisyon ng pag-uuling ng bao isang yaman ng kultura na patuloy na
                  nag-aalab sa puso ng mga mamamayan ng San Lorenzo Ruiz.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-16">
            <FeatureCard
              title="Diksyunaryo"
              description="Tuklasin ang mga natatanging termino at salita na ginagamit sa proseso ng pag-uuling ng bao."
              link="/dictionary"
              icon={<BookOpen className="h-8 w-8 text-orange-400" />}
            />
            <FeatureCard
              title="Pagsusulit"
              description="Subukan ang iyong kaalaman sa pamamagitan ng aming interactive na pagsusulit tungkol sa pag-uuling ng bao."
              link="/quiz"
              icon={<HelpCircle className="h-8 w-8 text-orange-400" />}
            />
            <FeatureCard
              title="Tungkol Sa"
              description="Alamin ang kasaysayan at kahalagahan ng pag-uuling ng bao sa San Lorenzo Ruiz, Camarines Norte."
              link="/about"
              icon={<Info className="h-8 w-8 text-orange-400" />}
            />
          </div>

          <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-orange-900/30 to-amber-900/30 border border-orange-700/30">
            <div className="flex items-start">
              <Award className="h-8 w-8 text-orange-500 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-orange-400 mb-4">Ang Kahalagahan ng Pag-uuling ng Bao</h2>
                <p className="text-orange-100/80 mb-4">
                  Sa San Lorenzo Ruiz, Camarines Norte, ang pag-uuling ng bao ay isang mahalagang hanapbuhay na
                  nagbibigay kabuhayan sa maraming pamilya. Ang industriya ng paggawa ng uling mula sa bao ay hindi
                  lamang isang pinagkukunan ng kita kundi isang simbolo ng sipag at kasanayan ng mga tao sa bayan.
                </p>
                <p className="text-orange-100/80">
                  Isinasagawa ito bilang isang tradisyon na ipinapasa mula sa isang henerasyon patungo sa susunod. Ang
                  industriyang ito ay may malaking papel sa pagpapanatili ng kultura at pagkakakilanlan ng mga
                  residente, kaya't patuloy itong sumusuporta sa ekonomiya ng bayan at nagsisilbing daan para mapanatili
                  ang kanilang kasaysayan at tradisyon.
                </p>
                <div className="mt-6 flex justify-end">
                  <Link href="/about">
                    <Button
                      variant="link"
                      className="text-orange-400 hover:text-orange-300 p-0 flex items-center gap-2"
                    >
                      Alamin ang higit pa <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

function FeatureCard({
  title,
  description,
  link,
  icon,
}: { title: string; description: string; link: string; icon: React.ReactNode }) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
      <div className="relative p-6 bg-black rounded-xl h-full flex flex-col">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-orange-400 mb-2">{title}</h3>
        <p className="text-orange-100/70 mb-4 flex-grow">{description}</p>
        <Link href={link} className="mt-auto">
          <Button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white border-0 flex items-center justify-center gap-2">
            Tuklasin <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

