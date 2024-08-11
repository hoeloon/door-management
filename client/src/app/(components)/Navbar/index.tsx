"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkmode, setIsSidebarCollapsed } from "@/state";
import { Bell, Menu, Moon, Settings, Sun } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapesed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };
  const toggleDarkMode = () => {
    dispatch(setIsDarkmode(!isDarkMode));
  };
  return (
    <div className="flex justify-between items-center w-full mb-7">
      {/* LEFT SIDE */}
      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
        <h1 className="font-extrabold text-2xl">Door Management</h1>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-between items-center gap-5">
        {/* HIDDEN on small screen */}
        <div className="hidden md:flex justify-between items-center gap-5">
          <div>
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (
                <Sun className="cursor-pointer text-gray-500" size={24} />
              ) : (
                <Moon className="cursor-pointer text-gray-500" size={24} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
