import React, { useState } from 'react'
import logo from '../Assests/logo.png'

export const Login = () => {
const [loginformdata, setloginformdata]=useState(false);


const Handlelogin=()=>{
    setloginformdata(true)
    
}
const Handleregister=()=>{
    setloginformdata(false)
    
}



return (
<div className='w-full min-h-[100vh] bg-[#4D28D4] flex' >
{loginformdata ? (<div className='w-[50%] min-h-[100vh] bg-[white] flex flex-col justify-center items-center gap-[35px] rounded-r-[15px]'>
    <img src={logo} alt="couldn't load image" width="100px" height="100px"/>
    <h2 className='text-[26px] font-semibold'>Sign in to continue</h2>
    <form className="flex flex-col gap-[20px] ">
        <div>
                <label className='font-semibold text-[20px]'>Email ID </label>
                <input className="py-[1px] px-3 w-[250px] ml-[30px] text-[18px]  border-[#4D28D4] border-[2px] rounded-xl outline-none" type="text"
                    name="email"
                    placeholder="Enter Your Email ID"  
                    required />
        </div>
        <div>
                <label className='font-semibold text-[20px]'>Password </label>
                <input className=" mt-[26px] py-[1px] px-3 w-[250px] text-[18px] ml-[20px]  border-[#4D28D4] border-[2px] rounded-xl outline-none" type="Password"
                    name="Password"
                    placeholder="Enter your Password"
                    required />
        </div>
        <p className='text-[#4D28D4] underline-offset-2 underline cursor-pointer flex justify-end'>Forgot password</p>
        
        <div className='w-full flex justify-center'>
        <button type="submit" className="mt-[20px] py-[2px] w-[100px] bg-[#00FFCF] flex justify-center rounded-xl font-semibold text-[18px] shadow-md shadow-[#404443b0] hover:text-[#00FFCF] hover:bg-black hover:shadow-[#2b2e2d] cursor-pointer">
                       Login
                    </button>
                    </div>
           </form>
    <p className='text-[18px] font-medium'>You don't have an account? <span className='text-[#4D28D4] underline-offset-2 underline cursor-pointer'  onClick={Handleregister}>Sign up</span></p>
</div>): 
(<div className='w-[50%] min-h-[100vh] bg-[white] flex flex-col justify-center items-center gap-[30px] rounded-r-[15px]'>
    <img src={logo} alt="couldn't load image" width="100px" height="100px"/>
    <h2 className='text-[26px] font-semibold'>Create your account</h2>
    <form className="flex flex-col gap-[30px] ">
        <div>
                <label className='font-semibold text-[20px]'>Name </label>
                <input className="py-[1px] px-3 w-[250px] ml-[50px] text-[18px]  border-[#4D28D4] border-[2px] rounded-xl outline-none" type="text"
                    name="Name"
                    placeholder="Enter Your name"  
                    required />
        </div>
        <div>
                <label className='font-semibold text-[20px]'>Email ID </label>
                <input className="py-[1px] px-3 w-[250px] text-[18px] ml-[30px]  border-[#4D28D4] border-[2px] rounded-xl outline-none" type="email"
                    name="email"
                    placeholder="Enter your Email ID"
                    required />
        </div>
        <div>
                <label className='font-semibold text-[20px]'>Mobile No </label>
                <input className="py-[1px] px-3 w-[250px] text-[18px] ml-[10px] border-[#4D28D4] border-[2px] rounded-xl outline-none" type="Number"
                    name="Mobile"
                    placeholder="Enter your Mobile No"
                    required />
        </div>
        <p className='text-[16px]'><input type="checkbox" className=''/>  I have read and agree to the <span className='text-[#4D28D4]'> terms and conditions </span> <br />  and <span className='text-[#4D28D4]'>Privacy policy.</span> </p>
        <div className='w-full flex justify-center'>
        <button type="submit" className="py-[2px] w-[110px] bg-[#00FFCF] flex justify-center rounded-xl font-semibold text-[18px] shadow-md shadow-[#404443b0] hover:text-[#00FFCF] hover:bg-black hover:shadow-[#2b2e2d] cursor-pointer">
                       Sign Up
                    </button>
                    </div>
           </form>
    
    <p className='text-[18px] font-medium'>Do you have an account? <span className='text-[#4D28D4] underline-offset-2 underline cursor-pointer'  onClick={Handlelogin}>Login</span></p>
</div>)
}


<div className='w-[50%] min-h-[100vh] flex flex-col justify-center items-center gap-[10px]'>
    <div className='w-[140px] h-[140px] bg-black rounded-full px-5 py-8 border-2 border-[#00FFCF]'>
<img src={logo} alt="couldn't load image" width="120px" height="120px"/>
</div>
<h1 className='text-[34px] font-semibold text-[#00FFCF]'>CRICLOG</h1>
<p className='text-[32px] font-medium text-[white] px-[90px] text-center pt-[70px]'>WORLD'S BIGGEST CRICKET NETWORK</p>
<p className='text-[24px] font-medium text-[#00FFCF] text-center pt-[70px] pb-[100px]'>10M+  CRICKETERS</p>
</div>
    </div>
  )
}
