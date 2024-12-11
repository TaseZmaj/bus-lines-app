//Components
import NavBar from "../../components/NavBar/NavBar.jsx";
import MainComponent from "../../components/MainContainers/MainComponent.jsx";

export default function DayLinesPage() {
  const searchType = "day line";

  return (
    <>
      <NavBar />
      <MainComponent searchType={searchType} />
    </>
  );
}
