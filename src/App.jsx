import { useState } from "react";
import "./App.css";
import { TwentyTwentyFour } from "./components/TwentyTwentyFour";
import { DEFAULT_YEAR } from "./constants";
import { YearButton } from "./components/YearButton";
import { FilipsAge } from "./components/FilipsAge";

function App() {
  const [year, setYear] = useState(DEFAULT_YEAR);

  return (
    <>
      {
        <div className="content-box">
          <FilipsAge year={year} />
        </div>
      }
      {year < 2024 ? (
        <div className="content-box">
          <YearButton year={year} setYear={setYear} />
        </div>
      ) : (
        <div className="content-box">
          <TwentyTwentyFour />
        </div>
      )}
    </>
  );
}

export default App;
