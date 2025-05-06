import { Pencil, Trash2 } from 'lucide-react'


const TableCategories = ({
    categories
}) => {
  return (
    <table className="w-full text-sm text-right text-gray-700">
    <thead className="bg-gray-800 text-white">
      <tr>
        <th className="px-6 py-3">#</th>
        <th className="px-6 py-3">اسم الفئة</th>
        <th className="px-6 py-3">الإجراءات</th>
      </tr>
    </thead>
    <tbody>
      {categories.map((cat, index) => (
        <tr key={index} className="border-b hover:bg-amber-50 transition">
          <td className="px-6 py-4 font-bold">{index + 1}</td>
          <td className="px-6 py-4">{cat}</td>
          <td className="px-6 py-4 flex gap-2 justify-end">
            <button className="text-blue-600 hover:text-blue-800 transition">
              <Pencil size={18} />
            </button>
            <button
          
              className="text-red-600 hover:text-red-800 transition"
            >
              <Trash2 size={18} />
            </button>
          </td>
        </tr>
      ))}
      {categories.length === 0 && (
        <tr>
          <td colSpan={3} className="text-center py-6 text-gray-400">
            لا توجد فئات حتى الآن.
          </td>
        </tr>
      )}
    </tbody>
  </table>
  )
}

export default TableCategories