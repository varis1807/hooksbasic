import { useState,useEffect } from "react";
function App() {
  let [count, setCount] = useState(0);// Ae line ek hi bar chlti hai agar iski duplicates bnaye to ae skip hone lg jayegi
useEffect(()=>{console.log("use effect was executed")},[])
console.log("component was render");
  // console.log(count);
  return (
    <div>
      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button> */}
      <button>Click Me <p>{count}</p></button>
    </div>
  );
}
export default App;
