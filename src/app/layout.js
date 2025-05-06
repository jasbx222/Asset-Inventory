import { Amiri } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar/Sidebar";

const amiri = Amiri({
  variable: "--font-amiri",
  weight: ["400", "700"],
  subsets: ["arabic"],
});

export const metadata = {
  title: "نظام الجرد الذكي للأصول  ",
  description:
    " نظام جرد ذكي للأصول    يهدف إلى تحويل عملية الجرد اليدوية البطيئة والمكلفة إلى عملية مؤتمتة وسريعة ودقيقة ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        dir="rtl"
        className={`${amiri.className} relative top-24 antialiased -z-50 flex justify-around items-center  `}
      >
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
