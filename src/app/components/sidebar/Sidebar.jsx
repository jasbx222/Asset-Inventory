"use client";
import {
  Armchair,
  ChartArea,
  House,
  LogOut,
  Menu,
  NotebookPenIcon,
  Settings,
  Store,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const path = usePathname();
  const links = [
    { label: "الرئيسية", icon: <House />, href: "/home" },
    { label: "إدارة الأصول", icon: <Armchair />, href: "/assets" },
    { label: "التقارير", icon: <NotebookPenIcon />, href: "/report" },
    { label: "إدارة الجرد", icon: <ChartArea />, href: "/inventories" },
    { label: "إدارة المستخدمين", icon: <Users />, href: "/users" },
    { label: "إعدادات النظام ", icon: <Settings />, href: "/settings" },
  ];

  const [show, setShow] = useState(false);
  const handleNav = () => {
    setShow(!show);
  };

  return (
    <nav className="fixed  top-0 right-0 z-50 " dir="rtl">
      <button onClick={handleNav} className="text-2xl text-white px-4 py-2">
        <Menu size={40} />
      </button>

      <div
        className={`fixed border rounded-md border-gray-950 bg-gray-900 top-0 right-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform  shadow-lg ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
        dir="rtl"
      >
        <button
          type="button"
          onClick={handleNav}
          className="absolute  top-2.5 left-2.5 p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          <X className="text-amber-600" />
        </button>

        <ul className="py-4 relative top-5 space-y-2 grid gap-4  font-medium">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={`flex ${
                  path === link.href ? "bg-amber-600" : ""
                } shadow shadow-amber-500 items-center justify-between hover:bg-amber-400  p-2 text-gray-200 rounded-lg  group`}
              >
                <span className="flex-1 hover:text-gray-900">{link.label}</span>
                <span
                  className={`w-5 h-5 hover:text-amber-50  ${
                    path === link.href ? "text-amber-50" : "text-amber-600"
                  }`}
                >
                  {link.icon}
                </span>
              </Link>{" "}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
