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

  let [player, setPlayer] = useState("x");

  const xoFunc = (index) => {
    const newArrayxo = [...xo];
    newArrayxo[index] = player;
    setItem(newArrayxo);
    if (player === "x"){
      setPlayer( "o");
    }else{
      setPlayer( "x");
    }
  
  };

  const checkWin = () => {

    for (let i = 0; i < indexOfArrayOX.length; i++) {
      if (
        indexOfArrayOX[i].every((index) => {
          return xo[index] === player;
        })
      ) {
        
        return `Winner  Player ${player} 🎉`;
      }
    }
  };

  return (
    <div className="conainer max-w-2xl mx-auto p-20">
      <h1 className="text-center ">XO Game</h1>
      <h1 className="text-center">{checkWin()}</h1>
      <div className=" bg-indigo-200   grid grid-cols-3 border-solid gap-2  border-4 border-white " >  
        {xo.map((x, index) => {
          return (
            <button
              className="h-20   bg-indigo-400 "
              onClick={() => xoFunc(index)}
              // disabled={(textWinner.startsWith('Winner') ) }
               disabled={!(xo[index] === "")}
            >
              <p className={`text-5xl ${x === "x"? 'text-blue-600': 'text-red-600'}`}  >{x}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default XO;
