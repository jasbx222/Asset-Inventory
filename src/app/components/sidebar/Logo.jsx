
import logo from "../../../../public/img/logo.jpg";
import Image from "next/image";
export const Logo = () => {
  return (
    
    <div className="absolute bottom-0 left-0 w-full p-4 bg-gray-900 text-center text-gray-200">
    <p className="text-sm">تطبيق إدارة الأصول</p>
    <p className="text-sm">جميع الحقوق محفوظة &copy; 2025</p>
    <Image
      src={logo}
      alt="Logo"
      width={80}
      height={80}
      className="mx-auto mt-2 rounded-full"
    />
  </div>
  )
}
