import XO from "./xo";
import { useState,createContext } from "react";
import UserInfo from "./user-info";
import GetInTouch from "./get-in-touch-form";
import AboutEnergy from "./about-energy";

export const defaultItems = Array(9).fill("");
export const subjectContext = createContext();
function Components() {
  const [players, setPlayers] = useState([]);
  const [items, setItems] = useState(defaultItems);


  return (
    <>
      <UserInfo players={players} setPlayers={setPlayers} items={items} />
      <XO players={players} items={items} setItems={setItems} />
      <div className="w-full">
<subjectContext.Provider value="Energy Freedom with Solar and Storage">
<AboutEnergy />
<GetInTouch />
</subjectContext.Provider>
       
      </div>
    </>
  );
}

export default Components;
