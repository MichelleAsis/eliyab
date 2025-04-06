"use client"

import { useState } from "react"
import Image from "next/image"
import { Volume2, CheckCircle, XCircle, ArrowRight, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Expanded quiz questions to cover A-Z (26 questions)
const quizQuestions = [
  {
    id: 1,
    term: "Apoy",
    definition: "Ang ningas o sunog na ginagamit sa pagpapasimula ng proseso ng pag-uuling.",
    audioUrl: "/audio/apoy.mp3",
    options: [
      { id: "A", image: "/placeholder.svg?height=150&width=150", alt: "Usok", isCorrect: false },
      { id: "B", image: "/placeholder.svg?height=150&width=150", alt: "Uling", isCorrect: false },
      { id: "C", image: "/placeholder.svg?height=150&width=150", alt: "Apoy - Ningas o sunog", isCorrect: true },
      { id: "D", image: "/placeholder.svg?height=150&width=150", alt: "Abo", isCorrect: false },
    ],
    letter: "A",
  },
  {
    id: 2,
    term: "Bao",
    definition: "Ang matigas na balat ng niyog na ginagamit sa paggawa ng uling.",
    audioUrl: "/audio/bao.mp3",
    options: [
      {
        id: "A",
        image: "/placeholder.svg?height=150&width=150",
        alt: "Bao - Matigas na balat ng niyog",
        isCorrect: true,
      },
      { id: "B", image: "/placeholder.svg?height=150&width=150", alt: "Niyog - Buong prutas", isCorrect: false },
      { id: "C", image: "/placeholder.svg?height=150&width=150", alt: "Puno ng niyog", isCorrect: false },
      { id: "D", image: "/placeholder.svg?height=150&width=150", alt: "Dahon ng niyog", isCorrect: false },
    ],
    letter: "B",
  },
  {
    id: 3,
    term: "Calero",
    definition: "Tawag sa manggagawa ng uling mula sa bao.",
    audioUrl: "/audio/calero.mp3",
    options: [
      { id: "A", image: "/placeholder.svg?height=150&width=150", alt: "Magsasaka", isCorrect: false },
      { id: "B", image: "/placeholder.svg?height=150&width=150", alt: "Calero - Manggagawa ng uling", isCorrect: true },
      { id: "C", image: "/placeholder.svg?height=150&width=150", alt: "Mangingisda", isCorrect: false },
      { id: "D", image: "/placeholder.svg?height=150&width=150", alt: "Karpintero", isCorrect: false },
    ],
    letter: "C",
  },
  {
    id: 4,
    term: "Dahon ng Saging",
    definition: "Ginagamit sa pagtakip ng lutuan kasama ng katawan ng saging.",
    audioUrl: "/audio/dahon.mp3",
    options: [
      { id: "A", image: "/placeholder.svg?height=150&width=150", alt: "Dahon ng Saging", isCorrect: true },
      { id: "B", image: "/placeholder.svg?height=150&width=150", alt: "Dahon ng Niyog", isCorrect: false },
      { id: "C", image: "/placeholder.svg?height=150&width=150", alt: "Dahon ng Mangga", isCorrect: false },
      { id: "D", image: "/placeholder.svg?height=150&width=150", alt: "Dahon ng Bayabas", isCorrect: false },
    ],
    letter: "D",
  },
  {
    id: 5,
    term: "Embudo",
    definition: "Hugis ng pagkakasalansan ng mga bao sa lutuan.",
    audioUrl: "/audio/embudo.mp3",
    options: [
      { id: "A", image: "/placeholder.svg?height=150&width=150", alt: "Parisukat", isCorrect: false },
      { id: "B", image: "/placeholder.svg?height=150&width=150", alt: "Bilog", isCorrect: false },
      { id: "C", image: "/placeholder.svg?height=150&width=150", alt: "Embudo - Hugis imbudo", isCorrect: true },
      { id: "D", image: "/placeholder.svg?height=150&width=150", alt: "Tatsulok", isCorrect: false },
    ],
    letter: "E",
  },
  {
    id: 6,
    term: "Fuego",
    definition: "Ang lakas ng apoy na ginagamit sa proseso ng pag-uuling.",
    audioUrl: "/audio/fuego.mp3",
    options: [
      { id: "A", image: "/placeholder.svg?height=150&width=150", alt: "Fuego - Lakas ng apoy", isCorrect: true },
      { id: "B", image: "/placeholder.svg?height=150&width=150", alt: "Hangin", isCorrect: false },
      { id: "C", image: "/placeholder.svg?height=150&width=150", alt: "Tubig", isCorrect: false },
      { id: "D", image: "/placeholder.svg?height=150&width=150", alt: "Lupa", isCorrect: false },
    ],
    letter: "F",
  },
  {
    id: 7,
    term: "Gwantes",
    definition: "Proteksiyon sa kamay na ginagamit ng mga manggagawa upang maiwasan ang pagkasunog.",
    audioUrl: "/audio/gwantes.mp3",
    options: [
      { id: "A", image: "/placeholder.svg?height=150&width=150", alt: "Sapatos", isCorrect: false },
      { id: "B", image: "/placeholder.svg?height=150&width=150", alt: "Sombrero", isCorrect: false },
      {
        id: "C",
        image: "/placeholder.svg?height=150&width=150",
        alt: "Gwantes - Proteksiyon sa kamay",
        isCorrect: true,
      },
      { id: "D", image: "/placeholder.svg?height=150&width=150", alt: "Salamin", isCorrect: false },
    ],
    letter: "G",
  },
  {
    id: 8,
    term: "Hukay",
    definition: "Ang butas sa lupa na ginagamit bilang lutuan ng uling.",
    audioUrl: "/audio/hukay.mp3",
    options: [
      { id: "A", image: "/placeholder.svg?height=150&width=150", alt: "Hukay - Butas sa lupa", isCorrect: true },
      { id: "B", image: "/placeholder.svg?height=150&width=150", alt: "Bundok", isCorrect: false },
      { id: "C", image: "/placeholder.svg?height=150&width=150", alt: "Ilog", isCorrect: false },
      { id: "D", image: "/placeholder.svg?height=150&width=150", alt: "Dagat", isCorrect: false },
    ],
    letter: "H",
  },
  {
    id: 9,
    term: "Init",
    definition: "Ang temperatura na kailangan para sa tamang pagkasunog ng bao.",
    audioUrl: "/audio/init.mp3",
    options: [
      { id: "A", image: "/placeholder.svg?height=150&width=150", alt: "Lamig", isCorrect: false },
      { id: "B", image: "/placeholder.svg?height=150&width=150", alt: "Init - Temperatura", isCorrect: true },
      { id: "C", image: "/placeholder.svg?height=150&width=150", alt: "Hangin", isCorrect: false },
      { id: "D", image: "/placeholder.svg?height=150&width=150", alt: "Tubig", isCorrect: false },
    ],
    letter: "I",
  },
  {
    id: 10,
    term: "Jalousie",
    definition: "Uri ng bentilasyon na minsan ginagamit sa mga modernong lutuan ng uling.",
    audioUrl: "/audio/jalousie.mp3",
    options: [
      { id: "A", image: "/placeholder.svg?height=150&width=150", alt: "Pinto", isCorrect: false },
      { id: "B", image: "/placeholder.svg?height=150&width=150", alt: "Bubong", isCorrect: false },
      { id: "C", image: "/placeholder.svg?height=150&width=150", alt: "Jalousie - Bentilasyon", isCorrect: true },
      { id: "D", image: "/placeholder.svg?height=150&width=150", alt: "Dingding", isCorrect: false },
    ],
    letter: "J",
  },
  {
    id: 11,
    term: "Katawan ng Saging",
    definition: "Ang puno ng saging na ginagamit sa pagtakip ng lutuan upang kontrolin ang suplay ng hangin.",
    audioUrl: "/audio/katawan.mp3",
    options: [
      { id: "A", image: "/placeholder.svg?height=150&width=150", alt: "Dahon ng Saging", isCorrect: false },
      { id: "B", image: "/placeholder.svg?height=150&width=150", alt: "Bunga ng Saging", isCorrect: false },
      { id: "C", image: "/placeholder.svg?height=150&width=150", alt: "Ugat ng Saging", isCorrect: false },
      {
        id: "D",
        image: "/placeholder.svg?height=150&width=150",
        alt: "Katawan ng Saging - Puno ng saging",
        isCorrect: true,
      },
    ],
    letter: "K",
  },
  {
    id: 12,
    term: "Lutuan",
    definition: "Ang hukay sa lupa kung saan isinasalansan ang mga bao para sa proseso ng pag-uuling.",
    audioUrl: "/audio/lutuan.mp3",
    options: [
      { id: "A", image: "/placeholder.svg?height=150&width=150", alt: "Kalan", isCorrect: false },
      {
        id: "B",
        image: "/placeholder.svg?height=150&width=150",
        alt: "Lutuan - Hukay sa lupa para sa pag-uuling",
        isCorrect: true,
      },
      { id: "C", image: "/placeholder.svg?height=150&width=150", alt: "Kawali", isCorrect: false },
      { id: "D", image: "/placeholder.svg?height=150&width=150", alt: "Palayok", isCorrect: false },
    ],
    letter: "L",
  },
  {
    id: 13,
    term: "Mask",
    definition:
      "Takip sa ilong at bibig na ginagamit ng mga manggagawa upang maiwasan ang paglanghap ng alikabok mula sa uling.",
    audioUrl: "/audio/mask.mp3",
    options: [
      {
        id: "A",
        image: "/placeholder.svg?height=150&width=150",
        alt: "Mask - Takip sa ilong at bibig",
        isCorrect: true,
      },
      { id: "B", image: "/placeholder.svg?height=150&width=150", alt: "Salamin", isCorrect: false },
      { id: "C", image: "/placeholder.svg?height=150&width=150", alt: "Sombrero", isCorrect: false },
      { id: "D", image: "/placeholder.svg?height=150&width=150", alt: "Gwantes", isCorrect: false },
    ],
    letter: "M",
  },
  {
    id: 14,
    term: "Niyog",
    definition: "Ang prutas kung saan nagmumula ang bao na ginagamit sa pag-uuling.",
    audioUrl: "/audio/niyog.mp3",
    options: [
      { id: "A", image: "/placeholder.svg?height=150&width=150", alt: "Mangga", isCorrect: false },
      { id: "B", image: "/placeholder.svg?height=150&width=150", alt: "Saging", isCorrect: false },
      { id: "C", image: "/placeholder.svg?height=150&width=150", alt: "Niyog - Prutas", isCorrect: true },
      { id: "D", image: "/placeholder.svg?height=150&width=150", alt: "Bayabas", isCorrect: false },
    ],
    letter: "N",
  },
  {
    id: 15,
    term: "Organiko",
    definition: "Katangian ng uling na gawa sa bao na walang kemikal na additives.",
    audioUrl: "/audio/organiko.mp3",
    options: [
      { id: "A", image: "/placeholder.svg?height=150&width=150", alt: "Kemikal", isCorrect: false },
      { id: "B", image: "/placeholder.svg?height=150&width=150", alt: "Organiko - Walang kemikal", isCorrect: true },
      { id: "C", image: "/placeholder.svg?height=150&width=150", alt: "Sintetiko", isCorrect: false },
      { id: "D", image: "/placeholder.svg?height=150&width=150", alt: "Plastik", isCorrect: false },
    ],
    letter: "O",
  },
  {
    id: 16,
    term: "Pasma",
    definition:
      "Isang kondisyon na pinaniniwalaan ng mga manggagawa na dulot ng hindi sinasadyang pagkabasa ng kanilang katawan matapos mabilad sa apoy.",
    audioUrl: "/audio/pasma.mp3",
    options: [
      { id: "A", image: "/placeholder.svg?height=150&width=150", alt: "Sipon", isCorrect: false },
      { id: "B", image: "/placeholder.svg?height=150&width=150", alt: "Lagnat", isCorrect: false },
      {
        id: "C",
        image: "/placeholder.svg?height=150&width=150",
        alt: "Pasma - Kondisyon dulot ng pagkabasa matapos mabilad sa apoy",
        isCorrect: true,
      },
      { id: "D", image: "/placeholder.svg?height=150&width=150", alt: "Ubo", isCorrect: false },
    ],
    letter: "P",
  },
  {
    id: 17,
    term: "Quemado",
    definition: "Tawag sa uling na nasunog nang sobra at hindi na magagamit.",
    audioUrl: "/audio/quemado.mp3",
    options: [
      {
        id: "A",
        image: "/placeholder.svg?height=150&width=150",
        alt: "Quemado - Sobrang sunog na uling",
        isCorrect: true,
      },
      { id: "B", image: "/placeholder.svg?height=150&width=150", alt: "Basa na uling", isCorrect: false },
      { id: "C", image: "/placeholder.svg?height=150&width=150", alt: "Matigas na uling", isCorrect: false },
      { id: "D", image: "/placeholder.svg?height=150&width=150", alt: "Malambot na uling", isCorrect: false },
    ],
    letter: "Q",
  },
  {
    id: 18,
    term: "Resina",
    definition: "Ang natural na langis na nasa bao na nakakatulong sa pagkasunog nito.",
    audioUrl: "/audio/resina.mp3",
    options: [
      { id: "A", image: "/placeholder.svg?height=150&width=150", alt: "Tubig", isCorrect: false },
      { id: "B", image: "/placeholder.svg?height=150&width=150", alt: "Resina - Natural na langis", isCorrect: true },
      { id: "C", image: "/placeholder.svg?height=150&width=150", alt: "Gasolina", isCorrect: false },
      { id: "D", image: "/placeholder.svg?height=150&width=150", alt: "Krudo", isCorrect: false },
    ],
    letter: "R",
  },
  {
    id: 19,
    term: "Sako",
    definition: "Lalagyan kung saan inilalagay ang mga lutong uling para sa pagbebenta o paggamit.",
    audioUrl: "/audio/sako.mp3",
    options: [
      { id: "A", image: "/placeholder.svg?height=150&width=150", alt: "Kahon", isCorrect: false },
      { id: "B", image: "/placeholder.svg?height=150&width=150", alt: "Basket", isCorrect: false },
      { id: "C", image: "/placeholder.svg?height=150&width=150", alt: "Sako - Lalagyan ng uling", isCorrect: true },
      { id: "D", image: "/placeholder.svg?height=150&width=150", alt: "Balde", isCorrect: false },
    ],
    letter: "S",
  },
  {
    id: 20,
    term: "Temperatura",
    definition: "Ang antas ng init na kailangan para sa tamang pagkasunog ng bao.",
    audioUrl: "/audio/temperatura.mp3",
    options: [
      { id: "A", image: "/placeholder.svg?height=150&width=150", alt: "Temperatura - Antas ng init", isCorrect: true },
      { id: "B", image: "/placeholder.svg?height=150&width=150", alt: "Presyon", isCorrect: false },
      { id: "C", image: "/placeholder.svg?height=150&width=150", alt: "Humidity", isCorrect: false },
      { id: "D", image: "/placeholder.svg?height=150&width=150", alt: "Altitude", isCorrect: false },
    ],
    letter: "T",
  },
  {
    id: 21,
    term: "Uling",
    definition: "Ang produkto ng proseso ng pag-uuling ng bao, ginagamit bilang panggatong.",
    audioUrl: "/audio/uling.mp3",
    options: [
      { id: "A", image: "/placeholder.svg?height=150&width=150", alt: "Kahoy", isCorrect: false },
      {
        id: "B",
        image: "/placeholder.svg?height=150&width=150",
        alt: "Uling - Produkto ng pag-uuling",
        isCorrect: true,
      },
      { id: "C", image: "/placeholder.svg?height=150&width=150", alt: "Bao", isCorrect: false },
      { id: "D", image: "/placeholder.svg?height=150&width=150", alt: "Abo", isCorrect: false },
    ],
    letter: "U",
  },
  {
    id: 22,
    term: "Ventilasyon",
    definition: "Ang proseso ng pagkontrol ng hangin sa lutuan para sa tamang pagkasunog ng bao.",
    audioUrl: "/audio/ventilasyon.mp3",
    options: [
      { id: "A", image: "/placeholder.svg?height=150&width=150", alt: "Pagpapainit", isCorrect: false },
      { id: "B", image: "/placeholder.svg?height=150&width=150", alt: "Pagpapalamig", isCorrect: false },
      {
        id: "C",
        image: "/placeholder.svg?height=150&width=150",
        alt: "Ventilasyon - Pagkontrol ng hangin",
        isCorrect: true,
      },
      { id: "D", image: "/placeholder.svg?height=150&width=150", alt: "Pagpapatuyo", isCorrect: false },
    ],
    letter: "V",
  },
  {
    id: 23,
    term: "Walis",
    definition: "Ginagamit sa paglilinis ng lugar pagkatapos ng proseso ng pag-uuling.",
    audioUrl: "/audio/walis.mp3",
    options: [
      { id: "A", image: "/placeholder.svg?height=150&width=150", alt: "Walis - Panglinis", isCorrect: true },
      { id: "B", image: "/placeholder.svg?height=150&width=150", alt: "Pala", isCorrect: false },
      { id: "C", image: "/placeholder.svg?height=150&width=150", alt: "Martilyo", isCorrect: false },
      { id: "D", image: "/placeholder.svg?height=150&width=150", alt: "Lagari", isCorrect: false },
    ],
    letter: "W",
  },
  {
    id: 24,
    term: "Xerofito",
    definition:
      "Uri ng halaman na maaaring tumubo sa lugar na may maraming uling dahil sa kakayahan nitong mabuhay sa tuyong lugar.",
    audioUrl: "/audio/xerofito.mp3",
    options: [
      { id: "A", image: "/placeholder.svg?height=150&width=150", alt: "Halaman sa tubig", isCorrect: false },
      {
        id: "B",
        image: "/placeholder.svg?height=150&width=150",
        alt: "Xerofito - Halaman sa tuyong lugar",
        isCorrect: true,
      },
      { id: "C", image: "/placeholder.svg?height=150&width=150", alt: "Halaman sa lilim", isCorrect: false },
      { id: "D", image: "/placeholder.svg?height=150&width=150", alt: "Halaman sa araw", isCorrect: false },
    ],
    letter: "X",
  },
  {
    id: 25,
    term: "Yero",
    definition: "Minsan ginagamit na panakip sa ibabaw ng lutuan para proteksyon sa ulan.",
    audioUrl: "/audio/yero.mp3",
    options: [
      { id: "A", image: "/placeholder.svg?height=150&width=150", alt: "Kahoy", isCorrect: false },
      { id: "B", image: "/placeholder.svg?height=150&width=150", alt: "Plastik", isCorrect: false },
      { id: "C", image: "/placeholder.svg?height=150&width=150", alt: "Yero - Bakal na panakip", isCorrect: true },
      { id: "D", image: "/placeholder.svg?height=150&width=150", alt: "Trapal", isCorrect: false },
    ],
    letter: "Y",
  },
  {
    id: 26,
    term: "Zigzag",
    definition: "Pattern ng pagkakasalansan ng mga bao sa lutuan para sa mas mahusay na pagkasunog.",
    audioUrl: "/audio/zigzag.mp3",
    options: [
      { id: "A", image: "/placeholder.svg?height=150&width=150", alt: "Tuwid na linya", isCorrect: false },
      { id: "B", image: "/placeholder.svg?height=150&width=150", alt: "Bilog", isCorrect: false },
      {
        id: "C",
        image: "/placeholder.svg?height=150&width=150",
        alt: "Zigzag - Pattern ng pagkakasalansan",
        isCorrect: true,
      },
      { id: "D", image: "/placeholder.svg?height=150&width=150", alt: "Parisukat", isCorrect: false },
    ],
    letter: "Z",
  },
]

export default function QuizComponent() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [isQuizCompleted, setIsQuizCompleted] = useState(false)
  const [playingAudio, setPlayingAudio] = useState(false)

  const currentQuestion = quizQuestions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100

  const handleOptionSelect = (optionId: string) => {
    if (!isAnswerSubmitted) {
      setSelectedOption(optionId)
    }
  }

  const handleSubmitAnswer = () => {
    if (selectedOption) {
      setIsAnswerSubmitted(true)

      const selectedOptionObj = currentQuestion.options.find((option) => option.id === selectedOption)
      if (selectedOptionObj?.isCorrect) {
        setScore(score + 1)
      }
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedOption(null)
      setIsAnswerSubmitted(false)
    } else {
      setIsQuizCompleted(true)
    }
  }

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setIsAnswerSubmitted(false)
    setScore(0)
    setIsQuizCompleted(false)
  }

  const playAudio = () => {
    // In a real implementation, this would play the actual audio file
    console.log(`Playing audio for: ${currentQuestion.term}`)
    setPlayingAudio(true)

    // Simulate audio playing for 2 seconds
    setTimeout(() => {
      setPlayingAudio(false)
    }, 2000)
  }

  if (isQuizCompleted) {
    return (
      <Card className="bg-black/60 border-orange-900/30">
        <CardContent className="p-8 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-4">
            <Award className="h-8 w-8 text-orange-500" />
            <h2 className="text-2xl font-bold text-orange-400">Pagsusulit Kumpleto!</h2>
          </div>

          <div className="text-center mb-6">
            <p className="text-xl text-orange-100 mb-2">Iyong Iskor:</p>
            <p className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
              {score} / {quizQuestions.length}
            </p>
          </div>

          <div className="w-full max-w-xs bg-orange-900/20 rounded-full h-4 mb-8">
            <div
              className="bg-gradient-to-r from-orange-600 to-amber-600 h-4 rounded-full"
              style={{ width: `${(score / quizQuestions.length) * 100}%` }}
            ></div>
          </div>

          <Button
            onClick={handleRestartQuiz}
            className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white border-0 flex items-center gap-2"
          >
            Subukan Muli <ArrowRight className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-2">
        <p className="text-orange-100/70 flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white font-bold flex-shrink-0">
            {currentQuestionIndex + 1}
          </span>
          Tanong {currentQuestionIndex + 1} ng {quizQuestions.length} ({currentQuestion.letter})
        </p>
        <p className="text-orange-100/70 flex items-center gap-2">
          Iskor: <span className="font-bold text-orange-400">{score}</span>
        </p>
      </div>

      <Progress
        value={progress}
        className="h-2 bg-orange-900/20"
        indicatorClassName="bg-gradient-to-r from-orange-600 to-amber-600"
      />

      <Card className="bg-black/60 border-orange-900/30">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">{currentQuestion.term}</h2>
              <p className="text-orange-100/80">{currentQuestion.definition}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-orange-400 hover:text-orange-300 hover:bg-orange-900/20"
              onClick={playAudio}
            >
              <Volume2 className={`h-5 w-5 ${playingAudio ? "animate-pulse" : ""}`} />
              <span className="sr-only">Pakinggan ang pagbigkas</span>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            {currentQuestion.options.map((option) => (
              <div
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                className={`
                  relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all
                  ${
                    selectedOption === option.id
                      ? "border-orange-500 ring-2 ring-orange-500/50"
                      : "border-orange-900/30 hover:border-orange-500/50"
                  }
                  ${isAnswerSubmitted && option.isCorrect ? "border-green-500 ring-2 ring-green-500/50" : ""}
                  ${isAnswerSubmitted && selectedOption === option.id && !option.isCorrect ? "border-red-500 ring-2 ring-red-500/50" : ""}
                `}
              >
                <div className="aspect-square relative">
                  <Image src={option.image || "/placeholder.svg"} alt={option.alt} fill className="object-cover" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2 text-center">
                  <span className="font-medium text-orange-100">{option.id}</span>
                </div>
                {isAnswerSubmitted && option.isCorrect && (
                  <div className="absolute top-2 right-2">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                )}
                {isAnswerSubmitted && selectedOption === option.id && !option.isCorrect && (
                  <div className="absolute top-2 right-2">
                    <XCircle className="h-6 w-6 text-red-500" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end gap-4">
            {!isAnswerSubmitted ? (
              <Button
                onClick={handleSubmitAnswer}
                disabled={!selectedOption}
                className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white border-0 disabled:opacity-50"
              >
                Isumite
              </Button>
            ) : (
              <Button
                onClick={handleNextQuestion}
                className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white border-0 flex items-center gap-2"
              >
                {currentQuestionIndex < quizQuestions.length - 1 ? (
                  <>
                    Susunod na Tanong <ArrowRight className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    Tingnan ang Resulta <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

