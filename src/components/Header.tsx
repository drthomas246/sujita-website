export function Header() {
  return (
    <header className="relative z-10 min-h-28 border-b border-sujita-line bg-sujita-paper max-[700px]:min-h-[82px] max-[420px]:min-h-[76px]">
      <div className="flex min-h-28 w-full items-center justify-between gap-8 px-20 py-2 max-[1360px]:px-10 max-[700px]:min-h-[82px] max-[700px]:gap-[18px] max-[700px]:px-5 max-[700px]:py-1.5 max-[420px]:min-h-[76px] max-[420px]:gap-2.5">
        <a
          className="flex w-[300px] min-w-[300px] flex-[0_0_300px] items-center focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-sujita-accent/75 max-[700px]:w-auto max-[700px]:min-w-0 max-[700px]:max-w-[min(300px,calc(100vw-190px))] max-[700px]:flex-[0_1_auto] max-[420px]:max-w-[calc(100vw-155px)]"
          href="#top"
          aria-label="すうがく仕立て トップへ"
        >
          <img
            className="block h-auto w-[300px] max-w-full object-contain object-left"
            src="/logo-lockup-t.png"
            alt="すうがく仕立て"
          />
        </a>

        <nav className="flex items-center gap-[30px] text-sm font-semibold" aria-label="メインナビゲーション">
          <a className="transition-colors hover:text-sujita-accent focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-sujita-accent/75 max-[900px]:hidden" href="#features">
            できること
          </a>
          <a className="transition-colors hover:text-sujita-accent focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-sujita-accent/75 max-[900px]:hidden" href="#workflow">
            使い方
          </a>
          <a className="transition-colors hover:text-sujita-accent focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-sujita-accent/75 max-[900px]:hidden" href="#terms">
            利用規約
          </a>
          <a
            className="rounded-lg bg-sujita-accent px-5 py-3 text-[15px] font-bold whitespace-nowrap text-white transition hover:-translate-y-px hover:bg-[#db7f36] focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-sujita-accent/75 motion-reduce:transition-none max-[700px]:px-[13px] max-[700px]:py-2.5 max-[700px]:text-xs max-[420px]:px-2.5 max-[420px]:py-[9px] max-[420px]:text-[11px]"
            href="https://app.sujita.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            無料で使ってみる
          </a>
        </nav>
      </div>
    </header>
  )
}
