"use client"
import { useState } from "react"
import Cars from "./reportComponents/Cars"
import Furniture from "./reportComponents/Furniture"
import CaravanReport from "./reportComponents/CaravanReport "


const page = () => {
    const [cars, setCars]= useState(false)
    const [items, setI]= useState(false)
    const [carv, setCarv]= useState(false)
    const handleCars=()=>{
        setCars(!cars)
        setCarv(false)
        setI(false)
    }
    const handleItems=()=>{
        setI(!items)
        setCars(false)
        setCarv(false)
    }
    const handleCarv=()=>{
        setCarv(!carv)
        setI(false)
        setCars(false)
    }
  return (
    <div className=' report flex justify-between items-center container w-[100%]'>

<div className=" grid grid-rows-1 gap-5 fixed top-12 z-30">
    <button onClick={handleCars} className="bg-gray-500 text-white border border-gray-300 rounded w-[200px]">جرد السيارات</button>
    <button onClick={handleItems} className="bg-gray-500 text-white border border-gray-300 rounded w-[200px]">جرد الاثاث</button>
    <button onClick={handleCarv} className="bg-gray-500 text-white border border-gray-300 rounded w-[200px]">جرد الحاويات والكرفانات</button>
</div>
<div>{""}</div>
<div>
{
    cars ?
<Cars/>
    :''
}
{
    items ?
    <Furniture/>
    :''
}
{
    carv ?
    <CaravanReport/>
    :''
}
</div>
    </div>
  )
}

export default page