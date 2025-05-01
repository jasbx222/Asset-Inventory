import { Input } from "./Inputs"

const page = () => {
  return (
    <form className="w-full grid grid-cols-1 relative top-24 gap-6 max-w-sm">

 <Input type={'text'} label={'اسم الاصل'} name={'asstsname'}/>
 
 <Input type={'text'} label={'باركود الاصل'} name={'num'}/>
 
 <Input type={'date'} label={' تاريخ الانشاء'} name={'date'}/>
 
 <Input type={'text'} label={'التصنيف'} name={'cat'}/>
 
 <Input type={'text'} label={'المستودع'} name={'store'}/>
 
   
   
    <button className="flex-shrink-0 relative  right-3 bg-amber-600 hover:bg-gray-700 bo  text-sm  text-white py-1 px-2 rounded" type="button">
        ارسال البيانات
      </button>

  </form>
  )
}

export default page