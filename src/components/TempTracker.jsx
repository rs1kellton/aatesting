import React, { useState } from "react";

let tempArray = [];

export default function TempTracker() {
  const [temparature, setTemparature] = useState("");
  const [meanData, setMeanData] = useState("");
  const [modeValue, setModeValue] = useState("");
  const [error, setError] = useState(false);

  let maxParsedInt = parseInt(Math.max(...tempArray));
  let minParsedInt = parseInt(Math.min(...tempArray));

  const handleSubmit = () => {
    if (temparature > 0 && temparature <= 150) {
      if (temparature) {
        tempArray.push(temparature);
      }
      setTemparature("");

      if (tempArray) {
        var sum = 0;
        for (var i = 0; i < tempArray.length; i++) {
          sum += parseInt(tempArray[i], 10);
        }
        var average = sum / tempArray.length;
        if (sum) {
          setMeanData(average ? average : 0);
        }
      }

      if (tempArray) {
        const mode = {};
        let max = 0;
        let count = 0;
        for (let i = 0; i < tempArray.length; i++) {
          const item = tempArray[i];
          if (mode[item]) {
            mode[item]++;
          } else {
            mode[item] = 1;
          }
          if (count < mode[item]) {
            max = item;
            count = mode[item];
          }
        }
        setModeValue(max);
      }
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000);
    }
  };
  return (
    <>
      <h1>Temperature Tracker for max, min, mean and mode values: </h1>

      <div className="temp-tracker">
        <div>
          <input
            type="number"
            placeholder="Please Type Here"
            value={temparature}
            onChange={(e) => {
              setTemparature(e.target.value);
            }}
          />
          {error && <p> Temparature range between 0 to 150</p>}
          <button onClick={handleSubmit}>SUBMIT</button>
        </div>
        {tempArray.length > 0 && (
          <div className="tempResult">
            <h3>Max Temparature : {maxParsedInt ? maxParsedInt : 0}</h3>
            <h3>Min Temparature : {minParsedInt ? minParsedInt : 0}</h3>
            <h3>Mean of all range Temparatures : {meanData ? meanData : 0}</h3>
            <h3>Mode of all the temparatures :{modeValue ? modeValue : 0}</h3>
          </div>
        )}
      </div>
    </>
  );
}
