import { hover } from "@testing-library/user-event/dist/hover";
import { useState, useMemo } from "react";

const x = "X";
const o = "O";

function XO() {
  const [items, setItems] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(x);

  const indexOfArrayOX = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  const [isHovered, setIsHovered] = useState(false);
 
  const lastPlayer = player === x ? o : x;
  const checkWinner = useMemo(() => {
    let hasWinner = false;
    if (!hasWinner) {
      indexOfArrayOX.forEach((indexArray) => {
      if (indexArray.every((index) => items[index] === lastPlayer)) {
        hasWinner = true;
      }
    });
    }
  
    return hasWinner;
  }, [player , items]);

  const xoFunc = (index) => {
    const newItems = [...items];
    newItems[index] = player;
    setItems(newItems);
    setPlayer(player === x ? o : x);
  };
  const reset = () => {
    setItems(["", "", "", "", "", "", "", "", ""]);
  };
  return (
    <div className="container max-w-2xl mx-auto space-y-3">
      <div>
        <h1 className="text-center">XO Game</h1>
        <div className="p-10 flex justify-center flex-row gap-20">
          {checkWinner && (
            <h1 className="text-center">Winner is Player {lastPlayer} 🏆</h1>
          )}
          <button className="" onClick={reset}>
            {" "}
            Restart Game ↩︎{" "}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 px-24">
        {items.map((prop, index) => (
          <button
            key={index}
            className={`h-20  group/item    ${
              checkWinner
                ? "bg-green-300 cursor-not-allowed "
               : ` bg-white ${isHovered ? "hover:bg-green-300" : ""}`
            } ${isHovered ? "text-transparent hover:text-green-950": "text-transparent "} border-2 border-neutral-200  `}
            onClick={() => xoFunc(index)}
            disabled={checkWinner || items[index]}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={()=>{setIsHovered(false)}}
          >
            
             {isHovered ? player: ""}
            <h1
              className={` text-4xl  ${prop === x
                ? "text-blue-600 "
                : "text-red-600 "}`}
            >
              {prop}
            </h1>
          </button>
        ))}
      </div>
    </div>
  );
}

export default XO;

