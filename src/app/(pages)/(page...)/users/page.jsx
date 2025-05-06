"use client";

import Link from "next/link";
import Card from "./Card";
import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "@/app/components/pagination/Pagination";
import { Suspense } from "react";
import Loading from "@/app/Loading";
const users = [
  { id: 1, name: "أحمد", phone: "123456789", email: "jassim@emial.com"
, permission: "admin" },
  { id: 2, name: "علي", phone: "987654321", email: "  ", permission: "user" },
  { id: 3, name: "فاطمة", phone: "456789123", email: "", permission: "admin" },
  { id: 4, name: "سارة", phone: "321654987", email: "", permission: "user" },
  { id: 5, name: "محمد", phone: "654321789", email: "", permission: "admin" },
  { id: 6, name: "عائشة", phone: "789123456", email: "", permission: "user" },
  { id: 7, name: "يوسف", phone: "159753486", email: "", permission: "admin" },
  { id: 8, name: "خالد", phone: "753159864", email: "", permission: "user" },
  { id: 9, name: "نورة", phone: "951753486", email: "", permission: "admin" },
  { id: 10, name: "راشد", phone: "258963147", email: "", permission: "user" },
  { id: 11, name: "علياء", phone: "369258147", email: "", permission: "admin" },
  { id: 12, name: "سلمان", phone: "147258369", email: "", permission: "user" },
  { id: 13, name: "هند", phone: "258147369", email: "", permission: "admin" },
  { id: 14, name: "عبدالله", phone: "369147258", email: "", permission: "user" },
  { id: 15, name: "مريم", phone: "456123789", email: "", permission: "admin" },


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
      {currentItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentItems.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <Loading />
        </div>
      )}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        goToPage={goToPage}
      />
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

      <Suspense fallback={<></>}>
        <UsersList />
      </Suspense>
    </div>
  );
}
