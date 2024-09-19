import { useState, useEffect } from "react";
import clsx from "clsx";

function UserInfo() {
  const [name, setName] = useState("");
  const [usersList, setUsersList] = useState([]);
  const [errors, setErrors] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [setPlayer, isetPlayer] = useState(Array(2));
  const [setPlayer1, isetPlayer1] = useState("");
  const [setPlayer2, isetPlayer2] = useState("");

  const addFunction = (e) => {
    e.preventDefault();
    if (!name) {
      setErrors("This feild is required");
    } else if (isEdit) {
      const newArray = [...usersList];
      const getUserIndex = usersList.findIndex((props) => props === name);
      newArray.splice(getUserIndex, 1, name);
      setUsersList(newArray);
      setIsEdit(false);
    } else if (usersList.includes(name)) {
      setErrors("User already added.");
    } else {
      usersList.push(name);
    }
    setName("");
  };

  const onDelete = (index) => {
    const newArray = [...usersList];
    newArray.splice(index, 1);
    setUsersList(newArray);
  };

  const onUpdate = (user) => {
    setIsEdit(true);
    setName(user);
  };

  //   useEffect(() => {

  // setErrors("");

  //   }, [name]);

  const setPlayers = (user) => {
    const newPlayerArray = [...setPlayer];

    if (!setPlayer[0]) {
      newPlayerArray[0] = user;
      isetPlayer1(user);
    } else if (!setPlayer[1]) {
      newPlayerArray[1] = user;
      isetPlayer2(user);
    }
    isetPlayer(newPlayerArray);
  };


  return (
    <div className="space-y-8">
      <form
        className="flex justify-between items-end gap-5"
        onSubmit={addFunction}
      >
        <div className="space-y-1">
          <label>Name:</label>
          <div className="flex flex-col gap-1">
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
          className="bg-orange-500 px-6 text-white text-sm hover:bg-neutral-800 rounded-md h-10"
          type="submit"
        >
          {isEdit ? "Update" : "Add"}
        </button>
      </form>
      <div>
        <p className="font-semibold text-center">
          {usersList.length ? "Users" : "No users added yet"}
        </p>
        <div className="divide-y divide-white">
          {usersList.map((user, index) => (
            <div className="flex justify-between flex-row px-5 py-2">
              <p className="text-center text-green-800">{user}</p>
              <div className="space-x-3.5">
                {
                  <p className="text-center text-green-800">
                    {clsx(
                      user === setPlayer1 ? "Player one" : "",
                      user === setPlayer2 ? "Player Two" : ""
                    )}
                  </p>
                }
                {/* {!setPlayer.length === 2 && <button onClick={() => setPlayers(user)}>set Player</button>} */}
                {setPlayer.includes(undefined) && (
                  <button onClick={() => setPlayers(user)}>set Player</button>
                )}

                <button onClick={() => onUpdate(user)}>✎</button>
                {!isEdit && <button onClick={() => onDelete(index)}>✖︎</button>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
