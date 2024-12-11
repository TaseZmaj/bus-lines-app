import MainComponent from "../../components/MainContainers/MainComponent.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";

export default function BusStopsPage() {
  const searchType = "bus stop";

  return (
    <>
      <NavBar />
      <MainComponent searchType={searchType} type="inputPage" />
    </>
  );
}
