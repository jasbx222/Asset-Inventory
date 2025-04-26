"use client"

import { useState } from "react";
const products = [
  { id: 1, name: "شال شتوي" },
  { id: 2, name: "قلم حبر" },
  { id: 3, name: "دفتر ملاحظات" },
  { id: 4, name: "ساعة يد" },

];

export default function Page() {
  const [selectedProduct, setSelectedProduct] = useState("");


  return (
    <div className="max-w-md mx-auto bg-white p-6 container w-[100%] rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold mb-4 text-center">اضف كمية للمنتج</h2>
      <form  className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">اختر المنتج</label>
          <select
            className=" border border-gray-300 rounded p-2 w-full"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
          >
            <option value="">-- اختر --</option>
            {products.map((product) => (
              <option key={product.id} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">الكمية </label>
       <input type="text" placeholder="اضف عدد الكمية " className="border border-gray-300 rounded p-2 w-full"></input>
        </div>

    

        <button type="submit" className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-700">
       تنفيذ
        </button>
      </form>


    </div>
  );
}
