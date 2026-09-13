import { Icon } from './Icon'
import { MathFormula } from './MathFormula'

export function FinalCallToAction() {
  return (
    <section className="bg-sujita-paper px-20 py-[90px] text-center max-[700px]:px-5 max-[700px]:py-[70px]">
      <div className="flex flex-col items-center gap-[22px]">
        <div className="flex min-h-[34px] flex-wrap items-center justify-center gap-2.5 font-serif text-base leading-normal font-semibold tracking-[1px] text-sujita-green-light max-[700px]:gap-[7px] max-[700px]:text-[15px]">
          <MathFormula
            displayMode
            tex={String.raw`\text{教科書}+\text{先生の工夫} \xrightarrow{\text{すうがく仕立て}} \text{明日の授業}`}
          />
        </div>
        <h2 className="m-0 text-[42px] font-bold max-[700px]:text-[clamp(30px,8vw,33px)]">
          次のプリントを、今ここから。
        </h2>
        <p className="m-0 text-base text-sujita-muted">
          インストール不要。PCブラウザですぐに始められます。
        </p>
        <a
          className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-sujita-accent px-7 py-4 text-[17px] font-extrabold whitespace-nowrap text-white shadow-[0_6px_16px_rgb(201_109_46_/_20%)] transition hover:-translate-y-px hover:bg-[#db7f36] hover:shadow-[0_9px_22px_rgb(201_109_46_/_28%)] focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-sujita-accent/75 motion-reduce:transition-none"
          href="https://app.sujita.jp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          すうがく仕立てを開く
          <Icon name="arrow" />
        </a>
        <p className="m-0 text-xs text-sujita-muted max-[700px]:leading-[1.8] max-[700px]:[overflow-wrap:anywhere]">
          https://app.sujita.jp/　｜　推奨：最新版 Chrome / Edge・横幅1024px以上のPC
        </p>
      </div>
    </section>
  )
}
