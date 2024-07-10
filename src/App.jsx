import { useState } from "react";
import { TwentyTwentyFour } from "./components/TwentyTwentyFour";
import { DEFAULT_YEAR } from "./constants";
import { YearButton } from "./components/YearButton";
import { FilipsAge } from "./components/FilipsAge";
import { Bubble } from "./components/Bubble";
import styled from "styled-components";

const ContentBox = styled.div`
  height: 4em;
  width: 400px;
`;

function App() {
  const [year, setYear] = useState(DEFAULT_YEAR);
  const age = year - DEFAULT_YEAR;

  return (
    <>
      <ContentBox>
        <Bubble age={age} />
      </ContentBox>
      {
        <ContentBox>
          <FilipsAge age={age} />
        </ContentBox>
      }
      {year < 2025 ? (
        <ContentBox>
          <YearButton year={year} setYear={setYear} />
        </ContentBox>
      ) : (
        <ContentBox>
          <TwentyTwentyFour />
        </ContentBox>
      )}
    </>
  );
}

export default App;
