export function Footer() {
  return (
    <footer className="site-footer" id="terms">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <img src="/logo-lockup.png" alt="すうがく仕立て" />
            <p>中学校数学の先生のための、数学プリント制作ツール</p>
          </div>

          <div>
            <h3>利用規約・ご利用上の注意</h3>
            <p>利用規約は、GitHub上のLICENSE.mdとなります。ご利用前に最新版をご確認ください。</p>
            <a
              className="link"
              href="https://github.com/drthomas246/sujita/blob/master/LICENSE.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              利用規約（LICENSE.md）を確認する
            </a>
          </div>

          <div>
            <h3>連絡先</h3>
            <p>不具合の報告・機能に関するお問い合わせは、メールでご連絡ください。</p>
            <a className="link" href="mailto:yoshihiro@yamahara.email">
              yoshihiro@yamahara.email
            </a>
          </div>
        </div>

        <div className="foot-legal">
          <span>© 2026 Yamahara Yoshihiro</span>
          <span>すうがく仕立て</span>
        </div>
      </div>
    </footer>
  )
}
