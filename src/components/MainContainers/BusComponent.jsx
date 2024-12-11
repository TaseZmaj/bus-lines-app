/* eslint-disable react/prop-types */
import styles from "./Containers.module.css";

// Components
import Table from "../../components/Table/Table.jsx";
import BusCardMini from "../../components/BusCardMini/BusCardMini.jsx";

export default function BusComponent(props) {
  const { data } = props;

  if (
    data.type === "suburban line" ||
    data.type === "day line" ||
    data.type === "night line"
  ) {
    return (
      <div className={`${styles.main_container} ${styles.bus_container}`}>
        <div className={styles.bus_number_container}>
          <h1>Bus {data.number}</h1>
        </div>
        <div className={styles.content_container}>
          <div className={styles.left_container}>
            <Table data={data} />

            <div className={styles.bus_attributes_container}>
              <div>
                <p>Capacity: {data.capacity}</p>
                <p>Route Time: {data.routeTime}</p>
              </div>
              <div>
                <ul>
                  <li>
                    Double Decker
                    {data.doubleDecker === true ? (
                      <i className="fa-solid fa-check" />
                    ) : (
                      <i className="fa-solid fa-x" />
                    )}
                  </li>
                  <li>
                    Baby Carriage / Disabled platform
                    {data.disabilityBabyCarriagePlatform === true ? (
                      <i className="fa-solid fa-check" />
                    ) : (
                      <i className="fa-solid fa-x" />
                    )}
                  </li>
                  <li>
                    Air Conditioner
                    {data.airConditioner === true ? (
                      <i className="fa-solid fa-check" />
                    ) : (
                      <i className="fa-solid fa-x" />
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.right_container}>
            {data.mapUrl !== undefined ? (
              <div className={styles.map_container}>
                <div>
                  <img
                    src={`/src/assets/busRoutes/${data.mapUrl}`}
                    alt={`Bus number ${data.number} route`}
                  />
                </div>
                <div>
                  <BusCardMini data={data.number} />
                  <p>
                    {data.table.firstStops[0]}
                    &nbsp;
                  </p>
                  {data.table.firstStops[0] !== "" && (
                    <p style={{ fontWeight: "800", display: "inline" }}>─</p>
                  )}
                  <p>
                    &nbsp;
                    {data.table.firstStops[1]}
                  </p>
                  <div>
                    <p>JSP</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.map_container}>
                <div className={styles.undefined_map}>
                  <i className="fa-solid fa-location-dot" />
                  <p>Map currently unavailable</p>
                </div>

                <div>
                  <BusCardMini data={data.number} />
                  <p>
                    {data.table.firstStops[0]}
                    &nbsp;
                  </p>
                  {data.table.firstStops[0] !== "" && (
                    <p style={{ fontWeight: "800", display: "inline" }}>─</p>
                  )}
                  <p>
                    &nbsp;
                    {data.table.firstStops[1]}
                  </p>
                  <div>
                    <p>JSP</p>
                  </div>
                </div>
              </div>
            )}
            <div className={styles.bus_routes_container}>
              <div> Routes </div>
              <div>
                <ul>
                  {data.routes.map((route, index) => (
                    <li key={index}>{route}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`${styles.main_container} ${styles.bus_container}`}>
        <div
          className={styles.bus_number_container}
          style={{ fontSize: "1.6rem" }}
        >
          <h1>
            Bus Stop {data.number} ─ {data.name}
          </h1>
        </div>
        <div className={styles.content_container}>
          <div className={styles.bus_stop_map_container}>
            {/* Map container */}
            {data.mapUrl !== undefined ? (
              <div>
                <img
                  src={`/src/assets/busStops/${data.mapUrl}`}
                  alt={`Bus stop: ${data.name}`}
                />
              </div>
            ) : (
              <div className={styles.undefined_map}>
                <i className="fa-solid fa-location-dot" />
                <p>Map currently unavailable</p>
              </div>
            )}

            {/* buses that go through station container */}
            <div>
              <p>Buses:</p>
              <ul>
                {data.buses.map((busStopNumber, index) => (
                  <li key={index}>
                    <BusCardMini data={busStopNumber} />
                  </li>
                ))}
              </ul>
              <div className={styles.jsp_container}>
                <p>JSP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
