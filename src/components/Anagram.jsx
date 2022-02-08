import React, { useState } from "react";
import "./anagram.css";

export default function Anagram() {
  const [firstWord, setFirstWord] = useState("");
  const [secondWord, setSecondWord] = useState("");
  const [resultButton, setResultButton] = useState("");
  const [result, setResult] = useState(false);
  const [errorFirstWord, setErrorFirstWord] = useState(false);
  const [errorSecondWord, setErrorSecondWord] = useState(false);

  let object = {};

  const handleSubmit = () => {
    let str1 = firstWord.toLowerCase().split("").sort().join("");
    let str2 = secondWord.toLowerCase().split("").sort().join("");
    if (firstWord !== "" || secondWord !== "") {
      if (firstWord && secondWord) {
        object.firstWord = firstWord;
        object.secondWord = secondWord;
        if (str1 === str2) {
          setResult(true);
        } else {
          setResult(false);
        }
      }
      setResultButton(object);
      setFirstWord("");
      setSecondWord("");
    } else {
      setResultButton("");
      setErrorFirstWord(true);
      setErrorSecondWord(true);
    }
  };
  return (
    <div className="inside-container">
      <h1 className="heading">Check if two words are Anagram</h1>
      <div className="anagram">
        <div className="fields">
          <label>First word: </label>
          <input
            type="text"
            placeholder="Please Enter First Word"
            value={firstWord}
            onChange={(e) => setFirstWord(e.target.value)}
          />
          {errorFirstWord && (
            <span className="error">Please Enter the first word</span>
          )}
        </div>
        <div className="fields">
          <label>Second word: </label>
          <input
            type="text"
            placeholder="Please Enter Second Word"
            value={secondWord}
            onChange={(e) => setSecondWord(e.target.value)}
          />
          {errorSecondWord && (
            <span className="error">Please enter the second word</span>
          )}
        </div>
        <div>
          <button onClick={handleSubmit}>Click for Result</button>
        </div>
        {resultButton && (
          <div className="result-status">
            <span>The added words </span>
            <span className="resultText">
              {resultButton.firstWord ? resultButton.firstWord : ""},{" "}
              {resultButton.secondWord ? resultButton.secondWord : ""}
              {" =>"}
            </span>
            <span className="return-result">
              {" "}
              Returns {result === true ? "True" : "False"}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
