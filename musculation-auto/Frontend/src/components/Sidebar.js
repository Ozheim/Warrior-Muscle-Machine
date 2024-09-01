import React, { useState } from "react";
import "../Styles/components/Sidebar.scss";

export default function Sidebar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);

    const contentElement = document.getElementById("main-content");
    if (!isSidebarVisible) {
      contentElement.classList.add("ml-[300px]");
    } else {
      contentElement.classList.remove("ml-[300px]");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/home";
  };

  return (
    <div>
      <span
        className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
        onClick={toggleSidebar}
      >
        <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
      </span>

      {/* Sidebar */}
      <div
        className={`fixed top-0 bottom-0 left-0 p-2 w-[300px] bg-gray-900 text-white overflow-y-auto transition-transform duration-300 ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">
              Tableau de bord
            </h1>
            <i
              className="bi bi-x cursor-pointer ml-auto"
              onClick={toggleSidebar}
            ></i>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>

        <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
          <i className="bi bi-search text-sm"></i>
          <input
            type="text"
            placeholder="Search"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <i className="bi bi-house-door-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Performance
          </span>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <i className="bi bi-bookmark-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Suivi
          </span>
        </div>
        <div className="my-4 bg-gray-600 h-[1px]"></div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <i className="bi bi-chat-left-text-fill"></i>
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Chatbox
            </span>
            <i className="bi bi-chevron-down"></i>
          </div>
        </div>
        <div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold hidden">
          <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
            Social
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
            Personal
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
            Friends
          </h1>
        </div>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          onClick={logout}
        >
          <i className="bi bi-box-arrow-in-right"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Logout
          </span>
        </div>
      </div>
    </div>
  );
}
