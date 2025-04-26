
const page = () => {
    const data = [
        { name: 'شال شتوي', color: 'أسود', category: 'ملابس', price: 150 },
        { name: 'قلم حبر', color: 'أزرق', category: 'قرطاسية', price: 5 },
        { name: 'دفتر ملاحظات', color: 'أخضر', category: 'قرطاسية', price: 10 },
        { name: 'حقيبة ظهر', color: 'رمادي', category: 'حقائب', price: 120 },
        { name: 'ساعة يد', color: 'ذهبي', category: 'إكسسوارات', price: 250 },
        { name: 'قميص رجالي', color: 'أبيض', category: 'ملابس', price: 90 },
        { name: 'نظارة شمسية', color: 'أسود', category: 'إكسسوارات', price: 180 },
        { name: 'سماعات أذن', color: 'أحمر', category: 'إلكترونيات', price: 75 },
        { name: 'تيشيرت رياضي', color: 'أزرق', category: 'ملابس', price: 60 },
        { name: 'زجاجة ماء', color: 'شفاف', category: 'مستلزمات رياضية', price: 20 },
        { name: 'حاسبة صغيرة', color: 'رمادي', category: 'إلكترونيات', price: 35 },
        { name: 'محفظة جلد', color: 'بني', category: 'إكسسوارات', price: 95 },
        { name: 'كرسي بلاستيك', color: 'أبيض', category: 'أثاث', price: 45 },
        { name: 'كمبيوتر محمول', color: 'فضي', category: 'إلكترونيات', price: 3500 },
        { name: 'لوحة مفاتيح', color: 'أسود', category: 'إلكترونيات', price: 110 },
        { name: 'سجادة صلاة', color: 'أخضر', category: 'منزل', price: 70 },
        { name: 'باور بانك', color: 'أسود', category: 'إلكترونيات', price: 130 },
        { name: 'مروحة طاولة', color: 'أبيض', category: 'منزل', price: 140 },
        { name: 'خاتم فضة', color: 'فضي', category: 'إكسسوارات', price: 200 },
        { name: 'جاكيت شتوي', color: 'كحلي', category: 'ملابس', price: 280 }
      ];
      
  return (


<div dir='rtl' className="relative overflow-x-auto container w-[100%]   border border-gray-300 shadow-md rounded">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                   اسم الاصل
                </th>
                <th scope="col" className="px-6 py-3">
                 اللون
                </th>
                <th scope="col" className="px-6 py-3">
                  الفئة
                </th>
                <th scope="col" className="px-6 py-3">
              السعر
                </th>
            </tr>
        </thead>
        <tbody>
      {
        data.map((item)=>(
            <tr key={item.name} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {item.name}
            </th>
            <td className=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {item.color}
            </td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             {item.category}
            </td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.price}
            </td>
        </tr>
        ))
      }
      
        </tbody>
    </table>
</div>

  )
}

export default page