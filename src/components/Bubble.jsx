import PropTypes from "prop-types";
import styled from "styled-components";

const BubbleDiv = styled.div`
  max-width: 300px;
  padding: 10px 20px;
  background-color: #703f3f;
  color: white;
  border-radius: 20px;
  position: relative;
  font-family: Arial, sans-serif;
  font-size: 1em;
  &::after {
    content: "";
    position: absolute;
    bottom: 1px;
    right: 90px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: #703f3f;
    border-bottom: 0;
    margin-left: -10px;
    margin-bottom: -10px;
  }
`;

const getBubbleText = (age) => {
  if (age > 0 && age < 3) {
    return "Tlačítkem zvyšuješ můj věk.";
  }
  if (age > 3 && age < 6) {
    return "Doufám, že víš, co děláš...";
  }
  if (age > 7 && age < 11) {
    return "Škola? Bylo mi líp než jsem se naučil číst a psát!";
  }
  if (age > 12 && age < 17) {
    return "Proč je celý svět proti mně?!";
  }
  if (age > 19 && age < 23) {
    return `Dneska mi někdo poprvé řekl "dobrý den"!`;
  }
  if (age > 23 && age < 26) {
    return "Nelíbí se mi, kam to spěje...";
  }
  if (age > 26 && age < 29) {
    return "Přestaň klikat!!";
  }
  if (age === 30) {
    return "Tak to pěkně děkuji... co teď?";
  }
  return null;
};

export const Bubble = ({ age }) => {
  const bubbleText = getBubbleText(age);

  if (!bubbleText) {
    return null;
  }
  return (
    <div>
      <BubbleDiv>{bubbleText}</BubbleDiv>
    </div>
  );
};

Bubble.propTypes = {
  age: PropTypes.number.isRequired,
};
