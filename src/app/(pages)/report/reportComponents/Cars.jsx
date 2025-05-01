"use client";

import Search from "@/app/components/inputs/Inputs";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "@/app/components/pagination/Pagination";

const Cars = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");

  const data = [
    { name: 'تويوتا كورولا', color: 'أبيض', category: 'سيدان', price: 8500 },
    { name: 'هيونداي النترا', color: 'رمادي', category: 'سيدان', price: 9000 },
    { name: 'كيا سبورتاج', color: 'أسود', category: 'SUV', price: 12000 },
    { name: 'تويوتا هايلكس', color: 'أحمر', category: 'بيك أب', price: 15000 },
    { name: 'جيب شروكي', color: 'كحلي', category: 'SUV', price: 18000 },
    { name: 'نيسان صني', color: 'فضي', category: 'سيدان', price: 7500 },
    { name: 'شيفروليه تاهو', color: 'أسود', category: 'SUV', price: 22000 },
    { name: 'نيسان صني', color: 'فضي', category: 'سيدان', price: 7500 },
    { name: 'شيفروليه تاهو', color: 'أسود', category: 'SUV', price: 22000 },

    { name: 'بي إم دبليو X5', color: 'رمادي', category: 'SUV', price: 35000 }
  ];

  const filteredItems = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const itemsPerPage = 5;
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = filteredItems.slice(start, end);

  const goToPage = (page) => {
    router.push(`?page=${page}`);
  };

  return (
    <div dir='rtl' className="relative top-24 md:top-0 overflow-x-auto container w-full border border-gray-300 shadow-md rounded mt-6">
      <Search
        label="بحث"
        value={search}
        onchange={(e) => setSearch(e.target.value)}
      />
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">اسم السيارة</th>
            <th scope="col" className="px-6 py-3">اللون</th>
            <th scope="col" className="px-6 py-3">الفئة</th>
            <th scope="col" className="px-6 py-3">السعر (IQD)</th>
          </tr>
        </thead>
        <tbody>
          {currentItems && currentItems.map((item, idx) => (
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
                {item.price.toLocaleString('ar-IQ', { style: 'currency', currency: 'IQD' }) ?? 0}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* الباجينيشن */}
      <Pagination
      currentPage={currentPage}
 itemsPerPage={itemsPerPage}
      items={currentItems}
      goToPage={goToPage}
      totalPages={totalPages}
      />
    </div>
  );
};

export default Cars;
