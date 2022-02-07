import React, { useState } from "react";
export default function Anagram() {
  const [firstWord, setFirstWord] = useState("");
  const [secondWord, setSecondWord] = useState("");
  const [resultButton, setResultButton] = useState("");
  const [result, setResult] = useState(false);
  const [errorFirstWord, setErrorFirstWord] = useState(false);
  const [errorSecondWord, setErrorSecondWord] = useState(false);

  let object = {};
  let errorStyle = { color: "red" };

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
    <>
      <h1>Check if two words are Anagram</h1>
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
            <span style={errorStyle} className="errorText">
              Please Enter the first word
            </span>
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
            <span style={errorStyle} className="errorText">
              Please enter the second word
            </span>
          )}
        </div>
        <div>
          <button onClick={handleSubmit}>Click for Result</button>
        </div>
        {resultButton && (
          <div className="resultStatus">
            <h2 className="resultText">
              {resultButton.firstWord ? resultButton.firstWord : ""},{" "}
              {resultButton.secondWord ? resultButton.secondWord : ""}
            </h2>
            <h2> Returns {result === true ? "True" : "False"}</h2>
          </div>
        )}
      </div>
    </>
  );
}
