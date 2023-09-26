import "../index.css";

const DrumPadButton = ({ value, buttonOnClick }) => {
  return <button onClick={() => buttonOnClick(value)}>{value}</button>;
};

export default DrumPadButton;
