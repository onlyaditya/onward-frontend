import { AppRoutes } from "./Routes/AppRoutes";
import MsatThanku from "./components/DashboardHome/MsatThanku";
import RedirectToMsat from "./components/DashboardHome/RedirectToMsat";
import StartMsat from "./components/DashboardHome/StartMsat";
import ClearedMsat from "./components/DashboardHome/ClearedMsat";
import SubmitAndFinishMsat from "./components/TestPage/SubmitAndFinishMsat";
import TestPage from "./components/TestPage/TestPage";
import DashboardLanding from "./pages/DashboardLanding";

function App() {
  return (
    <>
      <AppRoutes />
      {/* <DashboardLanding/> */}
      {/* <SubmitAndFinishMsat/> */}
      {/* <RedirectToMsat/> */}
      {/* <TestPage/> */}
      {/* <MsatThanku/> */}
      {/* <ClearedMsat/> */}
    </>
  );
}

export default App;
