import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Support from "@pages/Support";
import "./components/componentsCss/Background.scss";
import Gps from "@pages/Gps";
import SearchBar from "./components/Search";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Gps />} />
            <Route path="/Actu" element={<Header />} />
            <Route path="/Planet" element={<Header />} />
            <Route path="/Support" element={<Support />} />
          </Routes>
        </div>
      </Router>
      <main>
        <SearchBar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
