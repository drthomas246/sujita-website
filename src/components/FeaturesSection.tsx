import { Icon } from './Icon'

const aiSteps = [
  { icon: '▤', title: '教科書PDF', detail: '使う権限のある教材' },
  { icon: '✦', title: 'AIで抽出・構造化', detail: '内容を先生が確認' },
  { icon: '⇩', title: 'JSONをインポート', detail: '編集できるプリントへ' },
]

export function FeaturesSection() {
  return (
    <section className="bg-sujita-paper px-20 py-[100px] max-[1360px]:px-10 max-[700px]:px-5 max-[700px]:py-[70px]" id="features">
      <div className="mx-auto mb-[42px] flex max-w-7xl items-end justify-between gap-[50px] max-[900px]:flex-col max-[900px]:items-start">
        <div>
          <div className="font-sans text-xs leading-[1.4] font-bold tracking-[2px] text-sujita-accent">
            WHAT YOU CAN DO
          </div>
          <h2 className="mt-2.5 mb-0 text-[42px] leading-[1.3] font-extrabold tracking-[-0.6px] max-[700px]:text-[clamp(30px,8vw,33px)]">
            つくる、整える、届ける。
            <br />
            一つの場所で。
          </h2>
        </div>
        <p className="m-0 w-[430px] text-base leading-[1.8] text-sujita-muted max-[900px]:w-auto max-[900px]:max-w-[650px] max-[700px]:text-[15px]">
          ゼロからの作成にも、AIで取り込んだ教材の仕上げにも。先生の意図をそのまま形にできます。
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,760px)_minmax(280px,1fr)] items-stretch gap-[22px] max-[1240px]:grid-cols-1">
        <div className="grid min-w-0 grid-rows-[minmax(360px,auto)_minmax(0,1fr)] gap-[22px] max-[1240px]:grid-rows-[auto_auto]">
          <article className="grid min-w-0 grid-cols-[minmax(0,1fr)_minmax(260px,300px)] items-stretch gap-7 rounded-2xl bg-sujita-green p-9 text-white max-[1240px]:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] max-[900px]:grid-cols-1 max-[700px]:p-6">
            <div className="flex min-w-0 flex-col gap-4">
              <div className="grid size-12 place-items-center rounded-xl bg-white/15 text-[25px]">✦</div>
              <h3 className="m-0 text-[28px] leading-[1.35] font-extrabold max-[700px]:text-2xl">
                教科書データから
                <br />
                AIでプリント化
              </h3>
              <p className="m-0 text-[15px] leading-[1.75] text-[#dcebe6]">
                指定範囲の例題・問題・小問・数式・表・図版を、再編集できるデータへ変換。内容を確認してから取り込めます。
              </p>
            </div>

            <div className="flex min-h-[286px] w-full min-w-0 flex-col gap-3 rounded-xl bg-white p-6 text-sujita-ink max-[900px]:min-h-0 max-[700px]:mt-1.5 max-[700px]:h-auto max-[700px]:p-[18px]">
              {aiSteps.map((step) => (
                <div className="flex flex-1 items-center gap-3 border-b border-[#e7ebe7] last:border-b-0 max-[700px]:py-[9px]" key={step.title}>
                  <div className="grid size-[38px] shrink-0 place-items-center rounded-[9px] bg-[#e8f0ea] text-sujita-green">
                    {step.icon}
                  </div>
                  <div>
                    <b className="block text-[13px]">{step.title}</b>
                    <small className="mt-0.5 block text-[10px] text-sujita-muted">{step.detail}</small>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <div className="grid grid-cols-2 gap-[22px] max-[700px]:grid-cols-1">
            <article className="flex flex-col gap-3.5 rounded-2xl bg-[#eef3f8] p-7 max-[420px]:p-[22px]">
              <Icon className="size-7 text-sujita-green" name="edit" />
              <h3 className="m-0 text-[22px] font-extrabold">細部まで編集</h3>
              <p className="m-0 text-sm leading-[1.7] text-sujita-muted">
                問題・小問・数式・表・画像・解答欄を自由に修正。Undo / Redoにも対応。
              </p>
            </article>
            <article className="flex flex-col gap-3.5 rounded-2xl bg-[#f7eee4] p-7 max-[420px]:p-[22px]">
              <Icon className="size-7 text-sujita-green" name="plus" />
              <h3 className="m-0 text-[22px] font-extrabold">1から制作</h3>
              <p className="m-0 text-sm leading-[1.7] text-sujita-muted">
                新しいプリントを開き、問題を一つずつ組み立て。授業に合わせた完全オリジナルも。
              </p>
            </article>
          </div>
        </div>

        <div className="grid min-w-0 grid-rows-[minmax(300px,auto)_minmax(0,1fr)] gap-[22px] max-[1240px]:grid-cols-2 max-[1240px]:grid-rows-none max-[700px]:grid-cols-1">
          <article className="flex flex-col gap-[15px] rounded-2xl bg-[#e4efe8] p-[30px] max-[1240px]:min-h-[290px] max-[900px]:min-h-[260px] max-[420px]:p-[22px]">
            <Icon className="size-[30px]" name="save" />
            <h3 className="m-0 text-[28px] leading-[1.35] font-extrabold max-[700px]:text-2xl">
              保存先は、
              <br />
              あなたのPC。
            </h3>
            <p className="m-0 text-sm leading-[1.7] text-sujita-muted">
              編集データはサーバーへ送らず、ブラウザ内のIndexedDBへ自動保存。JSONバックアップも可能です。
            </p>
          </article>
          <article className="flex flex-col gap-[15px] rounded-2xl bg-sujita-blue p-[30px] text-white max-[1240px]:min-h-[290px] max-[900px]:min-h-[260px] max-[420px]:p-[22px]">
            <Icon className="size-[30px]" name="file" />
            <h3 className="m-0 text-[28px] leading-[1.35] font-extrabold max-[700px]:text-2xl">
              見たまま確認、
              <br />
              そのままPDFへ。
            </h3>
            <p className="m-0 text-sm leading-[1.7] text-[#d9e8f2]">
              「問題のみ」「解答付き」を切り替えてプレビュー。A4 / B5、余白やヘッダーを整えて出力できます。
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
