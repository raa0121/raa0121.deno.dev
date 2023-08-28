import { useCallback, useEffect, useState } from "../deps.ts";
import { Archive } from "../data.json.tmpl.ts";
import styles from "./styles.css.ts";

const App = () => {
  const [archives, setArchives] = useState<Archive[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [src, setSrc] = useState<string>("");
  const [autoplay, setAutoplay] = useState<boolean>(false);
  const overlayClose = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setSrc("");
    }
  }, []);

  useEffect(() => {
    (async () => {
      const res = await fetch("/data.json");
      const data = (await res.json()) as Archive[];
      setArchives(data);
    })();
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", overlayClose, false);
    return () => {
      document.removeEventListener("keydown", overlayClose);
    };
  }, []);

  const filtered = filter.trim() == ""
    ? archives
    : archives.reduce<Archive[]>((filtered, archive) => {
      const filteredSongs = archive.songs.filter((s) =>
        s.song.indexOf(filter) != -1
      );

      if (filteredSongs.length > 0) {
        filtered.push({
          archiveTitle: archive.archiveTitle,
          songs: filteredSongs,
        });
      }

      return filtered;
    }, []);

  return (
    <div class={styles.container}>
      <div class={styles.box}>
        <div>
          <h1 class={styles.title}>猫魔しろあ歌枠セットリスト</h1>
          <div class={styles["autoplay-container"]}>
            <h2 class={styles["autoplay-label"]}>自動再生</h2>
            <input
              id="autoplay"
              class={styles.toggle_input}
              type="checkbox"
              onChange={(ev) => setAutoplay(ev.currentTarget.checked)}
            />
            <label for="autoplay" class={styles.toggle_label}></label>
          </div>
        </div>
        <div class={styles["isearch-container"]}>
          <label for="isearch" class={styles["isearch-label"]}>検索</label>
          <input
            id="isearch"
            type="text"
            onInput={(ev) => setFilter(ev.currentTarget.value)}
          />
        </div>
      </div>
      {src !== ""
        ? (
          <div
            id="overlay"
            class={`${styles.overlay} overlay-event`}
            onClick={() => {
              setSrc("");
            }}
          >
            <div class={styles.flex}>
              <div id="overlay-inner" class={styles["overlay-inner"]}>
                <iframe
                  id="embed"
                  class={styles["overlay-iframe"]}
                  // FIXME: "" not allowed here
                  // allowFullScreen=""
                  frameBorder="0"
                  src={`${src}${autoplay ? "&autoplay=1" : ""}`}
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
        {filtered.map((archive) => (
          <div class="grid grid-cols-2">
            <p>{archive.archiveTitle}</p>
            <ul>
              {archive.songs.map((song) => (
                <li class={styles.songItem}>
                  <a
                    class={`${styles["link"]} overlay-event`}
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
