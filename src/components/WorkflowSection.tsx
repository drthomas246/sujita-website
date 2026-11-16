const steps = [
  {
    title: '取り込む／つくる',
    description: '教科書PDFをAI対応環境で変換してJSONを読み込む、または新規プリントを作成します。',
  },
  {
    title: '授業に合わせて整える',
    description: '問題文、数式、表、画像、解答、解説まで、編集ペインで細かく調整します。',
  },
  {
    title: '確認して配る',
    description: '問題・解答のプレビューを確認。用紙設定を整え、PDFでダウンロードします。',
  },
]

export function WorkflowSection() {
  return (
    <section className="flow" id="workflow">
      <div className="wrap">
        <div className="flow-head">
          <h2>いつもの準備が、3ステップで整う。</h2>
          <p className="lead">AIから始めても、白紙から始めても。最後は先生の目で確認して仕上げられます。</p>
        </div>

        <ol className="line">
          {steps.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
