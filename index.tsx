import type { Data } from "./_data.ts";
const title = "猫魔しろあ歌枠セットリスト";
const description = "個人VTuber 猫魔しろあの歌枠のセットリストです。曲名をクリックすると、該当楽曲を再生できます。";
const keywords = "VTuber,個人VTuber,猫魔しろあ";
export { title, description, keywords };

export default function ({ songs }: Data) {
  return (
    <>
      <h1 class="text-4xl font-bold">猫魔しろあ歌枠セットリスト</h1>
      <input id="autoplay" class="toggle_input" type="checkbox" />
      <label for="autoplay" class="toggle_label"></label>
      <div id="overlay" class="overlay-event">
        <div class="flex">
          <div id="overlay-inner">
            <iframe
              id="embed"
              // FIXME: "" not allowed here
              // allowFullScreen=""
              frameBorder="0"
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
