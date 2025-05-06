"use client";
import { useState } from "react";
import Add from "./Add";
import TableCategories from "./Table";
const categories = ["فئة 1", "فئة 2", "فئة 3", "فئة 4", "فئة 5", "فئة 6"];
export default function Page() {
  const [isTableVisible, setIsTableVisible] = useState(false);

  const toggleTable = () => {
    setIsTableVisible((prev) => !prev);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto hover:shadow-md  text-right   container bg-gray-50 w-[100%] shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        إدارة فئات الأصول
      </h1>

      {/* نموذج إضافة */}
      <Add hideOrShowTable={toggleTable} isTableVisible={isTableVisible} />

      {/* جدول الفئات */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {isTableVisible ? (
          <TableCategories categories={categories} />
        ) : (
          <div className="text-center py-6 text-gray-400">
            اضغط على زر "إظهار الجدول" لرؤية الفئات.
          </div>
        )}
      </div>
    </div>
  );
}
