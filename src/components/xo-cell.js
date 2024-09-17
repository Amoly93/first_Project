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
      onClick={() => xoFunc(index)}
      disabled={checkWinner || items[index]}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1
        className={clsx(
          "text-4xl",
          isX ? "text-blue-600" : "text-red-600",
          isHovered && "text-gray-300"
        )}
      >
        {isHovered ? player : item}
      </h1>
    </button>
  );
}

export default XOCell;
