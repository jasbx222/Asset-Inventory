import {
  Armchair,
  BoxIcon,
  ChartArea,
  House,
  LogOut,
  NotebookPenIcon,
  Settings,
  Users,
} from "lucide-react";

export const mainLinks = [
  { label: "الرئيسية", icon: <House />, href: "/home" },
  { label: "إدارة الأصول", icon: <Armchair />, href: "/assets" },
  { label: "إدارة الجرد", icon: <ChartArea />, href: "/inventories" },
  { label: "إدارة المستخدمين", icon: <Users />, href: "/users" },
  { label: "إعدادات النظام", icon: <Settings />, href: "/settings" },
];

export const moreLinks = [
  { label: "تسجيل الخروج", icon: <LogOut />, href: "/logout" },



];
