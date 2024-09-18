import { useState } from "react";
import clsx from "clsx";
function UserInfo() {
  const [name, setName] = useState("");
  const [userList, setUserList] = useState([]);
  const [errors, setErrors] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState();
  const addFunction = (e) => {
    e.preventDefault();
    if (!name) {
      setErrors("This feild is required");
    } else if (isEdit) {
      const newArray = [...userList];
      newArray.splice(editIndex, 1, name);
      setUserList(newArray);
      setIsEdit(false);
    } else {
      userList.push(name);
      setErrors("");
    }

    setName("");
  };
  const deleteFunc = (index) => {
    const newArray = [...userList];
    newArray.splice(index, 1);
    setUserList(newArray);
  };
  const editFunc = (index) => {
    setIsEdit(true);
    setEditIndex(index);
    setName(userList[index]);
  };
  return (
    <div>
      <form
        className="flex justify-between flex-row gap-20  p-5"
        onSubmit={addFunction}
      >
        <div className="">
          <label className="">Name:</label>
          <div className="flex flex-col ">
            <input
              className={clsx(
                " h-8",
                errors && " outline-none ring-2 ring-red-500"
              )}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="text-red-600"> {errors} </span>
          </div>
        </div>

        <button
          className="bg-orange-500 px-6 text-white text-sm hover:bg-neutral-800 rounded-lg h-10 mt-5 "
          type="submit"
        >
          {isEdit ? "Update" : "Add"}
        </button>
      </form>

      <p className="font-semibold ">
        {userList.length ? "Users" : "No users added yet"}
      </p>
      <div className="divide-y divide-white">
        {userList.map((user, index) => (
          <div className="flex justify-between flex-row px-5 py-2">
            <p className="text-center text-green-800">{user}</p>{" "}
            <div className="space-x-3.5">
              <button onClick={() => editFunc(index)}>✎ </button>
              <button onClick={() => deleteFunc(index)}>✖︎</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserInfo;
