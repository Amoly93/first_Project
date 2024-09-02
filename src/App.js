
import './App.css';
const data = [{ id: 1, name: 'Solar Panel 1', img: '01.jpg' }, { id: 2, name: 'Solar Panel 2', img: 'solar_panel_32.jpg' }, { id: 3, name: 'solar_panel_3', img: 'solar_panel_3.jpg' }]
const list = []
function App() {
    return (
        <div className="App bg-neutral-200">
            <section class="text-center p-10 container mx-auto">
                <div class="my-6 mx-20 space-y-7  px-20">
                    <p class="text-6xl font-light"> Why we should be greening our homes with plants </p>
                    <p class="text-base"> Solar panel module series provides unparalleled value, aesthetics, and reliability for homeowners while offering layout flexibility, several mounting options, and widespread component compatibility for installers </p>
                </div>
                <div class="grid grid-cols-3  sm:grid-cols-1 lg:grid-cols-3 flex flex-row  ">
                    {data.map(i => {
                        return (
                            <div class=" px-8 py-14 ">
                                <div class="">
                                    <img src={i.img} alt="Solar Panel 1" class="" />
                                </div>
                                <div class=" bg-white  h-40  mx-10 grid place-content-center shadow-md drop-shadow-lg space-y-4 -mt-8   ">
                                    <h2 class="text-lg font-extrabold">{i.name}</h2>
                                    <button class="bg-orange-500 px-6 py-2 text-white text-sm hover:bg-neutral-800 rounded-lg "> VIEW DETAILS </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div >
                    <div class=" " >
                        <button class="border-2 border-neutral-950 px-14 py-4 text-slate-800 hover:text-white text-sm hover:bg-neutral-950  rounded-lg"> LEARN MORE </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
