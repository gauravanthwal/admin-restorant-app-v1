import React from "react";
import { FaUserShield, FaMoneyBillAlt } from "react-icons/fa";
import { FaShopLock } from "react-icons/fa6";
import { MdVideoSettings, MdMarkEmailRead } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-32 max-w-[900px] mx-auto">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">

        {/* USERS CARD */}
        <div
          onClick={() => navigate("/users")}
          className="users bg-gradient-to-b from-green-400 rounded-lg to-green-500 mx-4 min-w-[200px] min-h-[100px] flex justify-center items-center cursor-pointer text-xl font-bold text-white hover:from-green-400 hover:to-green-600 transition-all"
        >
          <div className="flex flex-col items-center">
            <FaUserShield className="text-6xl" />
            <p>Users</p>
          </div>
        </div>
        {/* PRODUCTS CARD */}
        <div
          onClick={() => navigate("/products")}
          className="users bg-gradient-to-b from-green-400 rounded-lg to-green-500 mx-4 min-w-[200px] min-h-[100px] flex justify-center items-center cursor-pointer text-xl font-bold text-white hover:from-green-400 hover:to-green-600 transition-all"
        >
          <div className="flex flex-col items-center">
            <FaShopLock className="text-6xl" />
            <p>Products</p>
          </div>
        </div>
        {/* PAYMENTS CARD */}
        <div
          onClick={() => navigate("/payments")}
          className="users bg-gradient-to-b from-green-400 rounded-lg to-green-500 mx-4 min-w-[200px] min-h-[100px] flex justify-center items-center cursor-pointer text-xl font-bold text-white hover:from-green-400 hover:to-green-600 transition-all"
        >
          <div className="flex flex-col items-center">
            <FaMoneyBillAlt className="text-6xl" />
            <p>Payments</p>
          </div>
        </div>
        <div
          onClick={() => navigate("/videos")}
          className="users bg-gradient-to-b from-green-400 rounded-lg to-green-500 mx-4 min-w-[200px] min-h-[100px] flex justify-center items-center cursor-pointer text-xl font-bold text-white hover:from-green-400 hover:to-green-600 transition-all"
        >
          <div className="flex flex-col items-center">
            <MdVideoSettings className="text-6xl" />
            <p>Courses</p>
          </div>
        </div>
        <div
          onClick={() => navigate("/contacts")}
          className="users bg-gradient-to-b from-green-400 rounded-lg to-green-500 mx-4 min-w-[200px] min-h-[100px] flex justify-center items-center cursor-pointer text-xl font-bold text-white hover:from-green-400 hover:to-green-600 transition-all"
        >
          <div className="flex flex-col items-center">
            <MdMarkEmailRead className="text-6xl" />
            <p>Contacts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
