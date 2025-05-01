import React from 'react'
import { Inputs } from './Inputs'
import { User } from 'lucide-react'

const page = () => {
  return (
    <>
    {/* component */}
    <div className="container px-4 mx-auto   w-[100%]">
      <div className="max-w-lg mx-auto bg-gray-900 shadow-2xl shadow-amber-600  border-2 border-amber-700 rounded-2xl p-24">
        <div className="text-center mb-6 ">
          <h2 className=" font-extrabold text-amber-50 text-center flex justify-center items-center"> <User size={60}/> </h2>
        </div>
        <form action="">
       <Inputs type={'email'} name={'email'} label={"ادخل الايميل الخاص بك"}/>
       <Inputs type={'password'} name={'password'} label={"ادخل الباسورد الخاص بك"}/>
    
          <button className="inline-block shadow-2xl   shadow-amber-300 w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-amber-600   shadow rounded transition duration-200">
        ارسال البيانات
          </button>
         
        </form>
      </div>
    </div>
  </>
  
  )
}

export default page