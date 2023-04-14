import "./App.scss";
import "./components/componentsCss/Background.scss";
import bgimg from "./assets/Map-Milky-Way.png";

function App() {
  return (
    <main>
      <img src={bgimg} alt="Milky Way" />
    </main>
  );
}

export default App;
