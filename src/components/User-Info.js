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
        <div className="flex gap-2 p-2">
          <label className="text-sky-600">Name:</label>
          <div className="flex flex-col ">
            <input
              className={clsx(
                " outline-none ring-2 ring-sky-600 h-7",
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
          className="rounded-md border-2 border-amber-500 h-8 w-8 m-1.5"
          type="submit"
        >
          +
        </button>
      </form>

      <p className="text-center underline font-semibold ">Users</p>
      <div className="divide-y divide-white">
   
        {userList.map((user, index) => (
          <div className="flex justify-between flex-row px-5 py-2">
            <p className="text-center text-green-800">{user}</p>{" "}
            <button onClick={() => deleteFunc(index)}>✖︎</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserInfo;
