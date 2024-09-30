import React from 'react'

function AboutEnergy() {
  return (
    <div  className='  bg-white w-full ' >
<div className='grid grid-cols md:grid-cols-3 gap-8  max-w-6xl conainer mx-auto  p-10'>
     
      <div className='flex'> <h1 className='text-5xl'>Energy Freedom with Solar and Storage</h1> <div className='bg-orange-500 w-5 h-full'></div></div>

      <div className='space-y-5 p-5'>
        <p>Vulputate dignissim suspendisse in est ante in nibh mauris. Neque aliquam vestibulum morbi blandit cursus risus. Nisi est sit amet facilisis. Volutpat commodo sed egestas egestas. Id leo in vitae turpis massa sed elementum tempus. Non curabitur gravida arcu ac tortor dignissim convallis aenean.</p>
        <p>Image by <a className='underline' href='https://www.freepik.com/photos/eco'>freepik</a></p>
        <button className='bg-orange-500 px-7 py-2 text-white rounded-md '>LEARN MORE</button>
            </div>

            <img className='h-full' src='Solar-Energy-Battery.jpg'/>
            </div>
    </div>
  )
}

export default AboutEnergy
