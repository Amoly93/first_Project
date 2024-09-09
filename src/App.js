import "./App.css";
import { useState } from "react";

function App() {
  //Array
  const [images, setImages] = useState([
    { id: 1, name: "Solar Panel 1", src: "01.jpg" },
    { id: 2, name: "Solar Panel 2", src: "solar_panel_32.jpg" },
    { id: 3, name: "Solar Panel 3", src: "solar_panel_3.jpg" },
  ]);

  // Delete Aray Element
  const deleteImage = (item) => {
    const newImage = images.filter((image) => image !== item);
    setImages(newImage);
  };

  // Move Aray Element

  const move = (index) => {
    const newArray = [...images];
    const isLastItem = index === newArray.length - 1;
    const [deletedItem] = newArray.splice(index, 1);
    if (isLastItem) {
      const [firstItem] = newArray.splice(0, 1);
      newArray.splice(index, 0, firstItem);
    }
    newArray.splice(isLastItem ? 0 : index + 1, 0, deletedItem);
    setImages(newArray);
  };
  
  const obj = {
    Amal: "first_name",
    Bajaber: "last_name",
  };
  //for...in
  for (const x in obj) {
    console.log(`${obj[x]} :${x}`);
  }

  // forEach
  let details = Object.keys(obj);
  details.forEach((details) => {
    console.log(`${obj[details]}: ${details}`);
  });

  // View
  return (
    <div className="bg-neutral-200 h-screen flex flex-col justify-center">
      <div className="flex flex-col items-center gap-16 conainer max-w-6xl mx-auto ">
        <div className="flex flex-col items-center justify-center space-y-3.5">
          <p className="text-5xl text-center max-w-3xl">
            Why we should be greening our homes with plants
          </p>
          <p className="text-xl text-center max-w-5xl text-gray-600">
            Solar panel module series provides unparalleled value, aesthetics,
            and reliability for homeowners while offering layout flexibility,
            several mounting options, and widespread component compatibility for
            installers
          </p>
        </div>
        <div className="flex justify-center gap-8">
          {images.map((prop, index) => {
            return (
              <div className="relative flex justify-center h-fit">
                <img src={prop.src} alt="Solar Panel 1" className="h-72 w-80" />
                {images.length > 1 && (
                  <button
                    className="flex items-center justify-center h-8 w-8 absolute right-2 top-2 border border-red-500 rounded-full text-red-600 pb-1"
                    onClick={() => deleteImage(prop)}
                  >
                    x
                  </button>
                )}

                <div className="absolute left-auto right-auto -bottom-28 bg-white h-36 w-64 grid place-content-center shadow-md drop-shadow-lg space-y-2">
                  <h2 className="text-lg font-extrabold text-center">
                    {prop.name}
                  </h2>
                  <button className="bg-orange-500 px-6 py-2 text-white text-sm hover:bg-neutral-800 rounded-lg">
                    VIEW DETAIL
                  </button>
                  <button
                    className="bg-sky-600 px-14 py-4 text-white text-sm hover:bg-neutral-950 rounded-lg "
                    onClick={() => move(index)}
                  >
                    Move to next
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <button className="border-2 border-neutral-950 px-14 py-4 text-slate-800 hover:text-white text-sm hover:bg-neutral-950 rounded-lg mt-16">
          LEARN MORE
        </button>
      </div>
    </div>
  );
}

export default App;
