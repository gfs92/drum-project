import "../index.css";
import DrumPadButton from "./DrumPadButton";

const DrumPad = ({ buttonOnClick }) => {
  return (
    <div className="DrumPad">
      <div className="buttonrow">
        <DrumPadButton value="Q" buttonOnClick={buttonOnClick} />
        <DrumPadButton value="W" buttonOnClick={buttonOnClick} />
        <DrumPadButton value="E" buttonOnClick={buttonOnClick} />
      </div>
      <div className="buttonrow">
        <DrumPadButton value="A" buttonOnClick={buttonOnClick} />
        <DrumPadButton value="S" buttonOnClick={buttonOnClick} />
        <DrumPadButton value="D" buttonOnClick={buttonOnClick} />
      </div>
      <div className="buttonrow">
        <DrumPadButton value="Z" buttonOnClick={buttonOnClick} />
        <DrumPadButton value="X" buttonOnClick={buttonOnClick} />
        <DrumPadButton value="C" buttonOnClick={buttonOnClick} />
      </div>
    </div>
  );
};

export default DrumPad;
