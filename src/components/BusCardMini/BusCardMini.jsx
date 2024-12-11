/* eslint-disable react/prop-types */
import styles from "./BusCardMini.module.css";

export default function BusCardMini(props) {
  const { data } = props;

  return (
    <div className={styles.container}>
      <div>
        <i className="fa-solid fa-bus" />
        {data.toUpperCase()}
      </div>
      <div className={styles.line}></div>
    </div>
  );
}
