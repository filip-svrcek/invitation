import PropTypes from "prop-types";
import styled from "styled-components";

const getFilipEmoji = (age) => {
  if (age === 30) {
    return "👴";
  } else if (age > 19) {
    return "👨";
  } else if (age > 12) {
    return "🧑";
  } else if (age > 6) {
    return "👦";
  } else {
    return "👶";
  }
};

const EmojiYearContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
`;
const EmojiElement = styled.div`
  font-size: 1.5em;
`;
const YearTextElement = styled.div`
  font-size: 1.5em;
  width: 130px;
`;
const Divider = styled.div`
  font-size: 1.5em;
  margin: 0px 10px;
`;

export const FilipsAge = ({ age }) => {
  const emoji = getFilipEmoji(age);
  const yearString = age === 1 ? "rok" : age < 5 && age > 1 ? "roky" : "let";

  if (age > 30) {
    return null;
  }
  return emoji ? (
    <>
      <EmojiYearContainer>
        <EmojiElement>{emoji}</EmojiElement>
        <Divider>|</Divider>
        <YearTextElement>
          {age} {yearString}
        </YearTextElement>
      </EmojiYearContainer>
    </>
  ) : null;
};

FilipsAge.propTypes = {
  age: PropTypes.number.isRequired,
};
