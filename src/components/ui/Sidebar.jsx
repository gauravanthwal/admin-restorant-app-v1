import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import {
  HomeIcons,
  LogoutIcons,
  OrderIcons,
  ProductIcons,
  UserIcons,
} from "../../assets/icons/icons";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/actions/userAction";

const routes = [
  {
    id: 1,
    name: "Home",
    url: "/",
    icon: <HomeIcons />,
  },
  {
    id: 2,
    name: "Products",
    url: "/products",
    icon: <ProductIcons />,
  },
  {
    id: 3,
    name: "Users",
    url: "/users",
    icon: <UserIcons />,
  },
  {
    id: 4,
    name: "Orders",
    url: "/orders",
    icon: <OrderIcons />,
  },
];
const SidebarComp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [activeLink, setActiveLink] = useState(1);

  const { showSideBar } = useSelector((state) => state.config);

  const navigateToModule = (route) => {
    setActiveLink(route.id);
    navigate(route.url);
  };

  const logout = () =>{
    dispatch(logoutUser())
  }
  return (
    <div
      className={`min-h-screen w-[5rem] md:w-[15rem] lg:w-[20rem] xl:w-[22rem] transition-all ease-in  bg-gray-100 p-2 flex-col justify-between ${
        showSideBar ? "flex" : "hidden"
      }`}
    >
      <div>
        <div className="userinfo px-2 items-center hidden md:flex">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU"
            alt=""
            className="h-16 w-16 rounded-full"
          />
          <h1 className="text-xl font-bold text-center text-gray-700">
            Admin 2
          </h1>
        </div>
        <div className="links mt-8">
          {routes.map((route) => (
            <div
              className={`${
                route.id == activeLink
                  ? "bg-orange-500 text-white hover:bg-orange-500"
                  : ""
              } p-2 rounded-md cursor-pointer hover:bg-gray-300 text-gray-700 font-semibold mx-2 my-4 flex justify-center md:justify-start items-center`}
              onClick={() => navigateToModule(route)}
            >
              <div className="px-2">{route.icon}</div>
              <p className="text-lg md:inline-block hidden">{route.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-sidebar">
        <button className="bg-gray-200 p-2 rounded-md hover:bg-gray-300" onClick={logout}>
          <LogoutIcons />
        </button>
      </div>
    </div>
  );
};

export default SidebarComp;
