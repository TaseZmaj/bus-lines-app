import styles from "./ErrorElement.module.css";
import NavBar from "../../components/NavBar/NavBar.jsx";
import ErrorComponent from "../../components/MainContainers/ErrorComponent.jsx";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <ErrorComponent />
    </>
  );
}
