import { Icon } from './Icon'

const localBenefits = [
  '変更から750ms後に自動保存',
  '単一プリント／一覧全体をJSONでバックアップ',
  '最新版のChrome / Edgeに対応',
]

export function LocalFirstSection() {
  return (
    <section className="local on-board">
      <div className="wrap">
        <div className="local-grid">
          <div className="computer-scene" aria-hidden="true">
            <div className="computer">
              <Icon name="monitor" />
              <span>IndexedDB に自動保存</span>
            </div>
            <div className="computer-base" />
            <div className="lock-badge">
              <Icon name="lock" />
            </div>
          </div>

          <div>
            <h2>
              教材データは、
              <br />
              外へ出さずに保管。
            </h2>
            <p className="lead">
              アプリ本体の編集データはサーバーへ送信せず、使用中のブラウザに保存されます。アカウント登録やクラウド同期もありません。
            </p>
          </div>
        </div>

        <ul className="facts">
          {localBenefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
