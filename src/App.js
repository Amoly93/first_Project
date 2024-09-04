import "./App.css";
import { useState } from 'react';

let data = [
  { id: 1, name: "Solar Panel 1", img: "01.jpg" },
  { id: 2, name: "Solar Panel 2", img: "solar_panel_32.jpg" },
  { id: 3, name: "Solar Panel 3", img: "solar_panel_3.jpg" },
];

function deleteData(item){
    const index = data.indexOf(item);

  
  if (index > 0) { 
    data.splice(index, 1); 
    data.filter((data) =>data !== item)
  }
    console.log(data); 


}

function App() {
  return (
    <div className="bg-neutral-200 h-screen flex flex-col justify-center">
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
        <div className="grid lg:grid-cols-3 content-center gap-8">
          {data.map((i) => {
            return (
              <div className="relative flex justify-center h-fit">
                <img src={i.img} alt="Solar Panel 1" className="h-72 w-80" />
                <span>
                    
               <button className="border-2 border-amber-600" onClick={() => deleteData(i)}  >x</button>
                     </span>
                <div className="absolute left-auto right-auto -bottom-28 bg-white h-36 w-64  grid place-content-center shadow-md drop-shadow-lg space-y-4">
                  <h2 className="text-lg font-extrabold">{i.name}</h2>
                  <button className="bg-orange-500 px-6 py-2 text-white text-sm hover:bg-neutral-800 rounded-lg">
                    VIEW DETAIL
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <button className="border-2 border-neutral-950 px-14 py-4 text-slate-800 hover:text-white text-sm hover:bg-neutral-950 rounded-lg mt-32">
          LEARN MORE
        </button>
      </div>
    </div>
  );
}

export default App;
