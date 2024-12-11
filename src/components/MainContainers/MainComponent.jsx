/* eslint-disable react/prop-types */
import styles from "./Containers.module.css";

import BusCard from "../BusCard/BusCard.jsx";
import InputElement from "../InputElement/InputElement.jsx";

// React router dom
import { Link } from "react-router-dom";

// Hooks
import { useState } from "react";

//Json
import busLineData from "../../json/busLines.json";
import busStopData from "../../json/busStop.json";

export default function MainComponent(props) {
  const { searchType } = props;
  const [search, setSearch] = useState("");

  let data;

  // INPUT PAGE

  if (
    searchType === "day line" ||
    searchType === "night line" ||
    searchType === "suburban line"
  ) {
    data = busLineData.filter((busLine) => busLine.type === searchType);
  } else {
    data = busStopData;
  }

  const sortedData = data;

  sortedData.sort(function (a, b) {
    return a.true_number - b.true_number;
  });

  if (sortedData[0].type.includes("line")) {
    return (
      <>
        <div className={styles.main_container}>
          <InputElement
            searchFunc={(e) => setSearch(e.target.value)}
            dataType={searchType}
          />
          <div className={styles.inner_container}>
            {sortedData
              .filter((element) =>
                search.toUpperCase() === ""
                  ? element
                  : element.number.includes(search.toUpperCase())
              )
              .map((element, index) => (
                <Link
                  key={index}
                  style={{ textDecoration: "none" }}
                  to={`${element.number}`}
                  state={element}
                >
                  <BusCard key={index} data={element} />
                </Link>
              ))}
          </div>
        </div>
      </>
    );
  } else if (sortedData[0].type.includes("stop")) {
    return (
      <>
        <div className={styles.main_container}>
          <InputElement
            searchFunc={(e) => setSearch(e.target.value.toLowerCase())}
            dataType={searchType}
          />
          <div className={styles.inner_container}>
            {sortedData
              .filter((element) =>
                search === ""
                  ? element
                  : element.name.toLowerCase().includes(search)
              )
              .map((element, index) => (
                <Link
                  key={index}
                  style={{ textDecoration: "none" }}
                  to={`${element.number}`}
                  state={element}
                >
                  <BusCard key={index} data={element} />
                </Link>
              ))}
          </div>
        </div>
      </>
    );
  }
}
