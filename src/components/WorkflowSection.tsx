const steps = [
  {
    number: '01',
    icon: '⇩',
    title: '取り込む／つくる',
    description: '教科書PDFをAI対応環境で変換してJSONを読み込む、または新規プリントを作成します。',
  },
  {
    number: '02',
    icon: '✎',
    title: '授業に合わせて整える',
    description: '問題文、数式、表、画像、解答、解説まで、編集ペインで細かく調整します。',
  },
  {
    number: '03',
    icon: '✓',
    title: '確認して配る',
    description: '問題・解答のプレビューを確認。用紙設定を整え、PDFでダウンロードします。',
  },
]

export function WorkflowSection() {
  return (
    <section className="bg-sujita-bg px-20 py-[100px] max-[1360px]:px-10 max-[700px]:px-5 max-[700px]:py-[70px]" id="workflow">
      <div className="mb-[52px] flex flex-col items-center gap-3 text-center">
        <div className="font-sans text-xs leading-[1.4] font-bold tracking-[2px] text-sujita-accent">
          SIMPLE WORKFLOW
        </div>
        <h2 className="m-0 text-[40px] font-extrabold max-[700px]:text-[30px]">
          いつもの準備が、3ステップで整う。
        </h2>
        <p className="m-0 text-base text-sujita-muted">
          AIから始めても、白紙から始めても。最後は先生の目で確認して仕上げられます。
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-6 max-[900px]:grid-cols-1">
        {steps.map((step) => (
          <article
            className="flex h-[260px] flex-col gap-4 rounded-[14px] border border-sujita-line bg-sujita-paper p-7 max-[900px]:h-auto max-[420px]:p-[22px]"
            key={step.number}
          >
            <div className="flex items-center justify-between">
              <span className="font-sans text-[13px] leading-none font-extrabold text-sujita-accent">
                {step.number}
              </span>
              <span className="grid size-11 place-items-center rounded-[11px] bg-[#f5e8dd] text-sujita-accent">
                {step.icon}
              </span>
            </div>
            <h3 className="m-0 text-[21px] font-bold">{step.title}</h3>
            <p className="m-0 text-sm leading-[1.75] text-sujita-muted">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
