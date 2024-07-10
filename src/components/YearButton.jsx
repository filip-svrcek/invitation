import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  font-size: 2em;
  margin: 2em;
  width: 300px;
`;

export const YearButton = ({ year, setYear }) => {
  if (year === 2024) {
    return (
      <Button onClick={() => setYear((count) => count + 1)}>Oslava?</Button>
    );
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
