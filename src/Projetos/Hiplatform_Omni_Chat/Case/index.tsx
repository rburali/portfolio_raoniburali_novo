import React from "react"
import CaseLayout from "@/components/CaseLayout"

interface CaseProps {
  onNavigate: (to: string) => void
}

export default function HiplatformOmniChatCase({ onNavigate }: CaseProps) {
  return (
    <CaseLayout
      title="Hiplatform Omni Chat"
      client="Hiplatform"
      category="Desenvolvimento de Produto"
      slug="hiplatform-omni-chat"
      onNavigate={onNavigate}
    >
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
    </CaseLayout>
  )
}
