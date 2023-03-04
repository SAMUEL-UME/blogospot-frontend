import React from 'react'

function Login() {
  return (
    <div>
        <div className='bg-black w-[1000px] justify-center items-center py-2'>
            <form className='w-[500px] mx-100'>
                <div className='flex space-x-1 flex-col justify-center items-center'>
                    <input className='contactInput' type="email" name="email" placeholder='Email' id="" />
                    <input className='contactInput' type="password" name="password" placeholder='Password' id="" />
                </div> 
                <div className='flex space-x-5 justify-center items-center'>
                    <button className='bg-orange-500 px-4 py-3 rounded-full'>Login</button>
                    <p>Don't have an account?</p>
                    <a href="">SignUp!</a>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login