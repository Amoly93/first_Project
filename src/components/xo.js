import { useState, useMemo } from "react";

const x = "X";
const o = "O";

function XO() {
  const [items, setItems] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(x);
  const [Winner, setWinner] = useState(false);
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

  const lastPlayer = player === x ? o : x;
  let hasWinner = false;
  const checkWinner = useMemo(() => {
    indexOfArrayOX.forEach((indexArray) => {
      if (indexArray.every((index) => items[index] === lastPlayer)) {
        setWinner(true);
      }
    });
  }, [player]);

  const xoFunc = (index) => {
    const newItems = [...items];
    newItems[index] = player;
    setItems(newItems);
    setPlayer(player === x ? o : x);
  };
  const reset = () => {
    setItems(["", "", "", "", "", "", "", "", ""]);
    setWinner(false);
  };
  return (
    <div className="container max-w-2xl mx-auto space-y-3">
      <div>
        <h1 className="text-center">XO Game</h1>
        <div className="p-10 flex justify-center flex-row gap-20">
          {Winner && (
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
              Winner
                ? "bg-green-300 cursor-not-allowed "
                : "bg-white hover:bg-gray-400"
            } border-2 border-neutral-200  `}
            onClick={() => xoFunc(index)}
            disabled={Winner || items[index]}
          >
            {/* <label> <input placeholder={`${player}`}></input> </label> */}
            {prop === "" && (
              <span
                className={`text-4xl text-transparent group-hover/item:text-white  `}
              >
                {player}
              </span>
            )}

            <h1
              className={` text-4xl ${
                checkWinner
                  ? "text-gray-400"
                  : prop === x
                  ? "text-blue-600 hover:text-white"
                  : "text-red-600 hover:text-white"
              }`}
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
