import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section class="text-center p-8 container mx-auto">
        <div class="my-20 mx-10 space-y-6  px-20">
            <p class="text-5xl"> Why we should be greening our homes with plants </p>
            <p class="text-sm"> Solar panel module series provides unparalleled value, aesthetics, and reliability for homeowners while offering layout flexibility, several mounting options, and widespread component compatibility for installers </p>
        </div>
        
     
            <div class="grid grid-cols-3  sm:grid-cols-1 lg:grid-cols-3 flex flex-row ">
                
             
                    <div class=" p-4">
                        <img src="01.jpg" alt="Solar Panel 1" />
                        <div class=" bg-white  h-40  mx-8 grid place-content-center shadow-md drop-shadow-lg space-y-4 -mt-6   ">
                            <h2 class="text-2xl">Solar Panel 1 </h2>
                            <button class="bg-orange-500 px-6 py-2 text-white hover:bg-neutral-800 rounded-lg "> VIEW DETAILS </button>
                        </div>
                    </div>
             

                <div class=" p-4">
                    <img src="solar_panel_3.jpg" alt="Solar Panel 1" />
                    <div class=" bg-white  h-40  mx-8 grid place-content-center shadow-md drop-shadow-lg space-y-4  -mt-6 ">
                        <h2 class="text-2xl">Solar Panel 3 </h2>
                        <button class="bg-orange-500 px-6 py-2 text-white hover:bg-neutral-800 rounded-lg "> VIEW DETAILS </button>
                    </div>
                </div>
                <div class=" p-4">
                    <img src="solar_panel_32.jpg" alt="Solar Panel 1" />
                    <div class=" bg-white  h-40  mx-8 grid place-content-center shadow-md drop-shadow-lg space-y-4 -mt-6   ">
                        <h2 class="text-2xl">Solar Panel 3 </h2>
                        <button class="bg-orange-500 px-6 py-2 text-white hover:bg-neutral-800 rounded-lg "> VIEW DETAILS </button>
                    </div>
                </div>
               
            </div>
            <div > 
                <div class="h-40"></div>
            <div class=" " > 
                <button class="border-2 border-neutral-950 px-14 py-4 text-slate-800 hover:text-white text-sm hover:bg-neutral-950  rounded-lg"> LEARN MORE </button>
            </div>
          
        </div>
    </section>
    </div>
  );
}

export default App;
