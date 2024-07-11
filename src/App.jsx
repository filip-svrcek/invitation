import { useState } from "react";
import { TwentyTwentyFour } from "./components/TwentyTwentyFour";
import { DEFAULT_YEAR } from "./constants";
import { YearButton } from "./components/YearButton";
import { FilipsAge } from "./components/FilipsAge";
import { Bubble } from "./components/Bubble";
import styled from "styled-components";

const ContentBox = styled.div`
  width: 360px;
  height: 80px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [year, setYear] = useState(DEFAULT_YEAR);
  const age = year - DEFAULT_YEAR;

  return (
    <MainContainer>
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
    </MainContainer>
  );
}

export default App;
