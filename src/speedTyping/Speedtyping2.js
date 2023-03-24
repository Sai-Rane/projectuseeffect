import React, { useEffect, useState } from "react";

const Speedtyping2 = () => {
  const [text, setText] = useState();
  const [wordCount, setWordCount] = useState("??");
  const [textareaMode, setTextareaMode] = useState(false);
  const [timeRemaining, settimeRemaining] = useState(5);
  const [isTimeRunning, setIsTimeRunning] = useState(false);

  const handleTextArea = (e) => {
    // console.log(e);
    setText(e.target.value);
  };
  console.log("text", text);

  // const handleClick = () => {
  //   console.log("buttonclicked");
  //   calculateWordCount();
  // };
  const calculateWordCount = (text) => {
    const arr = text.trim().split(" ");
    console.log("arr.length", arr.length);
    setWordCount(arr.length);
    // return arr.length;
  };

  //Example of Trim function
  // const str = "  Airplane in the air   ";
  // console.log("trimmed", str.trim().length);

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        console.log("timeRemaining", timeRemaining);
        settimeRemaining(timeRemaining - 1);
        // settimeRemaining(timeRemaining - 1);
      }, 1000); //the setTimeout function will first wait for 1sec and then execute the code wriiten in the body of setTimeout
    } else if (timeRemaining === 0) {
      setIsTimeRunning(false);
    }
  }, [timeRemaining, isTimeRunning]);
  //Adding timeRemaining in the dependency means that whenever timeRemaining changes useEffect will be called
  return (
    <div className="App">
      <h1>Typing Game</h1>
      <textarea
        value={text}
        onChange={handleTextArea}
        // disabled={textareaMode}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button
        onClick={() => {
          setIsTimeRunning(true);
          calculateWordCount(text);
        }}
      >
        Start
      </button>
      <h2>Word Count: {wordCount}</h2>
    </div>
  );
};

export default Speedtyping2;
