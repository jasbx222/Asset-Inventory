import Search from "@/app/components/inputs/Inputs";
import { useState } from "react";

const Furniture = () => {
  const [search, setSearch] = useState("");
  const data = [
    {
      name: "كنبة ثلاثية",
      amount: 10,
      color: "رمادي",
      category: "أريكة",
      price: 1200,
    },
    {
      name: "طاولة طعام",
      amount: 14,
      color: "بني",
      category: "طاولة",
      price: 950,
    },
    {
      name: "سرير مزدوج",
      amount: 50,
      color: "أبيض",
      category: "سرير",
      price: 1800,
    },
    {
      name: "كرسي مكتب",
      amount: 10,
      color: "أسود",
      category: "كرسي",
      price: 450,
    },
    {
      name: "خزانة ملابس",
      amount: 10,
      color: "خشبي",
      category: "خزانة",
      price: 2000,
    },
    {
      name: "مكتبة كتب",
      amount: 10,
      color: "بني غامق",
      category: "مكتبة",
      price: 1100,
    },
    { name: "طاولة قهوة", color: "أسود", category: "طاولة", price: 300 },
    {
      name: "كومودينو جانبي",
      color: "أبيض",
      category: "خزانة جانبية",
      price: 400,
    },
    { name: "مكتب دراسة", color: "خشبي فاتح", category: "مكتب", price: 850 },
    { name: "أريكة زاوية", color: "أزرق داكن", category: "أريكة", price: 2100 },
  ];
  const filterItems = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      dir="rtl"
      className="relative overflow-x-auto container w-full border border-gray-300 shadow-md rounded mt-6 top-24 md:top-0"
    >
      <Search
        label="بحث"
        value={search}
        onchange={(e) => setSearch(e.target.value)}
      />

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              اسم القطعة
            </th>
            <th scope="col" className="px-6 py-3">
              اللون
            </th>
            <th scope="col" className="px-6 py-3">
              النوع
            </th>
            <th scope="col" className="px-6 py-3">
              الكمية
            </th>
            <th scope="col" className="px-6 py-3">
              السعر ($)
            </th>
          </tr>
        </thead>
        <tbody>
          {filterItems &&
            filterItems.map((item, idx) => (
              <tr
                key={idx}
                className="bg-white border-b  border-gray-200"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {item.name ?? "null"}
                </th>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {item.color ?? "null"}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {item.category ?? "null"}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {item.amount ?? "NO AMOUNT"}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {item.price.toLocaleString('ar-IQ',{style:'currency',currency:'IQD'} ) ?? 0}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Furniture;
