import clsx from "clsx";
import { x } from "./xo";
import { useState } from "react";

function XOCell({ player, items, item, index, xoFunc, checkWinner,playersLength }) {
  const [isHovered, setIsHovered] = useState(false);

  const isX = item === x;
  
  return (
    <button
      className={clsx(
        "h-20 border-2 border-neutral-200",
        checkWinner  ? "bg-green-300 cursor-not-allowed" : "bg-white", playersLength === 0 ? "cursor-not-allowed":""
      )}
      onClick={() => {
        setIsHovered(false);
        xoFunc(index);
      }}
      disabled={checkWinner || items[index] && playersLength === 0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1
        className={clsx(
          "text-4xl", playersLength === 0 ? "text-transparent"
: isHovered || checkWinner
? "text-gray-400"
: isX
? "text-blue-600"
: "text-red-600"         
        )}
      >
        {isHovered ? player : item}
      </h1>
    </button>
  );
}

export default XOCell;
