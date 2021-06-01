import React, { useState } from "react";

const morseTable = {
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".-.-.-": ".",
  "--..--": ",",
  "..--..": "?",
  "-.-.--": "!",
  "-....-": "-",
  "-..-.": "/",
  ".--.-.": "@",
  "-.--.": "(",
  "-.--.-": ")",
};

function TextModule() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
  };

  const AlphaKeys = () => Object.keys(morseTable);

  const MorseKeys = () =>
    AlphaKeys().map(function (alphakey) {
      return morseTable[alphakey];
    });
  console.log(Object.entries(morseTable));

  return (
    <div>
      <form onSubmit={handleChange}>
        <input type="text" placeholder="Please, enter your text here"></input>
        <button className="submit-button">Translate</button>
      </form>
      <div className="result" placeholder="Result">
        {MorseKeys}
      </div>
    </div>
  );
}

export { TextModule };
