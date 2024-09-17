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

  return (
    <div>
      <form className="space-x-5" onSubmit={addFunction}>
        <label>Name:</label>
        <input
          className={clsx(
            "outline-none ring-2",
            errors === "" ? "ring-sky-500" : " ring-red-500"
          )}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
      <span className="text-red-600"> {errors} </span>

      <p className="text-center ">Users</p>
      {userList.map((user,index) => (
        <div className="flex justify-center flex-row gap-10">   <p className="text-center text-green-800">{user}</p> <button >✖︎</button></div>
      
    
      ))}
    </div>
  );
}

export default UserInfo;
