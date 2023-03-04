import React from 'react'

function Signup() {
  return (
    <div>
        <div className=' w-[500px] justify-center items-center py-2'>
            <form className=''>
                <div className='flex space-x-1 flex-col justify-center items-center'>
                    <input className='contactInput' type="text" name='firstName' placeholder='Firstname'/>
                    <input className='contactInput' type="text" name='lastName' placeholder='Lastname'/>
                    <input className='contactInput' type="email" name="email" placeholder='Email' id="" />
                    <input className='contactInput' type="password" name="password" placeholder='Password' id="" />
                </div> 
                <div className='flex space-x-5 justify-center items-center'>
                    <button className='bg-orange-500 px-6 py-2 rounded-full'>SignUp</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup