import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ROUTES from "./routes";
import Login from "./components/Login/login";
import DashboardPage from "./pages/dashboardPage";

function App() {
  const { LOGIN, DASHBOARD, DEATILS, SELL } = ROUTES;
  return (
    <>
      {" "}
      <Router>
        <Routes>
          <Route exact path={LOGIN} element={<Login />} />
          <Route exact path={DASHBOARD} element={<DashboardPage />} />
          {/* <Route exact path={DE} element={<AppointmentPage />} /> */}
          {/* <Route exact path={`${BLOG}/:blogs`} element={<BlogpostFormat />} />
        <Route
          exact
          path={`${TREATMENT}/:treatments`}
          element={<TreatmentServiceFormat />}
        /> */}

          {/* <Route component={Error} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
