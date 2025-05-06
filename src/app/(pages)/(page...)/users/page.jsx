"use client";

import Link from "next/link";
import Card from "./Card";
import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "@/app/components/pagination/Pagination";
import { Suspense } from "react";

const users = [
 
  { id: 1, name: "أحمد", phone: "123456789", email: " jaj@s", permission: "مدير" },

  { id: 2, name: "علي", phone: "987654321", email: " jaj@s", permission: "موظف" },
  { id: 3, name: "فاطمة", phone: "456789123", email: " jaj@s", permission: "مدير" },
  { id: 4, name: "سارة", phone: "321654987", email: " jaj@s", permission: "موظف" },
  { id: 5, name: "محمد", phone: "654321789", email: " jaj@s", permission: "مدير" },
  { id: 6, name: "عائشة", phone: "789123456", email: " jaj@s", permission: "موظف" },
  { id: 7, name: "يوسف", phone: "159753486", email: " jaj@s", permission: "مدير" },
  { id: 8, name: "خديجة", phone: "753159486", email: " jaj@s", permission: "موظف" },

];

function UsersList() {
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
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} goToPage={goToPage} />
    </>
  );
}

export default function Page() {
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

      <Suspense fallback={<div>جاري تحميل المستخدمين...</div>}>
        <UsersList />
      </Suspense>
    </div>
  );
}
