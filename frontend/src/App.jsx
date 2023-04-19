import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Planets from "./pages/Planets";
import "./components/componentsCss/Background.scss";
import bgimg from "./assets/Map-Milky-Way.png";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/actu" element={<Header />} />
            <Route path="/planetes" element={<Planets />} />
            <Route path="/support" element={<Header />} />
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
