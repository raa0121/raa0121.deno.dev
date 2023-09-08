import { Archive } from "../data.json.tmpl.ts";
import { useCallback, useEffect, useRef, useState } from "../deps.ts";
import AutoplaySwitch from "./AutoplaySwitch/index.tsx";
import PlayerOverlay from "./PlayerOverlay/index.tsx";
import styles from "./styles.css.ts";

const App = () => {
  const [archives, setArchives] = useState<Archive[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [src, setSrc] = useState<string>("");
  const [autoplay, setAutoplay] = useState<boolean>(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const overlayClose = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setSrc("");
    }
  }, []);
  const focusFilter = useCallback((ev: KeyboardEvent) => {
    if (
      ev.key === "/" && searchRef.current &&
      document.activeElement != searchRef.current
    ) {
      ev.preventDefault();
      searchRef.current.focus();
    }
  }, []);
  const clearFilter = useCallback((ev: KeyboardEvent) => {
    if (ev.key === "Escape") {
      setFilter("");
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
    document.addEventListener("keydown", focusFilter);
    return () => {
      document.removeEventListener("keydown", overlayClose);
      document.removeEventListener("keydown", focusFilter);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", clearFilter);
    return () => document.removeEventListener("keydown", clearFilter);
  }, [searchRef]);

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
        <h1 class={styles.title}>猫魔しろあ歌枠セットリスト</h1>
        <div>
          <AutoplaySwitch onChange={setAutoplay} />
          <div class={styles["isearch-container"]}>
            <label for="isearch" class={styles["isearch-label"]}>検索</label>
            <input
              id="isearch"
              ref={searchRef}
              type="text"
              value={filter}
              onInput={(ev) => setFilter(ev.currentTarget.value)}
            />
          </div>
        </div>
      </div>
      {src !== ""
        ? (
          <PlayerOverlay
            autoplay={autoplay}
            src={src}
            onClose={() => setSrc("")}
          />
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
