"use client"

import type React from "react"

import { useState, useEffect } from "react"
import {
  Volume2,
  Search,
  BookOpen,
  Filter,
  AArrowUpIcon as SortAscending,
  ChevronDown,
  ChevronUp,
  Flame,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Sample dictionary data - expanded with more terms for A-Z
const dictionaryTerms = [
  {
    id: "apoy",
    term: "Apoy",
    definition: "Ang ningas o sunog na ginagamit sa pagpapasimula ng proseso ng pag-uuling.",
    example: "Sinisindihan ang apoy sa pinakaloob na bahagi ng lutuan.",
    audioUrl: "/audio/apoy.mp3",
    letter: "A",
  },
  {
    id: "bao",
    term: "Bao",
    definition: "Ang matigas na balat ng niyog na ginagamit sa paggawa ng uling.",
    example: "Ang bao ay kailangang tuyo bago gamitin sa paggawa ng uling.",
    audioUrl: "/audio/bao.mp3",
    letter: "B",
  },
  {
    id: "calero",
    term: "Calero",
    definition: "Tawag sa manggagawa ng uling mula sa bao.",
    example: "Ang mga calero ay may masusing kaalaman sa proseso ng pag-uuling.",
    audioUrl: "/audio/calero.mp3",
    letter: "C",
  },
  {
    id: "dahon",
    term: "Dahon ng Saging",
    definition: "Ginagamit sa pagtakip ng lutuan kasama ng katawan ng saging.",
    example: "Ang dahon ng saging ay tumutulong sa pagkontrol ng hangin sa lutuan.",
    audioUrl: "/audio/dahon.mp3",
    letter: "D",
  },
  {
    id: "embudo",
    term: "Embudo",
    definition: "Hugis ng pagkakasalansan ng mga bao sa lutuan.",
    example: "Ang embudo na pagkakasalansan ay nakakatulong sa mas mahusay na pagkasunog.",
    audioUrl: "/audio/embudo.mp3",
    letter: "E",
  },
  {
    id: "fuego",
    term: "Fuego",
    definition: "Ang lakas ng apoy na ginagamit sa proseso ng pag-uuling.",
    example: "Kailangang kontrolin ang fuego para sa tamang pagkasunog.",
    audioUrl: "/audio/fuego.mp3",
    letter: "F",
  },
  {
    id: "gwantes",
    term: "Gwantes",
    definition: "Proteksiyon sa kamay na ginagamit ng mga manggagawa upang maiwasan ang pagkasunog.",
    example: "Nagsusuot ng gwantes ang mga manggagawa para protektahan ang kanilang mga kamay.",
    audioUrl: "/audio/gwantes.mp3",
    letter: "G",
  },
  {
    id: "hukay",
    term: "Hukay",
    definition: "Ang butas sa lupa na ginagamit bilang lutuan ng uling.",
    example: "Maingat na hinuhukay ang lupa para sa lutuan ng uling.",
    audioUrl: "/audio/hukay.mp3",
    letter: "H",
  },
  {
    id: "init",
    term: "Init",
    definition: "Ang temperatura na kailangan para sa tamang pagkasunog ng bao.",
    example: "Kailangang kontrolin ang init para sa mataas na kalidad ng uling.",
    audioUrl: "/audio/init.mp3",
    letter: "I",
  },
  {
    id: "jalousie",
    term: "Jalousie",
    definition: "Uri ng bentilasyon na minsan ginagamit sa mga modernong lutuan ng uling.",
    example: "Ang jalousie ay nakakatulong sa pagkontrol ng hangin sa lutuan.",
    audioUrl: "/audio/jalousie.mp3",
    letter: "J",
  },
  {
    id: "katawan",
    term: "Katawan ng Saging",
    definition: "Ang puno ng saging na ginagamit sa pagtakip ng lutuan upang kontrolin ang suplay ng hangin.",
    example: "Tinatakpan ng katawan ng saging ang lutuan bago takpan ng lupa.",
    audioUrl: "/audio/katawan.mp3",
    letter: "K",
  },
  {
    id: "lutuan",
    term: "Lutuan",
    definition: "Ang hukay sa lupa kung saan isinasalansan ang mga bao para sa proseso ng pag-uuling.",
    example: "Maingat na inihanda ang lutuan para sa susunod na batch ng uling.",
    audioUrl: "/audio/lutuan.mp3",
    letter: "L",
  },
  {
    id: "mask",
    term: "Mask",
    definition:
      "Takip sa ilong at bibig na ginagamit ng mga manggagawa upang maiwasan ang paglanghap ng alikabok mula sa uling.",
    example: "Mahalagang magsuot ng mask para hindi malanghap ang alikabok ng uling.",
    audioUrl: "/audio/mask.mp3",
    letter: "M",
  },
  {
    id: "niyog",
    term: "Niyog",
    definition: "Ang prutas kung saan nagmumula ang bao na ginagamit sa pag-uuling.",
    example: "Ang bao ng niyog ay isang mahalagang sangkap sa industriya ng pag-uuling.",
    audioUrl: "/audio/niyog.mp3",
    letter: "N",
  },
  {
    id: "organiko",
    term: "Organiko",
    definition: "Katangian ng uling na gawa sa bao na walang kemikal na additives.",
    example: "Ang organikong uling ay mas hinahanap sa merkado.",
    audioUrl: "/audio/organiko.mp3",
    letter: "O",
  },
  {
    id: "pasma",
    term: "Pasma",
    definition:
      "Isang kondisyon na pinaniniwalaan ng mga manggagawa na dulot ng hindi sinasadyang pagkabasa ng kanilang katawan matapos mabilad sa apoy.",
    example: "Nag-iingat ang mga manggagawa para maiwasan ang pasma.",
    audioUrl: "/audio/pasma.mp3",
    letter: "P",
  },
  {
    id: "quemado",
    term: "Quemado",
    definition: "Tawag sa uling na nasunog nang sobra at hindi na magagamit.",
    example: "Iniiwasan ng mga manggagawa ang pagkakaroon ng quemado.",
    audioUrl: "/audio/quemado.mp3",
    letter: "Q",
  },
  {
    id: "resina",
    term: "Resina",
    definition: "Ang natural na langis na nasa bao na nakakatulong sa pagkasunog nito.",
    example: "Ang resina sa bao ay nakakatulong sa mas mahusay na pagkasunog.",
    audioUrl: "/audio/resina.mp3",
    letter: "R",
  },
  {
    id: "sako",
    term: "Sako",
    definition: "Lalagyan kung saan inilalagay ang mga lutong uling para sa pagbebenta o paggamit.",
    example: "Inilalagay sa sako ang mga lutong uling para madaling mailipat.",
    audioUrl: "/audio/sako.mp3",
    letter: "S",
  },
  {
    id: "temperatura",
    term: "Temperatura",
    definition: "Ang antas ng init na kailangan para sa tamang pagkasunog ng bao.",
    example: "Kailangang kontrolin ang temperatura para sa mataas na kalidad ng uling.",
    audioUrl: "/audio/temperatura.mp3",
    letter: "T",
  },
  {
    id: "uling",
    term: "Uling",
    definition: "Ang produkto ng proseso ng pag-uuling ng bao, ginagamit bilang panggatong.",
    example: "Ang uling mula sa bao ay kilala sa tagal ng init na ibinibigay nito.",
    audioUrl: "/audio/uling.mp3",
    letter: "U",
  },
  {
    id: "ventilasyon",
    term: "Ventilasyon",
    definition: "Ang proseso ng pagkontrol ng hangin sa lutuan para sa tamang pagkasunog ng bao.",
    example: "Mahalaga ang tamang ventilasyon para sa kalidad ng uling.",
    audioUrl: "/audio/ventilasyon.mp3",
    letter: "V",
  },
  {
    id: "walis",
    term: "Walis",
    definition: "Ginagamit sa paglilinis ng lugar pagkatapos ng proseso ng pag-uuling.",
    example: "Ginagamit ang walis para linisin ang lugar pagkatapos ng pag-uuling.",
    audioUrl: "/audio/walis.mp3",
    letter: "W",
  },
  {
    id: "xerofito",
    term: "Xerofito",
    definition:
      "Uri ng halaman na maaaring tumubo sa lugar na may maraming uling dahil sa kakayahan nitong mabuhay sa tuyong lugar.",
    example: "Ang mga xerofito ay karaniwang nakikita sa mga lugar na ginagamitan ng uling.",
    audioUrl: "/audio/xerofito.mp3",
    letter: "X",
  },
  {
    id: "yero",
    term: "Yero",
    definition: "Minsan ginagamit na panakip sa ibabaw ng lutuan para proteksyon sa ulan.",
    example: "Tinatakpan ng yero ang lutuan kapag umuulan.",
    audioUrl: "/audio/yero.mp3",
    letter: "Y",
  },
  {
    id: "zigzag",
    term: "Zigzag",
    definition: "Pattern ng pagkakasalansan ng mga bao sa lutuan para sa mas mahusay na pagkasunog.",
    example: "Ang zigzag na pagkakasalansan ay nakakatulong sa mas mahusay na pagkasunog.",
    audioUrl: "/audio/zigzag.mp3",
    letter: "Z",
  },
  {
    id: "poso-negro",
    term: "Poso Negro",
    definition:
      "Isang uri ng tangke o hukay na ginagamit bilang septic tank kung saan pinaniniwalaan na mainam lagyan ng uling.",
    example: "Nilalagyan ng uling ang poso negro bago isemento upang maiwasan ang pagkalap ng mikrobyo.",
    audioUrl: "/audio/poso-negro.mp3",
    letter: "P",
  },
  {
    id: "kasuotan",
    term: "Kasuotan",
    definition: "Ang kompletong set ng damit at proteksiyon na ginagamit ng mga manggagawa ng uling.",
    example: "Kinakailangan ng kompletong kasuotan ang mga manggagawa para sa kanilang kaligtasan.",
    audioUrl: "/audio/kasuotan.mp3",
    letter: "K",
  },
]

// Group terms by letter for A-Z display
const groupTermsByLetter = () => {
  const grouped: Record<string, typeof dictionaryTerms> = {}

  // Create empty arrays for all letters A-Z
  for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i)
    grouped[letter] = []
  }

  // Add terms to their respective letter groups
  dictionaryTerms.forEach((term) => {
    const letter = term.letter || term.term.charAt(0).toUpperCase()
    if (grouped[letter]) {
      grouped[letter].push(term)
    }
  })

  return grouped
}

export default function DictionaryContent() {
  const [playingAudio, setPlayingAudio] = useState<string | null>(null)
  const [showAllWords, setShowAllWords] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const groupedTerms = groupTermsByLetter()
  const [fireEmbers, setFireEmbers] = useState<Array<{ id: number; left: string; delay: number }>>([])

  useEffect(() => {
    // Create random fire embers
    const embers = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
    }))
    setFireEmbers(embers)
  }, [])

  const playAudio = (termId: string) => {
    // In a real implementation, this would play the actual audio file
    console.log(`Playing audio for: ${termId}`)
    setPlayingAudio(termId)

    // Simulate audio playing for 2 seconds
    setTimeout(() => {
      setPlayingAudio(null)
    }, 2000)
  }

  const filteredTerms = searchTerm
    ? dictionaryTerms.filter(
        (term) =>
          term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
          term.definition.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : dictionaryTerms

  return (
    <div className="space-y-6 relative">
      {/* Fire embers effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {fireEmbers.map((ember) => (
          <div
            key={ember.id}
            className="absolute bottom-0 w-2 h-2 rounded-full bg-orange-500/80 animate-float animate-flicker"
            style={
              {
                left: ember.left,
                "--delay": ember.delay,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-orange-500" />
        <Input
          type="search"
          placeholder="Maghanap ng salita..."
          className="pl-10 bg-black/60 border-orange-900/50 focus-visible:ring-orange-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-gradient-to-br from-orange-900/20 to-amber-900/20 border border-orange-900/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="h-5 w-5 text-orange-400" />
            <h3 className="text-lg font-medium text-orange-400">Mga Kagamitan</h3>
          </div>
          <p className="text-orange-100/70">
            Mga salitang may kaugnayan sa mga kagamitan at kasangkapan sa pag-uuling ng bao.
          </p>
        </div>
        <div className="bg-gradient-to-br from-orange-900/20 to-amber-900/20 border border-orange-900/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Filter className="h-5 w-5 text-orange-400" />
            <h3 className="text-lg font-medium text-orange-400">Mga Proseso</h3>
          </div>
          <p className="text-orange-100/70">
            Mga salitang may kaugnayan sa mga hakbang at proseso ng pag-uuling ng bao.
          </p>
        </div>
      </div>

      {!showAllWords ? (
        <Accordion type="single" collapsible className="w-full">
          {filteredTerms.map((term) => (
            <AccordionItem key={term.id} value={term.id} className="border-orange-900/30 overflow-hidden">
              <AccordionTrigger className="text-orange-100 hover:text-orange-400 py-4 px-4 bg-gradient-to-r from-orange-900/10 to-transparent hover:from-orange-900/20 hover:to-transparent transition-all">
                <div className="flex items-center">
                  {term.term.toLowerCase().includes("apoy") || term.term.toLowerCase().includes("fuego") ? (
                    <Flame className="h-4 w-4 text-orange-500 mr-2 animate-flicker" />
                  ) : null}
                  <span>{term.term}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-black/40 px-4 pt-2 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-orange-100/90 font-medium">{term.definition}</p>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-orange-400 hover:text-orange-300 hover:bg-orange-900/20 -mt-1"
                    onClick={() => playAudio(term.id)}
                  >
                    <Volume2 className={`h-5 w-5 ${playingAudio === term.id ? "animate-pulse" : ""}`} />
                    <span className="sr-only">Pakinggan ang pagbigkas</span>
                  </Button>
                </div>
                <p className="text-orange-100/70 text-sm italic">"{term.example}"</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div className="space-y-8">
          {Object.entries(groupedTerms).map(
            ([letter, terms]) =>
              terms.length > 0 && (
                <div key={letter} className="border-t border-orange-900/30 pt-4">
                  <div className="flex items-center gap-2 mb-4">
                    <SortAscending className="h-5 w-5 text-orange-400" />
                    <h3 className="text-2xl font-bold text-orange-400">{letter}</h3>
                  </div>
                  <div className="space-y-4">
                    {terms.map((term) => (
                      <div key={term.id} className="bg-black/40 border border-orange-900/30 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-xl font-medium text-orange-300 flex items-center">
                            {term.term.toLowerCase().includes("apoy") || term.term.toLowerCase().includes("fuego") ? (
                              <Flame className="h-4 w-4 text-orange-500 mr-2 animate-flicker" />
                            ) : null}
                            {term.term}
                          </h4>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-orange-400 hover:text-orange-300 hover:bg-orange-900/20"
                            onClick={() => playAudio(term.id)}
                          >
                            <Volume2 className={`h-5 w-5 ${playingAudio === term.id ? "animate-pulse" : ""}`} />
                            <span className="sr-only">Pakinggan ang pagbigkas</span>
                          </Button>
                        </div>
                        <p className="text-orange-100/90 mb-2">{term.definition}</p>
                        <p className="text-orange-100/70 text-sm italic">"{term.example}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              ),
          )}
        </div>
      )}

      <div className="flex justify-center mt-8">
        <Button
          onClick={() => setShowAllWords(!showAllWords)}
          className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white border-0 flex items-center gap-2"
        >
          {showAllWords ? (
            <>
              Ipakita ang Simpleng View <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              Ipakita ang Lahat ng Salita (A-Z) <ChevronDown className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  )
}

