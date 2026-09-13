const checks = [
  {
    icon: '✓',
    title: '権限を確認',
    description: '利用する権限があり、パスワード保護されていないPDFが対象です。',
  },
  {
    icon: '◎',
    title: '原本と照合',
    description: '問題文・数式・図版・解答を確認し、必要なら修正します。',
  },
  {
    icon: '→',
    title: '明示して確定',
    description: '確認後にJSONを生成。数学的な正しさは利用者が最終確認します。',
  },
]

export function ResponsibleUseSection() {
  return (
    <section className="bg-[#fff9f0] px-[100px] py-[70px] max-[1360px]:px-[50px] max-[700px]:px-5 max-[700px]:py-16">
      <div className="mx-auto grid max-w-[1240px] grid-cols-[500px_650px] items-center justify-between gap-[60px] max-[1240px]:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] max-[1240px]:gap-10 max-[900px]:grid-cols-1">
        <div className="flex flex-col gap-3.5">
          <div className="font-sans text-xs leading-[1.4] font-bold tracking-[2px] text-sujita-accent">
            FOR RESPONSIBLE USE
          </div>
          <h2 className="m-0 text-[34px] leading-[1.35] font-bold max-[700px]:text-[30px]">
            AIに任せきりにしない。
            <br />
            先生が確認して、完成へ。
          </h2>
          <p className="m-0 text-[15px] leading-[1.8] text-sujita-muted">
            教科書PDF取込Skillは、アプリ外の対応AI環境で動作します。教材の利用権限と外部処理を確認し、生成内容は元PDFと照合してください。
          </p>
        </div>

        <div className="flex flex-col gap-3.5">
          {checks.map((check) => (
            <div
              className="flex items-center gap-4 rounded-[10px] border border-[#ecdccb] bg-sujita-paper px-[18px] py-4 max-[700px]:items-start"
              key={check.title}
            >
              <div className="grid size-[42px] shrink-0 place-items-center rounded-[10px] bg-[#f8e9d9] text-sujita-accent">
                {check.icon}
              </div>
              <div>
                <b className="block text-[15px]">{check.title}</b>
                <span className="mt-0.5 block text-[13px] leading-[1.55] text-sujita-muted">
                  {check.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
