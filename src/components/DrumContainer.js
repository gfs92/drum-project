import React, { useState, useEffect } from "react";
import "../index.css";
import DrumPad from "./DrumPad";
import IdField from "./IdField";

const DrumContainer = () => {
  const soundObj = {
    Q: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    W: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    E: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    A: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    S: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    D: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    Z: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    X: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    C: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  };
  const idObj = {
    Q: "Heater 1",
    W: "Heater 2",
    E: "Heater 3",
    A: "Heater 4",
    S: "Clap",
    D: "Open-HH",
    Z: "Kick-n'-Hat",
    X: "Kick",
    C: "Closed-HH",
  };
  const [idInput, setIdInput] = useState("");

  const buttonOnClick = (value) => {
    setIdInput(idObj[value]);
    const audio = new Audio(soundObj[value]);
    audio.play();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase();
      setIdInput(idObj[key]);
      const audio = new Audio(soundObj[key]);
      audio.play();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="drumcontainer">
      <DrumPad buttonOnClick={buttonOnClick} />
      <div className="controlpanel">
        <IdField idInput={idInput} />
      </div>
    </div>
  );
};

export default DrumContainer;
