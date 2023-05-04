import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Gps from "./pages/Gps";
import Header from "./components/Header";
import Planets from "./pages/Planets";
import Support from "./pages/Support";
import Footer from "./components/Footer";
import "./components/componentsCss/Background.scss";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [planets, setPlanets] = useState();

  useEffect(() => {
    axios
      .get(
        "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&select=kepid,kepoi_name,koi_period,koi_prad,koi_teq,koi_srad,koi_steff&where=koi_disposition%20like%20%27CANDIDATE%27%20and%20koi_period%3E150%20and%20koi_prad%3E0.2%20and%20koi_teq%3E240%20&format=json"
      )
      .then((response) => {
        const planetImages = response.data.slice(0, 70);
        setPlanets(planetImages);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Router>
        <div className="general">
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Gps />} />
              <Route path="/actu" element={<Header />} />
              <Route path="/planetes" element={<Planets planets={planets} />} />
              <Route
                path="/planetes/:id"
                element={<Planets planets={planets} />}
              />
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
