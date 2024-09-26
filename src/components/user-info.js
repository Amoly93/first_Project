import clsx from "clsx";
import { useState, useEffect } from "react";

function UserInfo({ players, setPlayers, items }) {
  const [usersList, setUsersList] = useState([]);
  const [name, setName] = useState("");
  const [errors, setErrors] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const getPlayerLabel = (players, playerIndex) => {
    const isGameStarted = items.every((item) => item === "");
    if ((playerIndex === -1 && players.length === 2) || !isGameStarted)
      return "";
    if (playerIndex === -1) return "Set as a Player";
    else return `Unset Player ${playerIndex + 1}`;
  };

  const addUpdateUser = () => {
    if (!name) {
      setErrors("This feild is required");
    } else if (isEdit) {
      setUsersList((prev) => {
        prev = [...prev];
        const getUserIndex = usersList.indexOf(name);
        prev.splice(getUserIndex, 1, name);
        return prev;
      });
      setIsEdit(false);
      setName("");
    } else if (usersList.includes(name)) {
      setErrors("User already added.");
    } else {
      usersList.push(name);
      setName("");
    }
  };

  const onUpdate = (user) => {
    setIsEdit(true);
    setName(user);
  };

  const onDelete = (index) => {
    setUsersList((prev) => {
      prev = [...prev];
      prev.splice(index, 1);
      return prev;
    });
  };

  const onUpdatePlayerStatus = (user) => {
    setPlayers((prev) => {
      prev = [...prev];
      if (prev.includes(user)) {
        const playerIndex = prev.indexOf(user);
        prev.splice(playerIndex, 1);
      } else {
        prev.push(user);
      }

      return prev;
    });
  };

  useEffect(() => {
    if (!!name) setErrors("");
  }, [name]);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end gap-5 w-80">
        <div className="space-y-1 w-full">
          <label>Name:</label>
          <div className="flex flex-col gap-1 w-full">
            <input
              className={clsx(
                "h-10 px-1.5 rounded-md",
                errors && "outline-none ring-2 ring-red-500"
              )}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors && <span className="text-red-600 text-xs">{errors}</span>}
          </div>
        </div>
        <button
          onClick={addUpdateUser}
          className={clsx(
            "bg-orange-500 px-6 text-white text-sm hover:bg-neutral-800 rounded-md h-10",
            errors && "mb-5"
          )}
          type="submit"
        >
          {isEdit ? "Update" : "Add"}
        </button>
      </div>
      <div className="space-y-2.5 w-80">
        <p className="font-semibold text-center">
          {usersList.length ? "Users" : "No users added yet"}
        </p>
        <div className="divide-y divide-white">
          {usersList.map((user, index) => {
            const playerIndex = players.indexOf(user);
            return (
              <div className="flex justify-between py-2">
                <p className="text-green-800 truncate w-36">{user}</p>
                <div className="flex gap-3.5">
                  <button
                    disabled={playerIndex === -1 && players.length === 2}
                    onClick={() => onUpdatePlayerStatus(user)}
                    className={clsx(
                      playerIndex === -1 && players.length === 2
                        ? "cursor-not-allowed text-gray-500"
                        : ""
                    )}
                  >
                    {getPlayerLabel(players, playerIndex)}
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
