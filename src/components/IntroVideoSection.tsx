export function IntroVideoSection() {
  return (
    <section className="intro-video" id="video">
      <div className="wrap">
        <h2>動画で見る</h2>
        <figure className="video-frame">
          <video controls preload="metadata" playsInline poster="/sujita-intro-poster.jpg">
            <source src="/sujita-intro.mp4" type="video/mp4" />
            <track kind="captions" src="/sujita-intro.ja.vtt" srcLang="ja" label="日本語" default />
            お使いのブラウザでは動画を再生できません。<a href="/sujita-intro.mp4">動画ファイルを開く</a>
          </video>
          <figcaption>音声あり、日本語字幕つき、約43秒。</figcaption>
        </figure>
      </div>
    </section>
  )
}
