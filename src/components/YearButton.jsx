import PropTypes from "prop-types";
import styled from "styled-components";
import { CelebrateButton } from "./CelebrateButton";

const Button = styled.button`
  font-size: 2em;
`;

export const YearButton = ({ year, setYear }) => {
  if (year === 2024) {
    return <CelebrateButton setYear={setYear}>Rok {year}</CelebrateButton>;
  }
  return (
    <>
      <Button onClick={() => setYear((count) => count + 1)}>Rok {year}</Button>
    </>
  );
};

YearButton.propTypes = {
  year: PropTypes.number.isRequired,
  setYear: PropTypes.func.isRequired,
};
