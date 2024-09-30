import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

function GetInTouch() {
  const { register, control, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  const tabsData = [
    {
      label: "Phasellus sed efficitur dolor?",
      content:
        "Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.",
    },
    {
      label: "Quisque fringilla sit amet dolor?",
      content:
        "Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.",
    },
    {
      label: "Aliquam et sem odio?",
      content:
        "Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.",
    },
  ];
  const [activeTab, setActiveTab] = useState();
  return (
    <div className="  bg-orange-500 w-full    ">
      <div className="grid grid-cols md:grid-cols-2 gap-8  max-w-6xl conainer mx-auto  p-10">
        <div className="space-y-8 ">
          <h1 className="text-4xl text-white">Get In Touch</h1>
          <form
            className="flex flex-col gap-3 "
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <input
              className="px-2 h-10"
              {...register("username", { required: "Name feild is required" })}
              placeholder="Enter your name"
            />
            <span className="text-red-600 text-xs">
              {errors.username?.message}
            </span>

            <input
              className="px-2 h-10"
              {...register("email", { required: "Email feild is required" })}
              placeholder="Enter a valid email address"
            />
            <span className="text-red-600  text-xs">
              {errors.email?.message}
            </span>

            <textarea
              rows={4}
              className="px-2 "
              {...register("message", {
                required: "Messahe feild is required",
                minLength: { value: 10, message: "Minimum is 10 characters" },
                maxLength: { value: 100, message: "Miximum is 100 characters" },
              })}
              placeholder="Enter your message"
            />
            <span className="text-red-600  text-xs">
              {errors.message?.message}
            </span>
            <input
              className="border-2 border-white rounded-md h-10 text-white uppercase font-semibold hover:bg-white hover:text-orange-500"
              type="submit"
            />
          </form>
        </div>
        <div className="bg-gray-200 p-8 ">
          {tabsData.map((tab) => (
            <div>
              <button
                className=" bg-white p-2 w-full   "
                label={tab.label}
                onClick={() =>
                  setActiveTab(tab.label === activeTab ? null : tab.label)
                }
              >
                <div className="flex justify-between">
                  {tab.label} <span>▶︎</span>{" "}
                </div>{" "}
              </button>

              {tab.label === activeTab && <p className="p-5">{tab.content}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
