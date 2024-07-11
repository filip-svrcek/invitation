import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

export const TwentyTwentyFour = () => {
  return (
    <>
      <Fireworks autorun={{ speed: 1.5 }} />
      <h2>Oběd v restauraci Tom</h2>
      <h2>Zlín, 20.7. 11:30</h2>
      <h2>...a poté posezení v Malé ulici!</h2>
    </>
  );
};
