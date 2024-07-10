import PropTypes from "prop-types";

const getFilipEmoji = (age) => {
  if (age === 30) {
    return "👴";
  } else if (age > 20) {
    return "👨";
  } else if (age > 10) {
    return "👦";
  } else {
    return "👶";
  }
};

export const FilipsAge = ({ age }) => {
  const emoji = getFilipEmoji(age);
  const yearString = age === 1 ? "rok" : age < 5 && age > 1 ? "roky" : "let";

  if (age > 30) {
    return null;
  }
  return emoji ? (
    <h1>
      Filip: {emoji} | {age} {yearString}
    </h1>
  ) : null;
};

FilipsAge.propTypes = {
  age: PropTypes.number.isRequired,
};
