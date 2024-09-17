import { useState, useMemo } from "react";
import XOCell from "./xo-cell";

export const x = "X";
export const o = "O";

const defaultItems = Array(9).fill("");

const winningCases = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

function XO() {
  const [items, setItems] = useState(defaultItems);
  const [player, setPlayer] = useState(x);

  const lastPlayer = player === x ? o : x;

  const checkWinner = useMemo(() => {
    let hasWinner = false;
    if (!hasWinner) {
      winningCases.forEach((indexArray) => {
        if (indexArray.every((index) => items[index] === lastPlayer)) {
          hasWinner = true;
        }
      });
    }
    return hasWinner;
  }, [player, items]);

  const xoFunc = (index) => {
    const newItems = [...items];
    newItems[index] = player;
    setItems(newItems);
    setPlayer(lastPlayer);
  };

  return (
    <div className="container max-w-2xl mx-auto space-y-3">
      <div>
        <h1 className="text-center">XO Game</h1>
        <div className="p-10 flex justify-center flex-row gap-20">
          {checkWinner && (
            <h1 className="text-center">Winner is Player {lastPlayer} 🏆</h1>
          )}
          <button onClick={() => setItems(defaultItems)}>
            Restart Game ↩︎
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 px-24">
        {items.map((item, index) => (
          <XOCell
            items={items}
            item={item}
            index={index}
            xoFunc={xoFunc}
            checkWinner={checkWinner}
            key={index}
            player={player}
          />
        ))}
      </div>
    </div>
  );
}

export default XO;
