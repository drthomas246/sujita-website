import { Icon } from './Icon'
import { MathFormula } from './MathFormula'

function EditorPreview() {
  return (
    <figure className="desk" aria-label="すうがく仕立ての編集画面イメージ">
      <div className="editor-visual">
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
                <MathFormula tex="y = 2x + 3" />
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
                  <MathFormula tex="y = 2x + 3" />
                </div>
                <div className="graph">
                  <svg className="graph-line" viewBox="0 0 185 125" preserveAspectRatio="none" aria-hidden="true">
                    <line x1="43" y1="125" x2="105.5" y2="0" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption>アカウント不要。ローカル保存。PDF出力に対応。</figcaption>
    </figure>
  )
}

export function HeroSection() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <h1>
            教材づくりに、
            <br />
            考える時間を取り戻す。
          </h1>

          <p className="lead">
            中学校数学の教科書データをAIで取り込み、問題・数式・表・解答欄まで細かく編集。
            プレビューしながら、授業に合う数学プリントを作成できます。
          </p>

          <div className="hero-actions">
            <a className="btn btn-solid" href="https://app.sujita.jp/" target="_blank" rel="noopener noreferrer">
              アプリを開く
            </a>
            <a className="btn btn-line" href="#features">
              機能を見る
            </a>
          </div>
        </div>

        <EditorPreview />
      </div>
    </section>
  )
}
