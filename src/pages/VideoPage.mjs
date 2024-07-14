export default HtmlPage => (
  <HtmlPage>
    <link rel="stylesheet" href="/css/plyr.css" />
    <header id="topbar">

    </header>
    <main>
      <header id="course-header">

      </header>
      <section id="course-video-preview">
        <div style="max-width: 1080px; margin: auto; font-family: Gordita, Avenir, Helvetica Neue, Helvetica, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;">
          <video id="player" playsinline controls> {/* data-poster="/path/to/poster.jpg" */}
            <source src="/stream" type="video/mp4" />
            {/* <track kind="captions" label="English captions" src="/path/to/captions.vtt" srclang="en" default /> */}
          </video>
        </div>
      </section>
      <section id="course-description">

      </section>
    </main>
    <script src="/js/plyr.js" />
    <script src="/js/videoPlayer.js" />
  </HtmlPage>
)
