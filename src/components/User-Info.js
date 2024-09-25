import clsx from "clsx";
import { useState, useEffect } from "react";

function UserInfo({ players, setPlayers }) {
  const [usersList, setUsersList] = useState([]);
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

  const playerStatus = (user) => {
    setPlayers((prev) => {
      if (prev.includes(user)) {
        return prev.filter((player) => player !== user);
      } else {
        return [...prev, user];
      }
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end gap-5">
        <div className="space-y-1">
          <label>Name:</label>
          <div className="flex flex-col gap-1">
            <input
              className={clsx(
                "h-10 px-1.5 rounded-md",
                errors && "outline-none ring-2 ring-red-500"
              )}
              value={name}
              onChange={setNameFuncation}
            />
            {errors && <span className="text-red-600 text-xs">{errors}</span>}
          </div>
        </div>
        <button
          onClick={addFunction}
          className={clsx(
            "bg-orange-500 px-6 text-white text-sm hover:bg-neutral-800 rounded-md h-10",
            errors && "mb-5"
          )}
          type="submit"
        >
          {isEdit ? "Update" : "Add"}
        </button>
      </div>
      <div className="space-y-2.5">
        <p className="font-semibold text-center">
          {usersList.length ? "Users" : "No users added yet"}
        </p>
        <div className="divide-y divide-white">
          {usersList.map((user, index) => {
            const playerIndex = players.findIndex((props) => props === user);
            const playerLabel =
              playerIndex !== -1
                ? `Unset Player ${playerIndex + 1}`
                : "Set as a Player";

            return (
              <div className="flex justify-between flex-row px-5 py-2">
                <p className="text-center text-green-800">{user}</p>
                <div className="flex gap-3.5">
                  <button
                    onClick={() => playerStatus(user)}
                    className={clsx(
                      playerIndex === -1 && players.length === 2
                        ? "cursor-not-allowed text-gray-500"
                        : ""
                    )}
                  >
                    {playerLabel}
                  </button>
                  {playerIndex === -1 && (
                    <div className="flex gap-3.5">
                      <button onClick={() => onUpdate(user)}>✎</button>
                      {!isEdit && (
                        <button onClick={() => onDelete(index)}>✖︎</button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
// {!isEdit && (
//   <button onClick={() => onDelete(index)}>✖︎</button>
// }
