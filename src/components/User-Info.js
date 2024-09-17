import { useState } from "react";

function UserInfo() {
  const [myName, setMyName] = useState("");

  return (
    <div className="">
      <form className="space-x-5">
        <label className="">Name:</label>
        <input name="Name" onChange={(e) => setMyName(e.target.value)}></input>
      </form>
      <p className="text-green-800 text-2xl text-center"> {myName}</p>
    </div>
  );
}

export default UserInfo;
