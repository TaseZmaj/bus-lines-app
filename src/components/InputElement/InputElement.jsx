/* eslint-disable react/prop-types */
import styles from "./InputElement.module.css";

export default function InputElement(props) {
  const { searchFunc, dataType } = props;

  return (
    <div className={styles.input_container}>
      <div className={styles.input_field}>
        <i className="fa-solid fa-magnifying-glass" />
        {dataType.includes("line") ? (
          <input onChange={searchFunc} placeholder="Number..." type="text" />
        ) : (
          <input onChange={searchFunc} placeholder="Name..." type="text" />
        )}
      </div>
    </div>
  );
}
