import { useEffect, useState } from "npm:preact/hooks";
import styles from "./styles.css.ts";

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
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/data.json");
      const data = (await res.json()) as Song[];
      setSongs(data);
    })();
  }, []);

  return (
    <>
      <div class={styles.box}>
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
