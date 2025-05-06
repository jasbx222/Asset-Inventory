'use client';

import FunAreaChart from "@/app/components/charts/Charts";

export default function Page() {
  const stats = [
    { label: 'عدد الأصول', value: 245, color: 'bg-gray-500' },
    { label: ' عدد الأصول المجرودة', value: 38, color: 'bg-gray-500' },
    { label: 'عدد الأصول التالفة ', value: 94, color: 'bg-gray-500' },
    { label: 'آخر عملية جرد', value: 17, color: 'bg-gray-500' },
  ];

  return (
    <div dir="rtl" className="p-6 bg-[#2d2d2d] h-screen  rounded  container w-[100%]">
   

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-12">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl home shadow-md shadow-amber-600 p-6 text-gray-900 flex flex-col justify-center items-center bg-[#fa9718]  `}
          >
            <div className="text-2xl">{item.label}</div>
            <div className="text-3xl font-bold mt-2">{item.value}</div>
          </div>
        ))}
      </div>
   <FunAreaChart/>
    </div>
  );
}
