import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./hooks/use-user-auth";
import InputController from "./components/input-controller";

function Login() {
  const { control, handleSubmit, reset } = useForm();
  const { setUserInfo } = useAuth();
  const navigate = useNavigate();

  const login = (data) => {
    setUserInfo(data);
    reset();
    navigate("/details");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="bg-orange-500 p-5 space-y-5 container mx-auto max-w-lg"
        onSubmit={handleSubmit(login)}
      >
        <p className="text-4xl">Login</p>
        <InputController
          control={control}
          placeholder="Enter your name"
          name="username"
        />
        <InputController
          control={control}
          placeholder="Enter your email"
          name="email"
        />
        <button className="border border-white rounded-sm w-full py-2.5 text-white font-semibold hover:bg-white hover:text-orange-500">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
