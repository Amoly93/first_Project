import { useState } from "react";

function XO() {
  const [item, setItem] = useState(["", "", "", "", "", "", "", "", ""]);

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
    const newArrayxo = [...item];
    newArrayxo[index] = player;
    setItem(newArrayxo);
    setPlayer( player === "x"? "o":"x")
  };

 let win;
  const checkWin = () => {

    for (let i = 0; i < indexOfArrayOX.length; i++) {
      if (
        indexOfArrayOX[i].every((index) => {
          console.log(i)
          return item[index] === player;
        })
      ) {
       win = "Winner"
        return `Winner  Player ${player} 🎉`;
      
      }
    }
  };
  return (
    <div className="conainer max-w-2xl mx-auto p-20">
      <h1 className="text-center ">XO Game</h1>

      <h1 className="text-center">{checkWin()}</h1>
      <div className=" bg-indigo-200   grid grid-cols-3 border-solid gap-2  border-4 border-white " >  
        {item.map((prop, index) => {
          return (
            <button
              className="h-20   bg-indigo-400 "
              onClick={() => xoFunc(index)}
            disabled={(win === "Winner" )|| !(item[index] === "") }
            >
              <p className={`text-5xl ${prop === "x"? 'text-blue-600': 'text-red-600'}`}  >{prop}</p>
            </button>
          );
        })}
      </div>
     

    </div>
  );
}

export default XO;

// function panel({title,children,isActive,onShow}){
//   return (
//     <section>
//       <h1>{title}</h1>
//       {isActive ? (
//         <p></p>
//       ) : (
//         <button onClick={onShow}>
//          start Game
//         </button>
//       )}
//     </section>

//   )

// }