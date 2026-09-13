export function Footer() {
  return (
    <footer className="bg-[#102e29] px-20 py-16 text-white max-[1360px]:px-[50px] max-[700px]:px-5 max-[700px]:py-[52px]" id="terms">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-[620px_430px] justify-between gap-[60px] max-[1240px]:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] max-[900px]:grid-cols-1">
          <div className="max-[900px]:max-w-[650px]">
            <h3 className="mt-0 mb-3 text-lg font-bold">利用規約・ご利用上の注意</h3>
            <p className="mt-0 mb-3.5 text-[13px] leading-[1.75] text-[#bfd2cc]">
              利用規約は、GitHubのLICENSE.mdを正本とします。ご利用前に最新版をご確認ください。
            </p>
            <a
              className="text-[13px] font-bold text-[#f5b77f] [overflow-wrap:anywhere] focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-sujita-accent/75"
              href="https://github.com/drthomas246/math_editor/blob/master/LICENSE.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              利用規約（LICENSE.md）を確認する ↗
            </a>
          </div>

          <div className="max-[900px]:max-w-[650px]">
            <h3 className="mt-0 mb-3 text-lg font-bold">連絡先</h3>
            <p className="mt-0 mb-3.5 text-[13px] leading-[1.75] text-[#bfd2cc]">
              不具合の報告・機能に関するお問い合わせは、メールでご連絡ください。
            </p>
            <a
              className="text-[13px] font-bold text-[#f5b77f] [overflow-wrap:anywhere] focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-sujita-accent/75"
              href="mailto:yoshihiro@yamahara.email"
            >
              yoshihiro@yamahara.email
            </a>
          </div>
        </div>

        <div className="my-7 h-px bg-white/15" />

        <div className="flex items-center justify-between gap-[30px] max-[700px]:flex-col max-[700px]:items-start">
          <img className="block h-auto w-[200px] min-w-[200px] object-contain object-left" src="/logo-lockup.png" alt="すうがく仕立て" />
          <div className="font-sans text-[11px] leading-[1.5] text-[#8fa9a2] max-[700px]:leading-[1.8]">
            © 2026 Yamahara Yoshihiro&nbsp; • &nbsp;すうがく仕立て
          </div>
        </div>
      </div>
    </footer>
  )
}
