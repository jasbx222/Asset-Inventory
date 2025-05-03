"use client";
import { useState } from "react";
import { Search, Table } from "./Components";

const inventories = [
  {
    id: "1",
    date: "2025-05-01",
    location: "مخزن البصرة",
    user: "أحمد محمد",
  },
  {
    id: "2",
    date: "2025-04-28",
    location: "مخزن بغداد",
    user: "سارة علي",
  },
  {
    id: "3",
    date: "2025-04-20",
    location: "مخزن أربيل",
    user: "علي كريم",
  },
  {
    id: "4",
    date: "2025-04-18",
    location: "مخزن النجف",
    user: "ليلى حسين",
  },
  {
    id: "5",
    date: "2025-04-15",
    location: "مخزن كربلاء",
    user: "ياسر فاضل",
  },
  {
    id: "6",
    date: "2025-04-12",
    location: "مخزن الموصل",
    user: "نور باسم",
  },
  {
    id: "7",
    date: "2025-04-10",
    location: "مخزن الديوانية",
    user: "سلمان عبد",
  },
  {
    id: "8",
    date: "2025-04-08",
    location: "مخزن ميسان",
    user: "هناء طارق",
  },
  {
    id: "9",
    date: "2025-04-05",
    location: "مخزن الأنبار",
    user: "محمد عادل",
  },
  {
    id: "10",
    date: "2025-04-02",
    location: "مخزن ذي قار",
    user: "زهراء سامي",
  },
  {
    id: "11",
    date: "2025-03-30",
    location: "مخزن كركوك",
    user: "علياء فؤاد",
  },
  {
    id: "12",
    date: "2025-03-28",
    location: "مخزن بابل",
    user: "فهد جاسم",
  },
];

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = inventories.filter(
    (inv) =>
      inv.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 text-right container w-full min-h-screen  mx-auto">
      <h1 className="text-3xl font-semibold text-amber-600 mb-6">
        عمليات الجرد
      </h1>

      {/* 🔍 مربع البحث */}
      <Search
        searchTerm={searchTerm}
        setSearchTerm={(e) => setSearchTerm(e.target.value)}
      />

      <div className="overflow-x-auto rounded-xl shadow-md bg-white">
        <Table filtered={filtered} />
      </div>
    </div>
  );
}
