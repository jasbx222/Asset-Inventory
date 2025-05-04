import { SearchCheck } from "lucide-react";
import { Timer, LocationEdit, User, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

// مربع البحث

export const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-4 flex items-center justify-end">
      <div className="relative w-full max-w-sm">
        <input
          type="text"
          placeholder="ابحث برقم العملية، الموقع، التاريخ، أو الموظف"
          className="w-full text-white py-2.5 pr-10 pl-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
          value={searchTerm}
          onChange={setSearchTerm}
        />
        <SearchCheck
          className="absolute right-3 top-2.5 text-gray-400"
          size={20}
        />
      </div>
    </div>
  );
};

// جدول العمليات

export const Table = ({ filtered }) => {
  return (
    <table className="min-w-full text-sm text-gray-700">
      <thead className="bg-amber-50 text-amber-700 text-base">
        <tr>
          <th className="px-6 py-4 text-center border-b">🔍 رقم العملية</th>
          <th className="px-6 py-4 text-center border-b">
            <div className="flex items-center justify-center gap-1">
              <Timer size={18} />
              <span>التاريخ</span>
            </div>
          </th>
          <th className="px-6 py-4 text-center border-b">
            <div className="flex items-center justify-center gap-1">
              <LocationEdit size={18} />
              <span>الموقع</span>
            </div>
          </th>
          <th className="px-6 py-4 text-center border-b">
            <div className="flex items-center justify-center gap-1">
              <User size={18} />
              <span>الموظف</span>
            </div>
          </th>
          <th className="px-6 py-4 text-center border-b">الإجراءات</th>
        </tr>
      </thead>
      <tbody>
        {filtered.length > 0 ? (
          filtered.map((inv) => (
            <tr
              key={inv.id}
              className="hover:bg-amber-50 transition duration-200"
            >
              <td className="px-6 py-4 text-center border-t font-medium text-amber-600">
                <Link
                  href={`/inventories/inventorie/${inv.id}`}
                  className="hover:underline"
                >
                  #{inv.id}
                </Link>
              </td>
              <td className="px-6 py-4 text-center border-t">{inv.date}</td>
              <td className="px-6 py-4 text-center border-t">{inv.location}</td>
              <td className="px-6 py-4 text-center border-t">{inv.user}</td>
              <td className="px-6 py-4 text-center border-t">
                <div className="flex justify-center gap-3">
                  {/* زر التعديل */}
                  <button className="text-blue-600 hover:text-blue-800 transition flex items-center gap-1">
                    <Pencil size={18} />
                    <span className="text-sm">تعديل</span>
                  </button>

                  {/* زر الحذف */}
                  <button className="text-red-600 hover:text-red-800 transition flex items-center gap-1">
                    <Trash2 size={18} />
                    <span className="text-sm">حذف</span>
                  </button>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5} className="text-center py-6 text-gray-500">
              لا توجد نتائج مطابقة.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

// فلاتر العمليات

// فلتر الموقع

export const FilterLocation = () => {
  return (
    <div className="mb-4 bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">الموقع</h2>
      <p>📍 اختر الموقع: </p>
      <select className="border border-gray-300 rounded-lg p-2 mt-2 w-full">
        <option value="">اختر الموقع</option>
        <option value="بغداد">بغداد</option>
        <option value="البصرة">البصرة</option>
        <option value="أربيل">أربيل</option>
        <option value="النجف">النجف</option>
        <option value="كربلاء">كربلاء</option>
      </select>
    </div>
  );
};


// فلتر الموظف
export const FilterEmployee = () => {
  return (
    <div className="mb-4 bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">الموظف</h2>
      <p>👤 اختر الموظف: </p>
      <select className="border border-gray-300 rounded-lg p-2 mt-2 w-full">
        <option value="">اختر الموظف</option>
        <option value="أحمد محمد">أحمد محمد</option>
        <option value="سارة علي">سارة علي</option>
        <option value="علي كريم">علي كريم</option>
        <option value="ليلى حسين">ليلى حسين</option>
        <option value="ياسر فاضل">ياسر فاضل</option>
      </select>
    </div>
  );
};


// فلتر الأصول
export const FilterAssets = () => {
  return (
    <div className="mb-4 bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">الأصول</h2>
      <p>📦 اختر الأصول: </p>
      <select className="border border-gray-300 rounded-lg p-2 mt-2 w-full">
        <option value="">اختر الأصول</option>
        <option value="الأصل 1">الأصل 1</option>
        <option value="الأصل 2">الأصل 2</option>
      </select>
    </div>
  );
};


// فلتر التاريخ

export const FilterDate = () => {
  return (
    <div className="mb-4 bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">تقويم الجرد</h2>
      <p>📅 اختر التاريخ: </p>
      <input
        type="date"
        className="border border-gray-300 rounded-lg p-2 mt-2"
      />
    </div>
  );
};

// زر تطبيق الفلتر

export const BtnFliter = () => {
  return (
    <button
      className="
        flex items-center justify-center mb-4 bg-blue-400 text-gray-950 px-4 py-2 rounded-lg shadow-md hover:bg-amber-700 transition duration-300"
    >
      <span> تطبيق الفلتر</span>
    </button>
  );
};
