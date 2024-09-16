import { useState, useMemo } from "react";

function XO() {
  const [items, setItems] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const [isWin, setIsWin] = useState(false);

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

  const checkWinner = useMemo(() => {
    return (newItems) => {
      indexOfArrayOX.forEach((indexArray) => {
        if (indexArray.every((index) => newItems[index] === player)) {
          setIsWin(true);
        }
      });
      return isWin;
    };
  }, [player]);

  const xoFunc = (index) => {
    const newItems = [...items];
    newItems[index] = player;
    setItems(newItems);
    checkWinner(newItems);
    setPlayer(player === "X" ? "O" : "X");
  };
  return (
    <div className="container max-w-2xl mx-auto p-20">
      <h1 className="text-center">XO Game</h1>
      <h1 className="text-center">
        {isWin ? `Winner Player ${player === "X" ? "O" : "X"}🏆` : ""}
      </h1>
      <div className="bg-black grid grid-cols-3">
        {items.map((prop, index) => (
          <button
            key={index}
            className={`h-20 ${
              isWin ? "bg-green-600 cursor-not-allowed" : "bg-white"
            } border-2 border-neutral-200`}
            onClick={() => xoFunc(index)}
            disabled={isWin || items[index] !== ""}
          >
            <h1
              className={`text-5xl ${
                isWin
                  ? "text-gray-400"
                  : prop === "X"
                  ? "text-blue-600"
                  : "text-red-600"
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
