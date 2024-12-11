import NavBar from "../../components/NavBar/NavBar.jsx";
import MainComponent from "../../components/MainContainers/MainComponent.jsx";

export default function NightLinesPage() {
  const searchType = "night line";

  return (
    <>
      <NavBar />
      <MainComponent searchType={searchType} />
    </>
  );
}
