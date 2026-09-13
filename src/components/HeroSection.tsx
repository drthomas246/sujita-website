import { Icon } from './Icon'
import { MathFormula } from './MathFormula'

function EditorPreview() {
  return (
    <div className="editor-visual" aria-label="すうがく仕立ての編集画面イメージ">
      <div className="app-window">
        <div className="app-top">
          <span>一次関数｜確認プリント</span>
          <span className="pdf-mini">
            <Icon name="file" />
            PDF出力
          </span>
        </div>

        <div className="app-main">
          <div className="edit-pane">
            <div className="edit-label">問題 1</div>
            <div className="problem-input">
              次の一次関数のグラフを
              <br />
              かきなさい。
              <br />
              <MathFormula tex="y = 2x - 3" />
            </div>
            <div className="insert-button">＋ 小問を追加</div>
            <div className="insert-button">∑ 数式を挿入</div>
            <div className="insert-button">▦ 表を挿入</div>
          </div>

          <div className="preview-pane">
            <div className="preview-tabs">
              <b>● 問題のみ</b>
              <span>解答付き</span>
            </div>
            <div className="paper">
              <div className="paper-title">一次関数｜確認プリント</div>
              <div className="student">2年　　組　　番　名前＿＿＿＿＿＿＿＿</div>
              <div className="question">1　次の一次関数のグラフをかきなさい。</div>
              <div className="formula">
                <MathFormula tex="y = 2x - 3" />
              </div>
              <div className="graph">
                <div className="graph-line" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="flex min-h-[700px] items-center bg-[linear-gradient(120deg,#f7f5ed_0%,#eaf3e9_100%)] max-[1024px]:min-h-0">
      <div className="grid w-full grid-cols-[570px_630px] items-center justify-between gap-16 px-20 py-16 max-[1360px]:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] max-[1360px]:gap-8 max-[1360px]:px-10 max-[1024px]:grid-cols-1 max-[1024px]:py-14 max-[700px]:gap-10 max-[700px]:px-5 max-[700px]:py-12">
        <div className="flex min-w-0 flex-col gap-[22px] max-[1024px]:max-w-[650px]">
          <div className="inline-flex self-start items-center gap-2 rounded-full bg-[#dcebe1] px-[13px] py-2 text-sm font-bold text-sujita-green max-[700px]:max-w-full max-[700px]:text-xs max-[700px]:leading-6">
            <Icon name="graduate" />
            中学校数学の先生のための、数学プリント制作ツール
          </div>

          <h1 className="m-0 text-[53px] leading-[1.25] font-extrabold tracking-[-1.2px] text-sujita-ink max-[1360px]:text-[46px] max-[700px]:text-[clamp(35px,10vw,46px)] max-[700px]:tracking-[-0.8px]">
            教材づくりに、
            <br />
            考える時間を取り戻す。
          </h1>

          <p className="m-0 text-[17.5px] leading-[1.8] text-sujita-muted max-[700px]:text-[15px]">
            中学校数学の教科書データをAIで取り込み、問題・数式・表・解答欄まで細かく編集。
            プレビューしながら、授業に合う数学プリントを作成できます。
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-sujita-accent px-6 py-[15px] text-[17px] font-bold whitespace-nowrap text-white shadow-[0_6px_16px_rgb(201_109_46_/_20%)] transition hover:-translate-y-px hover:bg-[#db7f36] hover:shadow-[0_9px_22px_rgb(201_109_46_/_28%)] focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-sujita-accent/75 motion-reduce:transition-none"
              href="https://app.sujita.jp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              アプリを開く
              <Icon name="arrow" />
            </a>
            <a
              className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-sujita-green bg-transparent px-5 py-3.5 text-base font-bold whitespace-nowrap text-sujita-green transition hover:-translate-y-px focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-sujita-accent/75 motion-reduce:transition-none"
              href="#features"
            >
              機能を見る
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-[13px] font-semibold text-sujita-muted max-[700px]:gap-x-4 max-[700px]:gap-y-2.5">
            {['アカウント不要', 'ローカル保存', 'PDF出力'].map((proof) => (
              <span className="inline-flex items-center gap-[7px]" key={proof}>
                <Icon className="text-sujita-green [stroke-width:2.5]" name="check" />
                {proof}
              </span>
            ))}
          </div>
        </div>

        <EditorPreview />
      </div>
    </section>
  )
}
