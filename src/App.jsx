// React router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Routes
import HomePage from "./pages/HomePage/HomePage.jsx";
import ErrorElement from "./pages/ErrorElement/ErrorElement.jsx";
import DayLinesPage from "./pages/DayLinesPage/DayLinesPage.jsx";
import NightLinesPage from "./pages/NightLinesPage/NightLinesPage.jsx";
import SuburbanLinesPage from "./pages/SuburbanLinesPage/SuburbanLinesPage.jsx";
import BusStopPage from "./pages/BusStopsPage/BusStopsPage.jsx";
import DynamicBusPage from "./pages/DynamicBusPage/DynamicBusPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/day-lines",
    element: <DayLinesPage />,
  },
  {
    path: "/night-lines",
    element: <NightLinesPage />,
  },
  {
    path: "/suburban-lines",
    element: <SuburbanLinesPage />,
  },
  {
    path: "/bus-stops",
    element: <BusStopPage />,
  },
  {
    path: "/day-lines/:bus_number",
    element: <DynamicBusPage />,
  },
  {
    path: "/night-lines/:bus_number",
    element: <DynamicBusPage />,
  },
  {
    path: "/suburban-lines/:bus_number",
    element: <DynamicBusPage />,
  },
  {
    path: "/bus-stops/:bus_number",
    element: <DynamicBusPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
