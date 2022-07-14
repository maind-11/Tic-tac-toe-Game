import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import { useSelector } from "react-redux";
import PlayerVsPlayer from "./Pages/PlayerVsPlayer";
import PlayerVsBot from "./Pages/PlayerVsBot";

function App() {
  const mode = useSelector((state) => state.mode);
  return (
    <div className="App">
      {!mode && <Home />}
      {mode == "pvsp" && <PlayerVsPlayer />}
      {mode === "pvsb" && <PlayerVsBot />}
    </div>
  );
}

export default App;
