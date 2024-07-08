import PropTypes from "prop-types";
import { DEFAULT_YEAR } from "../constants";
import { useEffect, useState } from "react";

export const FilipsAge = ({ year }) => {
  const [age, setAge] = useState(year - DEFAULT_YEAR);

  useEffect(() => {
    setAge(year - DEFAULT_YEAR);
  }, [year]);

  if (age >= 30) {
    return <h1>Filip: 👴</h1>;
  } else if (age > 20) {
    return <h1>Filip: 👨</h1>;
  } else if (age > 10) {
    return <h1>Filip: 👦</h1>;
  } else if (age > 2) {
    return <h1>Filip: 👶</h1>;
  } else {
    return <h1></h1>;
  }
};

FilipsAge.propTypes = {
  year: PropTypes.number.isRequired,
};
