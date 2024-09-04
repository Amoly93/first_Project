
import './App.css';
const data = [{ id: 1, name: 'Solar Panel 1', img: '01.jpg' }, { id: 2, name: 'Solar Panel 2', img: 'solar_panel_32.jpg' }, { id: 3, name: 'solar_panel_3', img: 'solar_panel_3.jpg' }]
const list = []
function App() {
    return (
        <div className=" bg-neutral-200 h-screen">
            <div className="flex flex-col items-center gap-10 conainer max-w-6x1 mx-auto py-10  ">
                <div className ="items-center gap-5">
                    <p className="text-lg text-center max-w-5x1"> Why we should be greening our homes with plants </p>
                    <p className="text-base text-center max-w-4x1"> Solar panel module series provides unparalleled value, aesthetics, and reliability for homeowners while offering layout flexibility, several mounting options, and widespread component compatibility for installers </p>
                </div>
                <div class="grid lg:grid-cols-3 px-10 gap-16 py-10">
                    {data.map(i => {
                        return (
                            <div className="relative flex justify-center">
                               
                                    <img src={i.img} alt="Solar Panel 1" className="h-72 w-80" />
                               
                                <div className=" absolute left-auto right-auto -bottom-28 bg-white  h-36 w-64  grid place-content-center shadow-md drop-shadow-lg space-y-4  ">
                                    <h2 className="text-lg font-extrabold">{i.name}</h2>
                                    <button class="bg-orange-500 px-6 py-2 text-white text-sm hover:bg-neutral-800 rounded-lg "> VIEW DETAILS </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div >
                    
                 
                        <button class="border-2 border-neutral-950 px-14 py-4 text-slate-800 hover:text-white text-sm hover:bg-neutral-950  rounded-lg my-20"> LEARN MORE </button>
                  
                </div>
            </div>
        </div>
    );
}

export default App;
