import React, { useEffect, useRef, useCallback, MouseEvent } from "react"
import svgPaths from "@/imports/CasoDeEstudoVestibularUnicesumar/svg-gqrgp2oyjk"
import imgHeroMedicina from "@/imports/CasoDeEstudoVestibularUnicesumar/hero-composicao-medicina.png"
import imgLaptop from "@/imports/CasoDeEstudoVestibularUnicesumar/8bda84c504914d17b03801295eeb40774833ba9f.png"
import imgPhone from "@/imports/CasoDeEstudoVestibularUnicesumar/4cc2372bde310ebd1c402970c972632493ad68ec.png"
import imgInfoArch from "@/imports/CasoDeEstudoVestibularUnicesumar/9a19153988fb006a0c5e0625397d81bd24fa9c3f.png"
import imgWireframe from "@/imports/CasoDeEstudoVestibularUnicesumar/72c3c6e48944cc2d725bfea2180e73f9d8283009.png"
import imgLpMedicina from "@/imports/CasoDeEstudoVestibularUnicesumar/3b0c8281b0227e042ea51d34d14d5e52d1e99b55.png"
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
                O processo seletivo do vestibular de Medicina da UniCesumar é uma das maiores captações da instituição, exigindo campanhas de mídia expressivas. No entanto, a antiga experiência digital gerava alta evasão de potenciais candidatos devido a formulários densos e sobrecarga cognitiva.
              </p>
              <p className="font-['Raleway:Regular',sans-serif] text-[#6a7282] text-[15.5px] sm:text-[16px] leading-[1.7] max-w-[669px] mt-6">
                Era imperativo reimaginar a jornada com uma narrativa mobile-first que comunicasse a excelência e autoridade hospitalar da universidade, transformando cliques de campanhas em inscrições concluídas com fricção mínima.
              </p>
              <div className="border-l-[2px] border-[#155dfc] pl-6 sm:pl-8 py-2 mt-10 sm:mt-14">
                <p className="font-['Raleway:Light',sans-serif] font-light text-[#0a0a0a] text-[22px] sm:text-[28px] leading-[1.35] max-w-[636px]">
                  "Não basta gerar tráfego qualificado se a experiência de conversão não acolhe e orienta o candidato na decisão de sua vida."
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
  { title: "Clareza", body: "O produto não comunicava seu valor principal. Candidatos chegavam sem entender o que fazer primeiro." },
  { title: "Conversão", body: "A jornada de ativação tinha pontos de fricção não mapeados que impactavam diretamente a taxa de inscrição." },
  { title: "Consistência", body: "Diferentes times construíram funcionalidades de forma independente, criando experiências fragmentadas." },
  { title: "Escalabilidade", body: "A arquitetura de UI não suportava o crescimento contínuo. Cada nova funcionalidade era construída do zero." },
]

function TheChallengeSection() {
  return (
    <div className="bg-[#155dfc] w-full py-16 sm:py-28">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-start max-w-[1320px] px-6 sm:px-12 lg:px-16 w-full">
          <div className="reveal">
            <p className="font-['Raleway:Medium',sans-serif] text-[#f3f3f1] text-[10px] tracking-[3px] uppercase leading-[15px] opacity-70">
              03 — Desafios
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
          <div className="bg-[#e5e7eb] h-px w-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mt-14 sm:mt-20 w-full">
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
            <div className="lg:col-span-7 flex flex-col reveal-right" style={{ transitionDelay: "120ms" }}>
              {strategy.map(({ label, dot, text }, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex flex-col items-center w-8 shrink-0">
                    <div
                      className="mt-6 timeline-dot rounded-full size-[9px] shrink-0"
                      style={{ background: dot, animationDelay: `${i * 0.4}s` }}
                    />
                    {i < strategy.length - 1 && <div className="bg-[#e5e7eb] w-px flex-1 mt-1" style={{ height: 46 }} />}
                  </div>
                  <div className="pb-8 sm:pb-10">
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
    <RoverCard
      className={`col-span-1 lg:col-span-6 ${imageLeft ? "lg:order-first" : "lg:col-start-7"} reveal-scale rounded-[14px] overflow-hidden shadow-sm`}
      style={{ transitionDelay: "160ms" } as React.CSSProperties}
    >
      <img alt={imageAlt} src={image} className="w-full h-full object-cover" style={{ minHeight: 260 }} />
    </RoverCard>
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
            num="Decisão 01"
            title="Priorizamos o problema certo"
            context="Existiam múltiplas hipóteses sobre o que causava a evasão na etapa inicial de cadastro."
            reason="A análise de dados mostrou que 68% dos candidatos desistiam no formulário excessivo. O problema não era atratividade da marca — era sobrecarga burocrática."
            result="Redirecionamos o fluxo para uma jornada em etapas simples antes de qualquer wireframe."
            image={imgLaptop}
            imageAlt="Mockup em laptop"
          />

          <DecisionBlock
            num="Decisão 02"
            title="Substituímos o fluxo linear"
            context="O fluxo existente tinha 7 etapas sequenciais com taxa de abandono progressiva."
            reason="Pesquisa com calouros revelou que eles queriam ver a estrutura dos laboratórios reais antes de se comprometerem."
            result="Criamos um modelo de revelação progressiva que reduziu o tempo para conversão em 40%."
            image={imgPhone}
            imageAlt="Mockup em smartphone"
            imageLeft
          />

          {/* Decision 03 */}
          <div className="border-t border-[#e5e7eb] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12 sm:py-16 items-center">
            <div className="col-span-1 lg:col-span-5 reveal-left">
              <p className="font-['Courier_New',monospace] text-[#155dfc] text-[10px] tracking-[3px] leading-[15px] font-bold">
                Decisão 03
              </p>
              <h3 className="font-['Raleway:ExtraBold',sans-serif] font-extrabold text-[#0a0a0a] text-[26px] sm:text-[30px] leading-[1.25] mt-4">
                Design System como produto interno
              </h3>
              <div className="flex flex-col gap-5 mt-6">
                <div>
                  <p className="font-['Raleway:Medium',sans-serif] text-[#6a7282] text-[9px] tracking-[2.5px] uppercase leading-[13.5px]">
                    Contexto
                  </p>
                  <p className="font-['Raleway:Regular',sans-serif] text-[#6a7282] text-[14px] leading-[22px] mt-1.5">
                    Cada campanha construía UI independentemente, criando inconsistência sistêmica e lentidão técnica.
                  </p>
                </div>
                <div>
                  <p className="font-['Raleway:Medium',sans-serif] text-[#6a7282] text-[9px] tracking-[2.5px] uppercase leading-[13.5px]">
                    Por que essa decisão
                  </p>
                  <p className="font-['Raleway:Regular',sans-serif] text-[#0a0a0a] text-[14px] leading-[22px] mt-1.5">
                    Tratamos o design system como produto com tokens e componentes reutilizáveis, reduzindo tempo de desenvolvimento.
                  </p>
                </div>
                <div className="border-l-[2px] border-[#155dfc] pl-4 py-1">
                  <p className="font-['Raleway:Medium',sans-serif] text-[#155dfc] text-[9px] tracking-[2.5px] uppercase leading-[13.5px]">
                    Resultado
                  </p>
                  <p className="font-['Raleway:SemiBold',sans-serif] text-[#0a0a0a] text-[14px] leading-[20px] mt-1">
                    Velocidade de lançamento de novas páginas aumentou 3x nas campanhas seguintes.
                  </p>
                </div>
              </div>
            </div>

            {/* Design System visual */}
            <RoverCard
              className="col-span-1 lg:col-span-6 lg:col-start-7 reveal-right rounded-[16px] overflow-hidden bg-[#00a6e2] shadow-sm"
              style={{ transitionDelay: "160ms" } as React.CSSProperties}
            >
              <div className="h-[320px] sm:h-[380px] flex flex-col items-center justify-center relative overflow-hidden p-6">
                <p className="font-['Poppins:Bold',sans-serif] text-white text-[140px] sm:text-[180px] leading-none opacity-20 absolute select-none pointer-events-none">
                  Me
                </p>
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <p className="font-['Poppins:Bold',sans-serif] text-white text-[28px] sm:text-[32px] leading-tight tracking-wider">
                    POPPINS
                  </p>
                  <div className="flex gap-2 sm:gap-3 mt-2">
                    {["#001321", "#002c4d", "#00467a", "#0073c8", "#a9daff"].map((c) => (
                      <div key={c} className="flex flex-col items-center gap-2">
                        <div className="h-[42px] sm:h-[52px] w-[42px] sm:w-[52px] rounded-full shadow-md" style={{ background: c }} />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col items-center mt-4 gap-0.5">
                    <p className="font-['Poppins:Regular',sans-serif] text-white text-[15px]">Regular</p>
                    <p className="font-['Poppins:Medium',sans-serif] text-white text-[15px]">Medium</p>
                    <p className="font-['Poppins:Bold',sans-serif] text-white text-[15px]">Bold</p>
                  </div>
                </div>
              </div>
            </RoverCard>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── The Solution ─────────────────────────────────────────────────────────────

const solutionCards = [
  { image: imgLpMedicina, caption: "Fluxos críticos foram simplificados de 7 para 3 etapas sem perda de funcionalidade." },
  { image: null, caption: "Interface construída sobre um sistema de grid rigoroso com hierarquia tipográfica intencional." },
  { image: null, caption: "72 componentes documentados com variantes, tokens e diretrizes de uso." },
  { image: null, caption: "Experiência mobile-first com adaptação progressiva para tablet e desktop." },
]

function TheSolution() {
  return (
    <div className="bg-[#0a0a0a] w-full py-16 sm:py-28">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-start max-w-[1320px] px-6 sm:px-12 lg:px-16 w-full">
          <div className="reveal">
            <p className="font-['Raleway:Medium',sans-serif] text-[#afc8ff] text-[10px] tracking-[3px] uppercase leading-[15px]">
              06 — A Solução
            </p>
            <h2 className="font-['Raleway:ExtraBold',sans-serif] font-extrabold text-[#f3f3f1] text-[36px] sm:text-[48px] leading-[1.2] mt-4">
              A solução
            </h2>
          </div>

          {/* Main solution image banner */}
          <div className="reveal-scale mt-10 sm:mt-16 w-full rounded-[16px] overflow-hidden bg-[#1a1a1a]" style={{ transitionDelay: "100ms" }}>
            <div className="relative h-[360px] sm:h-[500px] lg:h-[611px] opacity-95 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <img alt="Arquitetura da informação" className="absolute w-full object-cover" style={{ height: "113.8%", top: "-14.15%", left: 0 }} src={imgInfoArch} />
              </div>
              <div className="absolute inset-0 bg-[#155dfc]/60 mix-blend-color" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <img alt="Wireframe" className="max-w-full max-h-full object-contain drop-shadow-2xl" src={imgWireframe} />
              </div>
            </div>
          </div>

          {/* 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 w-full stagger">
            {solutionCards.map(({ image, caption }, i) => (
              <RoverCard key={i} className="reveal flex flex-col gap-4">
                <div className="rounded-[12px] overflow-hidden bg-[#155dfc] h-[190px] sm:h-[210px] relative">
                  {image && (
                    <img alt="" className="w-full h-full object-cover" src={image} />
                  )}
                </div>
                <p className="font-['Raleway:Regular',sans-serif] text-[#f4f8ff] text-[13px] leading-[20px]">
                  {caption}
                </p>
              </RoverCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Impact Section ───────────────────────────────────────────────────────────

const metrics = [
  { category: "Negócio", value: "80%", label: "Conversão de leads na ponta do funil" },
  { category: "Produto", value: "3×", label: "Aumento do tempo que o usuário permaneceu na página" },
  { category: "Usuário", value: "−40%", label: "Redução no tempo para conclusão da inscrição" },
  { category: "Marca", value: "NPS 72", label: "Satisfação dos candidatos — recorde histórico da campanha" },
]

function ImpactSection() {
  return (
    <div className="bg-[#f3f3f1] w-full pt-16 sm:pt-24 pb-12 sm:pb-16">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-start max-w-[1320px] px-6 sm:px-12 lg:px-16 w-full">
          <div className="bg-[#e5e7eb] h-px w-full" />
          <div className="reveal pt-14 sm:pt-20">
            <p className="font-['Raleway:Medium',sans-serif] text-[#6a7282] text-[10px] tracking-[3px] uppercase leading-[15px]">
              07 — Impacto
            </p>
            <h2 className="font-['Raleway:ExtraBold',sans-serif] font-extrabold text-[#0a0a0a] text-[34px] sm:text-[48px] leading-[1.2] mt-4">
              Impacto
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 sm:mt-16 w-full stagger">
            {metrics.map(({ category, value, label }) => (
              <RoverCard key={value} className="reveal border-t border-[#e5e7eb] pt-6 sm:pt-8">
                <p className="font-['Raleway:Medium',sans-serif] text-[#155dfc] text-[9px] tracking-[2.5px] uppercase leading-[13.5px]">
                  {category}
                </p>
                <p className="metric-value font-['Raleway:ExtraBold',sans-serif] font-extrabold text-[#0a0a0a] text-[52px] sm:text-[68px] tracking-[-1.5px] leading-tight mt-3">
                  {value}
                </p>
                <p className="font-['Raleway:Regular',sans-serif] text-[#6a7282] text-[14px] leading-[22px] mt-3">
                  {label}
                </p>
              </RoverCard>
            ))}
          </div>

          {/* Qualitative impact */}
          <div className="border-t border-[#e5e7eb] grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-16 sm:mt-20 pt-10 sm:pt-12 w-full">
            <div className="reveal-left">
              <p className="font-['Raleway:Medium',sans-serif] text-[#6a7282] text-[9px] tracking-[2.5px] uppercase leading-[13.5px]">
                Impacto Qualitativo
              </p>
              <p className="font-['Raleway:Regular',sans-serif] text-[#0a0a0a] text-[16px] sm:text-[18px] leading-[1.65] mt-3">
                O projeto estabeleceu um novo patamar de excelência para os canais de vestibular da Vitru Educação. O Design System concebido passou a orientar todas as esteiras de novos cursos com agilidade e consistência visual rigorosa.
              </p>
            </div>
            <div className="reveal-right" style={{ transitionDelay: "120ms" }}>
              <p className="font-['Raleway:Medium',sans-serif] text-[#6a7282] text-[9px] tracking-[2.5px] uppercase leading-[13.5px]">
                Desdobramentos
              </p>
              <p className="font-['Raleway:Regular',sans-serif] text-[#0a0a0a] text-[16px] sm:text-[18px] leading-[1.65] mt-3">
                A estrutura de formulário progressivo foi replicada para mais de 12 produtos e cursos estratégicos da instituição, multiplicando a taxa de captação global e reduzindo custos operacionais.
              </p>
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
        <ImpactSection />
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
