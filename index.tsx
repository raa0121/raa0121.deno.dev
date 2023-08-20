export default function ({ songs }) {
  return (
    <>
      <h1 class="text-4xl font-bold">猫魔しろあ歌枠セットリスト</h1>
      <div id="overlay" class="overlay-event">
        <div class="flex">
          <div id="overlay-inner">
            <iframe
              id="embed"
              allowfullscreen=""
              frameborder="0"
              height=""
              width=""
              src=""
            >
            </iframe>
            <button id="close-btn" class="overlay-event" type="button">
              Close
            </button>
          </div>
        </div>
      </div>
      <div class="p-10">
        {songs.map((song) => (
          <div class="grid grid-cols-2">
            <p>{song.archiveTitle}</p>
            <a class="overlay-event" data-url={song.startURL}>
              {song.song}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
