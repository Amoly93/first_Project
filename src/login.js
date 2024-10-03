import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import InputController from "./components/input-controller";
import { AuthContext } from "./contexts/auth-context";
import { useNavigate } from "react-router-dom";

function Login() {
  const { control, handleSubmit, reset } = useForm();
  const { setUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = (data) => {
    setUserInfo(data);
    reset();
    //navigate("details");
    navigate("/details");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
       
      <form
        className=" bg-orange-500 p-10  space-y-5"
        onSubmit={handleSubmit(login)}
      >
        <InputController
          control={control}
          placeholder={`Enter your name`}
          name="username"
        />

        <InputController
          control={control}
          placeholder={`Enter your email`}
          name="Email"
        />
        <button className="border-2 border-white rounded-sm w-full p-5 text-white uppercase font-semibold hover:bg-white hover:text-orange-500">
          Login
        </button>
      </form>

    </div>
  );
}

export default Login;
