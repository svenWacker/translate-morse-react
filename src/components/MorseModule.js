import React from "react";

const dotThreshold = 200;
const inactivityThreshold = 600;

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

const translateMorseToCharacter = (morseText) => {
  console.log("morseText", morseText);
  if (!morseText.length) return "";
  return morseTable[morseText] || "undefined";
};

const translateFromMorseToText = (morseText) => {
  return morseText.split(" ").map(translateMorseToCharacter).join("");
};

export default class MorseModule extends React.Component {
  constructor(props) {
    super(props);
    this.lastButtonPressedDown = undefined;
    this.lastButtonPressedUp = undefined;

    this.state = {
      morseText: "",
      translatedText: "",
    };
  }

  _checkInactivity = (now) => () => {
    if (this.lastButtonPressedUp === now) {
      this.lastButtonPressedDown = undefined;
      this.lastButtonPressedUp = undefined;

      const newMorseText = this.state.morseText + " ";
      const translatedText = translateFromMorseToText(newMorseText);

      this.setState({
        morseText: newMorseText,
        translatedText,
      });
    }
  };

  _onButtonMouseDown = () => {
    this.lastButtonPressedDown = Date.now();
    this.lastButtonPressedUp = undefined;
  };

  _onButtonMouseUp = () => {
    const now = Date.now();
    const timeElapsed = now - this.lastButtonPressedDown;
    const morseCharacter = timeElapsed < dotThreshold ? "." : "-";

    this.lastButtonPressedDown = undefined;
    this.lastButtonPressedUp = now;

    this.setState({
      morseText: this.state.morseText + morseCharacter,
    });
    setTimeout(this._checkInactivity(now), inactivityThreshold);
  };

  render() {
    const { morseText, translatedText } = this.state;
    return (
      <div class="morse-module">
        <div>Morse: {morseText}</div>
        <button
          onMouseDown={this._onButtonMouseDown}
          onMouseUp={this._onButtonMouseUp}
        >
          Button
        </button>
        <div>Text: {translatedText}</div>
      </div>
    );
  }
}
export { MorseModule };
