export function Header() {
  return (
    <header className="site-header">
      <div className="wrap nav">
        <a className="nav-brand" href="#top" aria-label="すうがく仕立て トップへ">
          <img src="/logo-lockup-t.png" alt="すうがく仕立て" />
        </a>

        <nav className="nav-links" aria-label="メインナビゲーション">
          <a href="#features">できること</a>
          <a href="#workflow">使い方</a>
          <a href="#terms">利用規約</a>
          <a className="btn btn-solid" href="https://app.sujita.jp/" target="_blank" rel="noopener noreferrer">
            無料で使ってみる
          </a>
        </nav>
      </div>
    </header>
  )
}
