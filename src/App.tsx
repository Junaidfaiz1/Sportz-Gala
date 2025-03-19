import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { lazy } from "react";

const NavbarHead = lazy(() => import("./components/NavbarHead"));
const Navbar = lazy(() => import("./components/Navbar"));
const Poster = lazy(() => import("./components/Poster"));
const UpcomingEvents = lazy(() => import("./components/UpcomingEvents"));
const MatchCountDown = lazy(() => import("./components/MatchCountDown"));
const TopPlayers = lazy(() => import("./components/TopPlayers"));
const FAQcomponent = lazy(() => import("./components/FAQcomponent"));

const Layout: React.FC = () => {
  return (
    <div>
      <NavbarHead />
      <Navbar />
      <Poster />
      <UpcomingEvents />
      <MatchCountDown />
      <TopPlayers />
      <FAQcomponent />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
