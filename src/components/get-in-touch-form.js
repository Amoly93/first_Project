import { useState } from "react";
import InputController from "./input-controller";
import { useForm, useFieldArray } from "react-hook-form";

function GetInTouch() {
  const [activeTab, setActiveTab] = useState();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      address: [{ name: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "address",
  });

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

  return (
    <div className="  bg-orange-500 w-full    ">
      <div className="grid grid-cols md:grid-cols-2 gap-8  max-w-6xl conainer mx-auto  p-10">
        <div className="space-y-8 ">
          <h1 className="text-4xl text-white">Get In Touch</h1>
          <form
            className="flex flex-col gap-3 "
            onSubmit={handleSubmit(() => reset())}
          >
            <InputController
              control={control}
              placeholder={`Enter your name`}
              name="username"
            />
            <InputController
              control={control}
              placeholder={`Enter your email`}
              name="email"
            />
            {fields.map((field, index) => {
              return (
                <div className="flex items-center gap-5">
                  <InputController
                    control={control}
                    placeholder={`Enter your address ${index + 1} `}
                    name={`address.name`}
                  />
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                    onClick={() => remove(index)}
                  >
                    {"✖︎"}
                  </button>
                </div>
              );
            })}
            <button
              onClick={() => append({ name: "" })}
              className="bg-green-500 text-white px-4 py-2 rounded-md mb-4"
            >
              {"Add your address optional ✚"}
            </button>
            <button className="border-2 border-white rounded-md h-10 text-white uppercase font-semibold hover:bg-white hover:text-orange-500">
              Submit
            </button>
          </form>
        </div>
        <div className="bg-gray-200 p-8 space-y-6">
          {tabsData.map((tab) => (
            <div>
              <button
                className=" bg-white p-2 w-full"
                label={tab.label}
                onClick={() =>
                  setActiveTab(tab.label === activeTab ? null : tab.label)
                }
              >
                <div className="flex justify-between">
                  {tab.label} <span>▶︎</span>{" "}
                </div>
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
