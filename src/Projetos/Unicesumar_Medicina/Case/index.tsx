import React, { useEffect, useRef, useCallback, MouseEvent } from "react"
import svgPaths from "@/imports/CasoDeEstudoVestibularUnicesumar/svg-gqrgp2oyjk"
import imgHeroMedicina from "@/imports/CasoDeEstudoVestibularUnicesumar/hero-composicao-medicina.png"
import imgDecisao1 from "@/imports/CasoDeEstudoVestibularUnicesumar/decisao-1.png"
import imgDecisao2 from "@/imports/CasoDeEstudoVestibularUnicesumar/decisao-2.png"
import imgDecisao3 from "@/imports/CasoDeEstudoVestibularUnicesumar/decisao-3.png"
import imgMockupPrincipal from "@/imports/CasoDeEstudoVestibularUnicesumar/Mockup_principal.png"
import imgMockupHands from "@/imports/CasoDeEstudoVestibularUnicesumar/Mockup_hands.png"
import imgProxCase from "@/imports/CasoDeEstudoVestibularUnicesumar/d9bb843826c7fe559fd5994aa1b57dfc59cff2b1.png"
import imgProxCase1 from "@/imports/CasoDeEstudoVestibularUnicesumar/dde623d84acab1d612f65cd576e99f14f8b5311d.png"
import imgLogoRodape from "@/imports/LOGO_RODAPE.png"

// ─── Interactive Hooks ────────────────────────────────────────────────────────

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale")
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible")
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

function useMetricReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".metric-value")
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate")
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.3 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

// ─── Rover Card ───────────────────────────────────────────────────────────────

function RoverCard({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotX = ((y - cy) / cy) * -5
    const rotY = ((x - cx) / cx) * 5
    el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.01)`
  }, [])

  const onLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)"
  }, [])

  return (
    <div
      ref={ref}
      className={`rover-card ${className}`}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  )
}

// ─── UniCesumar Logo ──────────────────────────────────────────────────────────

function LogoHorizontal() {
  return (
    <div className="h-[38px] sm:h-[44px] relative shrink-0 w-[200px] sm:w-[245px]">
      <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 245 44">
        <g clipPath="url(#clip-logo-unicesumar)">
          <path clipRule="evenodd" d={svgPaths.p133ca300} fill="#014169" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p33efbc80} fill="#014169" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p19695f00} fill="#014169" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p3d643300} fill="#014169" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.pe239a00} fill="#014169" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p2e2f9340} fill="#014169" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p38428e00} fill="#014169" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p1691f800} fill="#014169" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.pb52e880} fill="#014169" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p34a98e40} fill="#014169" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p2eee9600} fill="#014169" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p37f2c580} fill="#014169" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p3c7d7500} fill="#014169" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.pb426800} fill="#014169" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p2f349300} fill="#014169" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p16a54800} fill="#014169" fillRule="evenodd" />
        </g>
        <defs>
          <clipPath id="clip-logo-unicesumar">
            <rect fill="white" height="44" width="245" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

// ─── Button: Ver Site no Ar ───────────────────────────────────────────────────

function VerSiteNoArButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://vempra.unicesumar.edu.br/medicina"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 h-[38px] px-5 rounded-full bg-[#56b9ff] hover:bg-[#3ea5f5] hover:shadow-md hover:scale-[1.02] active:scale-[0.98] text-[#03191d] font-['Raleway:Bold',sans-serif] font-bold text-[11px] tracking-[1.5px] uppercase transition-all duration-200 shrink-0 select-none cursor-pointer ${className}`}
      aria-label="Ver site no ar - Vestibular de Medicina UniCesumar (abre em nova aba)"
    >
      <span className="size-[7px] rounded-full bg-white shrink-0" aria-hidden="true" />
      <span>VER SITE NO AR</span>
    </a>
  )
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

function CaseHero() {
  return (
    <div className="bg-[#f3f3f1] w-full pt-10 sm:pt-16 pb-12">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-start max-w-[1320px] px-6 sm:px-12 lg:px-16 w-full">
          {/* Label row */}
          <div className="reveal flex gap-4 items-center shrink-0 mb-3">
            <p className="font-['Raleway:Medium',sans-serif] font-medium text-[#155dfc] text-[10px] tracking-[3px] uppercase leading-[15px]">
              Estudo de Caso
            </p>
            <div className="bg-[#155dfc] h-px w-[60px]" />
          </div>

          {/* Title and Action Button */}
          <div className="reveal pt-4 sm:pt-8 w-full" style={{ transitionDelay: "80ms" }}>
            <LogoHorizontal />
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8 mt-6">
              <h1 className="font-['Raleway:ExtraBold',sans-serif] font-extrabold text-[clamp(28px,4.5vw,46px)] tracking-[-1.5px] text-[#0a0a0a] leading-[1.15] max-w-[840px]">
                Redesenhando a estratégia de <br className="hidden sm:inline" />
                desenvolvimento da{" "}
                <span className="text-black">LP do Vestibular de Medicina</span>
              </h1>
              <div className="shrink-0 pb-1 sm:pb-2">
                <VerSiteNoArButton />
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <div className="reveal pt-6 sm:pt-8" style={{ transitionDelay: "160ms" }}>
            <p className="font-['Raleway:Regular',sans-serif] font-normal text-[#6a7282] text-[16px] sm:text-[20px] leading-[1.6] max-w-[937px]">
              Descubra como desenvolvemos uma Landing Page para o curso de Medicina e conseguimos uma conversão de 80% dos leads na ponta do funil para uma campanha de mídia milionária.
            </p>
          </div>

          {/* Meta grid */}
          <div
            className="reveal border-t border-[#99a1af] grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-[repeat(7,auto)] lg:justify-between gap-x-6 gap-y-8 lg:gap-y-0 py-8 mt-12 sm:mt-16 w-full"
            style={{ transitionDelay: "240ms" }}
          >
            {[
              { label: "Cliente", value: "Vitru Educação" },
              { label: "Ano", value: "2026" },
              {
                label: "Função",
                value: (
                  <>
                    Product Designer<br />Sênior
                  </>
                ),
              },
              {
                label: "Equipe",
                value: (
                  <>
                    1 Designer · 1 Dev · 1<br />PO
                  </>
                ),
              },
              { label: "Duração", value: "30 Dias" },
              {
                label: "Escopo",
                value: (
                  <>
                    Discovery, Estratégia,<br />UI, Dev
                  </>
                ),
              },
              { label: "Plataforma", value: "Web · Mobile" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col">
                <p className="font-['Raleway:Medium',sans-serif] font-medium text-[#155dfc] text-[9px] tracking-[2.5px] uppercase leading-[13.5px]">
                  {label}
                </p>
                <p className="font-['Raleway:SemiBold',sans-serif] font-semibold text-[#0a0a0a] text-[13.5px] sm:text-[14px] leading-[19px] mt-1.5">
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Hero image banner */}
          <div className="reveal-scale mt-8 sm:mt-14 w-full rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-lg" style={{ transitionDelay: "80ms" }}>
            <img
              src={imgHeroMedicina}
              alt="Composição visual da campanha do Vestibular de Medicina UniCesumar com estudante de medicina e logotipo oficial"
              className="w-full h-auto block object-contain rounded-[16px] sm:rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Context Section ──────────────────────────────────────────────────────────

function ContextSection() {
  return (
    <div className="bg-[#f3f3f1] w-full py-16 sm:py-24">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-start max-w-[1320px] px-6 sm:px-12 lg:px-16 w-full">
          <div className="bg-[#e5e7eb] h-px w-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mt-14 sm:mt-20 w-full">
            {/* Left: heading */}
            <div className="lg:col-span-5 reveal-left">
              <p className="font-['Raleway:Medium',sans-serif] text-[#6a7282] text-[10px] tracking-[3px] uppercase leading-[15px]">
                CONTEXTO
              </p>
              <h2 className="font-['Raleway:ExtraBold',sans-serif] font-extrabold text-[#0a0a0a] text-[34px] sm:text-[44px] leading-[1.2] mt-4">
                O que estava acontecendo?
              </h2>
            </div>

            {/* Right: body */}
            <div className="lg:col-span-7 reveal-right" style={{ transitionDelay: "120ms" }}>
              <p className="font-['Raleway:Regular',sans-serif] text-[#6a7282] text-[15.5px] sm:text-[16px] leading-[1.7] max-w-[669px]">
                O processo seletivo do vestibular de Medicina da UniCesumar é uma das maiores captações da instituição, exigindo campanhas de mídia expressivas. No entanto, a antiga experiência digital gerava alta evasão de potenciais candidatos devido a formulários complexos, jornada de fluxo quebrada e sobrecarga cognitiva no preenchimento do cadastro.
              </p>
              <p className="font-['Raleway:Regular',sans-serif] text-[#6a7282] text-[15.5px] sm:text-[16px] leading-[1.7] max-w-[669px] mt-6">
                Era importante comunicar a qualidade do curso de Medicina com o intuito de gerar a inscrição para o processo seletivo na página, transformando tráfego pago em conversão para contato comercial futuro e uma nutrição do lead pela equipe comercial.
              </p>
              <div className="border-l-[2px] border-[#155dfc] pl-6 sm:pl-8 py-2 mt-10 sm:mt-14">
                <p className="font-['Raleway:Light',sans-serif] font-light text-[#0a0a0a] text-[22px] sm:text-[28px] leading-[1.35] max-w-[636px]">
                  "Não basta gerar tráfego qualificado se a experiência de conversão não acolhe e orienta o candidato na decisão de se inscrever na escolha mais importante de sua vida profissional."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Challenge Section ────────────────────────────────────────────────────────

const challenges = [
  {
    title: "Clareza",
    body: "O curso não comunicava seu valor principal. Usuários chegavam sem entender o que fazer primeiro.",
  },
  {
    title: "Conversão",
    body: "A jornada de inscrição do aluno tinha pontos de fricção não mapeados que impactavam diretamente a conversão/inscrição do aluno.",
  },
  {
    title: "Consistência",
    body: "Concentramos toda a jornada de inscrição no vestibular na Landing Page, direcionando todo o esforço publicitário para essa página gerando leads que podiam ser facilmente nutridos e convertidos pela equipe comercial.",
  },
  {
    title: "Design",
    body: "O design foi todo desenvolvido para tirar o máximo de dúvidas possível do aluno, com visual moderno e alinhado com a marca Unicesumar. Tratamos o Design tanto visual quanto de conteúdo como diferencial competitivo.",
  },
]

function TheChallengeSection() {
  return (
    <div className="bg-[#155dfc] w-full py-16 sm:py-28">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-start max-w-[1320px] px-6 sm:px-12 lg:px-16 w-full">
          <div className="reveal">
            <p className="font-['Raleway:Medium',sans-serif] text-[#f3f3f1] text-[10px] tracking-[3px] uppercase leading-[15px] opacity-70">
              03 — The Challenge
            </p>
            <h2 className="font-['Raleway:ExtraBold',sans-serif] font-extrabold text-[#f3f3f1] text-[36px] sm:text-[48px] leading-[1.2] mt-4">
              O desafio
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 sm:mt-16 w-full stagger">
            {challenges.map(({ title, body }) => (
              <div
                key={title}
                className="reveal border-t border-[rgba(255,255,255,0.2)] pt-6 pb-2"
              >
                <h3 className="font-['Raleway:ExtraBold',sans-serif] font-extrabold text-[#f3f3f1] text-[24px] leading-[32px]">
                  {title}
                </h3>
                <p className="font-['Raleway:Regular',sans-serif] text-[rgba(243,243,241,0.7)] text-[14px] leading-[22px] mt-3">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Strategic Approach ───────────────────────────────────────────────────────

const strategy = [
  { label: "Problema", dot: "#155dfc", text: "Baixa ativação de usuários no primeiro acesso" },
  { label: "Insight", dot: "#0a0a0a", text: "Usuários não entendiam o valor antes de se engajar" },
  { label: "Direção", dot: "#0a0a0a", text: "Antecipar o valor antes da etapa de cadastro" },
  { label: "Decisão", dot: "#0a0a0a", text: "Redesenhar o modelo mental de entrada no produto" },
  { label: "Solução", dot: "#0a0a0a", text: "Nova experiência de primeiro acesso com revelação progressiva" },
]

function StrategicApproach() {
  return (
    <div className="bg-white w-full py-16 sm:py-24">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-start max-w-[1320px] px-6 sm:px-12 lg:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 w-full">
            {/* Left: heading */}
            <div className="lg:col-span-5 reveal-left">
              <p className="font-['Raleway:Medium',sans-serif] text-[#6a7282] text-[10px] tracking-[3px] uppercase leading-[15px]">
                04 — Abordagem Estratégica
              </p>
              <h2 className="font-['Raleway:ExtraBold',sans-serif] font-extrabold text-[#0a0a0a] text-[34px] sm:text-[46px] leading-[1.2] mt-4">
                Como transformamos o problema em direção
              </h2>
            </div>

            {/* Right: timeline */}
            <div className="lg:col-span-7 flex flex-col">
              {strategy.map(({ label, dot, text }, i) => (
                <div
                  key={i}
                  className="reveal relative flex gap-5 sm:gap-6 items-start"
                  style={{
                    transitionDelay: `${i * 140}ms`,
                    transitionDuration: "600ms",
                  }}
                >
                  {/* Connecting vertical line to next step */}
                  {i < strategy.length - 1 && (
                    <div className="absolute left-2 -translate-x-1/2 top-[7px] bottom-[-7px] w-px bg-[#d1d5db]" />
                  )}

                  {/* Marker column */}
                  <div className="relative flex flex-col items-center shrink-0 w-4">
                    <div className="h-[14px] flex items-center justify-center shrink-0 z-10 relative">
                      <div
                        className="timeline-dot rounded-full size-[9px] shrink-0"
                        style={{ backgroundColor: dot, animationDelay: `${i * 0.4}s` }}
                      />
                    </div>
                  </div>

                  {/* Step content */}
                  <div className={i < strategy.length - 1 ? "pb-8 sm:pb-10" : ""}>
                    <p className="font-['Raleway:Medium',sans-serif] text-[#6a7282] text-[9px] tracking-[3px] uppercase leading-[13.5px]">
                      {label}
                    </p>
                    <p className="font-['Raleway:SemiBold',sans-serif] font-semibold text-[#0a0a0a] text-[17px] sm:text-[18px] leading-[25px] mt-1.5">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Key Decisions ────────────────────────────────────────────────────────────

function DecisionBlock({
  num,
  title,
  context,
  reason,
  result,
  image,
  imageAlt,
  imageLeft = false,
}: {
  num: string
  title: string
  context: string
  reason: string
  result: string
  image: string
  imageAlt: string
  imageLeft?: boolean
}) {
  const textCol = (
    <div className={`col-span-1 lg:col-span-5 ${imageLeft ? "lg:col-start-8" : ""} reveal${imageLeft ? "-right" : "-left"}`}>
      <p className="font-['Courier_New',monospace] text-[#155dfc] text-[10px] tracking-[3px] leading-[15px] font-bold">
        {num}
      </p>
      <h3 className="font-['Raleway:ExtraBold',sans-serif] font-extrabold text-[#0a0a0a] text-[26px] sm:text-[30px] leading-[1.25] mt-4">
        {title}
      </h3>
      <div className="flex flex-col gap-5 mt-6">
        <div>
          <p className="font-['Raleway:Medium',sans-serif] text-[#6a7282] text-[9px] tracking-[2.5px] uppercase leading-[13.5px]">
            Contexto
          </p>
          <p className="font-['Raleway:Regular',sans-serif] text-[#6a7282] text-[14px] leading-[22px] mt-1.5">
            {context}
          </p>
        </div>
        <div>
          <p className="font-['Raleway:Medium',sans-serif] text-[#6a7282] text-[9px] tracking-[2.5px] uppercase leading-[13.5px]">
            Por que essa decisão
          </p>
          <p className="font-['Raleway:Regular',sans-serif] text-[#0a0a0a] text-[14px] leading-[22px] mt-1.5">
            {reason}
          </p>
        </div>
        <div className="border-l-[2px] border-[#155dfc] pl-4 py-1">
          <p className="font-['Raleway:Medium',sans-serif] text-[#155dfc] text-[9px] tracking-[2.5px] uppercase leading-[13.5px]">
            Resultado
          </p>
          <p className="font-['Raleway:SemiBold',sans-serif] text-[#0a0a0a] text-[14px] leading-[20px] mt-1">
            {result}
          </p>
        </div>
      </div>
    </div>
  )

  const imgCol = (
    <div
      className={`col-span-1 lg:col-span-6 ${imageLeft ? "lg:order-first" : "lg:col-start-7"} reveal-scale flex items-center justify-center`}
      style={{ transitionDelay: "160ms" } as React.CSSProperties}
    >
      <img alt={imageAlt} src={image} className="w-full h-auto object-contain block" />
    </div>
  )

  return (
    <div className="border-t border-[#e5e7eb] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12 sm:py-16 items-center">
      {imageLeft ? (
        <>
          {imgCol}
          {textCol}
        </>
      ) : (
        <>
          {textCol}
          {imgCol}
        </>
      )}
    </div>
  )
}

function KeyDecisions() {
  return (
    <div className="bg-[#f3f3f1] w-full pb-20 sm:pb-28">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-start max-w-[1320px] px-6 sm:px-12 lg:px-16 w-full">
          <div className="bg-[#e5e7eb] h-px w-full" />
          <div className="reveal pt-14 sm:pt-20 mb-6">
            <p className="font-['Raleway:Medium',sans-serif] text-[#6a7282] text-[10px] tracking-[3px] uppercase leading-[15px]">
              05 — Decisões-Chave
            </p>
            <h2 className="font-['Raleway:ExtraBold',sans-serif] font-extrabold text-[#0a0a0a] text-[34px] sm:text-[46px] leading-[1.2] mt-4">
              As decisões que mudaram o projeto
            </h2>
          </div>

          <DecisionBlock
            num="DECISÃO 1"
            title="Priorizamos o problema certo"
            context="Existiam múltiplas hipóteses sobre o que causava a evasão na etapa inicial de cadastro."
            reason="A análise de dados mostrou que 68% dos candidatos desistiam no formulário excessivo. O problema não era atratividade da marca — era sobrecarga burocrática."
            result="Redirecionamos o fluxo para uma jornada em etapas simples antes de qualquer wireframe."
            image={imgDecisao1}
            imageAlt="Tipografia Poppins"
          />

          <DecisionBlock
            num="DECISÃO 2"
            title="Substituímos o fluxo linear"
            context="O fluxo existente tinha 7 etapas sequenciais com taxa de abandono progressiva."
            reason="Pesquisa com calouros revelou que eles queriam ver a estrutura dos laboratórios reais antes de se comprometerem."
            result="Criamos um modelo de revelação progressiva que reduziu o tempo para conversão em 40%."
            image={imgDecisao2}
            imageAlt="Mockup em laptop e smartphone"
            imageLeft
          />

          <DecisionBlock
            num="DECISÃO 3"
            title="Design System como produto interno"
            context="Cada campanha construía UI independentemente, criando inconsistência sistêmica e lentidão técnica."
            reason="Tratamos o design system como produto com tokens e componentes reutilizáveis, reduzindo tempo de desenvolvimento."
            result="Velocidade de lançamento de novas páginas aumentou 3x nas campanhas seguintes."
            image={imgDecisao3}
            imageAlt="Telas em smartphones"
          />
        </div>
      </div>
    </div>
  )
}

// ─── The Solution & Impact ───────────────────────────────────────────────────

function TheSolution() {
  return (
    <div className="bg-[#00467a] w-full pt-16 sm:pt-24 lg:pt-28 pb-0 relative overflow-hidden">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-start max-w-[1320px] px-6 sm:px-12 lg:px-16 w-full relative">
          {/* 06 — The Solution Header */}
          <div className="reveal">
            <p className="font-['Raleway:Medium',sans-serif] text-[#afc8ff] text-[10px] tracking-[3px] uppercase leading-[15px]">
              06 — THE SOLUTION
            </p>
            <h2 className="font-['Raleway:ExtraBold',sans-serif] font-extrabold text-[#f3f3f1] text-[36px] sm:text-[48px] leading-[1.2] mt-4">
              A solução
            </h2>
          </div>

          {/* Desktop Mockup Laptop Banner */}
          <div
            className="reveal-scale mt-10 sm:mt-14 w-full relative z-10"
            style={{ transitionDelay: "100ms" }}
          >
            <img
              alt="A solução - Mockup Desktop Medicina UniCesumar"
              src={imgMockupPrincipal}
              className="w-full h-auto block max-w-[1192px] mx-auto select-none"
            />
          </div>

          {/* Bottom Area: 07 — Impact & Metrics (Left) + Mobile Hands (Right) */}
          <div className="w-full relative z-20">
            {/* Left Content Column: Impact, Metrics & Desdobramentos */}
            <div className="w-full lg:max-w-[580px] xl:max-w-[640px] pt-8 sm:pt-12 lg:pt-14 pb-12 sm:pb-16 lg:pb-20">
              <div className="reveal">
                <p className="font-['Raleway:Medium',sans-serif] text-[#afc8ff] text-[10px] tracking-[3px] uppercase leading-[15px]">
                  07 — IMPACT
                </p>
                <h2 className="font-['Raleway:ExtraBold',sans-serif] font-extrabold text-[#f3f3f1] text-[36px] sm:text-[48px] leading-[1.2] mt-4">
                  Impacto
                </h2>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 mt-10 sm:mt-12 w-full stagger">
                <div className="reveal border-t border-white/20 pt-6">
                  <p className="font-['Raleway:SemiBold',sans-serif] font-semibold text-white/80 text-[10px] sm:text-[11px] tracking-[2.5px] uppercase">
                    BUSINESS
                  </p>
                  <p className="metric-value font-['Raleway:ExtraBold',sans-serif] font-extrabold text-white text-[56px] sm:text-[76px] tracking-[-1.5px] leading-tight mt-2 sm:mt-3">
                    80%
                  </p>
                  <p className="font-['Raleway:Regular',sans-serif] text-white/90 text-[14px] sm:text-[15px] leading-[22px] mt-3">
                    Conversão de Leads Ponta de Funil
                  </p>
                </div>

                <div className="reveal border-t border-white/20 pt-6">
                  <p className="font-['Raleway:SemiBold',sans-serif] font-semibold text-white/80 text-[10px] sm:text-[11px] tracking-[2.5px] uppercase">
                    PRODUCT
                  </p>
                  <p className="metric-value font-['Raleway:ExtraBold',sans-serif] font-extrabold text-white text-[56px] sm:text-[76px] tracking-[-1.5px] leading-tight mt-2 sm:mt-3">
                    3×
                  </p>
                  <p className="font-['Raleway:Regular',sans-serif] text-white/90 text-[14px] sm:text-[15px] leading-[22px] mt-3">
                    Do tempo que o usuário ficou na página
                  </p>
                </div>
              </div>

              {/* Desdobramentos */}
              <div className="reveal mt-12 sm:mt-16" style={{ transitionDelay: "150ms" }}>
                <p className="font-['Raleway:SemiBold',sans-serif] font-semibold text-white/80 text-[10px] sm:text-[11px] tracking-[2.5px] uppercase">
                  DESDOBRAMENTOS
                </p>
                <p className="font-['Raleway:Medium',sans-serif] text-[#00a6e2] text-[16px] sm:text-[18px] leading-[1.6] mt-3 max-w-[500px]">
                  A metodologia aplicada neste projeto foi adotada como padrão para os próximos três grandes projetos da empresa.
                </p>
              </div>
            </div>

            {/* Desktop Mockup Hands: Absolute docked to bottom-right, overlapping laptop */}
            <div
              className="hidden lg:block absolute right-[-24px] xl:right-[-12px] 2xl:right-0 bottom-0 pointer-events-none z-30 w-[54%] lg:w-[58%] xl:w-[60%] max-w-[820px] xl:max-w-[900px]"
            >
              <img
                src={imgMockupHands}
                alt="Mockup mobile da solução Unicesumar Medicina"
                className="w-full h-auto block select-none drop-shadow-[-25px_25px_50px_rgba(0,0,0,0.4)]"
              />
            </div>

            {/* Mobile / Tablet Mockup Hands: Centered below metrics */}
            <div className="lg:hidden w-full flex justify-center mt-6 pb-0">
              <img
                src={imgMockupHands}
                alt="Mockup mobile da solução Unicesumar Medicina"
                className="w-[300px] sm:w-[400px] md:w-[480px] h-auto block select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Learnings ────────────────────────────────────────────────────────────────

const learnings = [
  {
    num: "01",
    title: "Problema certo antes de solução certa",
    body: "Passei as primeiras semanas questionando o escopo inicial. O problema real estava um nível acima do que estava sendo pedido. Aprender a diagnosticar antes de prescrever mudou completamente o resultado.",
  },
  {
    num: "02",
    title: "Design system é produto, não entregável",
    body: "A diferença entre um design system que a empresa usa e um que fica no Figma é simples: senso de dono, planejamento e adoção ativa. Tudo o que eu tinha feito antes era documentação. Isso foi produto.",
  },
  {
    num: "03",
    title: "A decisão mais difícil é o que não fazer",
    body: "Tivemos 12 oportunidades mapeadas. Escolhemos 3. As 9 restantes eram boas ideias no momento errado. Essa curadoria é o trabalho mais estratégico que um designer pode fazer.",
  },
]

function Learnings() {
  return (
    <div className="bg-white w-full py-16 sm:py-24">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-start max-w-[1320px] px-6 sm:px-12 lg:px-16 w-full">
          <div className="bg-[#e5e7eb] h-px w-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mt-14 sm:mt-20 w-full">
            <div className="lg:col-span-5 reveal-left">
              <p className="font-['Raleway:Medium',sans-serif] text-[#6a7282] text-[10px] tracking-[3px] uppercase leading-[15px]">
                08 — Aprendizados
              </p>
              <h2 className="font-['Raleway:ExtraBold',sans-serif] font-extrabold text-[#0a0a0a] text-[34px] sm:text-[46px] leading-[1.2] mt-4">
                O que eu aprendi
              </h2>
            </div>
            <div className="lg:col-span-7 reveal-right flex items-end pb-2" style={{ transitionDelay: "120ms" }}>
              <p className="font-['Raleway:Light',sans-serif] font-light text-[#6a7282] text-[17px] sm:text-[18px] leading-[1.65] max-w-[676px]">
                Cada projeto ensina algo que nenhum livro ensina. Aqui estão as três coisas que mudaram a forma como eu trabalho.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 sm:mt-16 w-full stagger">
            {learnings.map(({ num, title, body }) => (
              <RoverCard key={num} className="reveal border-t border-[#e5e7eb] pt-8 sm:pt-10">
                <p className="font-['Courier_New',monospace] text-[#155dfc] text-[9px] tracking-[3px] leading-[13.5px] font-bold">
                  {num}
                </p>
                <h3 className="font-['Raleway:ExtraBold',sans-serif] font-extrabold text-[#0a0a0a] text-[22px] sm:text-[24px] leading-[1.3] mt-4">
                  {title}
                </h3>
                <p className="font-['Raleway:Regular',sans-serif] text-[#6a7282] text-[14px] leading-[22px] mt-4">
                  {body}
                </p>
              </RoverCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Next Case Navigation ─────────────────────────────────────────────────────

function ArrowIcon({ flipped = false }: { flipped?: boolean }) {
  return (
    <div className={`h-[8px] w-[16px] ${flipped ? "rotate-180" : ""}`}>
      <svg fill="none" viewBox="0 0 15.99 7.99" width="16" height="8">
        <path d={svgPaths.p21036c80} stroke="#87ACFD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
      </svg>
    </div>
  )
}

function NextCase({ onNavigate }: { onNavigate: (to: string) => void }) {
  return (
    <div className="bg-[#155dfc] w-full">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-start max-w-[1320px] px-6 sm:px-12 lg:px-16 py-16 sm:py-24 w-full">
          <p className="reveal font-['Raleway:Medium',sans-serif] text-[#00e7ff] text-[10px] tracking-[3px] uppercase leading-[15px]">
            Navegar Entre Projetos
          </p>

          <div className="reveal flex flex-col md:flex-row items-stretch md:items-center gap-8 md:gap-10 mt-10 w-full" style={{ transitionDelay: "80ms" }}>
            {/* Previous */}
            <div
              onClick={() => onNavigate("/projetos/stefanini-banco-do-brasil")}
              className="flex gap-6 sm:gap-8 items-center group cursor-pointer flex-1 bg-white/5 hover:bg-white/10 p-6 rounded-[16px] transition-all"
            >
              <div className="flex flex-col gap-2 flex-1">
                <p className="font-['Raleway:Medium',sans-serif] text-[#87acfd] text-[9px] tracking-[2px] uppercase">
                  Projeto Anterior
                </p>
                <div className="font-['Raleway:ExtraBold',sans-serif] font-extrabold text-[#f3f3f1] text-[26px] sm:text-[34px] leading-tight">
                  Banco do Brasil
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <ArrowIcon flipped />
                  <span className="font-['Raleway:Bold',sans-serif] text-[#87acfd] text-[10px] tracking-[2px] uppercase group-hover:underline underline-offset-4 transition-all">
                    VER ESTUDO DE CASO
                  </span>
                </div>
              </div>
              <div className="rounded-[8px] overflow-hidden shrink-0 w-[140px] sm:w-[180px] h-[95px] sm:h-[110px] shadow-md">
                <img alt="Projeto anterior" src={imgProxCase} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>

            <div className="hidden md:block bg-[rgba(255,255,255,0.15)] w-px self-stretch" />

            {/* Next */}
            <div
              onClick={() => onNavigate("/projetos/uniasselvi-rafael-cortez")}
              className="flex gap-6 sm:gap-8 items-center group cursor-pointer flex-1 bg-white/5 hover:bg-white/10 p-6 rounded-[16px] transition-all"
            >
              <div className="rounded-[8px] overflow-hidden shrink-0 w-[140px] sm:w-[180px] h-[95px] sm:h-[110px] shadow-md order-last md:order-first">
                <img alt="Próximo projeto" src={imgProxCase1} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <p className="font-['Raleway:Medium',sans-serif] text-[#87acfd] text-[9px] tracking-[2px] uppercase">
                  Próximo Projeto
                </p>
                <div className="font-['Raleway:ExtraBold',sans-serif] font-extrabold text-[#f3f3f1] text-[26px] sm:text-[34px] leading-tight">
                  Rafael Cortez
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-['Raleway:Bold',sans-serif] text-[#87acfd] text-[10px] tracking-[2px] uppercase group-hover:underline underline-offset-4 transition-all">
                    VER ESTUDO DE CASO
                  </span>
                  <ArrowIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Main Case Component ──────────────────────────────────────────────────────

interface CaseProps {
  onNavigate: (to: string) => void
}

export default function UnicesumarMedicinaCase({ onNavigate }: CaseProps) {
  useScrollReveal()
  useMetricReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-[#f3f3f1] w-full min-h-screen flex flex-col overflow-x-hidden text-[#03191d]">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-[rgba(243,243,241,0.96)] backdrop-blur-md border-b border-[rgba(3,25,29,0.06)] px-6 sm:px-12 lg:px-16 py-4">
        <div className="max-w-[1320px] mx-auto flex items-center">
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
        </div>
      </header>

      {/* Case Study Full Content */}
      <main className="flex-1 w-full">
        <CaseHero />
        <ContextSection />
        <TheChallengeSection />
        <StrategicApproach />
        <KeyDecisions />
        <TheSolution />
        <Learnings />
        <NextCase onNavigate={onNavigate} />
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
