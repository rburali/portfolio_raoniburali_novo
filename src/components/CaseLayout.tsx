import React, { useEffect } from "react"
import { motion } from "framer-motion"
import LogoRaoniHeader from "@/imports/LogoRaoniHeader"
import imgLogoRodape from "@/imports/LOGO_RODAPE.png"

interface CaseLayoutProps {
  title: string
  client?: string
  category?: string
  slug: string
  onNavigate: (to: string) => void
  children?: React.ReactNode
}

export default function CaseLayout({
  title,
  client,
  category,
  onNavigate,
  children,
}: CaseLayoutProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-[#f3f3f1] text-[#03191d]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[rgba(243,243,241,0.94)] backdrop-blur-md border-b border-[rgba(3,25,29,0.06)] px-6 md:px-12 py-4">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              onNavigate("/")
            }}
            className="flex items-center gap-2 select-none"
            aria-label="Home"
          >
            <div className="w-[63px] h-[42px] flex items-center justify-center">
              <LogoRaoniHeader />
            </div>
          </a>

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault()
                onNavigate("/")
              }}
              className="flex items-center gap-2 font-['Raleway:Bold',sans-serif] font-bold text-[11px] tracking-[1.5px] uppercase text-[#03191d] hover:text-[#155dfc] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M11 7H3M3 7L7 11M3 7L7 3"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Voltar para a Home</span>
            </a>

            <motion.a
              href="https://wa.me/5548999135689?text=Vi%20seu%20site%20e%20fiquei%20interessado%20nos%20seus%20servi%C3%A7os."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden sm:flex bg-[#1a1a1a] text-white font-['Raleway:Medium',sans-serif] font-medium text-[11.2px] tracking-[1.12px] uppercase items-center gap-2 px-5 py-2.5 rounded-full hover:bg-[#155dfc] transition-colors duration-300 shadow-md cursor-pointer"
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
            </motion.a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-[1200px] w-full mx-auto px-6 md:px-12 py-12 md:py-20 flex flex-col">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[12px] font-['Raleway:Medium',sans-serif] text-[#6a7282]">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              onNavigate("/")
            }}
            className="hover:text-[#155dfc] transition-colors"
          >
            Home
          </a>
          <span>/</span>
          <a
            href="/#projetos"
            onClick={(e) => {
              e.preventDefault()
              onNavigate("/#projetos")
            }}
            className="hover:text-[#155dfc] transition-colors"
          >
            Projetos
          </a>
          <span>/</span>
          <span className="text-[#03191d] font-semibold">{title}</span>
        </nav>

        {/* Project Header */}
        <div className="mb-12">
          {(category || client) && (
            <div className="flex items-center gap-3 mb-3">
              {category && (
                <p className="font-['Raleway:SemiBold',sans-serif] font-semibold text-[11px] tracking-[2.6px] uppercase text-[#155dfc]">
                  {category}
                </p>
              )}
              {category && client && <span className="text-gray-400">•</span>}
              {client && (
                <span className="font-['Raleway:Medium',sans-serif] text-[11px] tracking-[1.5px] uppercase text-[#6a7282]">
                  {client}
                </span>
              )}
            </div>
          )}

          <h1 className="font-['Raleway:Black',sans-serif] font-black text-[clamp(36px,6vw,68px)] leading-[1.05] tracking-[-0.03em] uppercase text-[#0a0a0a] mb-6">
            {title}
          </h1>
        </div>

        {/* Case Body (Current: Em breve, Scalable for future UX case content) */}
        {children ? (
          children
        ) : (
          <div className="bg-white rounded-[24px] p-8 md:p-16 border border-[rgba(3,25,29,0.06)] shadow-sm flex flex-col items-center justify-center text-center my-auto min-h-[360px]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#155dfc]/10 text-[#155dfc] font-['Raleway:Bold',sans-serif] text-[11px] tracking-[2px] uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#155dfc] animate-pulse" />
              Em breve
            </div>

            <h2 className="font-['Raleway:Bold',sans-serif] font-bold text-[clamp(22px,3vw,30px)] text-[#03191d] mb-4">
              Estudo de Caso em Estruturação
            </h2>

            <p className="font-['Raleway:Regular',sans-serif] text-[15px] md:text-[16px] text-[#6a7282] max-w-lg leading-relaxed mb-8">
              A documentação completa de UX, discovery, arquitetura da informação, design de interface e métricas de impacto deste projeto está sendo preparada.
            </p>

            <button
              onClick={() => onNavigate("/#projetos")}
              type="button"
              className="border-[1.8px] border-[#03191d] flex items-center gap-3 px-8 py-3.5 rounded-full font-['Raleway:Bold',sans-serif] font-bold text-[12px] tracking-[1.2px] uppercase text-[#03191d] hover:bg-[#03191d] hover:text-white transition-all duration-300 cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M11 7H3M3 7L7 11M3 7L7 3"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Voltar aos Projetos
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
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
    </div>
  )
}
