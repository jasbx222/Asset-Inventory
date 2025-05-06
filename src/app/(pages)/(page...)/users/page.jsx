"use client";

import Link from "next/link";
import Card from "./Card";
import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "@/app/components/pagination/Pagination";
import { Suspense } from "react";

const users = [
  { id: 1, name: "أحمد علي", phone: "07812345678", email: "ahmed@example.com", permission: "مشرف" },
  { id: 2, name: "سارة محمد", phone: "07798765432", email: "sara@example.com", permission: "محرر" },
  { id: 3, name: "علي حسين", phone: "07511223344", email: "ali@example.com", permission: "مشاهد" },
  { id: 4, name: "ليلى سالم", phone: "07899887766", email: "layla@example.com", permission: "مشرف" },
  { id: 5, name: "ياسر محمود", phone: "07911223344", email: "yasser@example.com", permission: "محرر" },
  { id: 6, name: "نور عبد الله", phone: "07766554433", email: "noor@example.com", permission: "مشاهد" },
  { id: 7, name: "كريم خالد", phone: "07533445566", email: "kareem@example.com", permission: "محرر" },
  { id: 8, name: "هدى عادل", phone: "07814445566", email: "huda@example.com", permission: "مشرف" },
  { id: 9, name: "سامر فهد", phone: "07789933221", email: "samer@example.com", permission: "مشاهد" },
  { id: 10, name: "ميساء رعد", phone: "07566778899", email: "maysa@example.com", permission: "محرر" },
  { id: 11, name: "جواد ناصر", phone: "07823334455", email: "jawad@example.com", permission: "مشرف" },
  { id: 12, name: "حنين علاء", phone: "07712312345", email: "haneen@example.com", permission: "مشاهد" },
  { id: 13, name: "باسل عامر", phone: "07955443322", email: "basel@example.com", permission: "محرر" },
]

export default function Page() {
  
const searchParams = useSearchParams();
const router = useRouter();
const itemsPerPage = 5;
const currentPage = parseInt(searchParams.get("page")) || 1;
const totalPages = Math.ceil(users.length / itemsPerPage);

const start = (currentPage - 1) * itemsPerPage;
const end = start + itemsPerPage;
const currentItems = users.slice(start, end);

const goToPage = (page) => {
  router.push(`?page=${page}`);
};
  return (
    <div className="min-h-screen container w-[100%] py-10 px-4" dir="rtl">
      <div className="flex justify-between items-center mb-4">
        <button className="bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition">
     <Link href="/users/add_user">إضافة مستخدم</Link>
        </button>
        <h1 className="text-3xl font-bold text-amber-600 mb-8 text-center">
          قائمة المستخدمين
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((user) => (
          <Suspense key={user.id} fallback={<div className="bg-gray-200 animate-pulse h-48 rounded-lg">
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
          </div>}>
  <Card user={user} />
          </Suspense>
        
        ))}
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} goToPage={goToPage} />  
    </div>
  );
}
