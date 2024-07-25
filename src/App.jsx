import React from 'react'

function App() {
  return (
    <div className=' flex flex-col gap-16 p-5 lg:p-5 '>
      <div className=' gap-5 flex justify-center sm:justify-start items-start'>
        <h1 className=' font-medium sm:text-sm lg:text-lg'>Employee </h1>
        <i class="fa-solid fa-greater-than text-xs p-2"></i>
        <button className=' button rounded-2xl bg-slate-300 pl-2 pr-2 font-medium sm:text-xs lg:text-lg'>Thomas Lang</button>
      </div>

      <div className=' flex flex-col gap-16 '>
        <div className=' justify-between items-center flex md:flex-col lg:row'>
          <div className=' gap-5 items-center flex flex-col lg:flex-row'>
            <div>
              <i class="fa-solid fa-earth-americas text-7xl "></i>
            </div>
            <div>
              <h1 className=' font-bold text-2xl'>Thomas Lang</h1>
              <p className=' text-sm'>Team Manager</p>
            </div>
          </div>
          <div className=''>
            <button className=' bg-blue-500 justify-center button rounded-2xl text-sm text-white lg:pl-5 lg:pr-5 lg:pt-2 lg:pb-2 w-full lg:w-32'>
              Edit Profile<i class="fa-solid fa-pen "></i></button>
          </div>
        </div>
        <div className=' flex flex-col gap-10 '>
          <div className=' flex flex-col gap-5 '>
            <h1 className=' text-lg font-bold'>Personal Imformation</h1>
            <div className='flex text-center gap-4 lg:gap-20 flex-col lg:flex-row'>
              <ul className='text-left flex flex-row lg:flex-col justify-between'>
                <li className='text-sm '>First Name</li>
                <li className=' font-medium'>Ankur</li>
              </ul>
              <ul className='text-left  flex flex-row lg:flex-col justify-between'>
                <li className='text-sm'>Last Name</li>
                <li className=' font-medium'>Raj</li>
              </ul>
              <ul className='text-left  flex flex-row lg:flex-col justify-between'>
                <li className='text-sm'>Email</li>
                <li className=' font-medium'>kjdk12@gmail.com</li>
              </ul>
              <ul className='text-left  flex flex-row lg:flex-col justify-between'>
                <li className='text-sm'>Phone</li>
                <li className=' font-medium'>+91-7672672878</li>
              </ul>
            </div>
          </div>

          <div className=' flex flex-col gap-5 '>
            <h1 className=' text-lg font-bold'>Employment Deatails</h1>
            <div className='flex text-center gap-4 lg:gap-20  flex-col lg:flex-row'>
              <ul className='text-left  flex flex-row lg:flex-col justify-between'>
                <li className='text-sm'>Job Title</li>
                <li className=' font-medium'>Team Manager</li>
              </ul>
              <ul className='text-left  flex flex-row lg:flex-col justify-between'>
                <li className='text-sm'>Department</li>
                <li className=' font-medium'>Creative Design</li>
              </ul>
              <ul className='text-left  flex flex-row lg:flex-col justify-between'>
                <li className='text-sm'>Start Date</li>
                <li className=' font-medium'>kjdk12@gmail.com</li>
              </ul>
              <ul className='text-left  flex flex-row lg:flex-col justify-between'>
                <li className='text-sm'>End Date</li>
                <li className=' font-medium'>+91-7672672878</li>
              </ul>
              <ul className='text-left  flex flex-row lg:flex-col justify-between'>
                <li className='text-sm'>Employment Status</li>
                <li className=' font-normal text-green-500'>Active</li>
              </ul>
            </div>
          </div>

          <div className=' flex flex-col gap-5' >
            <h1 className=' text-lg font-bold'>Priamry Delivary Adress</h1>
            <div className='flex text-center gap-4 lg:gap-20 flex-col lg:flex-row'>
              <ul className='text-left  flex flex-row lg:flex-col justify-between'>
                <li className='text-sm'>Adress</li>
                <li className=' font-medium'>Team Manager</li>
              </ul>
              <ul className='text-left  flex flex-row lg:flex-col justify-between'>
                <li className='text-sm'>City/Adress</li>
                <li className=' font-medium'>Delhi</li>
              </ul>
              <ul className='text-left  flex flex-row lg:flex-col justify-between'>
                <li className='text-sm'>Pascod</li>
                <li className=' font-medium'>841992</li>
              </ul>
              <ul className='text-left  flex flex-row lg:flex-col justify-between'>
                <li className='text-sm'>Country</li>
                <li className=' font-medium'>India</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className=' flex flex-col gap-10'>
        <h1 className=' font-bold text-lg'> List of device</h1>

        <div className=' flex justify-between'>
          <div>
            <p>Name/Title</p>
          </div>
          <div className=' flex gap-20'>
            <div className=' flex '>
              <h1> Expair date</h1>
              <i class="fa-solid fa-caret-down p-1"></i>
            </div>
            <div>
              <p> Status</p>
            </div>
          </div>
        </div>

        {/* <div className=' flex justify-between sm:flex-row flex-wrap gap:sm-5 '>
          <div className=' flex gap-5 '>
            <i class="fa-solid fa-laptop"></i>
            <h1 className=' font-medium'>MacBook Pro M2 13ln-16gb-256-gb-2023</h1>
          </div>
          <div className=' flex gap-16 sm:justify-center sm:items-center'>
            <h1>Jan 13 2022</h1>
            <button className=' text-green-700 bg-green-100 button rounded-2xl p-1 text-sm'>Allocated</button>
          </div>
        </div>

        <div className=' flex justify-between sm:flex-row flex-wrap'>
          <div className=' flex gap-5'>
            <i class="fa-solid fa-computer-mouse"></i>
            <h1  className=' font-medium'>MacBook Pro M2 13ln-16gb-256-gb-2023</h1>
          </div>
          <div className=' flex gap-16'>
            <h1>Jan 13 2022</h1>
            <button className=' text-yellow-600 bg-yellow-100 button rounded-2xl p-1 text-sm'>UnAllocated</button>
          </div>
        </div> */}

        <table>
          <tr> 
            <th className=' w-30 '>Name/Title</th>
            <th> Expair date <i class="fa-solid fa-caret-down p-1"></i></th>
            <th>Status</th>
          </tr>
          <tr>
            <th><i class="fa-solid fa-laptop"></i></th>
            <th className=' text-left'>MacBook Pro M2 13ln-16gb-256-gb-2023</th>
            <th>Jan 13 2022</th>
            <th>Allocated</th>
          </tr>
          <tr>
            <th><i class="fa-solid fa-keyboard"></i></th>
            <th className=' text-left' >MacBook Pro M2 13ln-16gb-256-gb-2023</th>
            <th>Jan 13 2022</th>
            <th>UnAllocated</th>
          </tr>
          <tr>
            <th><i class="fa-solid fa-route"></i></th>
            <th className=' text-left'>MacBook Pro M2 13ln-16gb-256-gb-2023</th>
            <th>Jan 13 2022</th>
            <th>Allocated</th>
          </tr>
          <tr>
            <th><i class="fa-solid fa-tv"></i></th>
            <th className=' text-left' >MacBook Pro M2 13ln-16gb-256-gb-2023</th>
            <th>Jan 13 2022</th>
            <th>UnAllocated</th>
          </tr>
          <tr className=' justify-between'>
            <th className=' w-20'><i class="fa-solid fa-computer-mouse"></i></th>
            <th className=' text-left'>MacBook Pro M2 13ln-16gb-256-gb-2023</th>
            <th>Jan 13 2022</th>
            <th>UnAllocated</th>
          </tr>
        </table>

        {/* <div className=' flex justify-between sm:flex-row flex-wrap'>
          <div className=' flex gap-5'>
            <i class="fa-solid fa-keyboard"></i>
            <h1 className=' font-medium'  >MacBook Pro M2 13ln-16gb-256-gb-2023</h1>
          </div>
          <div className=' flex gap-16'>
            <h1>Jan 13 2022</h1>
            <button className=' text-green-700 bg-green-100 button rounded-2xl p-1 text-sm'>Allocated</button>
          </div>
        </div>

        <div className=' flex justify-between sm:flex-row flex-wrap'>
          <div className=' flex gap-5'>
            <i class="fa-solid fa-route"></i>
            <h1  className=' font-medium'>MacBook Pro M2 13ln-16gb-256-gb-2023</h1>
          </div>
          <div className=' flex gap-16'>
            <h1>Jan 13 2022</h1>
            <button className=' text-red-700 bg-red-100 button rounded-2xl text-sm p-1'>Expired</button>
          </div>
        </div>

        <div className=' flex justify-between sm:flex-row flex-wrap'>
          <div className=' flex gap-5'>
            <i class="fa-solid fa-tv"></i>
            <h1  className=' font-medium'>MacBook Pro M2 13ln-16gb-256-gb-2023</h1>
          </div>
          <div className=' flex gap-16'>
            <h1>Jan 13 2022</h1>
            <button className=' text-gray-700 bg-slate-200 button rounded-2xl text-sm p-1'>Deprecated</button>
          </div> */}
        {/* </div> */}

      </div>
    </div>
  )
}

export default App