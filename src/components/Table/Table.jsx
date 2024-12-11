// eslint-disable-next-line no-unused-vars
import styles from "./Table.module.css";

/* eslint-disable react/prop-types */
export default function Table(props) {
  const { data } = props;
  return (
    <table>
      <thead>
        <tr>
          <th style={{ borderRadius: "14px 0 0 0" }} rowSpan={2}>
            Period
          </th>
          <th>Starts from:</th>
          <th style={{ borderRadius: "0px 14px 0 0 " }}>Starts from:</th>
        </tr>
        <tr>
          {data.table.firstStops[0] === "" ? (
            <th>&nbsp;</th>
          ) : (
            <th>{data.table.firstStops[0]}</th>
          )}
          {data.table.firstStops[1] === "" ? (
            <th>&nbsp;</th>
          ) : (
            <th>{data.table.firstStops[1]}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {data.table.schedule.map((element, index) => (
          <tr key={index}>
            <td style={{ textAlign: "center" }}>{element.period}</td>
            <td>
              {element.departures0.map((innerElement) => innerElement + " ")}
            </td>
            <td>
              {element.departures1.map((innerElement) => innerElement + " ")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
