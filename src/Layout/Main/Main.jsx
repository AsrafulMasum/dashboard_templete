import React from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import Header from "../../components/dashboard/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="grid grid-cols-12">
      {/* side bar */}
      <div className="col-span-2 h-screen bg-white">
        <Sidebar />
      </div>

      {/* main container with header */}
      <div className="col-span-10">
        <div className="h-[68px] flex items-center justify-end pr-5">
          <Header />
        </div>

        <div className="bg-[#F6F6F6] p-6 h-[calc(100vh-68px)]">
          <div className="h-full overflow-y-auto rounded-md  p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
