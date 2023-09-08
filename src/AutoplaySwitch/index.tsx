import styles from "./styles.css.ts";

type Props = {
  onChange: (checked: boolean) => void;
};

const AutoplaySwitch = ({ onChange }: Props) => (
  <div class={styles["autoplay-container"]}>
    <h2 class={styles["autoplay-label"]}>自動再生</h2>
    <input
      id="autoplay"
      class={styles.toggle_input}
      type="checkbox"
      onChange={(ev) =>
        onChange(ev.currentTarget.checked)}
    />
    <label for="autoplay" class={styles.toggle_label}></label>
  </div>
);

export default AutoplaySwitch;
