import { Song } from "../../data.json.tmpl.ts";
import styles from "./styles.css.ts";

type Props = {
  song: Song;
  onClick: () => void;
};

const SongItem = ({ song, onClick }: Props) => (
  <li class={styles.songItem}>
    <a
      class={styles["link"]}
      onClick={onClick}
    >
      {song.song}
    </a>
  </li>
);

export default SongItem;
