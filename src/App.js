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

  // show
  const [textPrint, setTextPrint] = useState({text:'',ison: false})

  
 const  showPrint = (T) =>{
    setTextPrint({text:T,ison:true});
  }

  // View
  return (
    <div className="bg-neutral-200 min-h-screen pt-12">
      <div className="flex flex-col items-center gap-16 conainer max-w-6xl mx-auto">
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
              <div className="relative flex flex-col items-center h-fit">
                <img src={prop.src} alt="Solar Panel 1" className="h-72 w-80" />
                {images.length > 1 && (
                  <button
                    className="flex items-center justify-center h-8 w-8 absolute right-2 top-2 border border-red-500 rounded-full text-red-600 pb-1"
                    onClick={() => deleteImage(prop)}
                  >
                    x
                  </button>
                )}
                <div className="absolute -bottom-28 flex flex-col items-center gap-3.5">
                  <div className="bg-white h-24 w-52 grid place-content-center shadow-md drop-shadow-lg space-y-1.5">
                    <h2 className="text-lg font-semibold text-center">
                      {prop.name}
                    </h2>
                    <button
                      className="bg-orange-500 px-6 py-2 text-white text-sm hover:bg-neutral-800 rounded-lg"
                      onClick={() => showPrint(prop.name)}
                    >
                      print details
                    </button>
                  </div>

                  <button
                    disabled={!(images.length > 1)}
                    className="disabled:bg-gray-400 disabled:cursor-not-allowed bg-sky-600 px-6 py-2 text-white text-sm hover:bg-neutral-950 rounded-lg"
                    onClick={() => move(index)}
                  >
                    Move to next
                  </button>

                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-10 p-32">
        <p>{textPrint.ison ? textPrint.text : "no print"}</p>
        {textPrint.ison ===true && (
                      <button
                      onClick={() => setTextPrint({text:"no print",ison:false})}
                      className="bg-red-600 px-6 py-2 text-white text-sm hover:bg-neutral-950 rounded-lg "
                    >
                      {" "}
                      Delete
                    </button>

        )

        }

        </div>
      </div>
    </div>
  );
}

export default App;
