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


  const checkWin = () => {
    for (let i = 0; i < indexOfArrayOX.length; i++) {
      if (
        indexOfArrayOX[i].every((index) => {
     
          return items[index] === player;
        })
      ) {
  
        return true;
      }
    }
  };

  return (
    <div className="conainer max-w-2xl mx-auto p-20">
      <h1 className="text-center ">XO Game</h1>
      <h1 className="text-center">{checkWin()=== true ? "Winner 🏆":""}</h1>
      <div className={`bg-black grid grid-cols-3 border-solid border-4 border-white`}>
        {items.map((prop, index) => {
          return (
            <button
              className={`h-20  ${checkWin() === true ? "bg-green-600":"bg-white"} cursor-not-allowed border-2 border-indigo-60` }
              onClick={() => xoFunc(index)}
              disabled={checkWin() === true || !(items[index] === "")}
            >
              <p
                className={`text-5xl ${
                   checkWin() === true ?  "text-gray-400" :prop === "x" ? "text-blue-600" : "text-red-600"}
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
