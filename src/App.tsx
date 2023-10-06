// @deno-types="./node_modules/@types/react/index.d.ts"
import Overlay from "./overlay.tsx";
import Song from "./song.tsx";
import Autoplay from "./autoplay.tsx";
import AutoplayProvider from "./autoplayContext.tsx";
import { Archive } from "../data.json.tmpl.ts";
import { useCallback, useEffect, useRef, useState } from "../deps.ts";
import styles from "./styles.css.ts";

const App = () => {
  const [archives, setArchives] = useState<Archive[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [src, setSrc] = useState<string>("");
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
    <div className={styles.container}>
      <AutoplayProvider>
        <div className={styles.box}>
          <h1 className={styles.title}>猫魔しろあ歌枠セットリスト</h1>
          <div>
            <Autoplay />
            <div className={styles["isearch-container"]}>
              <label for="isearch" className={styles["isearch-label"]}>
                検索
              </label>
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
            <Overlay
              src={src}
              setSrc={setSrc}
            />
          )
          : null}
        <div className={`p-10 ${styles.scroll}`}>
          {filtered.map((archive) => (
            <div className="grid grid-cols-2">
              <Song
                archive={archive}
                setSrc={setSrc}
              />
            </div>
          ))}
        </div>
        <footer className="info">
          <p>©2023+ raa0121</p>
        </footer>
      </AutoplayProvider>
    </div>
  );
};

export default <App />;
