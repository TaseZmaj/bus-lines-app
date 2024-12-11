import styles from "./DynamicBusPage.module.css";
import { useLocation } from "react-router-dom";

// Components
import NavBar from "../../components/NavBar/NavBar";
import BusComponent from "../../components/MainContainers/BusComponent";

export default function DynamicBusPage() {
  const { state } = useLocation();

  return (
    <>
      <NavBar />
      <BusComponent data={state} />
    </>
  );
}
