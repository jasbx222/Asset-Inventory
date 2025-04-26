

const Search = ({label,onchange,value}) => {
  return (
   

  <div dir='rtl'>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">{label}</label>
    <div className="relative">
     
        <input value={value} placeholder={label}  onChange={onchange} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
   
    
   </div>

  </div>

  )
}

export default Search