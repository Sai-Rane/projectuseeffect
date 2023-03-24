import React, { useEffect, useState } from "react";

const Speedtyping1 = () => {
  const [text, setText] = useState();
  const [timeRemaining, settimeRemaining] = useState(5);

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
    return arr.length;
  };

  useEffect(() => {
    if (timeRemaining > 0) {
      setTimeout(() => {
        settimeRemaining((prev) => prev - 1);
      }, 1000); //the setTimeout function will first wait for 1sec and then execute the code written in the body of setTimeout
    }
  });
  //Adding timeRemaining in the dependency means that whenever timeRemaining changes useEffect will be called

  return (
    <div className="App">
      <h1>Typing Game</h1>
      <textarea value={text} onChange={handleTextArea} />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button
        onClick={() => {
          calculateWordCount(text);
        }}
      >
        Start
      </button>
      <h2>Word Count: ???</h2>
    </div>
  );
};

export default Speedtyping1;
