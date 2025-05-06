import Link from "next/link";
import React from "react";

export const MoreLinks = ({ isMoreOpen, moreLinks }) => {
  return (
    <div>
      {" "}
      {isMoreOpen && (
        <ul className="mt-2 ml-4 space-y-2 transition-all duration-300">
          {moreLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={`flex items-center justify-between gap-5 hover:bg-[#fa9718] p-2 text-gray-200 rounded-lg group`}
              >
        
                <span className={`w-5 h-5 text-amber-50`}>{link.icon}</span>
                <span className="flex-1 hover:text-gray-900">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
