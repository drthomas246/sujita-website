const checks = [
  {
    title: '権限を確認',
    description: '利用する権限があり、パスワード保護されていないPDFが対象です。',
  },
  {
    title: '原本と照合',
    description: '問題文・数式・図版・解答を確認し、必要なら修正します。',
  },
  {
    title: '明示して確定',
    description: '確認後にJSONを生成。数学的な正しさは利用者が最終確認します。',
  },
]

export function ResponsibleUseSection() {
  return (
    <section className="care">
      <div className="wrap care-grid">
        <div>
          <h2>
            AIに任せきりにしない。
            <br />
            先生が確認して、完成へ。
          </h2>
          <p className="lead">
            教科書PDF取込Skillは、アプリ外の対応AI環境で動作します。教材の利用権限と外部処理を確認し、生成内容は元PDFと照合してください。
          </p>
        </div>

        <ul className="checks">
          {checks.map((check) => (
            <li key={check.title}>
              <div>
                <h3>{check.title}</h3>
                <p>{check.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
