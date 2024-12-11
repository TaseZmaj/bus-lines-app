import styles from "./HomePage.module.css";
import NavBar from "../../components/NavBar/NavBar.jsx";
import HomeComponent from "../../components/MainContainers/HomeComponent.jsx";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <HomeComponent />
    </>
  );
}
