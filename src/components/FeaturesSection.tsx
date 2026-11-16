const aiSteps = [
  { title: '教科書PDF', detail: '使う権限のある教材' },
  { title: 'AIで抽出・構造化', detail: '内容を先生が確認' },
  { title: 'JSONをインポート', detail: '編集できるプリントへ' },
]

export function FeaturesSection() {
  return (
    <section className="features" id="features">
      <div className="wrap">
        <div className="features-head">
          <h2>
            つくる、整える、届ける。
            <br />
            一つの場所で。
          </h2>
          <p className="lead">
            ゼロからの作成にも、AIで取り込んだ教材の仕上げにも。先生の意図をそのまま形にできます。
          </p>
        </div>

        <div className="quad">
          <article>
            <h3>細部まで編集</h3>
            <p>問題・小問・数式・表・画像・解答欄を自由に修正。Undo / Redoにも対応。</p>
          </article>
          <article>
            <h3>1から制作</h3>
            <p>新しいプリントを開き、問題を一つずつ組み立て。授業に合わせた完全オリジナルも。</p>
          </article>
          <article>
            <h3>保存先は、あなたのPC。</h3>
            <p>編集データはサーバーへ送らず、ブラウザ内のIndexedDBへ自動保存。JSONバックアップも可能です。</p>
          </article>
          <article>
            <h3>見たまま確認、そのままPDFへ。</h3>
            <p>「問題のみ」「解答付き」を切り替えてプレビュー。A4 / B5、余白やヘッダーを整えて出力できます。</p>
          </article>
        </div>

        <article className="ai">
          <h3>
            教科書データから
            <br />
            AIでプリント化
          </h3>
          <p>
            指定範囲の例題・問題・小問・数式・表・図版を、再編集できるデータへ変換。内容を確認してから取り込めます。
          </p>
          <ol className="pipeline">
            {aiSteps.map((step) => (
              <li key={step.title}>
                <b>{step.title}</b>
                <small>{step.detail}</small>
              </li>
            ))}
          </ol>
        </article>
      </div>
    </section>
  )
}
