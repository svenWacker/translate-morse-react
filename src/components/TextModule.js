import React, { useState } from "react";

function TextModule() {
  const morseTable = {
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    ".": "......",
    ",": ".-.-.-",
    ";": "-.-.-.",
    ":": "---...",
    "?": "..--..",
    "!": "--..--",
    "(": "-.--.",
    ")": "-.--.-",
    "/": "-..-.",
    "-": "-....-",
    "@": ".--.-.",
    "=": "-...-",
    "+": ".-.-.",
    $: "...-..-",
    "'": ".----.",
    "&": ".-...",
    " ": "/",
  };
  const [inputText, setInput] = useState("");
  const [result, setOutput] = useState("");

  function changeHandle(e) {
    setInput(e.target.value);
  }

  function textToMorse() {
    let result = "";
    let morseArray = inputText.toString().split("");

    for (let i = 0; i < morseArray.length; i++) {
      result += morseTable[morseArray[i].toLowerCase()];
    }
    setOutput(result);
  }

  return (
    <div className="container">
      <h1>Morse Code Translator</h1>
      <input
        type="text"
        className="form-control"
        value={inputText}
        onChange={changeHandle}
        onKeyUp={textToMorse}
      />
      <div>Text: {inputText}</div>
      <div>Morse: {result}</div>
    </div>
  );
}

export { TextModule };
