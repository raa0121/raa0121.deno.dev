import { useContext } from "../deps.ts";
import styles from "./styles.css.ts";
import { AutoplayContext } from "./autoplayContext.tsx";

const Autoplay = () => {
  const { setAutoplay } = useContext(AutoplayContext);
  return (
    <div className={styles["autoplay-container"]}>
      <h2 className={styles["autoplay-label"]}>自動再生</h2>
      <input
        id="autoplay"
        className={styles.toggle_input}
        type="checkbox"
        onChange={(ev) => setAutoplay(ev.currentTarget.checked)}
      />
      <label for="autoplay" className={styles.toggle_label}></label>
    </div>
  );
};
export default Autoplay;
