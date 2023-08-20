export default function ({ songs }) {
  return <>
    <h1>猫魔しろあ歌枠セットリスト</h1>

    {songs.map((song) => (
      <div>
        <p>{ song.archiveTitle }</p>
        <a class="overlay-event" data-url={ song.startURL }>{ song.song }</a>
      </div>
    ))}
    <div id="overlay" class="overlay-event">
      <div class="flex">
        <div id="overlay-inner">
          <iframe id="embed" allowfullscreen="" frameborder="0" height="315" width="420" src=""></iframe>
          <button id="close-btn" class="overlay-event" type="button">Close</button>
        </div>
      </div>
    </div>

  </>;
}
