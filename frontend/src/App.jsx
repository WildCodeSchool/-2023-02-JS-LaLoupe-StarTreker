import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";
import "./components/componentsCss/Background.scss";
import bgimg from "./assets/Map-Milky-Way.png";
import SearchBar from "./components/Search";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/Actu" element={<Header />} />
            <Route path="/Planet" element={<Header />} />
            <Route path="/Support" element={<Header />} />
          </Routes>
        </div>
      </Router>
      <main>
        <img src={bgimg} alt="Milky Way" />
        <SearchBar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
