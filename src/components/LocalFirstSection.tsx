import { Icon } from './Icon'

const localBenefits = [
  '変更から750ms後に自動保存',
  '単一プリント／一覧全体をJSONでバックアップ',
  '最新版のChrome / Edgeに対応',
]

export function LocalFirstSection() {
  return (
    <section className="min-h-[520px] bg-sujita-green px-[100px] py-[70px] text-white max-[1360px]:px-[50px] max-[700px]:px-5 max-[700px]:py-16">
      <div className="mx-auto grid h-full w-full max-w-[1240px] grid-cols-[520px_600px] items-center justify-between gap-[70px] max-[1240px]:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] max-[1240px]:gap-[42px] max-[900px]:grid-cols-1 max-[700px]:grid-cols-1">
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

        <div className="flex flex-col gap-5">
          <div className="font-sans text-xs leading-[1.4] font-bold tracking-[2px] text-[#f5b77f]">
            LOCAL FIRST
          </div>
          <h2 className="m-0 text-[42px] leading-[1.3] font-bold max-[700px]:text-[clamp(30px,8vw,33px)]">
            教材データは、
            <br />
            外へ出さずに保管。
          </h2>
          <p className="m-0 text-base leading-[1.85] text-[#d6e8e2]">
            アプリ本体の編集データはサーバーへ送信せず、使用中のブラウザに保存されます。アカウント登録やクラウド同期もありません。
          </p>

          <div className="flex flex-col gap-[9px]">
            {localBenefits.map((benefit) => (
              <div className="flex items-center gap-[9px] text-sm font-semibold" key={benefit}>
                <Icon className="size-[18px] text-[#f5b77f] [stroke-width:2.5]" name="check" />
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
