/* eslint-disable react/prop-types */
import styles from "./BusCard.module.css";
import busLinesImg from "../../assets/bus-line-red.jpg";
import busStopImg from "../../assets/bus-stop-red.jpg";

export default function BusCard(props) {
  const { data } = props;

  let busStopBool = false;
  let busLineBool = true;

  if (data.type === "bus stop") {
    busStopBool = true;
  } else if (
    data.type === "suburban line" ||
    data.type === "day line" ||
    data.type === "night line"
  ) {
    busLineBool = true;
  }

  if (busStopBool === true) {
    return (
      <div className={styles.card_container}>
        <div className={styles.img_container}>
          <img src={busStopImg} alt="bus-stop-img" />
        </div>
        <div className={styles.text_container}>
          <h1>Bus Stop {data.number}</h1>
          <p style={{ fontSize: "1.2rem" }}>{data.name}</p>
        </div>
      </div>
    );
  } else if (busLineBool === true) {
    return (
      <div className={styles.card_container}>
        <div className={styles.img_container}>
          <img src={busLinesImg} alt="bus-line-img" />
        </div>
        <div className={styles.text_container}>
          <h1>Bus {data.number}</h1>
          {data.routes.map((route, index) => (
            <p key={index}>{route}</p>
          ))}
        </div>
      </div>
    );
  }
}
