import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gps from "./pages/Gps";
import Header from "./components/Header";
import Planets from "./pages/Planets";
import Support from "./pages/Support";
import Footer from "./components/Footer";
import "./components/componentsCss/Background.scss";

function App() {
  return (
    <div>
      <Router>
        <div className="general">
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Gps />} />
              <Route path="/actu" element={<Header />} />
              <Route path="/planetes" element={<Planets />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
