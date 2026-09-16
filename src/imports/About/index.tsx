import svgPaths from "./svg-xv4swc9yd4"
import imgImageRaoniBuraliUxDesignerSenior from "./c8f8109980066def6b46aa8d6d08399af506b206.png"

function Text() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Text"
    >
      <p className="[word-break:break-word] font-['Raleway:SemiBold',sans-serif] font-semibold leading-[15.6px] relative shrink-0 text-[#155dfc] text-[10.4px] tracking-[2.6px] uppercase whitespace-nowrap">
        Sobre
      </p>
    </div>
  )
}

function Paragraph() {
  return (
    <div
      className="content-stretch flex flex-col items-start mb-[-18px] relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="[word-break:break-word] font-['Raleway:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#03191d] text-[0px] w-[543px]">
        <span className="leading-[32px] text-[22px]">{`Com uma trajetória de `}</span>
        <span className="font-['Raleway:SemiBold',sans-serif] font-semibold leading-[32px] text-[#155dfc] text-[22px]">
          duas décadas
        </span>
        <span className="leading-[32px] text-[22px]">{` moldando o cenário digital, minha prática vai além da estética. Atuo na intersecção entre `}</span>
        <span className="font-['Raleway:SemiBold',sans-serif] font-semibold leading-[32px] text-[#155dfc] text-[22px]">
          entendimento de negócios
        </span>
        <span className="leading-[32px] text-[22px]">{` e `}</span>
        <span className="font-['Raleway:SemiBold',sans-serif] font-semibold leading-[32px] text-[#155dfc] text-[22px]">{`entrega de diferencial estratégico. `}</span>
      </p>
    </div>
  )
}

function Paragraph1() {
  return (
    <div
      className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-[567.003px]"
      data-name="Paragraph"
    >
      <p className="[word-break:break-word] font-['Raleway:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#03191d] text-[0px] w-[567px]">
        <span className="leading-[32px] text-[22px]">{`Acredito no `}</span>
        <span className="font-['Raleway:SemiBold',sans-serif] font-semibold leading-[32px] text-[#155dfc] text-[22px]">
          método como essência
        </span>
        <span className="leading-[32px] text-[22px]">{` fundamental do design. Busco criar não apenas produtos`}</span>
        <span className="leading-[32px] text-[22px]">/marcas/sites e apps</span>
        <span className="leading-[32px] text-[22px]">{`, mas `}</span>
        <span className="font-['Raleway:SemiBold',sans-serif] font-semibold leading-[32px] text-[#155dfc] text-[22px]">
          memórias e experiências digitais autênticas
        </span>
        <span className="leading-[32px] text-[22px]">.</span>
      </p>
    </div>
  )
}

function Container2() {
  return (
    <div
      className="col-1 content-stretch flex flex-col h-[275px] items-start justify-self-stretch relative row-1 self-start shrink-0"
      data-name="Container"
    >
      <Paragraph />
      <Paragraph1 />
    </div>
  )
}

function Container1() {
  return (
    <div
      className="gap-x-[64px] gap-y-[64px] grid grid-cols-[__567.00px_567.01px] grid-rows-[_296.94px] h-[262px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Container2 />
    </div>
  )
}

function ContainerMargin() {
  return (
    <div
      className="content-stretch flex flex-col h-[396px] items-start pt-[24px] relative shrink-0 w-full"
      data-name="Container:margin"
    >
      <p className="[word-break:break-word] font-['Raleway:Black',sans-serif] font-black h-[81px] leading-[52.8px] relative shrink-0 text-[#03191d] text-[48px] tracking-[-1.2px] uppercase w-[259px]">
        SOBRE MIM
      </p>
      <Container1 />
    </div>
  )
}

function Group() {
  return (
    <div className="absolute inset-[0_-0.01%_0.99%_0]" data-name="Group">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="15.8419"
        preserveAspectRatio="none"
        viewBox="0 0 16.0022 15.8419"
        width="16.0022"
      >
        <g id="Group">
          <path d={svgPaths.p1dd9a800} fill="white" id="Vector" />
          <g id="in">
            <path d={svgPaths.p2a48c400} fill="black" id="Vector_2" />
            <path d={svgPaths.p19ce6c00} fill="black" id="Vector_3" />
          </g>
        </g>
      </svg>
    </div>
  )
}

function Layer() {
  return (
    <div
      className="absolute contents inset-[0_-0.01%_0.99%_0]"
      data-name="Layer 1"
    >
      <Group />
    </div>
  )
}

function LogoLinkedin() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[16px]"
      data-name="logo_linkedin"
    >
      <Layer />
    </div>
  )
}

function Button() {
  return (
    <div
      className="bg-black content-stretch drop-shadow-[0px_10px_7.5px_rgba(209,213,220,0.5),0px_4px_3px_rgba(209,213,220,0.5)] flex gap-[8px] h-[40.767px] items-center px-[24px] py-[12px] relative rounded-[30504000px] shrink-0"
      data-name="Button"
    >
      <p className="[word-break:break-word] font-['Raleway:Medium',sans-serif] font-medium leading-[16.8px] relative shrink-0 text-[11.2px] text-center text-white tracking-[1.12px] uppercase whitespace-nowrap">
        LINKEDIN
      </p>
      <LogoLinkedin />
    </div>
  )
}

function Download() {
  return (
    <div className="relative shrink-0 size-[16.186px]" data-name="download">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="16.1855"
        preserveAspectRatio="none"
        viewBox="0 0 16.1855 16.1855"
        width="16.1855"
      >
        <g id="download">
          <mask
            height="17"
            id="mask0_0_9"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="17"
            x="0"
            y="0"
          >
            <rect
              fill="#D9D9D9"
              height="16.1855"
              id="Bounding box"
              width="16.1855"
            />
          </mask>
          <g mask="url(#mask0_0_9)">
            <path d={svgPaths.p13ba0c80} fill="#1C1B1F" id="download_2" />
          </g>
        </g>
      </svg>
    </div>
  )
}

function Button1() {
  return (
    <div
      className="border border-black border-solid content-stretch flex gap-[8px] h-[40.767px] items-center px-[24px] py-[12px] relative rounded-[30504000px] shadow-[0px_10px_15px_0px_rgba(209,213,220,0.5),0px_4px_6px_0px_rgba(209,213,220,0.5)] shrink-0"
      data-name="Button"
    >
      <p className="[word-break:break-word] font-['Raleway:Medium',sans-serif] font-medium leading-[16.8px] relative shrink-0 text-[11.2px] text-black text-center tracking-[1.12px] uppercase whitespace-nowrap">
        CURRICULUM
      </p>
      <Download />
    </div>
  )
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
      <Button />
      <Button1 />
    </div>
  )
}

function Container() {
  return (
    <div
      className="content-stretch flex flex-col h-[484px] items-start max-w-[1400px] relative shrink-0 w-[629px]"
      data-name="Container"
    >
      <Text />
      <ContainerMargin />
      <Frame1 />
    </div>
  )
}

function ImageRaoniBuraliUxDesignerSenior() {
  return (
    <div
      className="col-[1/span_2] h-[509px] justify-self-start relative rounded-[20px] row-[1/span_3] self-start shrink-0 w-[594px]"
      data-name="Image (Raoni Burali — UX Designer Sênior)"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img
          alt=""
          className="absolute h-[100.82%] left-[-0.07%] max-w-none top-[-0.08%] w-full"
          src={imgImageRaoniBuraliUxDesignerSenior}
        />
      </div>
    </div>
  )
}

function Container3() {
  return (
    <div
      className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(3,minmax(0,1fr))] h-[451.994px] relative rounded-[20px] shrink-0 w-[567.01px]"
      data-name="Container"
    >
      <ImageRaoniBuraliUxDesignerSenior />
    </div>
  )
}

function Frame() {
  return (
    <div className="content-stretch flex h-[509px] items-start justify-center relative shrink-0 w-full">
      <Container />
      <Container3 />
    </div>
  )
}

export default function About() {
  return (
    <div
      className="bg-white content-stretch flex flex-col items-start pb-[42px] pt-[46px] px-[96px] relative size-full"
      data-name="About"
    >
      <Frame />
    </div>
  )
}
