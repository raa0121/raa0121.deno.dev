import { useEffect, useState } from "npm:preact/hooks";
import { Archive } from "../data.json.tmpl.ts";
import styles from "./styles.css.ts";

const App = () => {
  const [archives, setArchives] = useState<Archive[]>([]);
  const [src, setSrc] = useState<string>("");

  useEffect(() => {
    (async () => {
      const res = await fetch("/data.json");
      const data = (await res.json()) as Archive[];
      setArchives(data);
    })();
  }, []);

  return (
    <div class={styles.container}>
      <div class={styles.box}>
        <h1 class="">猫魔しろあ歌枠セットリスト</h1>
        <div>
          <h2 class="text-2xl">自動再生</h2>
          <input id="autoplay" class={styles.toggle_input} type="checkbox" />
          <label for="autoplay" class={styles.toggle_label}></label>
        </div>
      </div>
      {src !== ""
        ? (
          <div id="overlay" class={`${styles.overlay} overlay-event`}>
            <div class={styles.flex}>
              <div id="overlay-inner" class={styles["overlay-inner"]}>
                <iframe
                  id="embed"
                  class={styles["overlay-iframe"]}
                  // FIXME: "" not allowed here
                  // allowFullScreen=""
                  frameBorder="0"
                  src={src}
                >
                </iframe>
                <button
                  id="close-btn"
                  class={`${styles["close-btn"]} overlay-event`}
                  type="button"
                  onClick={() => {
                    setSrc("");
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )
        : null}
      <div class={`p-10 ${styles.scroll}`}>
        {archives.map((archive) => (
          <div class="grid grid-cols-2">
            <p>{archive.archiveTitle}</p>
            <ul>
              {archive.songs.map((song) => (
                <li class={styles.songItem}>
                  <a
                    class="text-blue-700 overlay-event"
                    onClick={() => {
                      setSrc(song.startURL);
                    }}
                  >
                    {song.song}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <footer class="info">
        <p>©2023+ raa0121</p>
      </footer>
    </div>
  );
};

export default <App />;
