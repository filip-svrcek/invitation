import { useState } from "react";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [year, setYear] = useState(1994);

  return (
    <>
      {year >= 2024 && <Fireworks autorun={{ speed: 3 }} />}
      <h1>
        Gratulujeme! Jste zváni.
      </h1>
      {year < 2024 ? (
        <div className="card">
          <button onClick={() => setYear((count) => count + 1)}>
            Je rok {year}
          </button>
        </div>
      ) : (
        <h1>Je rok 2024, Filip oslaví 30. narozeniny!</h1>
      )}
    </>
  );
}

export default App;
