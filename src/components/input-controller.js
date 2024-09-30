import React from "react";

import { Controller } from "react-hook-form";

function InputController({ control, placeholderName, inputName }) {
  return (
    <Controller
      control={control}
      name={inputName}
      rules={{ required: "This field is required" }}
      render={({ field: { onChange, onBlur }, fieldState: { error } }) => (
        <div>
          <input
            className="px-2 h-10 w-full"
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholderName}
          />
          {error && (
            <span className="text-red-600 text-xs">{error.message}</span>
          )}
        </div>
      )}
    />
  );
}
export default InputController;
