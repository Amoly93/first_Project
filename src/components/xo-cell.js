import clsx from "clsx";
import { x } from "./xo";
import { useState } from "react";

function XOCell({ player, items, item, index, xoFunc, checkWinner }) {
  const [isHovered, setIsHovered] = useState(false);

  const isX = item === x;
  
  return (
    <button
      className={clsx(
        "h-20 border-2 border-neutral-200",
        checkWinner ? "bg-green-300 cursor-not-allowed" : "bg-white"
      )}
      onClick={() => {
        setIsHovered(false);
        xoFunc(index);
      }}
      disabled={checkWinner || items[index]}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1
        className={clsx(
          "text-4xl",
          isHovered || checkWinner
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
