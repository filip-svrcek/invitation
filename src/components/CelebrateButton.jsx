import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  font-size: 2em;
`;

export const CelebrateButton = ({ setYear }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showButton && (
        <Button onClick={() => setYear((count) => count + 1)}>
          Oslava? 🎉
        </Button>
      )}
    </>
  );
};

CelebrateButton.propTypes = {
  setYear: PropTypes.func.isRequired,
};
