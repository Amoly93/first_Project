import XO from "./xo";
import { useState } from "react";
import UserInfo from "./user-info";

function Components() {
  const [players, setPlayers] = useState([]);

  return (
    <>
      <UserInfo players={players} setPlayers={setPlayers} />
      <XO players={players} />
    </>
  );
}

export default Components;
