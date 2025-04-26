

export default function Page() {


  return (
    <div dir="rtl" className="p-6 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">الإعدادات</h1>

      {/* معلومات الحساب */}


      <div  className="bg-white p-6 rounded-2xl shadow border border-gray-300">
      <h2 className="text-xl font-semibold mb-4">المعلومات العامة</h2>
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium">الاسم الكامل</label>
          {/* <span>{user.username}</span> */}
        </div>
        <div>
          <label className="block text-sm font-medium">البريد الإلكتروني</label>
          {/* <span>{user.email}</span>asws */}
        
        </div>
      </div>
    </div>


      {/* كلمة المرور */}
      <div className="bg-white p-6 rounded-2xl shadow border  border-gray-300">
        <h2 className="text-xl font-semibold mb-4">تغيير كلمة المرور</h2>
        <div className="space-y-3">
          <input type="password" className="w-full border rounded-xl  border-gray-300 px-4 py-2" placeholder="كلمة المرور الحالية" />
          <input type="password" className="w-full border rounded-xl  border-gray-300 px-4 py-2" placeholder="كلمة المرور الجديدة" />
          <input type="password" className="w-full border rounded-xl  border-gray-300 px-4 py-2" placeholder="تأكيد كلمة المرور" />
        </div>
      </div>

   
    
    </div>
  );
}
