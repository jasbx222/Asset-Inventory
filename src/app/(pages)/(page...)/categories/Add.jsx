"use client";
import { EyeClosedIcon, Plus, EyeIcon } from "lucide-react";


const Add = ({ hideOrShowTable, isTableVisible }) => {

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="اسم الفئة الجديدة"
        className="w-full p-3 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
       
      />
      <button className="bg-[#fa9718] flex justify-center items-center gap-2 text-white px-5 py-3 rounded-lg hover:bg-amber-700 transition">
        <Plus className="text-gray-950" />
        <span>إضافة</span>
      </button>

      {/* زر إظهار/إخفاء الجدول */}
      <button
        className="bg-[#fa9718] flex justify-center items-center gap-2 text-white px-5 py-3 rounded-lg hover:bg-amber-700 transition"
        onClick={hideOrShowTable}
      >
        {isTableVisible ? (
          <EyeIcon size={24} className="text-gray-950" />
        ) : (
          <EyeClosedIcon size={24} className="text-gray-950" />
        )}
        <span>{isTableVisible ? "إخفاء الجدول" : "إظهار الجدول"}</span>
      </button>
    </div>
  );
};

export default Add;
