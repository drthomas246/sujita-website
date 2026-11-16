import { MathFormula } from './MathFormula'

export function FinalCallToAction() {
  return (
    <section className="close">
      <div className="wrap close-grid">
        <div>
          <h2>次のプリントを、今ここから。</h2>
          <div className="close-formula">
            <MathFormula
              displayMode
              tex={String.raw`\text{教科書}+\text{先生の工夫} \xrightarrow{\text{すうがく仕立て}} \text{明日の授業}`}
            />
          </div>
        </div>

        <div className="close-act">
          <p className="lead">インストール不要。PCブラウザですぐに始められます。</p>
          <a className="btn btn-solid" href="https://app.sujita.jp/" target="_blank" rel="noopener noreferrer">
            すうがく仕立てを開く
          </a>
          <p className="close-note">
            <span>https://app.sujita.jp/</span>
            <span>推奨：最新版 Chrome / Edge、横幅1024px以上のPC</span>
          </p>
        </div>
      </div>
    </section>
  )
}
