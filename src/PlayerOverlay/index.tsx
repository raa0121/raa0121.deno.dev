import styles from "./styles.css.ts";

type Props = {
  src: string;
  autoplay: boolean;
  onClose: () => void;
};

const PlayerOverlay = ({ src, autoplay, onClose }: Props) => (
  <div
    id="overlay"
    class={`${styles.overlay} overlay-event`}
    onClick={onClose}
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
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

export default PlayerOverlay;
