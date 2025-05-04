const Card = ({ user }) => {
  return (
    <div
      key={user.id}
      className="bg-white shadow-md shadow-amber-600 rounded-2xl p-6 border-t-4 border-amber-600 transition hover:shadow-lg flex flex-col justify-between"
    >
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {user.name}
        </h2>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium text-gray-700">📞 الهاتف:</span>{" "}
          {user.phone}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium text-gray-700">📧 البريد:</span>{" "}
          {user.email}
        </p>
        <p className="text-sm text-gray-600 mb-4">
          <span className="font-medium text-gray-700">🔐 الصلاحية:</span>{" "}
          {user.permission}
        </p>
      </div>

      <div className="flex gap-3 mt-2">
        <button className="flex-1 bg-amber-600 text-white py-1.5 rounded-xl hover:bg-amber-700 transition">
          تعديل
        </button>
        <button className="flex-1 bg-red-500 text-white py-1.5 rounded-xl hover:bg-red-600 transition">
          حذف
        </button>
      </div>
    </div>
  );
};

export default Card;
