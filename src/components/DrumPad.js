import "../index.css";
import DrumPadButton from "./DrumPadButton";

const DrumPad = () => {
  return (
    <div>
      <div className="buttonrow">
        <DrumPadButton>1</DrumPadButton>
        <DrumPadButton>2</DrumPadButton>
        <DrumPadButton>3</DrumPadButton>
      </div>
      <div className="buttonrow">
        <DrumPadButton></DrumPadButton>
        <DrumPadButton></DrumPadButton>
        <DrumPadButton></DrumPadButton>
      </div>
      <div className="buttonrow">
        <DrumPadButton></DrumPadButton>
        <DrumPadButton></DrumPadButton>
        <DrumPadButton></DrumPadButton>
      </div>
    </div>
  );
};

export default DrumPad;
