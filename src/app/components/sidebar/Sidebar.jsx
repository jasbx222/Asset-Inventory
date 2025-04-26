"use client";
import {
  Armchair,
  ChartArea,
  House,
  LogOut,
  Menu,
  Settings,
  Store,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const path =usePathname()
  const links = [
    { label: "الرئيسية", icon: <House />, href: "/home" },
    { label: "الأصول", icon: <Armchair />, href: "/assets" },
    { label: "المستودع", icon: <Store />, href: "/store"},
    { label: "التقارير", icon: <ChartArea />, href: "/report" },
    { label: "الإعدادات", icon: <Settings />, href: "/settings" },
    { label: "تسجيل الخروج", icon: <LogOut />, href: "/logout" },
  ];

  const [show, setShow] = useState(false);
  const handleNav = () => {
    setShow(!show);
  };

  return (
    <nav className="fixed  top-0 right-0 z-50 bg-white" dir="rtl">
      <button onClick={handleNav} className="text-2xl px-4 py-2">
        <Menu />
      </button>

      <div
        className={`fixed border border-gray-300 bg-gray-200 top-0 right-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform  shadow-lg ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
        dir="rtl"
      >
        <button
          type="button"
          onClick={handleNav}
          className="absolute top-2.5 left-2.5 p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          <X />
        </button>

        <ul className="py-4 relative top-5 space-y-2 font-medium">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={`flex ${path===link.href ? 'bg-gray-400':""} items-center justify-between p-2 text-gray-900 rounded-lg  group`}
              >
                <span className="flex-1">{link.label}</span>
                <span className="w-5 h-5">{link.icon}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
