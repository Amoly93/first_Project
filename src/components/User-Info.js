import { useState } from "react";
import clsx from "clsx";
function UserInfo() {
  const [name, setName] = useState("");
  const [userList, setUserList] = useState([]);
  const [errors, setErrors] = useState("");
  const addFunction = (e) => {
    e.preventDefault();
    if (!name) {
      setErrors("This feild is required");
    } else {
      userList.push(name);
      setErrors("");
      setName("");
    }
  };
  const deleteFunc = (index) => {
    const newArray = [...userList];
    newArray.splice(index, 1);
    setUserList(newArray);
  };

  return (
    <div>
      <form
        className="flex justify-between flex-row gap-20 p-5"
        onSubmit={addFunction}
      >
        <div className="flex gap-2">
          <label>Name:</label>
          <div className="flex flex-col ">
            <input
              className={clsx(
                " top-0 outline-none ring-2",
                errors === "" ? "focus:ring-green-500" : " ring-red-500"
              )}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="text-red-600"> {errors} </span>
          </div>
        </div>

        <button
          className="rounded-md border-2 border-indigo-600 h-8 "
          type="submit"
        >
          Add
        </button>
      </form>

      <p className="text-center ">Users</p>
      {userList.map((user, index) => (
        <div className="flex justify-between flex-row ">
          <p className="text-center text-green-800">{user}</p>{" "}
          <button onClick={() => deleteFunc(index)}>✖︎</button>
        </div>
      ))}
    </div>
  );
}

export default UserInfo;
