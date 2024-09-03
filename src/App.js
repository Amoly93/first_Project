
import './App.css';
const data = [{ id: 1, name: 'Solar Panel 1', img: '01.jpg' }, { id: 2, name: 'Solar Panel 2', img: 'solar_panel_32.jpg' }, { id: 3, name: 'solar_panel_3', img: 'solar_panel_3.jpg' }]

function App() {
    return (
        <div className="App bg-neutral-200 h-auto fixed  flex justify-center  p-10">
            <section class="text-center   ">
                <div class=" space-y-7  text-pretty  ">
                    <p class="text-6xl font-light align-middle"> Why we should be greening our homes with plants </p>
                    <p class="text-base align-middle"> Solar panel module series provides unparalleled value, aesthetics, and reliability for homeowners while offering layout flexibility, several mounting options, and widespread component compatibility for installers </p>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-3 px-10 py-10 ">
                    {data.map(i => {
                        return (
                            <div class=" my-10 grid place-content-center relative    ">
                               
                                    <img src={i.img} alt="Solar Panel 1" class="h-72 w-80" />
                               
                                <div class=" bg-white  h-40 w-64  grid place-content-center shadow-md drop-shadow-lg space-y-4  absolute left-24 -bottom-28  ">
                                    <h2 class="text-lg font-extrabold">{i.name}</h2>
                                    <button class="bg-orange-500 px-6 py-2 text-white text-sm hover:bg-neutral-800 rounded-lg "> VIEW DETAILS </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div >
                    <div class="h-20" ></div>
                    <div class=" " >
                        <button class="border-2 border-neutral-950 px-14 py-4 text-slate-800 hover:text-white text-sm hover:bg-neutral-950  rounded-lg"> LEARN MORE </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
