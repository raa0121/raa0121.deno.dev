import { useContext } from "../deps.ts";
import styles from "./styles.css.ts";
import { AutoplayContext } from "./autoplayContext.tsx";

const Overlay = ({ src, setSrc }) => {
  const { autoplay } = useContext(AutoplayContext);
  return (
    <div
      id="overlay"
      class={`${styles.overlay} overlay-event`}
      onClick={() => {
        setSrc("");
      }}
    >
      <div class={styles.flex}>
        <div id="overlay-inner" className={styles["overlay-inner"]}>
          <iframe
            id="embed"
            className={styles["overlay-iframe"]}
            // FIXME: "" not allowed here
            // allowFullScreen=""
            frameBorder="0"
            src={`${src}${autoplay ? "&autoplay=1" : ""}`}
          >
          </iframe>
          <button
            id="close-btn"
            className={`${styles["close-btn"]} overlay-event`}
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
  );
};
export default Overlay;
