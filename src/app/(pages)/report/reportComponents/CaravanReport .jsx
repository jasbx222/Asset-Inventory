const CaravanReport = () => {
    const data = [
      { name: 'كرفان سكني 6 متر', color: 'أبيض', category: 'سكني', price: 14500 },
      { name: 'كرفان مكتب 4 متر', color: 'رمادي', category: 'مكتبي', price: 12000 },
      { name: 'كرفان حمام مزدوج', color: 'أزرق فاتح', category: 'حمام', price: 9500 },
      { name: 'كرفان مطبخ متنقل', color: 'أبيض', category: 'مطبخ', price: 11000 },
      { name: 'كرفان سكني 8 متر', color: 'بيج', category: 'سكني', price: 17500 },
      { name: 'كرفان استقبال', color: 'فضي', category: 'مكتبي', price: 13000 },
      { name: 'كرفان حمام فردي', color: 'أبيض', category: 'حمام', price: 8500 },
      { name: 'كرفان مطعم متنقل', color: 'أسود', category: 'مطبخ', price: 19500 },
      { name: 'كرفان سكني فاخر', color: 'أبيض وأسود', category: 'سكني', price: 22000 },
      { name: 'كرفان خدمة طوارئ', color: 'أحمر', category: 'خدمات', price: 16000 }
    ];
  
    return (
      <div dir='rtl' className="relative overflow-x-auto container w-full border border-gray-300 shadow-md rounded mt-6">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">اسم الكرفان</th>
              <th scope="col" className="px-6 py-3">اللون</th>
              <th scope="col" className="px-6 py-3">النوع</th>
              <th scope="col" className="px-6 py-3">السعر ($)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.name}
                </th>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.color}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.category}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  ${item.price.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default CaravanReport;
  