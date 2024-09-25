import XO from "./xo";
import { useState } from "react";
import UserInfo from "./user-info";

function Components() {
  const [players, setPlayers] = useState([]);
const [gameStart,setgameStart] = useState(false)
  return (
    <>
      <UserInfo players={players} setPlayers={setPlayers} gameStart={gameStart} />
      <XO players={players} setgameStart={setgameStart}  />
    </>
  );
}

export default Components;
