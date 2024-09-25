import XO from "./xo";
import UserInfo from "./user-info";
import { useState, useEffect } from "react";

function Components() {
  const [usersList, setUsersList] = useState([]);
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState("");
  const [errors, setErrors] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const addFunction = () => {
    if (!name) {
      setErrors("This feild is required");
    } else if (isEdit) {
      const newArray = [...usersList];
      const getUserIndex = usersList.findIndex((props) => props === name);
      newArray.splice(getUserIndex, 1, name);
      setUsersList(newArray);
      setIsEdit(false);
      setName("");
    } else if (usersList.includes(name)) {
      setErrors("User already added.");
    } else {
      usersList.push(name);
      setName("");
    }
  };
  useEffect(() => {
    if (!!name) setErrors("");
  }, [name]);
  const setNameFuncation = (e) => {
    setName(e.target.value);
  };

  const onUpdate = (user) => {
    setIsEdit(true);
    setName(user);
  };
  const onDelete = (index) => {
    const newArray = [...usersList];
    newArray.splice(index, 1);
    setUsersList(newArray);
    if (players.includes(usersList[index])) {
      const playerIndex = players.findIndex(
        (props) => props === usersList[index]
      );
      const newPlayerArray = [...players];
      newPlayerArray.splice(playerIndex, 1);
      setPlayers(newPlayerArray);
    }
  };
  const onSetPlayer = (user) => {
    const array = [...players];
    array.push(user);
    setPlayers(array);
  };
  return (
    <>
      <UserInfo
        players={players}
        onDelete={onDelete}
        onSetPlayer={onSetPlayer}
        usersList={usersList}
        addFunction={addFunction}
        errors={errors}
        isEdit={isEdit}
        name={name}
        onUpdate={onUpdate}
        setNameFuncation={setNameFuncation}
      />
      <XO players={players} />
    </>
  );
}

export default Components;
