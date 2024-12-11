import NavBar from "../../components/NavBar/NavBar.jsx";
import MainComponent from "../../components/MainContainers/MainComponent.jsx";

export default function SuburbanLinesPage() {
  const searchType = "suburban line";

  return (
    <>
      <NavBar />
      <MainComponent searchType={searchType} type="inputPage" />
    </>
  );
}
