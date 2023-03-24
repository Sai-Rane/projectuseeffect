import React, { useEffect, useState } from "react";
import randomcolor from "randomcolor";

const Useeffect1 = () => {
  const [count, setcount] = useState(0);
  const [color, setColor] = useState();
  console.log("color", color);

  useEffect(() => {
    console.log("useEffect", useEffect);
    setColor(randomcolor);
  }, [count]);
  return (
    <>
      <div style={{ color: color }}>{count}</div>
      <div>
        <button onClick={() => setcount((prevCount) => prevCount + 1)}>
          Inc
        </button>
      </div>
      <div>
        <button onClick={() => setcount((prevCount) => prevCount - 1)}>
          Dec
        </button>
      </div>
    </>
  );
};

export default Useeffect1;
