import { useState } from "react";

function UserInfo() {

  const [name, setName] = useState("");
  const [userList, setUserList] = useState([])
const addFunction = (e)=>{
    e.preventDefault(); 
    userList.push(name);
    setName("")
}

  return (
    <div>
      <form className="space-x-5" onSubmit={addFunction}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
   

     {/* {userList.forEach(user => <p> {user}</p>)} */}
     <p className="text-center ">Users</p>
     {userList.map((user) => (
          <p className="text-center text-green-800">{user}</p>
        ))}
    </div>
  );
}

export default UserInfo;
