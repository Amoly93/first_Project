import React from "react";

import { Controller } from "react-hook-form";

function InputController({ control, placeholder, name }) {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: "This field is required" }}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <div className="w-full">
            <input
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className="px-2 h-10 w-full rounded-sm"
            />
            {error && (
              <span className="text-red-600 text-xs">{error.message}</span>
            )}
          </div>
        );
      }}
    />
  );
}
export default InputController;
