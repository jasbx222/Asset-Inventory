"use client";
import { useState } from "react";
import {
  Search,
  Table,
  FilterDate,
  FilterAssets,
  FilterLocation,
  FilterEmployee,
  BtnFliter,
} from "./Components";
const inventories = [
  {
    id: "1",
    date: "2025-05-01",
    location: "مخزن البصرة",
    user: "أحمد محمد",
    quntity: 20,
  },
 
  {
    id: "2",
    date: "2025-05-02",
    location: "مخزن بغداد",
    user
: "سارة علي",
    quntity: 15,
  },
  {
    id: "3",
    date: "2025-05-03",
    location: "مخزن أربيل",
    user: "علي كريم",
    quntity: 30,
  },
  {
    id: "4",
    date: "2025-05-04",
    location: "مخزن النجف",
    user: "ليلى حسين",
    quntity: 25,
  },
  {
    id: "5",
    date: "2025-05-05",
    location: "مخزن كربلاء",
    user: "ياسر فاضل",
    quntity: 10,
  },






];

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

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
      {/* ازرار الفلاتر*/}
      {show ? "" : <BtnFliter handleShow={handleShow} show={show} />}

      {/* الفلاتر */}

      {show ? (
        <div>
          {/*فلتر التاريخ*/}
          <FilterDate />

          {/*فلتر الأصول*/}

          <FilterAssets />

          {/*فلتر الموقع*/}

          <FilterLocation />

          {/*فلتر الموظف*/}

          <FilterEmployee />
          <BtnFliter handleShow={handleShow} show={show} />
        </div>
      ) : (
        ""
      )}

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
