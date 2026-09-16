import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LogoSVG from "@/imports/Logo/index"

/* ── Images ── */
import imgPersona from "@/imports/PERSONA_Raoni.png"
import imgHeroNew from "@/imports/Hero/b2b849ee4a3b8a4f0bf2c0d6bc26c9877597d1ac.png"
import imgPersonaHero from "@/imports/OERSONA_RAONI_HERO2.png"
import imgHero from "@/imports/PortfolioNovo/b2b849ee4a3b8a4f0bf2c0d6bc26c9877597d1ac.png"
import heroSvgPaths from "@/imports/Hero/svg-7krqpxlkox"
import imgLogoUicesumar from "@/imports/PortfolioNovo/7c9bfc059db82e7daa637b1073d5ac9c7df806f7.png"
import imgLpMedicina2 from "@/imports/PortfolioNovo/3b0c8281b0227e042ea51d34d14d5e52d1e99b55.png"
import imgUniasselvi from "@/imports/Uniasselvi.png"
import imgUniasselvi1 from "@/imports/Uniasselvi-1.png"
import imgUnicesumar from "@/imports/Unicesumar.png"
import imgUniasselvi2 from "@/imports/Uniasselvi-2.png"
import imgUnicesumar1 from "@/imports/Unicesumar-1.png"
import imgLpMedicina1 from "@/imports/PortfolioNovo/c04ff51f96fe6645ea3ad5c16b588829d2e44223.png"
import imgMina1 from "@/imports/PortfolioNovo/2e3f2266c65e7cf30d51b438adda5e443b562b8d.png"
import imgUniasselvi4 from "@/imports/Uniasselvi-4.png"
import imgOmniChat from "@/imports/PortfolioNovo/dc0fd76b445dc0f9d0ed03445b68aedfc6e761df.png"
import imgHiplatform from "@/imports/Hiplatform.png"
import imgArchTrends from "@/imports/PortfolioNovo/49ddd8760533e6710702ad801a572c2916a5ecb3.png"
import imgPortobello1 from "@/imports/Portobello-1.png"
import imgSimulador from "@/imports/PortfolioNovo/4d62a094e2f86c79a73ab7702f3fa16808c51a01.png"
import imgSicredi1 from "@/imports/sicredi-1.png"
import imgBancoBrasil from "@/imports/PortfolioNovo/f09a7d8f1560c7e62d6a7b6f017bb3356e095029.png"
import imgBancoBrasil1 from "@/imports/Bancodobracil-1.png"
import imgLogoRodape from "@/imports/LOGO_RODAPE.png"
import imgRaoni from "@/imports/PortfolioNovo/c8f8109980066def6b46aa8d6d08399af506b206.png"
import imgRaoniAbout from "@/imports/About/c8f8109980066def6b46aa8d6d08399af506b206.png"
import aboutSvgPaths from "@/imports/About/svg-xv4swc9yd4"
import imgMoutsLogo from "@/imports/PortfolioNovo/0d83498cc01fecd5d1b48f8c766128d39926c25a.png"
import imgSicrediLogo from "@/imports/PortfolioNovo/074b8154ba52166f1275fff149963b0c346f6c7b.png"
import imgHiplatformLogo from "@/imports/PortfolioNovo/01649570f0fce43b6c62090e8ce33271197c0041.png"
import imgPortfobelloLogo from "@/imports/PortfolioNovo/4505a626884cc137e56fbf36775a1bc04f918bfb.png"
import imgStefaniniLogo from "@/imports/PortfolioNovo/a6b753e7452f6bfc512ed77d82579823945cd4f8.png"
import imgLinkedIn from "@/imports/PortfolioNovo/10ffd09aa7d7061d32412fb48e085e95ee9b52ec.png"
import imgBehance from "@/imports/PortfolioNovo/c3b50e3f707f37701480477e1b226ebba52ec609.png"
import imgInstagram from "@/imports/PortfolioNovo/8dfa0e53310c352cd923def753fc8950d745b662.png"

/* ── Scroll-reveal hook ── */
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        setVisible(e.isIntersecting)
      },
      { threshold },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

/* ── Nav Logo ── */
function LogoMark({ light = false }: { light?: boolean }) {
  return (
    <div
      className="relative shrink-0"
      style={{
        width: 63,
        height: 42,
        filter: light ? "brightness(0) invert(1)" : "none",
      }}
      aria-label="Raoni Burali"
    >
      <LogoSVG />
    </div>
  )
}

/* ── Nav ── */
function Nav({ onOpenContact }: { onOpenContact: () => void }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      // Scroll progress
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        setScrollProgress(
          Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100)),
        )
      }

      // Scrollspy
      const sections = [
        "hero",
        "sobre",
        "projetos",
        "metodo",
        "experiencia",
        "contato",
      ]
      const scrollPosition = window.scrollY + 160

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { id: "sobre", label: "Sobre", href: "#sobre" },
    { id: "projetos", label: "Projetos", href: "#projetos" },
    { id: "metodo", label: "Método", href: "#metodo" },
    { id: "experiencia", label: "Experiência", href: "#experiencia" },
    { id: "contato", label: "Contato", href: "#contato" },
  ]

  return (
    <>
      {/* Reading progress bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-[#155dfc] z-[60] transition-all duration-75 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(243,243,241,0.97)] shadow-sm backdrop-blur-md"
            : "bg-[rgba(243,243,241,0.9)] backdrop-blur-sm"
        }`}
      >
        <a
          href="#hero"
          className="flex items-center gap-2 select-none"
          aria-label="Home"
        >
          <LogoMark light={false} />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => {
            const isActive = activeSection === l.id
            return (
              <a
                key={l.label}
                href={l.href}
                className={`font-['Raleway:Medium',sans-serif] text-[11.2px] tracking-[2.24px] uppercase transition-all duration-200 relative py-1 ${
                  isActive
                    ? "font-bold text-[#155dfc]"
                    : "font-medium text-[#6a7282] hover:text-[#155dfc]"
                }`}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#155dfc] rounded-full"
                  />
                )}
              </a>
            )
          })}
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onOpenContact}
          type="button"
          className="hidden md:flex bg-[#1a1a1a] text-white font-['Raleway:Medium',sans-serif] font-medium text-[11.2px] tracking-[1.12px] uppercase items-center gap-2 px-5 py-2.5 rounded-full hover:bg-[#155dfc] transition-colors duration-300 shadow-md cursor-pointer"
        >
          Falar Comigo
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2.5 8.5L7.5 3.5M2.5 3.5H7.5V8.5"
              stroke="white"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#03191d] transition-all duration-300 ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#03191d] transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#03191d] transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 bg-[rgba(243,243,241,0.98)] backdrop-blur-md py-6 px-6 flex flex-col gap-5 shadow-lg md:hidden border-t border-[rgba(0,0,0,0.05)]"
            >
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`font-['Raleway:Medium',sans-serif] text-base tracking-[2px] uppercase transition-colors ${
                    activeSection === l.id
                      ? "font-bold text-[#155dfc]"
                      : "font-medium text-[#03191d] hover:text-[#155dfc]"
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <motion.button
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={() => {
                  setOpen(false)
                  onOpenContact()
                }}
                className="bg-[#1a1a1a] text-white font-['Raleway:Medium',sans-serif] font-medium text-[11px] tracking-[1.1px] uppercase flex items-center gap-2 px-5 py-3 rounded-full self-start hover:bg-[#155dfc] transition-colors duration-300 cursor-pointer"
              >
                Falar Comigo
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}

/* ── Hero ── faithful to the Figma import, animations added ── */
function HeroSection({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <div className="bg-[#ebebeb] relative w-full overflow-x-hidden" id="hero">
      {/* ══ MOBILE layout (hidden on lg+) ══ */}
      <div className="lg:hidden flex flex-col min-h-screen">
        {/* Text block */}
        <div className="flex flex-col px-6 pt-24 pb-4">
          {/* Eyebrow */}
          <p className="animate-hero font-['Raleway:SemiBold',sans-serif] font-semibold text-[9.5px] text-[#99a1af] tracking-[2.4px] uppercase mb-4 leading-relaxed">
            SEJA BEM VINDO AO MEU PORTFOLIO! MEU NOME É
          </p>

          {/* Name */}
          <p className="animate-hero-d1 font-['Raleway:Black',sans-serif] font-black text-[#0a0a0a] text-[52px] tracking-[-2px] leading-[1] mb-2">
            Raoni Burali
          </p>

          {/* Badge — in normal flow on mobile */}
          <div className="animate-hero-d1 mb-6 mt-3">
            <div
              onClick={onOpenContact}
              className="animate-float-a inline-flex cursor-pointer hover:scale-105 transition-transform"
              style={{ transform: "rotate(-2deg)" }}
              role="button"
              tabIndex={0}
              aria-label="Disponível para projetos - Falar comigo"
            >
              <div className="bg-[#155dfc] border-2 border-white drop-shadow-[0px_12px_8px_rgba(0,0,0,0.1)] flex items-center px-4 py-2 rounded-full">
                <p className="font-['Raleway:Bold',sans-serif] font-bold text-[10px] text-white tracking-[1px] uppercase whitespace-nowrap">
                  Disponível para projetos
                </p>
              </div>
            </div>
          </div>

          {/* Headline */}
          <div className="animate-hero-d2">
            <p className="font-['Raleway:Medium',sans-serif] font-medium text-[#101828] text-[20px] leading-[1.4] tracking-[-0.3px]">
              Design não é só sobre interfaces e marcas. <br />
              <span className="font-['Raleway:Bold',sans-serif] font-bold">
                É sobre{" "}
              </span>
              <span className="font-['Raleway:Bold',sans-serif] font-bold text-[#155dfc]">
                pessoas dispostas a fazer diferença!
              </span>
            </p>

            {/* Body */}
            <p className="font-['Raleway:Regular',sans-serif] font-normal text-[#6a7282] text-[15px] leading-[1.65] mt-4">
              UX Designer Sênior com mais de 20 anos criando experiências
              digitais, marcas, sites e softwares que unem estratégia,
              profundidade e valor.
            </p>

            {/* CTA */}
            <div className="mt-6">
              <a
                href="#projetos"
                className="bg-[#1a1a1a] drop-shadow-[0px_8px_6px_rgba(209,213,220,0.5)] inline-flex gap-2 items-center px-6 py-3 rounded-full hover:bg-[#155dfc] transition-all duration-300"
              >
                <p className="font-['Raleway:Medium',sans-serif] font-medium text-[11px] text-white tracking-[1.1px] uppercase whitespace-nowrap">
                  Ver Projetos
                </p>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 11.9957 11.9957"
                  fill="none"
                >
                  <path
                    d="M3.5 8.49693L8.49821 3.49872"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.24955"
                  />
                  <path
                    d="M3.5 3.49872H8.49821V8.49693"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.24955"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Persona + decoratives */}
        <div className="relative w-full flex-1 min-h-[320px] mt-4 rounded-tl-[48px] overflow-hidden">
          <img
            alt="Raoni Burali"
            src={imgPersonaHero}
            className="absolute inset-0 w-full h-full object-contain object-bottom"
          />
          {/* Decorative circle */}
          <div className="absolute right-4 top-16 animate-float-b">
            <svg width="44" height="44" viewBox="0 0 63 63" fill="none">
              <circle
                cx="31.5"
                cy="31.5"
                r="30.5"
                stroke="#155DFC"
                strokeOpacity="0.5"
                strokeWidth="2"
              />
            </svg>
          </div>
          {/* Rotated square */}
          <div
            className="absolute left-4 top-24 animate-float-c"
            style={{ transform: "rotate(12deg)" }}
          >
            <div className="border-2 border-[rgba(21,93,252,0.5)] rounded-[6px] size-[42px]" />
          </div>
          {/* Triangle */}
          <div
            className="absolute left-1/3 bottom-8 animate-float-d"
            style={{ transform: "rotate(15deg)" }}
          >
            <svg width="46" height="40" viewBox="0 0 66.684 57.75" fill="none">
              <path
                d={heroSvgPaths.p8e71e00}
                stroke="#155DFC"
                strokeOpacity="0.5"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* ══ DESKTOP layout (hidden below lg) ══ */}
      <div className="hidden lg:block">
        <div
          className="relative mx-auto"
          style={{ width: "min(100vw, 1390px)", minHeight: "646px" }}
        >
          <div
            className="grid pt-[72px]"
            style={{ gridTemplateColumns: "695px 695px", minHeight: "646px" }}
          >
            {/* ── Left: text column ── */}
            <div className="flex flex-col h-[646px] items-start justify-center pl-[96px] pr-[80px] pt-[32px] relative">
              {/* Eyebrow */}
              <p className="animate-hero font-['Raleway:SemiBold',sans-serif] font-semibold leading-[15.6px] text-[#99a1af] text-[10.4px] tracking-[2.6px] uppercase whitespace-nowrap pb-[24px]">
                SEJA BEM VINDO AO MEU PORTFOLIO! MEU NOME É
              </p>

              {/* Name + badge */}
              <div className="animate-hero-d1 flex flex-col h-[91px] items-start pb-[24px] relative w-[535px]">
                <p className="font-['Raleway:Black',sans-serif] font-black leading-[61.2px] text-[#0a0a0a] text-[100px] tracking-[-3.6px] whitespace-nowrap">
                  Raoni Burali
                </p>
                <div
                  onClick={onOpenContact}
                  className="absolute flex h-[43.167px] items-center justify-center left-[132.69px] top-[55.09px] w-[207.131px] cursor-pointer hover:scale-105 transition-transform"
                  role="button"
                  tabIndex={0}
                  aria-label="Disponível para projetos - Falar comigo"
                >
                  <div className="animate-float-a flex-none -rotate-2">
                    <div className="bg-[#155dfc] border-2 border-solid border-white drop-shadow-[0px_20px_12.5px_rgba(0,0,0,0.1),0px_8px_5px_rgba(0,0,0,0.1)] flex items-center px-[16px] py-[8px] rounded-[15252000px]">
                      <p className="font-['Raleway:Bold',sans-serif] font-bold leading-[15.6px] text-[10.4px] text-white tracking-[1.04px] uppercase whitespace-nowrap">
                        Disponível para projetos
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Headline + body + CTA */}
              <div className="animate-hero-d2 flex flex-col items-start pt-[32px] w-full">
                <div className="flex flex-col h-[228.991px] items-start max-w-[512px] w-full">
                  <p className="[word-break:break-word] font-['Raleway:Medium',sans-serif] font-medium leading-[0] text-[#101828] text-[0px] tracking-[-0.5px] w-[547px] whitespace-pre-wrap">
                    <span className="leading-[27.5px] text-[26px]">
                      Design não é{" "}
                    </span>
                    <span className="leading-[27.5px] text-[26px]">só </span>
                    <span className="leading-[27.5px] text-[26px]">
                      sobre interfaces
                    </span>
                    <span className="leading-[27.5px] text-[26px]">
                      {" "}
                      e marcas
                    </span>
                    <span className="leading-[27.5px] text-[26px]">
                      {`. `}
                      <br aria-hidden />
                    </span>
                    <span className="font-['Raleway:Bold',sans-serif] font-bold leading-[27.5px] text-[26px]">
                      É sobre{" "}
                    </span>
                    <span className="font-['Raleway:Bold',sans-serif] font-bold leading-[27.5px] text-[#155dfc] text-[26px]">
                      pessoas dispostas a fazer diferença!
                    </span>
                  </p>
                  <div className="flex flex-col items-start pt-[16px] w-full">
                    <p className="[word-break:break-word] font-['Raleway:Regular',sans-serif] font-normal leading-[22px] text-[#6a7282] text-[16px] w-[512px] whitespace-pre-wrap">
                      {`UX Designer Sênior com mais de 20 anos criando `}
                      <br aria-hidden />
                      {`experiências digitais, marcas, sites e softwares `}
                      <br aria-hidden />
                      que unem estratégia, profundidade e valor.
                    </p>
                  </div>
                  <div className="animate-hero-d3 flex flex-col items-center pt-[32px] w-full">
                    <div className="flex items-center w-full">
                      <a
                        href="#projetos"
                        className="bg-[#1a1a1a] drop-shadow-[0px_10px_7.5px_rgba(209,213,220,0.5),0px_4px_3px_rgba(209,213,220,0.5)] flex gap-[8px] items-center px-[24px] py-[12px] rounded-[15252000px] hover:bg-[#155dfc] hover:scale-105 transition-all duration-300 cursor-pointer"
                      >
                        <p className="font-['Raleway:Medium',sans-serif] font-medium leading-[16.8px] text-[11.2px] text-white tracking-[1.12px] uppercase whitespace-nowrap">
                          Ver Projetos
                        </p>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 11.9957 11.9957"
                          fill="none"
                        >
                          <path
                            d="M3.5 8.49693L8.49821 3.49872"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.24955"
                          />
                          <path
                            d="M3.5 3.49872H8.49821V8.49693"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.24955"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right: image column ── */}
            <div className="h-[646px] relative overflow-clip rounded-tl-[64px]">
              <div className="absolute h-[526.974px] left-[-20px] top-[94px] w-[695px]">
                <div className="absolute h-[646px] left-[-49px] top-[-83px] w-[673px]">
                  <img
                    alt="Raoni Burali"
                    className="absolute inset-0 max-w-none object-contain object-bottom size-full"
                    src={imgPersonaHero}
                  />
                </div>
                <div className="absolute left-[498px] size-[63px] top-[244px] animate-float-b">
                  <svg
                    className="absolute block inset-0 size-full"
                    fill="none"
                    height="63"
                    viewBox="0 0 63 63"
                    width="63"
                  >
                    <circle
                      cx="31.5"
                      cy="31.5"
                      r="30.5"
                      stroke="#155DFC"
                      strokeOpacity="0.5"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
              <div className="absolute border-[0.909px] border-[rgba(255,255,255,0.3)] border-solid flex items-center justify-center left-[48px] opacity-[0.59] rounded-[15252000px] size-[48px] top-[239.49px] animate-float-b">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clipPath="url(#heroClip)">
                    <path
                      d={heroSvgPaths.p3b27f100}
                      stroke="white"
                      strokeOpacity="0.8"
                      strokeWidth="1.25"
                    />
                    <path
                      d={heroSvgPaths.p3755a000}
                      stroke="white"
                      strokeOpacity="0.8"
                      strokeWidth="1.25"
                    />
                  </g>
                  <defs>
                    <clipPath id="heroClip">
                      <rect fill="white" height="20" width="20" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="absolute flex items-center justify-center left-[44px] size-[73.895px] top-[294.01px]">
                <div className="animate-float-c flex-none rotate-12">
                  <div className="border-2 border-[rgba(21,93,252,0.5)] border-solid rounded-[8px] size-[62.303px]" />
                </div>
              </div>
              <div className="absolute flex items-center justify-center left-[214px] size-[94.305px] top-[435px]">
                <div className="animate-float-d flex-none rotate-15">
                  <div className="relative size-[77px]">
                    <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
                      <svg
                        className="block size-full"
                        fill="none"
                        height="57.75"
                        viewBox="0 0 66.684 57.75"
                        width="66.684"
                      >
                        <path
                          d={heroSvgPaths.p8e71e00}
                          stroke="#155DFC"
                          strokeOpacity="0.5"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Marquee ── */
const marqueeItems = [
  "Estratégia",
  "✦",
  "Autenticidade",
  "✦",
  "Sistemas",
  "✦",
  "Presença Digital",
  "✦",
  "Inovação",
  "✦",
  "Branding",
  "✦",
  "Sites",
  "✦",
  "Apps",
  "✦",
]

function MarqueeSection() {
  const doubled = [...marqueeItems, ...marqueeItems]
  return (
    <div className="bg-[#155dfc] h-[70px] flex items-center overflow-hidden border-t border-b border-[rgba(0,231,255,0.1)]">
      <div className="animate-marquee flex items-center gap-0 whitespace-nowrap select-none">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`font-['Raleway:Light',sans-serif] font-light text-[24px] tracking-[-0.4px] mx-8 ${
              item === "✦"
                ? "text-[#00e7ff] opacity-60 text-[19px] mx-3"
                : "text-[rgba(255,255,255,0.35)]"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

interface ProjectResult {
  metric: string
  label: string
}

/* ── Project card types ── */
interface Project {
  id: string
  category: string
  categoryGroup: "landing-page" | "produto" | "processos"
  categoryColor?: string
  title: string
  titleColor: string
  client: string
  year: string
  role: string
  impactBadge: string
  description: React.ReactNode
  imgSrc: string
  imgBg: string
  logoElement?: React.ReactNode
  reversed?: boolean
  // Case study details
  overview: string
  challenge: string
  discovery: string[]
  solution: string[]
  results: ProjectResult[]
  tags: string[]
}

const allProjectsData: Project[] = [
  {
    id: "medicina",
    category: "Landing Page",
    categoryGroup: "landing-page",
    categoryColor: "rgb(179, 180, 182)",
    title: "Medicina",
    titleColor: "#003e6e",
    client: "UniCesumar",
    year: "2023",
    role: "Lead UX & CRO Designer",
    impactBadge: "+80% na Captação de Leads",
    overview:
      "Redesenho estratégico e otimização da jornada de conversão para a Landing Page do vestibular de Medicina UniCesumar, focado em redução drástica de fricção, autoridade visual e experiência mobile-first.",
    challenge:
      "O processo seletivo de Medicina possuía alto custo de aquisição (CPA) e evasão no formulário longo. Era necessário comunicar a excelência acadêmica e hospitalar sem sobrecarregar cognitivamente o candidato.",
    discovery: [
      "Gravações de sessão revelaram que 68% dos candidatos desistiam na etapa de envio de documentação.",
      "Entrevistas com alunos calouros identificaram que fotos reais dos laboratórios de simulação eram o maior fator de decisão.",
      "Testes de usabilidade mostraram que o formulário precisava ser particionado em etapas intuitivas.",
    ],
    solution: [
      "Arquitetura da informação reformulada segundo o framework AIDA (Atenção, Interesse, Desejo, Ação).",
      "Formulário progressivo em 3 etapas simples com salvamento automático de rascunho.",
      "Showcase interativo dos laboratórios de ponta e calculadora transparente de bolsas e financiamento.",
      "Carregamento ultra-rápido otimizado para conexões mobile 4G/5G.",
    ],
    results: [
      { metric: "+80%", label: "Aumento na captação de leads qualificados" },
      { metric: "0%", label: "Aumento no investimento em mídia paga" },
      { metric: "-35%", label: "Redução no custo por aquisição (CPA)" },
      {
        metric: "98/100",
        label: "Score de usabilidade mobile no Google Lighthouse",
      },
    ],
    tags: [
      "UX Research",
      "CRO",
      "Landing Page",
      "Mobile First",
      "Design System",
      "A/B Testing",
    ],
    description: (
      <>
        <span className="font-['Raleway:Bold',sans-serif] font-bold text-black">
          Aumentamos a captação de leads em 80%
        </span>
        {
          ", sem aumentar o investimento em mídia com o desenvolvimento da LP de Medicina."
        }
      </>
    ),
    imgSrc: imgUnicesumar1,
    imgBg: "#003e6e",
  },
  {
    id: "rafael-cortez",
    category: "Landing Page",
    categoryGroup: "landing-page",
    categoryColor: "rgb(153, 154, 155)",
    title: "Rafael Cortez",
    titleColor: "#ffdc00",
    client: "Uniasselvi & Vitru Educação",
    year: "2023 — 2024",
    role: "Senior UX Designer & Strategist",
    impactBadge: "Creator Economy na Educação",
    overview:
      "Concepção do produto digital e experiência de conversão para o infoproduto exclusivo com o comunicador e jornalista Rafael Cortez, integrando creator economy ao ecossistema acadêmico.",
    challenge:
      "Conectar o tom informal e bem-humorado de uma figura pública reconhecida com a autoridade pedagógica de uma instituição universitária, criando um fluxo de inscrição fluido e de alta confiança.",
    discovery: [
      "Mapeamento de audiência cruzando seguidores do apresentador com estudantes em busca de desenvolvimento em comunicação.",
      "Identificação do gatilho de identificação pessoal e storytelling em vídeo como elemento chave de decisão.",
      "Testes de protótipo comparando narrativas tradicionais de vendas contra uma abordagem mais intimista.",
    ],
    solution: [
      "Narrativa visual editorial com tipografia expressiva e micro-interações de destaque.",
      "Player de vídeo responsivo otimizado integrado a checkpoints da jornada de compra.",
      "Checkout em 1 clique transparente sem redirecionamentos externos que causassem perda de contexto.",
      "Seção interativa de módulos com prévia das aulas e depoimentos reais.",
    ],
    results: [
      { metric: "+65%", label: "Tempo de retenção nos vídeos explicativos" },
      {
        metric: "2.4x",
        label: "Conversão comparada à média do setor de infoprodutos",
      },
      {
        metric: "+15k",
        label: "Leads e alunos impactados no primeiro lançamento",
      },
      {
        metric: "4.9/5",
        label: "Avaliação média da jornada de compra pelos alunos",
      },
    ],
    tags: [
      "Creator Economy",
      "EdTech",
      "Storytelling UX",
      "Design Editorial",
      "Conversão",
    ],
    description: (
      <>
        {"Explorando a Creator Economy na Educação: "}
        <span className="font-['Raleway:Bold',sans-serif] font-bold text-black">
          o experimento de um infoproduto com Rafael Cortez.
        </span>
      </>
    ),
    imgSrc: imgUniasselvi4,
    imgBg: "#473b2e",
    reversed: true,
  },
  {
    id: "omni-chat",
    category: "Desenvolvimento de Produto",
    categoryGroup: "produto",
    categoryColor: "rgb(153, 154, 155)",
    title: "Omni Chat",
    titleColor: "#02acef",
    client: "Hiplatform",
    year: "2022 — 2023",
    role: "Senior Product Designer",
    impactBadge: "Catálogo Integrado Omnichannel",
    overview:
      "Arquitetura e desenvolvimento da funcionalidade de Catálogo de Produtos dentro da plataforma SaaS de atendimento e mensageria omnichannel da Hiplatform, integrando SAC e vendas consultivas.",
    challenge:
      "Operadores e vendedores perdiam minutos alternando entre múltiplos sistemas legados e planilhas para localizar produtos e gerar cotações, gerando lentidão e perda de oportunidades comerciais.",
    discovery: [
      "Acompanhamento em tempo real (shadowing) de 30+ operadores em centrais de atendimento de grandes marcas.",
      "Constatação de que 45% do tempo de atendimento comercial era gasto buscando links e tabelas de preços.",
      "Mapeamento de jornada identificando gargalos na formatação de mensagens com imagens e botões no WhatsApp API.",
    ],
    solution: [
      "Catálogo lateral embutido no painel do operador com busca semântica instantânea e filtros rápidos.",
      "Cards interativos compartilháveis no chat com cálculo de frete, fotos e botão de pagamento direto.",
      "Componentização modular integrada ao Design System corporativo para fácil escalabilidade técnica.",
      "Modo escuro e atalhos de teclado para máxima produtividade do operador.",
    ],
    results: [
      {
        metric: "-40%",
        label: "Tempo Médio de Atendimento (TMA) em vendas assistidas",
      },
      {
        metric: "+28%",
        label: "Crescimento na taxa de conversão direta dentro do chat",
      },
      {
        metric: "94%",
        label: "Adoção pelos operadores no primeiro mês de implantação",
      },
      {
        metric: "Zero",
        label: "Horas de treinamento complexo necessárias para o time",
      },
    ],
    tags: [
      "Product Design",
      "SaaS B2B",
      "Omnichannel",
      "Design System",
      "Usability Testing",
    ],
    description: (
      <>
        {"Ajudei a "}
        <span className="font-['Raleway:Bold',sans-serif] font-bold text-[#101828]">
          implementar e desenvolver na jornada do cliente{" "}
        </span>
        {"o Catálogo de produto da Hiplatform."}
      </>
    ),
    imgSrc: imgHiplatform,
    imgBg: "#06bbff",
  },
  {
    id: "arch-trends",
    category: "Desenvolvimento de Produto",
    categoryGroup: "produto",
    categoryColor: "rgb(153, 154, 155)",
    title: "Arch Trends",
    titleColor: "#03191d",
    client: "Portobello",
    year: "2019 — 2020",
    role: "UX/UI Product Designer Pleno",
    impactBadge: "+45% em Métricas & Engajamento",
    overview:
      "Redesign integral da experiência da plataforma digital Arch Trends da Portobello — o maior hub de conteúdo, inspiração e tendências de arquitetura e design da América Latina.",
    challenge:
      "A plataforma possuía baixa retenção e alta taxa de rejeição porque o modelo de navegação textual não se adequava ao fluxo de trabalho visual e de referências de arquitetos e designers.",
    discovery: [
      "Testes de árvore (tree testing) e card sorting com arquitetos renomados para reorganizar a taxonomia dos projetos.",
      "Identificação do desejo de criar 'moodboards' e salvar referências técnicas diretamente por textura e acabamento.",
      "Análise de dados de navegação comprovando que filtros visuais aumentam a permanência em mais de 3x.",
    ],
    solution: [
      "Interface editorial limpa que coloca as fotografias de alta resolução e os ambientes em primeiro plano.",
      "Funcionalidade 'Salvar no Projeto' com exportação facilitada de especificações técnicas para memoriais descritivos.",
      "Busca inteligente por tom cromático, tipologia de espaço (residencial, comercial) e especificações do piso.",
      "Experiência responsiva para tablets e smartphones para uso no canteiro de obras.",
    ],
    results: [
      {
        metric: "+45%",
        label: "Aumento nos acessos e retenção média na plataforma",
      },
      {
        metric: "+60%",
        label: "Crescimento no número de projetos salvos por usuários",
      },
      {
        metric: "-30%",
        label: "Redução na taxa de rejeição nas páginas de tendências",
      },
      {
        metric: "Top 1",
        label: "Referência absoluta em conteúdo de arquitetura no Brasil",
      },
    ],
    tags: [
      "UX Strategy",
      "Information Architecture",
      "B2B & B2C",
      "Design Editorial",
      "Inspiração",
    ],
    description: (
      <>
        {"Mapeamos as dores dos usuários e "}
        <span className="font-['Raleway:Bold',sans-serif] font-bold text-black">
          aumentamos os números em mais de 45%.
        </span>
      </>
    ),
    imgSrc: imgPortobello1,
    imgBg: "#03191d",
    reversed: true,
  },
  {
    id: "sicredi",
    category: "Processos de Desenvolvimento de Produto",
    categoryGroup: "processos",
    categoryColor: "rgb(153, 154, 155)",
    title: "Sicredi",
    titleColor: "#498027",
    client: "Sicredi",
    year: "2021 — 2022",
    role: "Senior Product Designer & Membro de Guilda",
    impactBadge: "Guilda de UX & Escala de Processos",
    overview:
      "Atuação estratégica e operacional na Guilda de Design do Sicredi, elevando a maturidade de UX, estruturando rituais de governança e padronizando esteiras de discovery em escala para dezenas de squads ágeis.",
    challenge:
      "A rápida expansão digital da cooperativa financeira gerou silos entre squads, resultando em retrabalho, discrepâncias visuais nos produtos e decisões de design sem validação prévia com associados.",
    discovery: [
      "Diagnóstico de maturidade de design identificando que 70% das squads não realizavam testes de usabilidade regulares.",
      "Mapeamento de fricções na comunicação entre equipes de design, POs e engenharia de software.",
      "Auditoria de consistência em fluxos críticos de conta corrente, investimentos e crédito.",
    ],
    solution: [
      "Criação e homologação do Playbook Unificado de UX Discovery do Sicredi com templates acessíveis.",
      "Instituição de rituais semanais de Design Critique e pareamento técnico entre designers de diferentes jornadas.",
      "Integração de métricas padronizadas de experiência (SUS, Task Success Rate) aos KPIs de cada produto.",
      "Capacitação contínua e workshops práticos de pesquisa e acessibilidade para o time estendido.",
    ],
    results: [
      {
        metric: "50+",
        label: "Designers e POs impactados e alinhados pelos novos processos",
      },
      {
        metric: "-35%",
        label: "Redução de retrabalho entre design e squads de desenvolvimento",
      },
      {
        metric: "100%",
        label: "Das novas features passando por validação com associados",
      },
      {
        metric: "NPS +70",
        label: "Maturidade e consistência consolidada nos canais digitais",
      },
    ],
    tags: [
      "Design Ops",
      "Guilda UX",
      "Fintech",
      "Design Strategy",
      "Métricas UX",
      "Governança",
    ],
    description: (
      <>
        {"Fiz parte da guilda de designers que "}
        <span className="font-['Raleway:Bold',sans-serif] font-bold text-black">
          melhorou os processos de ux nos produtos do Sicredi.
        </span>
      </>
    ),
    imgSrc: imgSicredi1,
    imgBg: "#498027",
  },
  {
    id: "banco-do-brasil",
    category: "Experiência do Usuário",
    categoryGroup: "processos",
    categoryColor: "rgb(153, 154, 155)",
    title: "Banco do Brasil",
    titleColor: "#3d5aff",
    client: "Stefanini by Banco do Brasil",
    year: "2020 — 2021",
    role: "UX/UI Product Designer Sênior",
    impactBadge: "Portal & Sistemas de Fornecedores",
    overview:
      "Modernização da experiência e acessibilidade do portal corporativo e sistemas internos de homologação, cotação e auditoria de fornecedores do Banco do Brasil.",
    challenge:
      "Sistemas legados burocráticos e herméticos causavam alto índice de erro no envio de documentação regulatória, gerando milhares de chamados de suporte diários e atrasos em contratações críticas.",
    discovery: [
      "Entrevistas com fornecedores de micro a grande porte apontando perda de documentos durante uploads demorados.",
      "Mapeamento de requisitos regulatórios rigorosos de compliance bancário e auditoria pública.",
      "Auditoria de acessibilidade (WCAG 2.1 AA) revelando barreiras graves para usuários com limitações visuais e motoras.",
    ],
    solution: [
      "Redesign integral da arquitetura da informação com painel centralizado de status em tempo real.",
      "Validação inteligente de documentos com mensagens claras de erro e prevenção de retrabalho.",
      "Design System corporativo acessível, reduzindo a complexidade de 18 telas para apenas 5 etapas guiadas.",
      "Fluxos de aprovação otimizados para auditores e gestores de compras do banco.",
    ],
    results: [
      {
        metric: "-52%",
        label: "Redução em chamados de suporte técnico por erros de envio",
      },
      {
        metric: "3x mais rápido",
        label: "Tempo médio para conclusão da homologação de empresas",
      },
      {
        metric: "100%",
        label: "Conformidade total com as diretrizes de acessibilidade WCAG AA",
      },
      {
        metric: "Milhares",
        label: "De fornecedores atendidos com experiência segura e ágil",
      },
    ],
    tags: [
      "Enterprise UX",
      "Design System",
      "Acessibilidade WCAG",
      "B2B Banking",
      "Arquitetura da Informação",
    ],
    description: (
      <>
        <span className="font-['Raleway:Bold',sans-serif] font-bold text-black">
          Melhorei a experiência{" "}
        </span>
        {
          "dos fornecedores do Banco do Brasil através do Portal e sistema internos."
        }
      </>
    ),
    imgSrc: imgBancoBrasil1,
    imgBg: "#fcf800",
    reversed: true,
  },
]

function ProjectCard({
  project,
  onSelectProject,
}: {
  project: Project
  onSelectProject: (project: Project) => void
}) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal ${
        visible ? "in-view" : ""
      } group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center`}
    >
      {/* Image side - clickable */}
      <div
        onClick={() => onSelectProject(project)}
        className={`${
          project.reversed ? "md:order-last" : ""
        } relative w-full aspect-[4/3] rounded-[20px] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300`}
        style={{ backgroundColor: project.imgBg }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            onSelectProject(project)
          }
        }}
        aria-label={`Ver detalhes do projeto ${project.title}`}
      >
        {project.logoElement && (
          <div className="absolute top-6 left-6 z-10">
            {project.logoElement}
          </div>
        )}
        <img
          src={project.imgSrc}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm text-[#03191d] font-['Raleway:Bold',sans-serif] text-[11px] tracking-wider uppercase px-4 py-2 rounded-full shadow-lg">
            Explorar Estudo de Caso
          </span>
        </div>
      </div>

      {/* Text side */}
      <div
        className={`${project.reversed ? "md:order-first" : ""} flex flex-col`}
      >
        <div className="flex items-center gap-3 mb-4">
          <p
            className="font-['Raleway:SemiBold',sans-serif] font-semibold text-[10.4px] tracking-[2.6px] uppercase"
            style={{ color: project.categoryColor ?? "#155dfc" }}
          >
            {project.category}
          </p>
          <span className="text-gray-300">•</span>
          <span className="font-['Raleway:Medium',sans-serif] text-[10.4px] tracking-[1.5px] uppercase text-[#6a7282]">
            {project.client}
          </span>
        </div>

        <h3
          className="font-['Raleway:Black',sans-serif] font-black text-[clamp(32px,5vw,48px)] leading-[1.1] tracking-[-0.025em] uppercase mb-6"
          style={{ color: project.titleColor }}
        >
          {project.title}
        </h3>
        <div className="font-['Raleway:Regular',sans-serif] font-normal text-[16px] leading-[1.625] text-[rgba(3,25,29,0.7)] mb-8">
          {project.description}
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelectProject(project)}
          type="button"
          className="self-start border-[1.8px] border-[#03191d] flex items-center gap-3 px-8 py-4 rounded-full font-['Raleway:Bold',sans-serif] font-bold text-[12px] tracking-[1.2px] uppercase text-[#03191d] hover:bg-[#03191d] hover:text-white transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-md"
        >
          Ver projeto
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M3 10L10 3M3 3H10V10"
              stroke="currentColor"
              strokeWidth="1.45"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      </div>
    </div>
  )
}

/* ── Projects Section ── */
function ProjectsSection({
  onSelectProject,
}: {
  onSelectProject: (project: Project) => void
}) {
  const { ref, visible } = useReveal(0.1)
  const [filter, setFilter] =
    useState<"all" | "landing-page" | "produto" | "processos">("all")

  const categories = [
    { id: "all", label: "Todos", count: allProjectsData.length },
    {
      id: "landing-page",
      label: "Landing Pages",
      count: allProjectsData.filter((p) => p.categoryGroup === "landing-page")
        .length,
    },
    {
      id: "produto",
      label: "Produtos Digitais",
      count: allProjectsData.filter((p) => p.categoryGroup === "produto")
        .length,
    },
    {
      id: "processos",
      label: "Processos UX",
      count: allProjectsData.filter((p) => p.categoryGroup === "processos")
        .length,
    },
  ]

  const filteredProjects =
    filter === "all"
      ? allProjectsData
      : allProjectsData.filter((p) => p.categoryGroup === filter)

  return (
    <section
      className="bg-white py-24 px-6 md:px-12 lg:px-24 scroll-mt-24"
      id="projetos"
    >
      <div className="max-w-[1200px] mx-auto">
        <div ref={ref} className={`reveal ${visible ? "in-view" : ""} mb-10`}>
          <p className="font-['Raleway:SemiBold',sans-serif] font-semibold text-[10.4px] tracking-[2.6px] uppercase text-[#155dfc] mb-2">
            2015 – 2026
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-['Raleway:Black',sans-serif] font-black text-[clamp(40px,6vw,72px)] leading-[1] tracking-[-0.05em] text-[#0a0a0a]">
              Projetos Selecionados
            </h2>
            <p className="font-['Raleway:Regular',sans-serif] text-[14px] text-[#6a7282] max-w-sm">
              Clique em qualquer projeto para explorar o estudo de caso
              aprofundado, processo de design e métricas de impacto.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center gap-2 flex-wrap mt-8 pt-6 border-t border-[rgba(3,25,29,0.06)]">
            {categories.map((cat) => {
              const active = filter === cat.id
              return (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setFilter(cat.id as any)}
                  type="button"
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-['Raleway:Bold',sans-serif] text-[11px] tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-[#155dfc] text-white shadow-sm"
                      : "bg-[#f3f3f1] text-[#03191d]/70 hover:bg-[#ebebeb] hover:text-[#03191d]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      active
                        ? "bg-white/20 text-white"
                        : "bg-black/5 text-[#03191d]"
                    }`}
                  >
                    {cat.count}
                  </span>
                </motion.button>
              )
            })}
          </div>
        </div>

        <motion.div layout className="flex flex-col gap-20 md:gap-28">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={p} onSelectProject={onSelectProject} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

interface ManifestoProps {
  quote: string
  bold: string
}

/* ── Manifesto block ── */
function ManifestoBlock({ quote, bold }: ManifestoProps) {
  const { ref, visible } = useReveal(0.2)
  return (
    <div className="bg-[#155dfc] py-24 px-6 md:px-12 border-t border-b border-[rgba(255,255,255,0.05)] flex items-center justify-center min-h-[300px] md:min-h-[420px]">
      <div
        ref={ref}
        className={`reveal ${
          visible ? "in-view" : ""
        } max-w-[900px] text-center`}
      >
        <p className="font-['Raleway:Regular',sans-serif] font-normal text-[clamp(24px,4vw,48px)] leading-[1.2] text-white">
          <span className="text-[#00e7ff]">"</span>
          {quote}{" "}
          <span className="font-['Raleway:Bold',sans-serif] font-bold">
            {bold}
          </span>
          <span className="text-[#00e7ff]">"</span>
        </p>
      </div>
    </div>
  )
}

/* ── About ── */
function AboutSection({ onOpenCurriculum }: { onOpenCurriculum: () => void }) {
  const { ref, visible } = useReveal(0.1)
  return (
    <section
      className="bg-white pt-[46px] pb-[42px] px-6 md:px-12 lg:px-[96px] scroll-mt-24"
      id="sobre"
    >
      <div
        ref={ref}
        className={`reveal ${
          visible ? "in-view" : ""
        } max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16`}
      >
        {/* ── Left: text ── */}
        <div className="flex flex-col w-full lg:w-[629px] shrink-0">
          {/* Eyebrow */}
          <p className="font-['Raleway:SemiBold',sans-serif] font-semibold text-[10.4px] leading-[15.6px] tracking-[2.6px] uppercase text-[#155dfc] mb-6">
            Sobre
          </p>

          {/* Heading */}
          <h2 className="font-['Raleway:Black',sans-serif] font-black text-[clamp(36px,4.5vw,48px)] leading-[1.1] tracking-[-1.2px] uppercase text-[#03191d] mb-6">
            Sobre Mim
          </h2>

          {/* Body 1 */}
          <p className="font-['Raleway:Regular',sans-serif] font-normal text-[clamp(17px,1.8vw,22px)] leading-[32px] text-[#03191d] mb-6">
            {"Com uma trajetória de "}
            <span className="font-['Raleway:SemiBold',sans-serif] font-semibold text-[#155dfc]">
              duas décadas
            </span>
            {
              " moldando o cenário digital, minha prática vai além da estética. Atuo na intersecção entre "
            }
            <span className="font-['Raleway:SemiBold',sans-serif] font-semibold text-[#155dfc]">
              entendimento de negócios
            </span>
            {" e "}
            <span className="font-['Raleway:SemiBold',sans-serif] font-semibold text-[#155dfc]">
              {"entrega de diferencial estratégico. "}
            </span>
          </p>

          {/* Body 2 */}
          <p className="font-['Raleway:Regular',sans-serif] font-normal text-[clamp(17px,1.8vw,22px)] leading-[32px] text-[#03191d] mb-8">
            {"Acredito no "}
            <span className="font-['Raleway:SemiBold',sans-serif] font-semibold text-[#155dfc]">
              método como essência
            </span>
            {
              " fundamental do design. Busco criar não apenas produtos/marcas/sites e apps, mas "
            }
            <span className="font-['Raleway:SemiBold',sans-serif] font-semibold text-[#155dfc]">
              memórias e experiências digitais autênticas
            </span>
            {"."}
          </p>

          {/* Buttons */}
          <div className="flex gap-5 items-center flex-wrap">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/raoniburali"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black flex gap-2 items-center px-6 py-[10px] rounded-full drop-shadow-[0px_10px_7.5px_rgba(209,213,220,0.5),0px_4px_3px_rgba(209,213,220,0.5)] hover:bg-[#155dfc] transition-colors duration-300"
            >
              <p className="font-['Raleway:Medium',sans-serif] font-medium text-[11.2px] leading-[16.8px] tracking-[1.12px] uppercase text-white whitespace-nowrap">
                LinkedIn
              </p>
              <div className="overflow-clip relative shrink-0 size-[16px]">
                <svg
                  className="absolute inset-0 size-full"
                  fill="none"
                  viewBox="0 0 16.0022 15.8419"
                >
                  <path d={aboutSvgPaths.p1dd9a800} fill="white" />
                  <path d={aboutSvgPaths.p2a48c400} fill="black" />
                  <path d={aboutSvgPaths.p19ce6c00} fill="black" />
                </svg>
              </div>
            </a>

            {/* Curriculum */}
            <button
              type="button"
              onClick={onOpenCurriculum}
              className="border border-black flex gap-2 items-center px-6 py-[10px] rounded-full shadow-[0px_10px_15px_0px_rgba(209,213,220,0.5),0px_4px_6px_0px_rgba(209,213,220,0.5)] hover:bg-black hover:text-white transition-colors duration-300 group cursor-pointer"
              title="Abrir Currículo Completo de Raoni Burali"
            >
              <p className="font-['Raleway:Medium',sans-serif] font-medium text-[11.2px] leading-[16.8px] tracking-[1.12px] uppercase text-black group-hover:text-white whitespace-nowrap transition-colors duration-300">
                Curriculum
              </p>
              <svg
                className="size-[16px] shrink-0"
                fill="none"
                viewBox="0 0 16.1855 16.1855"
              >
                <mask
                  id="dlMask"
                  maskUnits="userSpaceOnUse"
                  style={{ maskType: "alpha" }}
                  width="17"
                  height="17"
                  x="0"
                  y="0"
                >
                  <rect fill="#D9D9D9" width="16.1855" height="16.1855" />
                </mask>
                <g mask="url(#dlMask)">
                  <path d={aboutSvgPaths.p13ba0c80} fill="currentColor" />
                </g>
              </svg>
            </button>
          </div>
        </div>

        {/* ── Right: photo ── */}
        <div
          className="relative w-full lg:w-[567px] max-w-[594px] mx-auto lg:mx-0 rounded-[20px] overflow-hidden"
          style={{ aspectRatio: "594/509" }}
        >
          <img
            src={imgRaoniAbout}
            alt="Raoni Burali — UX Designer Sênior"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

/* ── Trust / Stats ── */
function TrustSection() {
  const { ref, visible } = useReveal(0.15)
  const stats = [
    { value: "+20", label: "ANOS DE EXPERIÊNCIA" },
    { value: "+80", label: "TRABALHOS ENTREGUES" },
    { value: "+25", label: "PROJETOS DE MARCA" },
    { value: "+1.2mi", label: "DE RESULTADOS MENSURADOS" },
  ]

  return (
    <div className="bg-[#f2f2f2] py-[80px]" id="resultados">
      <div
        ref={ref}
        className={`reveal ${
          visible ? "in-view" : ""
        } max-w-[1200px] mx-auto px-6`}
      >
        {/* ── Desktop row ── */}
        <div className="hidden md:flex items-center">
          {/* Left label */}
          <div className="shrink-0 w-[211px]">
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[10px] leading-[15px] tracking-[1.8px] uppercase text-[#155dfc]">
              RESULTADOS{"\n"}DE PROJETOS
            </p>
          </div>

          {/* Stats with dividers */}
          {stats.map((s, i) => (
            <div key={i} className="flex items-center shrink-0">
              {/* Vertical divider — 20px wide container, line centered */}
              <div className="relative w-[20px] h-[76px] shrink-0">
                <svg
                  className="absolute inset-0 w-full h-full"
                  fill="none"
                  viewBox="0 0 20 76"
                  preserveAspectRatio="none"
                >
                  <path d="M10 0L10 76" stroke="black" />
                </svg>
              </div>
              {/* Stat block */}
              <div className="flex flex-col w-[211px]">
                <p className="font-['Raleway:Bold',sans-serif] font-bold text-[49.046px] leading-[49.046px] text-[#03191d] pb-[12px]">
                  {s.value}
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[10px] leading-[15px] tracking-[1.8px] uppercase text-[#03191d]">
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Mobile 2×2 grid ── */}
        <div className="md:hidden flex flex-col gap-8">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[10px] leading-[15px] tracking-[1.8px] uppercase text-[#155dfc]">
            RESULTADOS DE PROJETOS
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8">
            {stats.map((s, i) => (
              <div key={i} className="flex items-start gap-0">
                <div className="relative w-[3px] h-[60px] shrink-0 mr-3">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    fill="none"
                    viewBox="0 0 3 60"
                    preserveAspectRatio="none"
                  >
                    <path d="M1.5 0L1.5 60" stroke="black" strokeWidth="1" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <p className="font-['Raleway:Bold',sans-serif] font-bold text-[36px] leading-[36px] text-[#03191d] pb-[8px]">
                    {s.value}
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[9px] leading-[14px] tracking-[1.6px] uppercase text-[#03191d]">
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Experience ── */
interface ExpEntry {
  period: string
  role: string
  company: string
  logo: string
}

function ExperienceSection() {
  const { ref, visible } = useReveal(0.1)

  const entries: ExpEntry[] = [
    {
      period: "2024 — Presente",
      role: "Product Designer Sênior",
      company: "MOUTS BY VITRU EDUCAÇÃO",
      logo: imgMoutsLogo,
    },
    {
      period: "2021 — 2022",
      role: "Product Designer Sênior",
      company: "SICREDI",
      logo: imgSicrediLogo,
    },
    {
      period: "2022 — 2023",
      role: "Product Designer Sênior",
      company: "HIPLATFORM",
      logo: imgHiplatformLogo,
    },
    {
      period: "2019 — 2020",
      role: "UX/UI Product Designer Pleno",
      company: "PORTFOBELLO",
      logo: imgPortfobelloLogo,
    },
    {
      period: "2020 — 2021",
      role: "UX/UI Product Designer Sênior",
      company: "STEFANINI BY BANCO DO BRASIL",
      logo: imgStefaniniLogo,
    },
  ]

  return (
    <section
      className="bg-white py-24 px-6 md:px-12 lg:px-24 scroll-mt-24"
      id="experiencia"
    >
      <div className="max-w-[1200px] mx-auto">
        <div ref={ref} className={`reveal ${visible ? "in-view" : ""}`}>
          <p className="font-['Raleway:SemiBold',sans-serif] font-semibold text-[10.4px] tracking-[2.6px] uppercase text-[#155dfc] mb-2">
            Experiência Profissional
          </p>
          <h2 className="font-['Raleway:Black',sans-serif] font-black text-[clamp(36px,5vw,48px)] leading-[1.1] tracking-[-0.025em] uppercase text-[#03191d] mb-10">
            Minha Caminhada
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-[rgba(3,25,29,0.1)]">
          {entries.map((e, i) => (
            <div
              key={i}
              className={`reveal ${
                visible ? "in-view" : ""
              } delay-${Math.min((i + 1) * 100, 500)} flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 group hover:bg-[#f9f9f9] px-4 -mx-4 rounded-xl transition-colors duration-200`}
            >
              <p className="font-['Raleway:SemiBold',sans-serif] font-semibold text-[10.4px] tracking-[2.6px] uppercase text-[#155dfc] shrink-0 w-[170px]">
                {e.period}
              </p>
              <p className="font-['Raleway:Bold',sans-serif] font-bold text-[20px] leading-[1.4] tracking-[-0.025em] uppercase text-[#03191d] flex-1">
                {e.role}
              </p>
              <div className="flex items-center gap-4">
                <p className="font-['Raleway:Regular',sans-serif] font-normal text-[14px] text-[rgba(3,25,29,0.4)] text-right">
                  {e.company}
                </p>
                <img
                  src={e.logo}
                  alt={e.company}
                  className="w-12 h-12 rounded-[8px] object-cover shrink-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Método Essência ── */
interface MetodoStep {
  num: string
  tag: string
  heading: string
  body: string
}

function MetodoSection() {
  const { ref, visible } = useReveal(0.1)

  const steps: MetodoStep[] = [
    {
      num: "01",
      tag: "Essência",
      heading: "Escutar",
      body: "Entender quem existe por trás da marca: história, desejos, propósito e visão.",
    },
    {
      num: "02",
      tag: "Significado",
      heading: "Compreender",
      body: "Encontrar os significados e percepções que tornam essa identidade única.",
    },
    {
      num: "03",
      tag: "Direção",
      heading: "Posicionar",
      body: "Transformar descobertas em uma direção clara: para quem você fala e como quer ser percebido.",
    },
    {
      num: "04",
      tag: "Forma",
      heading: "Traduzir",
      body: "Dar forma à estratégia através da identidade visual, linguagem e experiência.",
    },
    {
      num: "05",
      tag: "Presença",
      heading: "Expandir",
      body: "Levar essa identidade para o mundo: site, redes sociais e todos os pontos de contato.",
    },
  ]

  return (
    <section
      className="bg-[#03191d] py-24 px-6 md:px-12 lg:px-24 scroll-mt-24"
      id="metodo"
    >
      <div className="max-w-[1200px] mx-auto">
        <div ref={ref} className={`reveal ${visible ? "in-view" : ""} mb-10`}>
          <p className="font-['Raleway:SemiBold',sans-serif] font-semibold text-[10px] tracking-[2.8px] uppercase text-[#8baefa] mb-4">
            Metodologia
          </p>
          <h2 className="font-['Raleway:Black',sans-serif] font-black text-[clamp(32px,5vw,48px)] leading-[1] tracking-[-0.02em] uppercase text-white mb-4">
            Método Essência
          </h2>
          <p className="font-['Raleway:Light',sans-serif] font-light text-[14px] leading-[1.8] text-[rgba(255,255,255,0.8)] max-w-[700px]">
            Um processo estratégico para transformar história, propósito e
            identidade em autenticidade.
            <br />
            Transforme tudo o que você já é, para um posicionamento que o mundo
            perceba você.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-0">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`reveal ${
                visible ? "in-view" : ""
              } delay-${i * 100 + 100} bg-[rgba(21,93,252,0.4)] border border-[rgba(139,174,250,0.18)] ${
                i === 0
                  ? "rounded-tl-[16px] rounded-bl-[16px] lg:rounded-tr-none lg:rounded-br-none"
                  : i === steps.length - 1
                    ? "rounded-tr-[16px] rounded-br-[16px] lg:rounded-tl-none lg:rounded-bl-none"
                    : "lg:border-l-2 lg:border-l-[#155dfc] lg:border-t-0 lg:border-r-0 lg:border-b-0"
              } ${
                i > 0 ? "lg:border-l-2 lg:border-l-[#155dfc]" : ""
              } p-6 flex flex-col gap-3`}
            >
              <p className="font-['Raleway:Black',sans-serif] font-black text-[32px] leading-none tracking-[-0.04em] text-[#155dfc]">
                {s.num}
              </p>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8baefa]" />
                <div className="h-px flex-1 bg-[rgba(139,174,250,0.22)]" />
              </div>
              <p className="font-['Raleway:SemiBold',sans-serif] font-semibold text-[9px] tracking-[2.4px] uppercase text-[#8baefa]">
                {s.tag}
              </p>
              <p className="font-['Raleway:Bold',sans-serif] font-bold text-[14px] tracking-[0.56px] uppercase text-white">
                {s.heading}
              </p>
              <p className="font-['Raleway:Light',sans-serif] font-light text-[12px] leading-[1.75] text-[rgba(255,255,255,0.48)]">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Testimonials ── */
const testimonials = [
  {
    quote:
      '"Raoni possui uma sensibilidade rara. Ele consegue traduzir necessidades complexas de negócio em experiências que tocam o usuário."',
    name: "Clara Mendonça",
    role: "Product Director @ Vitru",
  },
  {
    quote:
      '"Raoni possui uma sensibilidade rara. Ele consegue traduzir necessidades complexas de negócio em experiências que tocam o usuário."',
    name: "Clara Mendonça",
    role: "Product Director @ Vitru",
  },
  {
    quote:
      '"Raoni possui uma sensibilidade rara. Ele consegue traduzir necessidades complexas de negócio em experiências que tocam o usuário."',
    name: "Clara Mendonça",
    role: "Product Director @ Vitru",
  },
]

function TestimonialsSection() {
  const { ref, visible } = useReveal(0.1)
  return (
    <section className="bg-[#eeeeea] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1200px] mx-auto">
        <div ref={ref} className={`reveal ${visible ? "in-view" : ""} mb-12`}>
          <p className="font-['Raleway:SemiBold',sans-serif] font-semibold text-[10.4px] tracking-[2.6px] uppercase text-[#155dfc] mb-2">
            Depoimentos
          </p>
          <h2 className="font-['Raleway:Black',sans-serif] font-black text-[clamp(36px,5vw,48px)] leading-[1.1] tracking-[-0.025em] uppercase text-[#03191d]">
            O que falam de mim
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`reveal ${
                visible ? "in-view" : ""
              } delay-${i * 100 + 100} bg-black p-10 rounded-[20px] flex flex-col justify-between min-h-[280px] hover:scale-[1.02] transition-transform duration-300`}
            >
              <p className="font-['Raleway:Light',sans-serif] font-light text-[18px] leading-[1.78] text-white flex-1">
                {t.quote}
              </p>
              <div className="border-t border-[rgba(0,0,0,0.3)] pt-5 mt-6">
                <p className="font-['Raleway:Bold',sans-serif] font-bold text-[14px] tracking-[0.35px] uppercase text-white">
                  {t.name}
                </p>
                <p className="font-['Raleway:SemiBold',sans-serif] font-semibold text-[10.4px] tracking-[1px] uppercase text-black mt-1">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Contact ── */
function ContactSection({
  onOpenContact,
  onCopyEmail,
}: {
  onOpenContact: () => void
  onCopyEmail: () => void
}) {
  const { ref, visible } = useReveal(0.2)
  return (
    <section
      className="bg-[#155dfc] py-24 px-6 md:px-12 scroll-mt-24"
      id="contato"
    >
      <div
        ref={ref}
        className={`reveal ${
          visible ? "in-view" : ""
        } max-w-[900px] mx-auto text-center flex flex-col items-center gap-8`}
      >
        <p className="font-['Raleway:SemiBold',sans-serif] font-semibold text-[10.4px] tracking-[2.6px] uppercase text-[#82a9ff]">
          Contato
        </p>
        <div className="font-['Raleway:Black',sans-serif] font-black text-[clamp(28px,5vw,48px)] leading-[1.1] tracking-[-0.025em] uppercase text-center">
          <p className="text-white">Talvez o próximo projeto</p>
          <p>
            <span className="text-[rgba(255,255,255,0.5)]">
              {" "}
              não precisa apenas de design.
            </span>
          </p>
          <p>
            <span className="text-white">precisa de </span>
            <span className="text-[#82a9ff]">significado.</span>
          </p>
        </div>

        <div className="text-center">
          <p className="font-['Raleway:Bold',sans-serif] font-bold text-[24px] leading-[1.5] text-[#fafcff]">
            Vamos conversar sobre o seu próximo projeto?
          </p>
          <p className="font-['Raleway:Regular',sans-serif] text-[14px] text-white/80 mt-1">
            Escolha seu canal preferido ou envie uma mensagem direta.
          </p>
        </div>

        {/* Direct Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full max-w-xl">
          <a
            href="https://wa.me/5544999999999?text=Ol%C3%A1%20Raoni!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[200px] bg-white text-[#155dfc] hover:bg-[#03191d] hover:text-white font-['Raleway:Bold',sans-serif] font-bold text-[11px] tracking-[1px] uppercase px-6 py-3.5 rounded-full transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-5.705 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
            </svg>
            WhatsApp Direto
          </a>

          <button
            type="button"
            onClick={onCopyEmail}
            className="flex-1 min-w-[200px] bg-[rgba(255,255,255,0.15)] border border-white/60 text-white hover:bg-white hover:text-[#155dfc] font-['Raleway:Bold',sans-serif] font-bold text-[11px] tracking-[1px] uppercase px-6 py-3.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Copiar E-mail
          </button>

          <button
            type="button"
            onClick={onOpenContact}
            className="w-full sm:w-auto bg-[#03191d] text-white hover:bg-black font-['Raleway:Bold',sans-serif] font-bold text-[11px] tracking-[1px] uppercase px-8 py-3.5 rounded-full transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            Formulário de Mensagem
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2.5 8.5L7.5 3.5M2.5 3.5H7.5V8.5"
                stroke="white"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <a
            href="https://linkedin.com/in/raoniburali"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.7)] text-[rgba(255,255,255,0.9)] font-['Raleway:Bold',sans-serif] font-bold text-[10.4px] tracking-[1px] uppercase px-5 py-2.5 rounded-full hover:bg-white hover:text-[#155dfc] transition-all duration-300"
          >
            <img
              src={imgLinkedIn}
              alt="LinkedIn"
              className="w-5 h-5 object-contain"
            />
            LinkedIn
          </a>
          <a
            href="https://behance.net/raoniburali"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.7)] text-[rgba(255,255,255,0.9)] font-['Raleway:Bold',sans-serif] font-bold text-[10.4px] tracking-[1px] uppercase px-5 py-2.5 rounded-full hover:bg-white hover:text-[#155dfc] transition-all duration-300"
          >
            <img
              src={imgBehance}
              alt="Behance"
              className="w-5 h-5 object-contain"
            />
            Behance
          </a>
          <a
            href="https://instagram.com/raoniburali"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.7)] text-[rgba(255,255,255,0.9)] font-['Raleway:Bold',sans-serif] font-bold text-[10.4px] tracking-[1px] uppercase px-5 py-2.5 rounded-full hover:bg-white hover:text-[#155dfc] transition-all duration-300"
          >
            <img
              src={imgInstagram}
              alt="Instagram"
              className="w-5 h-5 object-contain"
            />
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="bg-[#03191d] border-t border-[rgba(255,255,255,0.05)] px-6 md:px-24 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
      <img
        src={imgLogoRodape}
        alt="Raoni Burali"
        className="h-[42px] w-auto object-contain"
      />
      <p className="font-['Raleway:SemiBold',sans-serif] font-semibold text-[10.4px] tracking-[2px] uppercase text-[#eeeeea] text-center">
        © 2026 Raoni Burali — UX Estratégico & Identidade Digital
      </p>
    </footer>
  )
}

/* ── Case Study Modal Component ── */
function CaseStudyModal({
  project,
  currentIndex,
  totalProjects,
  onClose,
  onNext,
  onPrev,
  onOpenContact,
}: {
  project: Project | null
  currentIndex: number
  totalProjects: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
  onOpenContact: () => void
}) {
  useEffect(() => {
    if (!project) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") onNext()
      if (e.key === "ArrowLeft") onPrev()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [project, onClose, onNext, onPrev])

  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-[rgba(3,25,29,0.75)] backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Estudo de caso: ${project.title}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ type: "spring", damping: 26, stiffness: 320 }}
        className="relative w-full max-w-4xl bg-white rounded-[24px] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-[rgba(3,25,29,0.08)] px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-['Raleway:Bold',sans-serif] text-[10px] tracking-[2px] uppercase text-[#155dfc] bg-[#155dfc]/10 px-3 py-1 rounded-full">
              {project.category}
            </span>
            <span className="text-[12px] font-['Raleway:Medium',sans-serif] text-[#6a7282] hidden sm:inline">
              Caso {currentIndex + 1} de {totalProjects}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Prev / Next buttons inside header */}
            <div className="flex items-center bg-[#f3f3f1] rounded-full p-1 mr-2">
              <button
                onClick={onPrev}
                type="button"
                className="p-1.5 rounded-full hover:bg-white text-[#03191d] transition-colors cursor-pointer"
                title="Projeto anterior (Seta ←)"
                aria-label="Projeto anterior"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M8.5 10.5L5 7L8.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={onNext}
                type="button"
                className="p-1.5 rounded-full hover:bg-white text-[#03191d] transition-colors cursor-pointer"
                title="Próximo projeto (Seta →)"
                aria-label="Próximo projeto"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M5.5 3.5L9 7L5.5 10.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              type="button"
              className="flex items-center gap-1.5 bg-[#f3f3f1] hover:bg-[#03191d] hover:text-white text-[#03191d] px-3.5 py-1.5 rounded-full text-[11px] font-['Raleway:Bold',sans-serif] tracking-wider uppercase transition-colors cursor-pointer"
              aria-label="Fechar modal"
            >
              <span>Fechar</span>
              <span className="text-[10px] opacity-60 hidden sm:inline">
                [ESC]
              </span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.5 2.5L9.5 9.5M9.5 2.5L2.5 9.5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto modal-scroll px-6 sm:px-10 py-8 flex-1 flex flex-col gap-8">
          {/* Title & Metadata */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-['Raleway:Bold',sans-serif] text-[11px] uppercase tracking-[1.5px] text-[#03191d]/60">
                Cliente:{" "}
                <strong className="text-[#03191d]">{project.client}</strong>
              </span>
              <span className="text-gray-300">•</span>
              <span className="font-['Raleway:Medium',sans-serif] text-[11px] uppercase tracking-[1.5px] text-[#03191d]/60">
                {project.role}
              </span>
              <span className="text-gray-300">•</span>
              <span className="font-['Raleway:Medium',sans-serif] text-[11px] uppercase tracking-[1.5px] text-[#03191d]/60">
                {project.year}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
              <h2
                className="font-['Raleway:Black',sans-serif] font-black text-[clamp(28px,4vw,44px)] leading-[1.05] tracking-[-0.03em] uppercase"
                style={{ color: project.titleColor }}
              >
                {project.title}
              </h2>
              <span className="self-start sm:self-auto bg-[#155dfc] text-white font-['Raleway:Bold',sans-serif] text-[11px] tracking-wider uppercase px-4 py-1.5 rounded-full shadow-sm">
                {project.impactBadge}
              </span>
            </div>

            <p className="font-['Raleway:Regular',sans-serif] text-[16px] sm:text-[18px] leading-[1.6] text-[#03191d]/80 pt-2 border-t border-[rgba(3,25,29,0.08)]">
              {project.overview}
            </p>
          </div>

          {/* Main Visual Showcase */}
          <div
            className="w-full rounded-[20px] overflow-hidden relative shadow-inner flex items-center justify-center"
            style={{ backgroundColor: project.imgBg, minHeight: 280 }}
          >
            <img
              src={project.imgSrc}
              alt={project.title}
              className="w-full max-h-[460px] object-cover"
            />
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#f8f8f6] p-6 rounded-[20px] border border-[rgba(3,25,29,0.06)]">
            {project.results.map((res, i) => (
              <div key={i} className="flex flex-col">
                <p className="font-['Raleway:Black',sans-serif] font-black text-[28px] sm:text-[34px] leading-tight text-[#155dfc]">
                  {res.metric}
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-[10px] uppercase tracking-[1px] text-[#03191d]/70 leading-normal mt-1">
                  {res.label}
                </p>
              </div>
            ))}
          </div>

          {/* Challenge & Discovery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* O Desafio */}
            <div className="bg-white border border-[rgba(3,25,29,0.1)] rounded-[20px] p-6 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#155dfc]" />
                <h4 className="font-['Raleway:Bold',sans-serif] font-bold text-[12px] tracking-[1.5px] uppercase text-[#03191d]">
                  O Desafio
                </h4>
              </div>
              <p className="font-['Raleway:Regular',sans-serif] text-[14px] leading-[1.7] text-[#03191d]/80">
                {project.challenge}
              </p>
            </div>

            {/* Pesquisa & Descoberta */}
            <div className="bg-white border border-[rgba(3,25,29,0.1)] rounded-[20px] p-6 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00e7ff]" />
                <h4 className="font-['Raleway:Bold',sans-serif] font-bold text-[12px] tracking-[1.5px] uppercase text-[#03191d]">
                  Pesquisa & Descoberta
                </h4>
              </div>
              <ul className="flex flex-col gap-2 font-['Raleway:Regular',sans-serif] text-[13px] leading-[1.6] text-[#03191d]/80">
                {project.discovery.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#155dfc] font-bold shrink-0 mt-0.5">
                      ✦
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Estratégia e Solução UX */}
          <div className="bg-[#03191d] text-white rounded-[20px] p-6 sm:p-8 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00e7ff]" />
              <h4 className="font-['Raleway:Bold',sans-serif] font-bold text-[12px] tracking-[2px] uppercase text-[#00e7ff]">
                Estratégia & Solução UX
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.solution.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3"
                >
                  <span className="font-['Raleway:Black',sans-serif] text-[#155dfc] text-[16px]">
                    0{idx + 1}
                  </span>
                  <p className="font-['Raleway:Regular',sans-serif] text-[13px] leading-[1.6] text-white/90">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="font-['Raleway:Bold',sans-serif] text-[10px] tracking-[1.5px] uppercase text-[#6a7282] mr-2">
              Tags & Métodos:
            </span>
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-[#f3f3f1] text-[#03191d] text-[11px] font-['Raleway:SemiBold',sans-serif] px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action CTA & Navigation Footer inside Modal */}
          <div className="border-t border-[rgba(3,25,29,0.08)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => {
                onClose()
                onOpenContact()
              }}
              className="w-full sm:w-auto bg-[#155dfc] text-white font-['Raleway:Bold',sans-serif] text-[12px] tracking-[1.2px] uppercase px-6 py-3.5 rounded-full hover:bg-[#03191d] transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              Falar sobre um projeto semelhante
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.5 8.5L7.5 3.5M2.5 3.5H7.5V8.5"
                  stroke="white"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={onPrev}
                className="flex-1 sm:flex-initial border border-[#03191d] text-[#03191d] hover:bg-[#03191d] hover:text-white font-['Raleway:Bold',sans-serif] text-[11px] tracking-wider uppercase px-4 py-2.5 rounded-full transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                ← Anterior
              </button>
              <button
                type="button"
                onClick={onNext}
                className="flex-1 sm:flex-initial bg-[#03191d] text-white hover:bg-[#155dfc] font-['Raleway:Bold',sans-serif] text-[11px] tracking-wider uppercase px-4 py-2.5 rounded-full transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                Próximo →
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Curriculum Modal Component ── */
function CurriculumModal({
  isOpen,
  onClose,
  onOpenContact,
}: {
  isOpen: boolean
  onClose: () => void
  onOpenContact: () => void
}) {
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-[rgba(3,25,29,0.75)] backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Currículo de Raoni Burali"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ type: "spring", damping: 26, stiffness: 320 }}
        className="relative w-full max-w-4xl bg-white rounded-[24px] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col print-curriculum"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-[rgba(3,25,29,0.08)] px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#155dfc]" />
            <h3 className="font-['Raleway:Bold',sans-serif] font-bold text-[12px] tracking-[2px] uppercase text-[#03191d]">
              Currículo Profissional
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="flex items-center gap-2 bg-[#f3f3f1] hover:bg-[#155dfc] hover:text-white text-[#03191d] px-4 py-1.5 rounded-full text-[11px] font-['Raleway:Bold',sans-serif] tracking-wider uppercase transition-colors cursor-pointer"
              title="Imprimir ou Salvar em PDF"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 14h12v8H6z" />
              </svg>
              <span>Imprimir / PDF</span>
            </button>

            <button
              onClick={onClose}
              type="button"
              className="flex items-center gap-1.5 bg-[#f3f3f1] hover:bg-[#03191d] hover:text-white text-[#03191d] px-3.5 py-1.5 rounded-full text-[11px] font-['Raleway:Bold',sans-serif] tracking-wider uppercase transition-colors cursor-pointer"
            >
              <span>Fechar</span>
              <span className="text-[10px] opacity-60 hidden sm:inline">
                [ESC]
              </span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto modal-scroll px-6 sm:px-10 py-8 flex-1 flex flex-col gap-8">
          {/* Header Card */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-[rgba(3,25,29,0.1)]">
            <div className="flex flex-col">
              <h2 className="font-['Raleway:Black',sans-serif] font-black text-[32px] sm:text-[40px] text-[#0a0a0a] tracking-[-1px] leading-tight">
                Raoni Burali
              </h2>
              <p className="font-['Raleway:Bold',sans-serif] font-bold text-[14px] text-[#155dfc] tracking-wider uppercase mt-1">
                UX / Product Designer Sênior
              </p>
              <p className="font-['Raleway:Regular',sans-serif] text-[13px] text-[#6a7282] mt-1">
                20+ anos de experiência • Brasil • Remoto & Híbrido
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href="https://linkedin.com/in/raoniburali"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0a0a0a] text-white hover:bg-[#155dfc] transition-colors px-4 py-2 rounded-full text-[11px] font-['Raleway:Bold',sans-serif] tracking-wider uppercase flex items-center gap-2"
              >
                LinkedIn
              </a>
              <button
                type="button"
                onClick={() => {
                  onClose()
                  onOpenContact()
                }}
                className="bg-[#155dfc] text-white hover:bg-[#03191d] transition-colors px-4 py-2 rounded-full text-[11px] font-['Raleway:Bold',sans-serif] tracking-wider uppercase flex items-center gap-2 cursor-pointer"
              >
                Falar Comigo
              </button>
            </div>
          </div>

          {/* Resumo */}
          <div className="flex flex-col gap-3">
            <h4 className="font-['Raleway:Bold',sans-serif] font-bold text-[12px] tracking-[2px] uppercase text-[#155dfc]">
              Resumo Profissional
            </h4>
            <p className="font-['Raleway:Regular',sans-serif] text-[15px] leading-[1.7] text-[#03191d]/85">
              Profissional com mais de duas décadas de trajetória no ecossistema
              digital, combinando visão estratégica de negócios, liderança de
              design e rigor metodológico. Especialista em conduzir descobertas
              aprofundadas (Product Discovery), estruturar sistemas escaláveis
              (Design Systems & Design Ops) e desenhar soluções digitais de alto
              impacto que transformam métricas de conversão, engajamento e
              retenção de usuários.
            </p>
          </div>

          {/* Competências */}
          <div className="flex flex-col gap-3">
            <h4 className="font-['Raleway:Bold',sans-serif] font-bold text-[12px] tracking-[2px] uppercase text-[#155dfc]">
              Competências & Habilidades Estratégicas
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                "Product Discovery & Estratégia",
                "Design Ops & Governança",
                "Design Systems & Tokens",
                "UX Research & Entrevistas",
                "Arquitetura de Informação",
                "Otimização de Conversão (CRO)",
                "Prototipação Interativa",
                "Métricas UX (SUS, CSAT, CES)",
                "Facilitação & Design Sprints",
              ].map((skill, i) => (
                <div
                  key={i}
                  className="bg-[#f8f8f6] p-3 rounded-xl border border-[rgba(3,25,29,0.06)] flex items-center gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#155dfc]" />
                  <span className="font-['Raleway:SemiBold',sans-serif] text-[12px] text-[#03191d]">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Trajetória */}
          <div className="flex flex-col gap-4">
            <h4 className="font-['Raleway:Bold',sans-serif] font-bold text-[12px] tracking-[2px] uppercase text-[#155dfc]">
              Experiência Profissional
            </h4>
            <div className="flex flex-col divide-y divide-[rgba(3,25,29,0.08)]">
              {[
                {
                  role: "Product Designer Sênior",
                  company: "Mouts by Vitru Educação",
                  period: "2024 — Presente",
                  desc: "Liderança de iniciativas de UX para as maiores instituições de ensino superior (UniCesumar e Uniasselvi), focando em retenção, experiência do aluno e produtos digitais educacionais.",
                },
                {
                  role: "Product Designer Sênior",
                  company: "Hiplatform",
                  period: "2022 — 2023",
                  desc: "Concepção do catálogo de produtos integrado para mensageria omnichannel e ferramentas de atendimento B2B, diminuindo tempo de resposta e acelerando vendas assistidas.",
                },
                {
                  role: "Product Designer Sênior",
                  company: "Sicredi",
                  period: "2021 — 2022",
                  desc: "Membro ativo da Guilda de UX do Sicredi, estabelecendo playbooks de discovery, rituais de design critique e consistência entre mais de 50 designers distribuídos.",
                },
                {
                  role: "UX/UI Product Designer Sênior",
                  company: "Stefanini by Banco do Brasil",
                  period: "2020 — 2021",
                  desc: "Redesenho da experiência e acessibilidade do portal corporativo e sistemas internos de homologação de fornecedores do Banco do Brasil com conformidade WCAG.",
                },
                {
                  role: "UX/UI Product Designer Pleno",
                  company: "Portobello",
                  period: "2019 — 2020",
                  desc: "Redesign da plataforma Arch Trends, hub de inspiração para arquitetos, alavancando engajamento e métricas de busca em mais de 45%.",
                },
              ].map((exp, i) => (
                <div
                  key={i}
                  className="py-4 first:pt-0 last:pb-0 flex flex-col gap-1.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h5 className="font-['Raleway:Bold',sans-serif] font-bold text-[16px] text-[#03191d]">
                      {exp.role}{" "}
                      <span className="font-normal text-[#155dfc]">
                        @ {exp.company}
                      </span>
                    </h5>
                    <span className="font-['Inter:Regular',sans-serif] text-[11px] uppercase tracking-wider text-[#6a7282]">
                      {exp.period}
                    </span>
                  </div>
                  <p className="font-['Raleway:Regular',sans-serif] text-[13px] leading-[1.6] text-[#03191d]/75">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Ferramentas e Idiomas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[rgba(3,25,29,0.08)]">
            <div className="flex flex-col gap-2">
              <h5 className="font-['Raleway:Bold',sans-serif] font-bold text-[11px] tracking-[1.5px] uppercase text-[#6a7282]">
                Ferramentas & Tecnologias
              </h5>
              <p className="font-['Raleway:Regular',sans-serif] text-[13px] text-[#03191d]/85 leading-relaxed">
                Figma, Miro, Hotjar, Google Analytics, Amplitude, Jira,
                Confluence, Design Tokens, HTML/CSS, React (familiaridade), Git.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="font-['Raleway:Bold',sans-serif] font-bold text-[11px] tracking-[1.5px] uppercase text-[#6a7282]">
                Idiomas
              </h5>
              <p className="font-['Raleway:Regular',sans-serif] text-[13px] text-[#03191d]/85 leading-relaxed">
                Português (Nativo) • Inglês (Profissional para negócios e
                trabalho global).
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Contact Modal Component ── */
function ContactModal({
  isOpen,
  onClose,
  onCopyEmail,
}: {
  isOpen: boolean
  onClose: () => void
  onCopyEmail: () => void
}) {
  const [formSent, setFormSent] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "Landing Page",
    message: "",
  })

  useEffect(() => {
    if (!isOpen) {
      setFormSent(false)
      return
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSent(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-[rgba(3,25,29,0.75)] backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Falar com Raoni Burali"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ type: "spring", damping: 26, stiffness: 320 }}
        className="relative w-full max-w-lg bg-white rounded-[24px] shadow-2xl overflow-hidden my-auto p-6 sm:p-8 flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#155dfc]" />
            <h3 className="font-['Raleway:Bold',sans-serif] font-bold text-[12px] tracking-[2px] uppercase text-[#03191d]">
              Vamos Conversar
            </h3>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-1.5 rounded-full hover:bg-[#f3f3f1] text-[#03191d] transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2.5 2.5L11.5 11.5M11.5 2.5L2.5 11.5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div>
          <h2 className="font-['Raleway:Black',sans-serif] font-black text-[26px] text-[#0a0a0a] leading-tight">
            Pronto para transformar seu próximo projeto?
          </h2>
          <p className="font-['Raleway:Regular',sans-serif] text-[14px] text-[#6a7282] mt-1.5">
            Escolha o canal mais rápido ou envie uma mensagem direta abaixo:
          </p>
        </div>

        {/* Quick Contact Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href="https://wa.me/5544999999999?text=Ol%C3%A1%20Raoni!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white hover:bg-[#20ba59] font-['Raleway:Bold',sans-serif] text-[11px] tracking-wider uppercase py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-5.705 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
            </svg>
            WhatsApp Direto
          </a>

          <button
            type="button"
            onClick={onCopyEmail}
            className="border border-[#03191d] hover:bg-[#03191d] hover:text-white text-[#03191d] font-['Raleway:Bold',sans-serif] text-[11px] tracking-wider uppercase py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Copiar E-mail
          </button>
        </div>

        {/* Message Form */}
        {formSent ? (
          <div className="bg-[#155dfc]/10 border border-[#155dfc]/20 rounded-2xl p-6 text-center flex flex-col items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-[#155dfc] text-white flex items-center justify-center text-lg font-bold">
              ✓
            </span>
            <h4 className="font-['Raleway:Bold',sans-serif] text-[16px] text-[#03191d]">
              Mensagem enviada com sucesso!
            </h4>
            <p className="font-['Raleway:Regular',sans-serif] text-[13px] text-[#6a7282]">
              Obrigado pelo contato, {formData.name || "amigo"}. Entrarei em
              contato em até 24 horas.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-2 bg-[#03191d] text-white text-[11px] font-['Raleway:Bold',sans-serif] uppercase tracking-wider px-5 py-2 rounded-full cursor-pointer hover:bg-[#155dfc] transition-colors"
            >
              Concluir
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="font-['Raleway:Bold',sans-serif] text-[10px] tracking-[1.5px] uppercase text-[#6a7282]">
                Seu Nome
              </label>
              <input
                required
                type="text"
                placeholder="Como podemos te chamar?"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="border border-gray-200 rounded-xl px-3.5 py-2.5 text-[14px] text-[#03191d] focus:outline-none focus:border-[#155dfc]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-['Raleway:Bold',sans-serif] text-[10px] tracking-[1.5px] uppercase text-[#6a7282]">
                Seu E-mail
              </label>
              <input
                required
                type="email"
                placeholder="exemplo@empresa.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="border border-gray-200 rounded-xl px-3.5 py-2.5 text-[14px] text-[#03191d] focus:outline-none focus:border-[#155dfc]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-['Raleway:Bold',sans-serif] text-[10px] tracking-[1.5px] uppercase text-[#6a7282]">
                Interesse de Projeto
              </label>
              <select
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
                className="border border-gray-200 rounded-xl px-3.5 py-2.5 text-[14px] text-[#03191d] focus:outline-none focus:border-[#155dfc] bg-white"
              >
                <option value="Landing Page">
                  Landing Page de Alta Conversão
                </option>
                <option value="Produto Digital">
                  Desenvolvimento de Produto Digital / SaaS
                </option>
                <option value="Design System">
                  Design System & Design Ops
                </option>
                <option value="Consultoria UX">
                  Consultoria UX & Discovery Estratégico
                </option>
                <option value="Outro">Outro Desafio</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-['Raleway:Bold',sans-serif] text-[10px] tracking-[1.5px] uppercase text-[#6a7282]">
                Mensagem ou Breve Resumo
              </label>
              <textarea
                required
                rows={3}
                placeholder="Conte um pouco sobre o momento da sua empresa e o objetivo desejado..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="border border-gray-200 rounded-xl px-3.5 py-2.5 text-[14px] text-[#03191d] focus:outline-none focus:border-[#155dfc]"
              />
            </div>

            <button
              type="submit"
              className="bg-[#155dfc] hover:bg-[#03191d] text-white font-['Raleway:Bold',sans-serif] text-[12px] tracking-[1.5px] uppercase py-3.5 px-6 rounded-full transition-colors cursor-pointer mt-1 flex items-center justify-center gap-2 shadow-md"
            >
              Enviar Mensagem
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.5 8.5L7.5 3.5M2.5 3.5H7.5V8.5"
                  stroke="white"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        )}
      </motion.div>
    </motion.div>
  )
}

/* ── Floating Navigation / Back to Top ── */
function FloatingNav({ onOpenContact }: { onOpenContact: () => void }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 420)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#03191d]/90 backdrop-blur-md text-white p-1.5 rounded-full shadow-2xl border border-white/10 transition-all duration-300">
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        type="button"
        onClick={onOpenContact}
        className="bg-[#155dfc] hover:bg-[#155dfc]/90 text-white font-['Raleway:Bold',sans-serif] text-[10px] tracking-wider uppercase px-4 py-2.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
        title="Falar com Raoni"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#00e7ff] animate-pulse" />
        Falar Comigo
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="p-2.5 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
        title="Voltar ao topo"
        aria-label="Voltar ao topo"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 11.5V2.5M2.5 7L7 2.5L11.5 7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>
    </div>
  )
}

/* ── Toast Notification ── */
function ToastNotification({ message }: { message: string | null }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[110] bg-[#03191d] text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2.5 border border-[#155dfc]/40 text-[12px] font-['Raleway:Bold',sans-serif] tracking-wide"
        >
          <span className="text-[#00e7ff] font-bold">✓</span>
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ── Root App ── */
export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [curriculumOpen, setCurriculumOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage(null)
    }, 3200)
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("raoniburali@gmail.com")
    showToast("E-mail copiado para a área de transferência!")
  }

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject || curriculumOpen || contactOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [selectedProject, curriculumOpen, contactOpen])

  // Project navigation indices
  const currentProjectIndex = selectedProject
    ? allProjectsData.findIndex((p) => p.id === selectedProject.id)
    : 0

  const handleNextProject = () => {
    const nextIdx = (currentProjectIndex + 1) % allProjectsData.length
    setSelectedProject(allProjectsData[nextIdx])
  }

  const handlePrevProject = () => {
    const prevIdx =
      (currentProjectIndex - 1 + allProjectsData.length) %
      allProjectsData.length
    setSelectedProject(allProjectsData[prevIdx])
  }

  return (
    <div className="relative min-h-full">
      <Nav onOpenContact={() => setContactOpen(true)} />
      <HeroSection onOpenContact={() => setContactOpen(true)} />
      <MarqueeSection />
      <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />
      <ManifestoBlock
        quote="As pessoas não lembram apenas do que usam. "
        bold="Lembram de como se sentiram."
      />
      <AboutSection onOpenCurriculum={() => setCurriculumOpen(true)} />
      <TrustSection />
      <ExperienceSection />
      <ManifestoBlock
        quote="Interface é superfície. "
        bold="Experiência é memória."
      />
      <MetodoSection />
      <TestimonialsSection />
      <ContactSection
        onOpenContact={() => setContactOpen(true)}
        onCopyEmail={handleCopyEmail}
      />
      <Footer />

      {/* Interactive Modals with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            key="case-study-modal"
            project={selectedProject}
            currentIndex={currentProjectIndex}
            totalProjects={allProjectsData.length}
            onClose={() => setSelectedProject(null)}
            onNext={handleNextProject}
            onPrev={handlePrevProject}
            onOpenContact={() => setContactOpen(true)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {curriculumOpen && (
          <CurriculumModal
            key="curriculum-modal"
            isOpen={curriculumOpen}
            onClose={() => setCurriculumOpen(false)}
            onOpenContact={() => setContactOpen(true)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {contactOpen && (
          <ContactModal
            key="contact-modal"
            isOpen={contactOpen}
            onClose={() => setContactOpen(false)}
            onCopyEmail={handleCopyEmail}
          />
        )}
      </AnimatePresence>

      <FloatingNav onOpenContact={() => setContactOpen(true)} />

      <ToastNotification message={toastMessage} />
    </div>
  )
}
