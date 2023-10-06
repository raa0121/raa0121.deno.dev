import styles from "./styles.css.ts";
const Song = ({ archive, setSrc }) => {
  return (
    <>
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
    </>
  );
};
export default Song;
