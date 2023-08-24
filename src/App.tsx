const title = "猫魔しろあ歌枠セットリスト";
const description =
  "個人VTuber 猫魔しろあの歌枠のセットリストです。曲名をクリックすると、該当楽曲を再生できます。";
const keywords = "VTuber,個人VTuber,猫魔しろあ";
// export { description, keywords, title };

type Song = {
  archiveTime: Date;
  archiveTitle: string;
  song: string;
  data: string;
  startURL: string;
};
type Response = {
  status: "ok" | "ng";
  songs: Song[];
};

const App = () => {
  const songs: Song[] = [];

  return (
    <>
      <div class="box">
        <h1 class="text-4xl font-bold">猫魔しろあ歌枠セットリスト</h1>
        <h2 class="text-2xl">自動再生</h2>
        <input id="autoplay" class="toggle_input" type="checkbox" />
        <label for="autoplay" class="toggle_label"></label>
      </div>
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
      <div class="p-10 scroll">
        {songs.map((song) => (
          <div class="grid grid-cols-2">
            <p>{song.archiveTitle}</p>
            <a class="text-blue-700 overlay-event" data-url={song.startURL}>
              {song.song}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default <App />;
