import React from "react";
import { Link } from "react-router-dom";

interface BtnProps {
  children: React.ReactNode;
  disabled: boolean;
  to: string;
  type: "primry" | "small" | "secondry" | "rounded";  // تعیین نوع محدود برای type
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;  // نوع‌دهی دقیق‌تر به onClick
}

export default function Btn({ children, disabled , to, type, onClick }: BtnProps) {
  const base =
    "text-stone-800 bg-yellow-300 text-sm uppercase font-semibold rounded-full transition-colors duration-300 hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-black disabled:text-white";
  
  // تعریف استایل‌های مختلف با توجه به نوع دکمه
  const style = {
    primry: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondry:
      "border-2 border-stone-400 px-8 py-3 text-sm md:px-6 md:py-4 text-stone-500 uppercase font-semibold rounded-full transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-black disabled:text-white",
    rounded: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-xs",
  };

  // اگر prop to موجود باشد از Link استفاده کن
  if (to) {
    return (
      <Link className={style[type]} to={to}>
        {children}
      </Link>
    );
  }

  // اگر prop onClick موجود باشد، دکمه با onClick برگردان
  if (onClick) {
    return (
      <button className={style[type]} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  }

  // حالت پیش‌فرض: دکمه بدون onClick
  return (
    <button className={style[type]} disabled={disabled}>
      {children}
    </button>
  );
}