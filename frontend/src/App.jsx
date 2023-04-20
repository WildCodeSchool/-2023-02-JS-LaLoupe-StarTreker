import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";
import "./components/componentsCss/Background.scss";
import PlanetButton from "@components/PlanetButton";
import bgimg from "./assets/Map-Milky-Way.png";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <PlanetButton />
        <div>
          <Routes>
            <Route path="/Actu" element={<Header />} />
            <Route path="/Planet" element={<Header />} />
            <Route path="/Support" element={<Header />} />
            <Route path="/Planets" element={<PlanetButton />} />
          </Routes>
        </div>
      </Router>
      <main>
        <img src={bgimg} alt="Milky Way" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
