import svgPaths from "./svg-7krqpxlkox"
import imgChatGptImageAug132026103242Am1 from "./b2b849ee4a3b8a4f0bf2c0d6bc26c9877597d1ac.png"

function Paragraph() {
  return (
    <div
      className="content-stretch flex flex-col h-[40px] items-start pb-[24px] relative shrink-0 w-[535px]"
      data-name="Paragraph"
    >
      <p className="[word-break:break-word] font-['Raleway:SemiBold',sans-serif] font-semibold leading-[15.6px] relative shrink-0 text-[#99a1af] text-[10.4px] tracking-[2.6px] uppercase whitespace-nowrap">
        SEJA BEM VINDO AO MEU PORTFOLIO! MEU NOME É
      </p>
    </div>
  )
}

function Heading() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Heading 1"
    >
      <p className="[word-break:break-word] font-['Raleway:Black',sans-serif] font-black leading-[61.2px] relative shrink-0 text-[#0a0a0a] text-[100px] tracking-[-3.6px] whitespace-nowrap">
        Raoni Burali
      </p>
    </div>
  )
}

function Text() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Text"
    >
      <p className="[word-break:break-word] font-['Raleway:Bold',sans-serif] font-bold leading-[15.6px] relative shrink-0 text-[10.4px] text-white tracking-[1.04px] uppercase whitespace-nowrap">
        Disponível para projetos
      </p>
    </div>
  )
}

function Container2() {
  return (
    <div className="absolute flex h-[43.167px] items-center justify-center left-[132.69px] top-[55.09px] w-[207.131px]">
      <div className="-rotate-2 flex-none">
        <div
          className="bg-[#155dfc] border-2 border-solid border-white content-stretch drop-shadow-[0px_20px_12.5px_rgba(0,0,0,0.1),0px_8px_5px_rgba(0,0,0,0.1)] flex items-center px-[16px] py-[8px] relative rounded-[15252000px]"
          data-name="Container"
        >
          <Text />
        </div>
      </div>
    </div>
  )
}

function Container1() {
  return (
    <div
      className="content-stretch flex flex-col h-[91px] items-start pb-[24px] relative shrink-0 w-[535px]"
      data-name="Container"
    >
      <Heading />
      <Container2 />
    </div>
  )
}

function Heading1() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <p className="[word-break:break-word] font-['Raleway:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#101828] text-[0px] tracking-[-0.5px] w-[547px] whitespace-pre-wrap">
        <span className="leading-[27.5px] text-[26px]">{`Design não é `}</span>
        <span className="leading-[27.5px] text-[26px]">{`só `}</span>
        <span className="leading-[27.5px] text-[26px]">sobre interfaces</span>
        <span className="leading-[27.5px] text-[26px]">{` e marcas`}</span>
        <span className="leading-[27.5px] text-[26px]">
          {`. `}
          <br aria-hidden />
        </span>
        <span className="font-['Raleway:Bold',sans-serif] font-bold leading-[27.5px] text-[26px]">{`É sobre `}</span>
        <span className="font-['Raleway:Bold',sans-serif] font-bold leading-[27.5px] text-[#155dfc] text-[26px]">
          pessoas dispostas a fazer diferença!
        </span>
      </p>
    </div>
  )
}

function Paragraph1() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Paragraph"
    >
      <p className="[word-break:break-word] font-['Raleway:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#6a7282] text-[16px] w-[512px] whitespace-pre-wrap">
        {`UX Designer Sênior com mais de 20 anos criando `}
        <br aria-hidden />
        {`experiências digitais, marcas, sites e softwares `}
        <br aria-hidden />
        que unem estratégia, profundidade e valor.
      </p>
    </div>
  )
}

function ParagraphMargin() {
  return (
    <div
      className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full"
      data-name="Paragraph:margin"
    >
      <Paragraph1 />
    </div>
  )
}

function ArrowUpRight() {
  return (
    <div className="relative shrink-0 size-[11.996px]" data-name="ArrowUpRight">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="11.9957"
        preserveAspectRatio="none"
        viewBox="0 0 11.9957 11.9957"
        width="11.9957"
      >
        <g id="ArrowUpRight">
          <path
            d="M3.5 8.49693L8.49821 3.49872"
            id="Vector"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.24955"
          />
          <path
            d="M3.5 3.49872H8.49821V8.49693"
            id="Vector_2"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.24955"
          />
        </g>
      </svg>
    </div>
  )
}

function Link() {
  return (
    <div
      className="bg-[#1a1a1a] content-stretch drop-shadow-[0px_10px_7.5px_rgba(209,213,220,0.5),0px_4px_3px_rgba(209,213,220,0.5)] flex gap-[8px] items-center px-[24px] py-[12px] relative rounded-[15252000px] shrink-0"
      data-name="Link"
    >
      <p className="[word-break:break-word] font-['Raleway:Medium',sans-serif] font-medium leading-[16.8px] relative shrink-0 text-[11.2px] text-white tracking-[1.12px] uppercase whitespace-nowrap">
        Ver Projetos
      </p>
      <ArrowUpRight />
    </div>
  )
}

function Container5() {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0"
      data-name="Container"
    >
      <Link />
    </div>
  )
}

function Container4() {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Container5 />
    </div>
  )
}

function ContainerMargin1() {
  return (
    <div
      className="content-stretch flex flex-col items-center pt-[32px] relative shrink-0 w-full"
      data-name="Container:margin"
    >
      <Container4 />
    </div>
  )
}

function Container3() {
  return (
    <div
      className="content-stretch flex flex-col h-[228.991px] items-start max-w-[512px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Heading1 />
      <ParagraphMargin />
      <ContainerMargin1 />
    </div>
  )
}

function ContainerMargin() {
  return (
    <div
      className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full"
      data-name="Container:margin"
    >
      <Container3 />
    </div>
  )
}

function Container() {
  return (
    <div
      className="col-1 content-stretch flex flex-col h-[646px] items-start justify-center justify-self-stretch pl-[96px] pr-[80px] pt-[32px] relative row-1 self-start shrink-0"
      data-name="Container"
    >
      <Paragraph />
      <Container1 />
      <ContainerMargin />
    </div>
  )
}

function Container7() {
  return (
    <div
      className="absolute h-[526.974px] left-[-20px] top-[94px] w-[695px]"
      data-name="Container"
    >
      <div
        className="absolute h-[646px] left-[-49px] top-[-83px] w-[673px]"
        data-name="ChatGPT Image Aug 13, 2026, 10_32_42 AM 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgChatGptImageAug132026103242Am1}
        />
      </div>
      <div className="absolute left-[498px] size-[63px] top-[244px]">
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="63"
          preserveAspectRatio="none"
          viewBox="0 0 63 63"
          width="63"
        >
          <circle
            cx="31.5"
            cy="31.5"
            id="Ellipse 28"
            r="30.5"
            stroke="#155DFC"
            strokeOpacity="0.5"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  )
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="20"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
        width="20"
      >
        <g clipPath="url(#clip0_0_4)" id="Icon">
          <path
            d={svgPaths.p3b27f100}
            id="Vector"
            stroke="white"
            strokeOpacity="0.8"
            strokeWidth="1.25"
          />
          <path
            d={svgPaths.p3755a000}
            id="Vector_2"
            stroke="white"
            strokeOpacity="0.8"
            strokeWidth="1.25"
          />
        </g>
        <defs>
          <clipPath id="clip0_0_4">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

function Container8() {
  return (
    <div
      className="absolute border-[0.909px] border-[rgba(255,255,255,0.3)] border-solid content-stretch flex items-center justify-center left-[48px] opacity-59 rounded-[15252000px] size-[48px] top-[239.49px]"
      data-name="Container"
    >
      <Icon />
    </div>
  )
}

function Container9() {
  return (
    <div className="absolute flex items-center justify-center left-[44px] size-[73.895px] top-[294.01px]">
      <div className="flex-none rotate-12">
        <div
          className="border-2 border-[rgba(21,93,252,0.5)] border-solid relative rounded-[8px] size-[62.303px]"
          data-name="Container"
        />
      </div>
    </div>
  )
}

function Container6() {
  return (
    <div
      className="col-2 h-[646px] justify-self-stretch overflow-clip relative rounded-tl-[64px] row-1 self-start shrink-0"
      data-name="Container"
    >
      <Container7 />
      <Container8 />
      <Container9 />
      <div className="absolute flex items-center justify-center left-[214px] size-[94.305px] top-[435px]">
        <div className="flex-none rotate-15">
          <div className="relative size-[77px]">
            <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
              <svg
                className="block size-full"
                fill="none"
                height="57.75"
                preserveAspectRatio="none"
                viewBox="0 0 66.684 57.75"
                width="66.684"
              >
                <path
                  d={svgPaths.p8e71e00}
                  id="Polygon 1"
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
  )
}

export default function Hero() {
  return (
    <div
      className="bg-[#ebebeb] grid grid-cols-[__695px_695px] grid-rows-[_526.97px] pt-[72px] relative size-full"
      data-name="Hero"
    >
      <Container />
      <Container6 />
    </div>
  )
}
