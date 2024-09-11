import { useState } from "react";

function XO() {
  const [xo, setItem] = useState(["", "", "", "", "", "", "", "", ""]);

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

  let [playerO, setPlayerO] = useState(true);

  const xoFunc = (index) => {
    const newArrayxo = [...xo];
    const textXo = playerO ? "O" : "X";
    newArrayxo[index] = textXo;
    setItem(newArrayxo);
    setPlayerO((playerO = !playerO));
  };

  const checkWin = () => {
    const squares = [...xo];
    for (let i = 0; i < indexOfArrayOX.length; i++) {
      const [a, b, c] = indexOfArrayOX[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return `winner 🎉 ${squares[a]}`;
      }
    }
    return null;
  };

  return (
    <div className="conainer max-w-2xl mx-auto p-20">
      <h1 className="text-center ">XO Game</h1>
      <h1 className="text-center">{checkWin()}</h1>
      <div className="bg-indigo-200  grid grid-cols-3 border-solid  border-4 border-white divide-y divide-x divide-indigo-700">
        {xo.map((x, index) => {
          return (
            <button
              className="h-20 "
              onClick={() => xoFunc(index)}
              disabled={!(xo[index] === "")}
            >
              <p className="text-6xl text-blue-600 text-center">{x}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default XO;
