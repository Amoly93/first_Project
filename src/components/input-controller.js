
import React from "react"

import { Controller } from "react-hook-form"


function InputController({control,placeholderName ,inputName ,required}) {


  return (

      <Controller
        control={control}
        name={inputName}
        rules={ required}
        render={({ field: { onChange, onBlur, } ,fieldState:{error}}) => (
          <div>
          <input
             className="px-2 h-10 w-60"
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholderName}
          />
           {/* <span className="text-red-600 text-xs">
              {error.message}
            </span> */}

            </div>
        )}
      
      />


  )
}
export default InputController;