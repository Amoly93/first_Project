import { useState } from "react";

function XO() {
  const [items, setItems] = useState(["", "", "", "", "", "", "", "", ""]);

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

  const [player, setPlayer] = useState("x");

  const xoFunc = (index) => {
    const newArrayxo = [...items];
    newArrayxo[index] = player;
    setItems(newArrayxo);
    setPlayer(player === "x" ? "o" : "x");
  };

  let win;
  const checkWin = () => {
    for (let i = 0; i < indexOfArrayOX.length; i++) {
      if (
        indexOfArrayOX[i].every((index) => {
          console.log(i);
          return items[index] === player;
        })
      ) {
        win = "Winner";
        return `Winner  Player ${player} 🎉`;
      }
    }
  };

  return (
    <div className="conainer max-w-2xl mx-auto p-20">
      <h1 className="text-center ">XO Game</h1>
      <h1 className="text-center">{checkWin()}</h1>
      <div className="bg-black grid grid-cols-3 border-solid border-4 border-white">
        {items.map((prop, index) => {
          return (
            <button
              className="h-20   bg-white "
              onClick={() => xoFunc(index)}
              disabled={win === "Winner" || !(items[index] === "")}
            >
              <p
                className={`text-5xl ${
                  prop === "x" ? "text-blue-600" : "text-red-600"
                }`}
              >
                {prop}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default XO;
