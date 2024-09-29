import XO from "./xo";
import { useState } from "react";
import UserInfo from "./user-info";
import GetInTouch from "./get-in-touch-form";

export const defaultItems = Array(9).fill("");

function Components() {
  const [players, setPlayers] = useState([]);
  const [items, setItems] = useState(defaultItems);

  return (
    <>
      <UserInfo players={players} setPlayers={setPlayers} items={items} />
      <XO players={players} items={items} setItems={setItems} />
<GetInTouch/>
    </>
  );
}

export default Components;


