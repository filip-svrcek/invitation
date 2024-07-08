import PropTypes from "prop-types";

export const YearButton = ({ year, setYear }) => {
  return (
    <>
      <button
        className="year-button"
        onClick={() => setYear((count) => count + 1)}
      >
        Rok {year}
      </button>
    </>
  );
};

YearButton.propTypes = {
  year: PropTypes.number.isRequired,
  setYear: PropTypes.func.isRequired,
};
