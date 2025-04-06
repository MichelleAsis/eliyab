import Image from "next/image"
import { Flame, History, Shield, Lightbulb, Users, Leaf, ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
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
            <Flame className="h-8 w-8 text-orange-500" />
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
              Tungkol sa Pag-uuling ng Bao
            </h1>
          </div>

          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-amber-600/20 rounded-lg blur-lg"></div>
            <div className="relative bg-black/60 border border-orange-900/30 rounded-lg p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                <div className="w-full md:w-1/2 relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Proseso ng pag-uuling ng bao sa San Lorenzo Ruiz"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-2 mb-2">
                    <History className="h-5 w-5 text-orange-400" />
                    <h2 className="text-xl font-bold text-orange-400">Ang Tradisyon ng Pag-uuling ng Bao</h2>
                  </div>
                  <p className="text-orange-100/80">
                    Tanyag ang bayan ng San Lorenzo Ruiz, Camarines Norte sa pag-uuling ng bao bilang pangunahing
                    hanapbuhay. Isa itong masusing proseso na nangangailangan nang maingat na pagsunod sa tamang
                    pamamaraan upang makalikha ng mataas na kalidad na uling.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-orange-100/80">
                <div className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                  <p>
                    Nagsisimula ito sa pangangalap ng mga bao ng niyog na karaniwang nagmumula sa mga natuyong bunga na
                    ginamit na sa iba't ibang layunin, tulad ng paggawa ng langis o pagkopra.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                  <p>
                    Matapos makolekta, ang mga bao, maingat na isinasalansan sa loob ng isang hukay na lupa bilang
                    lutuan. Kinakailangan ang tamang pagsasaayos upang matiyak ang pantay na pagkalantad sa init at
                    maiwasan ang hindi pantay na pagkakasunog.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                  <p>
                    Kapag handa na, sinisimulan ang pagsusunog sa pamamagitan ng pagpapasiklab ng apoy sa pinakaloob na
                    bahagi ng lutuan ng uling. Kinokontrol ang suplay ng hangin sa pamamagitan ng pagtatakip gamit ang
                    katawan at dahon ng saging bago takpan ito ng lupa. Ginagawa ang pamamaraang ito upang matiyak na
                    walang lagusan ng hangin lalo't upang mapanatili ang tamang temperatura at maiwasan ang labis na
                    pagkasunog.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                  <p>
                    Pagkatapos ng naunang proseso, hindi na ito kinakailangan pang bantayan. Sa paglipas ng ilang oras o
                    araw, dahan-dahang nagaganap ang pagkasunog ng bao, kung saan ang bao ay unti- unting nagiging
                    uling. Kapag natapos ang prosesong ito, iniiwan ang mga bao sa loob ng lutuan upang lumamig nang
                    unti-unti. Subalit may alternatibong pamamaraan upang mabilis na lumamig ang uling mula sa lutuan.
                    Ginagawa ang pagbubuhos ng tubig sa mga nilutong uling upang agarang mapatay ang apoy at lumamig.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                  <p>
                    Sa sandaling lumamig na, kinokolekta ang uling at sinusuri upang matiyak ang kalidad nito. Ang
                    pinakamainam na uling ay may pare-parehong itim na kulay. Matapos ang masusing pagsusuri, hinahango
                    muna ito sa lutuan ang mga lutong uling na bao at inilalagay sa sako. Pagkatapos nito isinasalansan
                    at inihahanda para sa pagbebenta o paggamit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-orange-900/20 to-amber-900/20 border border-orange-900/30 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-5 w-5 text-orange-400" />
                <h2 className="text-xl font-bold text-orange-400">Ang Proseso</h2>
              </div>
              <ul className="space-y-3 text-orange-100/80">
                <li className="flex items-start gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white font-bold flex-shrink-0">
                    1
                  </span>
                  <span>Pangangalap ng mga bao ng niyog</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white font-bold flex-shrink-0">
                    2
                  </span>
                  <span>Pagsasalansan ng mga bao sa lutuan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white font-bold flex-shrink-0">
                    3
                  </span>
                  <span>Pagpapasiklab ng apoy sa pinakaloob na bahagi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white font-bold flex-shrink-0">
                    4
                  </span>
                  <span>Pagtatakip gamit ang katawan at dahon ng saging</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white font-bold flex-shrink-0">
                    5
                  </span>
                  <span>Pagtatakip ng lupa para kontrolin ang hangin</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white font-bold flex-shrink-0">
                    6
                  </span>
                  <span>Paghihintay sa pagkasunog ng bao</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white font-bold flex-shrink-0">
                    7
                  </span>
                  <span>Pagpapalamig ng uling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white font-bold flex-shrink-0">
                    8
                  </span>
                  <span>Pag-iimpake at paghahanda para sa pagbebenta</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-900/20 to-amber-900/20 border border-orange-900/30 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="h-5 w-5 text-orange-400" />
                <h2 className="text-xl font-bold text-orange-400">Mga Paniniwala at Kaugalian</h2>
              </div>
              <div className="space-y-4 text-orange-100/80">
                <p>
                  <span className="font-medium text-orange-300 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-orange-300" /> Pasma:
                  </span>
                  Naniniwala ang mga manggagawa ng uling sa sakit na pasma, dulot ito ng hindi sinasadyang pagkabasa ng
                  kanilang katawanan galing sa pagkabilad sa apoy.
                </p>
                <p>
                  <span className="font-medium text-orange-300 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-orange-300" /> Proteksiyon:
                  </span>
                  Kinakailangan na may kompletong kasuotan ang manggagawa ng uling upang matiyak ang kaligtasan ng
                  katawan. Karaniwang nagsusuot sila ng gwantes upang protektahan ang kanilang mga kamay laban sa labis
                  na init ng apoy. Mahabang damit, sa pag-iwas sa duming didikit sa kanilang mga braso sapagkat mahigpit
                  na ipinagbabawal ang pagbabasa ng katawan pagkatapos ng trabahong ito. Isa pang higit nilang kailangan
                  ang pagsusuot ng mask o takip sa ilong upang masiguro na hindi malalanghap o makapapasok sa loob ng
                  katawan ang mga alikabok mula sa uling.
                </p>
                <p>
                  <span className="font-medium text-orange-300 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-orange-300" /> Paggamot:
                  </span>
                  Sa usaping ito mayroong paniniwala ang mga manggagawa na mismong mula sa uling din ang
                  makapagpapagaling sa kanila.
                </p>
                <p>
                  <span className="font-medium text-orange-300 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-orange-300" /> Iba pang Gamit:
                  </span>
                  Habang ang uling naman na mismong ginagamit sa pagluluto, ay pinaniniwalaan naman na mainam din
                  gamiting panglagay sa poso negro bago isemento upang maiwasan ang pagkalap ng mikrobyo.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-amber-600/20 rounded-lg blur-lg"></div>
            <div className="relative bg-black/60 border border-orange-900/30 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-5 w-5 text-orange-400" />
                <h2 className="text-xl font-bold text-orange-400">Kahalagahan sa Pamayanan</h2>
              </div>
              <div className="space-y-4 text-orange-100/80">
                <p>
                  Sa San Lorenzo Ruiz, Camarines Norte, ang pag-uuling ng bao ay isang mahalagang hanapbuhay na
                  nagbibigay kabuhayan sa maraming pamilya. Ang industriya ng paggawa ng uling mula sa bao ay hindi
                  lamang isang pinagkukunan ng kita kundi isang simbolo ng sipag at kasanayan ng mga tao sa bayan.
                </p>
                <p>
                  Isinasagawa ito bilang isang tradisyon na ipinapasa mula sa isang henerasyon patungo sa susunod. Ang
                  industriyang ito ay may malaking papel sa pagpapanatili ng kultura at pagkakakilanlan ng mga
                  residente, kaya't patuloy itong sumusuporta sa ekonomiya ng bayan at nagsisilbing daan para mapanatili
                  ang kanilang kasaysayan at tradisyon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

